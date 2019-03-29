import React, { Component } from 'react';
import './secondPage.scss';
import { connect } from 'react-redux'
import { clearAll }from '../../store/action'

class SecondPage extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){
    const {old_lists, clearAll} = this.props;
    return(
      <div className="secondPage">
        allList:
        <button onClick={clearAll}>清空</button>
        <div>
          {JSON.stringify(old_lists)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    old_lists: state.clearAll
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    clearAll: ()=>{ dispatch( clearAll() ) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondPage)