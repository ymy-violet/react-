import {createRef,PureComponent} from "react";
class Li extends PureComponent{
  constructor(props){
    super(props);
    this.state = {
      isEidit:false,
      editVal:props.data.text
    }
  }
 editText = createRef();

 componentDidUpdate(prevProps,prevState){
   if((!prevState.isEidit)&&this.state.isEidit){
     this.editText.current.focus();
   }
 }
  render(){
    const {data,removeList,changeList,editList} = this.props;
    const {id,name,text,checked} = data;
    const {isEidit,editVal} = this.state;
    return <li className={isEidit?"editing":""}>
          <h3>{name}</h3>
          <input
          type="checkbox"
          checked={checked}
          onChange={({target})=>{
            // console.log(target,target.checked)
            changeList(id,target.checked);
          }} 
          />
          <p
            onDoubleClick={()=>{
              this.setState({
                isEidit:true
              })
            }} 
          >{text}</p>
          <textarea value={editVal}
            onChange={({target})=>{
              this.setState({
                editVal:target.value
              })
            }}
            ref={this.editText}
            onBlur={()=>{
              if(editVal.trim()){
                editList(id,editVal);
              }else{
                this.setState({
                  editVal:text
                })
              }
              this.setState({
                isEidit:false
              })
            }}
          ></textarea>
          <a onClick={()=>{
            removeList(id);
          }}>删除</a>
      </li>
  }
}

export default Li