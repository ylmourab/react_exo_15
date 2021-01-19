import React,{useState} from 'react'
import Article from './components/Article'


function App() {
  
  const [title, setTitle] = useState([{titre:"Harry Potter"},{titre:"Le seigneur des anneaux"},{titre:"Avengers"}])

  return (
    <div className="App">
      <Article titre={title}></Article>
      
    </div>
  );
}

export default App;
