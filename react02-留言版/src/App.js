import { Component } from "react";
import "./index.css";
import Add from "./addMsg";
import List from "./msgLists";

class App extends Component {
  state = {
    data:[{
      id:1,
      name:"昵称1",
      text:"留言内容1"
    },{
      id:2,
      name:"昵称2",
      text:"留言内容2"
    }]
  }
  addList=(newList,newName)=>{
    debugger;
    const {data} = this.state;
    data.push({
      id:Date.now(),
      name: newName,
      text: newList
    });
    // console.log('....',data)
    this.setState({
      data:data
    })
  };
  removeList=(id)=>{
    const {data} = this.state;
    this.setState({
      data:data.filter(item=>item.id!==id)
    })
  }
  render() {
    const {data} = this.state;
    return <section className="wrap">
    <h2 className="title">留言板</h2>
    <Add addList={this.addList}/>
    <List data={data}
          removeList={this.removeList}
    />
</section>
  }
}
//暗号：海哥真帅
export default App;
