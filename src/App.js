import './App.css';
import Points from './components/Points';
import {useState} from 'react'
import users from './users.json';

function App() {
  const user = users.map((elm, index) => {
    return (
      // For each user return the 'Points' component with their einformation passed through as props
      <Points elm={elm} index={index} key={index} />
    )
  })
  // console.log(users)
  return (
    <div className="App">
      <div id='app-cont-1'>
        <h1 id='app-h1'>Point Checker !</h1>
      </div>
      <div id='app-user-wrapper'>
        {user}
      </div>
    </div>
  );
}

export default App;
