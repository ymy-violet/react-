import { Component } from "react"
import "./index.css";
import Dl from "./dl";
import data from "./data";

class App extends Component {
  render(){
    return <div className="friend-list">
      {console.log(data)}
        {data.map((item,index)=>{
          return <Dl 
          key={index} 
          data={item}
          />
        })}
    </div>
  }
}

export default App;
//暗号：我是MT