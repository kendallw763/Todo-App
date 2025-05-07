import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const DATA = [
  {id: "todo-0", name: "Start a business", completed: true},
  {id: "todo-1", name: "Take a nature walk", completed: false},
  {id: "todo-2", name: "Order Pizza", completed: false},
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
  < App tasks={DATA} />
  </StrictMode>,
)


