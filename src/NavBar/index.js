import React from 'react';

const NavBar = ({ accounts, setAccounts }) => {
  const isConected = Boolean(accounts[0]);

  async function connectAccount() {
    if(window.ethereum){
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });
      setAccounts(accounts);
    }
    
  }

  return(
    <div>
      {/* left side - social media icons */}
      <div> Twitter</div>
      <div> Github</div>
      <div> LinkedIn</div>

      <div>About</div>
      <div>Contact</div>

      {/*conect*/}
      {isConected
      ? ( <p>Conected</p> )
      : ( <button onClick ={connectAccount}>Connect!</button> )
      } 
    </div>
  )
}

export { NavBar };