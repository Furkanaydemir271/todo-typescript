import { useState } from 'react'
import './App.css'
import Header from './components/Header.tsx'
import Todo from './components/Todo.tsx'

function App() {




  return (
    <div className='container'>
      <Header />
      <Todo />
      <div className='relative'>
        <h3>Tamamlanan Todolar</h3>
       <hr />
       
      </div>
    </div>
  )
}

export default App
