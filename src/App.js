
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
     
    <User name ="Mark Paul" age ={21} email ="markpaulchege77@gmai.com" />
    {/* <User />
    <User /> */}

    </div>
  );
}

const User = (props) =>{
  return  (
  <div>
  <h1>{props.name}</h1>
  <h1>{props.age}</h1>
  <h1>{props.email}</h1>
   </div>
   );

};
export default App;
