import { Routes, Route } from 'react-router-dom';
import './App.css';

function Home(){
  return <h1>This is Home Pgae</h1>
}

function About(){
  return <h1>This is about page</h1>
}

function contact(){
  return <h1>This is contact page</h1>
}


function App(){

  return(
    <>
      <Routes>
        < Route path='/' element={<Home/>} />
        < Route path='/About' element={<About/>} />
        < Route path='/Contact' element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
