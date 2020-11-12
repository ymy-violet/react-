import { Component } from "react";
import Li from "./msgList";
class List extends Component{
  render(){
    const {data,removeList} =this.props;
    return <ul className="messageList">
      {data.map((item,index)=>{
        return <Li data={item} key={index} removeList={removeList}/>
      })}
          
      </ul>
  }
}

export default List