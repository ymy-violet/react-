import {Component} from "react"

class dl extends Component{
  state={
    show:false
  }
  handlerClick=()=>{
    const {show} = this.state;
    this.setState({
      show: !show
    })
  }
  render(){
    const {show} = this.state;
    const {data} = this.props;
    const {title,children} = data;
    return <dl className={show ? "expanded friend-group" : "friend-group"}>
    <dt onClick={this.handlerClick}>{title}</dt>
    {children.map((item,index)=>{
      return <dd key={index}>{item}</dd>
    })}
</dl>
  }
}

export default dl;
