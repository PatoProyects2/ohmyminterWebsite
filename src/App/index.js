import { useState } from 'react';
import './App.css';
import { CurrencyToken } from '../CurrencyToken';
import { NavBar } from '../NavBar';
import { Minter } from '../Minter';

function App() {
  const [accounts, setAccounts] = useState([]);
  const [allowance, setAllowance] = useState(0);

  return (
    <div className="App">
      <NavBar accounts={accounts} setAccounts={setAccounts} />
      <CurrencyToken 
        accounts={accounts} 
        setAccounts={setAccounts} 
        setAllowance={setAllowance}
      />
      <Minter accounts={accounts} setAccounts={setAccounts}  allowance={allowance}/>      
    </div>
  );
}

export default App;
