import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [age, setAge] = useState(19);
  const handleClick = () => setAge(age + 1)

  //TODO: RENDER FULL NAME WITH ARRAY
  const [name, setName] = useState({first: 'Raziel', last: 'Rodrigues'});
  const [title, setTitle] = useState('Developer');
  
  useEffect(() => {
    setName({first: 'Jaiara', last: 'Miranda'});
  }, []);
  
  return (
    <div>

      <section>
        <h1>{name.first} {name.last}</h1>
        <h2>{title}</h2>
      </section>

      <section>
        I am {age} Years Old
        <div>
          <button onClick={handleClick}>Increase my age! </button>
        </div>
      </section>
      
    </div>
  );

}

export default App;
