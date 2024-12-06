// ReactDOM.render(<App />, document.getElementById("root"));
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);  // createRoot(container!) if using TypeScript
root.render(<App />);
