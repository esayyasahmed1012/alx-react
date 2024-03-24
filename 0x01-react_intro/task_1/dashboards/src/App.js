import logo from './holberton-log.jpg';
import './index.css';

import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
      <img src={logo} alt="hol" />
      <h1>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <div className="credentials">
        <label htmlFor="email">Email</label>
        <input type="email" />
        <label htmlFor="passowrd">Password</label>
        <input type="password" />
        <button>OK</button>
        </div>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p>
      </div>
    </div>
  );
}

export default App;
