import React from 'react'
import{ Routes,Route,Link1} from 'react-router-dom'

function Link1() {
    function Home(){
        return <h1>Home Page</h1>
    }
    function About(){
        return <h1>About Page</h1>
    }
  return (
    <div> 
{/* comment */}
        <nav>
            <Link to = "/">Home</Link>
            <Link to = "/about">About</Link>
        </nav>
        
        <Routes>
            <Route path = "/" element={<Home/>}></Route>
            <Route path = "/about" element={<About/>}></Route>
        </Routes>
        </div>
  )
}

export default Link1
