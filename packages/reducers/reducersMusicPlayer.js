const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_MUSIC':
        return [
          ...state,
          {
            music: action.music,
            longtime: action.longtime
          }
        ]
      default:
        return state
    }
  }
  
  export default todos