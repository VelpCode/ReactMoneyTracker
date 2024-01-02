import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <h1>400<span>.00</span></h1>
      <form>
        <div className = "basics">
          <input type = "text" placeholder = {'+200 nwe samsung tv'}/>
          <input type = "datetime-local"/>
        </div>
        <div className = "description">
          <input type = "text" placeholder = {'description'}/>
        </div>

        <button type = "submit">Add New Transaction</button>
      </form>

      <div className = "transactions">
        <div className = "transaction">
          <div className = "left">
            <div className = "name">New Samsung TV</div>
            <div 
          </div>

          <div className = "right">


          </div>
        </div>
      </div>

    </main>
  );
}

export default App;
