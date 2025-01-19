import React from 'react';
    import Editor from './Editor';
    import './index.css';

    export default function App() {
      return (
        <div className="min-h-screen bg-gray-900">
          <nav className="py-4 border-b border-gray-800">
            <div className="container flex items-center justify-between">
              <h1 className="text-xl font-bold glow-text">FlowCollab</h1>
              <div className="space-x-4">
                <a href="/" className="text-gray-400 hover:text-white">Home</a>
                <a href="/editor" className="text-gray-400 hover:text-white">Editor</a>
              </div>
              <div>
                <a href="/login" className="btn btn-primary">Get Started</a>
              </div>
            </div>
          </nav>
          <Editor />
        </div>
      );
    }
