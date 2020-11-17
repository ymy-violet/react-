export default function Sum(props){
  const {data,changeList,removeAllList} = props;
  const check = data.filter(item=>item.checked).length;
  const uncheck = data.length - check;
  return <div className="sum">
  <label>
      <input type="checkbox" 
        onChange={e=>{
          changeList(-1,e.target.checked);
        }}
      />
      <span>选中全部</span>
  </label>
  <a onClick={(e)=>{
    removeAllList(e.target.checked);
  }}>删除选中项</a>
  <p>当前选中<span>{check}</span>项，共<span>{uncheck}</span>条留言</p>
</div>
}