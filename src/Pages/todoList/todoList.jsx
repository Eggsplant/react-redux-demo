import React, { Component } from 'react';
import './todoList.scss'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItem, deleteItem }  from '../../store/action'


class TodoList extends Component {
  constructor(props){
    super(props);
    this.state={
      item: ''
    }
  }

  inputContent = () => {
    this.setState({
      item: this.textInput.value
    })
  }

  addClick = (new_item) => {
    const {old_lists, addItem} = this.props;
    const {item} = this.state;
    if( old_lists.indexOf(item) !== -1 ){
      alert('不要添加重复的内容啦')
    }
    else if(new_item == ""){
      alert('不要添加空空的内容啦')
    }
    else{
      addItem(new_item);
      this.setState({
        item: ''
      },()=>{ 
        this.textInput.value = ''
      })
    }
    
  }

  render(){
    const {old_lists, deleteItem} = this.props;
    const {item} = this.state;
    console.log(old_lists);
    

    return(
      <div className="TodoList">
        <div className="input">
          <input type="text" 
            onChange={this.inputContent}
            ref = {(ref)=> this.textInput = ref }
          />
          <button onClick={()=>{this.addClick(item)}}>加入</button>
          <Link to={{
            pathname: '/secondPage'
          }}>
          跳转</Link>

        </div>
        <div className="content">
          {old_lists.map((e,i)=>{
            return(
              <div className={"content_item"+i} key={i+1}>
                <span className="content_item_value">{i+1}：{e}</span>
                <span className="delete_btn">
                  <button onClick={()=>{deleteItem(i)}}> 删掉 </button>
                </span>
              </div>
            )
          })}
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    old_lists: state.allList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (a)=>{ dispatch( addItem(a) ) },
    deleteItem: (b)=>{ dispatch( deleteItem(b) ) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);