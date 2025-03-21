import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Header from "./Header.jsx";
import ToDoList from "./ToDoList.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Header></Header>
      <ToDoList></ToDoList>
  </StrictMode>,
)
