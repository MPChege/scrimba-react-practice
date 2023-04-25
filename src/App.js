
import './App.css';

function App() {
  // const name= <h1>MARK</h1>
  // const age= <h1>21</h1>
  // const email=<h1>Markpaulcheg77@gmail.com</h1>
  // const phone=<h1>+1-908-908-908</h1>
  // const user =(
  // <div>
  // {name}
  //  {age}
  //  {email}
  //  {phone}
  //  </div>
  //  );

  return (
    <div className="App">
     
    <User />
    <User />
    <User />

    </div>
  );
}

const User = () =>{
  return  (
  <div>
  <h1>MARK</h1>
  <h1>21</h1>
  <h1>Markpaulcheg77@gmail.com</h1>
   </div>
   );

};
export default App;
