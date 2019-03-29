export const addItem = (content) => {
  return{
    type:'addItem',
    content
  }
}
export const deleteItem = (index) => {
  return{
    type:'deleteItem',
    index
  }
}
export const clearAll = () => {
  return{
    type: 'clearAll'
  }
}