import React from 'react'
import Book from './components/Book.jsx'
import './App.css'

function App() {
  return (
    <div id ="aaa">
      <Book title="Math" price />
      <Book title="Physice" price={500} />
      <Book title="Chemistry" price={300}/>

  </div>
  )
}

export default App

//add a navigation bar also 