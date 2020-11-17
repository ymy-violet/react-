import { Component, Fragment } from "react";
import "./index.css";
import Add from "./addMsg";
import List from "./msgLists";
import Sum from "./sum";

class App extends Component {
  state = {
    data: [
      {
        id: 1,
        name: "昵称1",
        text: "留言内容1",
        checked: false,
      },
    ],
  };
  addList = (newList, newName) => {
    //debugger;
    const { data } = this.state;
    this.setState({
      data: [
        ...data,{
          id: Date.now(),
          name: newName,
          text: newList,
          checked:false,
        }
      ]
    });
  };
  removeList = (id) => {
    const { data } = this.state;
    this.setState({
      data: data.filter((item) => item.id !== id),
    });
  };
  removeAllList = () => {
    const { data } = this.state;
    this.setState({
      data: data.filter((item) => !item.checked),
    });
  };
  changeList=(id,checked,all)=>{
    const { data } = this.state;
    console.log(data,id,checked)
    for(let i=0;i<data.length;i++){
      let list = data[i];
      if(id == -1 || list.id === id){
        data[i]={
          ...list,
          checked,
        }
      }
    }
    this.setState({
      data
    })
  }
  editList=(id,text)=>{
    const {data} = this.state;
    for(let i = 0; i<data.length;i++){
      let nowtext = data[i];
      console.log(text)
      if(nowtext.id === id){
        data[i]={
          ...nowtext,
          text
        }
        break;
      }
    }
    this.setState({
      data
    })
  }

  render() {
    const { data } = this.state;
    return (
      <section className="wrap">
        <h2 className="title">留言板</h2>
        <Add addList={this.addList} />
        {data.length > 0 && (
          <Fragment>
            <List 
            data={data} 
            removeList={this.removeList}
            changeList={this.changeList}
            editList={this.editList}
            />
            <Sum data={data}
              changeList={this.changeList}
              removeAllList={this.removeAllList}
            />
          </Fragment>
        )}
      </section>
    );
  }
}
//暗号：钟阿姨
export default App;
