import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({ todos: [] });
 
  useEffect(async () => {
    const result = await axios(
      //'https://hn.algolia.com/api/v1/search?query=redux',
     ' https://jsonplaceholder.typicode.com/todos',
    
    );
 
    setData(result.data);
  }, []);
  console.log(typeof(data))

  
  return (

    <div>
    
     <ul>

       {data.map(item => (
         <li key={item.id}>
           <span> {item.title}</span>
         </li>
       ))}
     </ul>


    </div>
    
  );
}
 
export default App;


// <ul>
//       {data.map(item => (
//         <li key={item.id}>
//           <span> {item.title}</span>
//         </li>
//       ))}
//     </ul>