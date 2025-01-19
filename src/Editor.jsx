import React, { useCallback } from 'react';
    import ReactFlow, {
      addEdge,
      Background,
      Controls,
      useNodesState,
      useEdgesState,
      MiniMap
    } from 'reactflow';

    const initialNodes = [
      {
        id: '1',
        type: 'input',
        data: { label: 'Start' },
        position: { x: 250, y: 5 },
      },
      {
        id: '2',
        data: { label: 'Process' },
        position: { x: 100, y: 100 },
      },
      {
        id: '3',
        data: { label: 'Decision' },
        position: { x: 400, y: 100 },
      },
      {
        id: '4',
        data: { label: 'End' },
        position: { x: 250, y: 200 },
      }
    ];

    const initialEdges = [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e1-3', source: '1', target: '3' }
    ];

    export default function Editor() {
      const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
      const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

      const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
      );

      return (
        <div style={{ height: '100vh', width: '100vw' }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
          >
            <Background color="#2a2a2a" gap={16} />
            <Controls />
            <MiniMap
              nodeColor={(n) => {
                if (n.type === 'input') return '#00ff88';
                return '#2563eb';
              }}
            />
          </ReactFlow>
        </div>
      );
    }
