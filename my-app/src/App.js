import './App.css';
import React, { useState } from 'react';



console.log('display')

function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');


  function addNewTransaction(event) {
    event.preventDefault();
    const url = `${process.env.REACT_APP_API_URL}/transaction`; // Use template literals for clarity
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, datetime })
    })
    .then(response => response.json())
    .then(json => {
      console.log('result', json);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  
  return (
    <main>
      <h1>$700<span>.00</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className = "basics">
          <input type = "text" 
              value = {name}
              onChange = {ev => setName(ev.target.value)}
              placeholder = {'+200 nwe samsung tv'}/>
          <input value = {datetime}
          onChange={ev => setDatetime(ev.target.value)}
          type = "datetime-local"/>
        </div>
        <div className = "description">
          <input type = "text"
              value = {description}
              onChange={ev => setDescription(ev.target.value)}
              placeholder = {'description'}/>
        </div>

        <button type = "submit">Add New Transaction</button>
      </form>

      <div className = "transactions">
        <div className = "transaction">
          <div className = "left">
            <div className = "name">New Samsung TV</div>
            <div className='description'>it was time for a new tv</div>
          </div>
          <div className = "right">
            <div className = "price red">-$500</div>
            <div className = "datetime">2022-12-18 15:45  </div>
          </div>
        </div>
        <div className = "transaction">
          <div className = "left">
            <div className = "name">Gig Job New Website</div>
            <div className='description'>New Website Creation</div>
          </div>
          <div className = "right">
            <div className = "price green">+$500</div>
            <div className = "datetime">2022-12-18 15:45  </div>
          </div>
        </div>
        <div className = "transaction">
          <div className = "left">
            <div className = "name">iPhone purchase</div>
            <div className='description'>copped an iphone</div>
          </div>
          <div className = "right">
            <div className = "price red">-$900</div>
            <div className = "datetime">2022-12-18 15:45  </div>
          </div>
        </div>
      </div>

    </main>
  );
}

export default App;
