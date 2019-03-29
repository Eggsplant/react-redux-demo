import { combineReducers } from 'redux';

const allList = (state=[], action) => {
  switch (action.type) {
    case 'addItem':
      // return state += 1;
      return [
        ...state,
        action.content
      ]
    
    case 'deleteItem':
      state.splice(action.index ,1 )
      return  [...state]
  
    default:
      return state
  }
}

const clearAll = (state = [12312313123123131], action) => {
  switch (action.type) {
    case 'clearAll':
      return [];
  
    default:
      return state;
  }
}

const rootReducer = combineReducers({ allList, clearAll });
export default rootReducer;