import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <h1>$400<span>.00</span></h1>
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
