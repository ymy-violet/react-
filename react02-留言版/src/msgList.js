import {Component} from "react";
class Li extends Component{
  render(){
    const {data,removeList} = this.props;
    const {id,name,text} = data;
    return <li>
          <h3>{name}</h3>
          <p>{text}</p>
          <a onClick={()=>{
            removeList(id);
          }}>删除</a>
      </li>
  }
}

export default Li