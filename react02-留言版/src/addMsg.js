import { Component } from "react";
class Add extends Component{
    state = {
    text:"",
    name:""
  }
  render(){
    const {addList} = this.props;
    const {text,name} = this.state;
    return <div className="addMessage">
          <input type="text" placeholder="请输入昵称" value={name} 
            onChange={({target})=>{
              this.setState({
                name:target.value
              })
            }}
          />
          <textarea placeholder="请输入留言" value={text} onChange={({target})=>{
            // console.log('target',target.value);
              this.setState({
                text:target.value
              })
            }}></textarea>
          <button onClick={()=>{
            debugger;
            addList(text,name);
            this.setState({
              text:"",
              name:""
            })
          }}>提交留言</button>
      </div>
  }
}

export default Add