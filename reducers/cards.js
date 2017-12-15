// Start the sequence of item ID's at 0
let nextCardId = 0;

// Items reducer
const cards = (state = [], action) => {
  switch (action.type) {
    case "ADD_CARD": {
      return [
        ...state,
        {
          id: nextCardId++,
          title: action.title,
          description: action.description,
          bgColor: action.bgColor
        }
      ];
    }
    case "REMOVE_CARD": {
      // Find index of item with matching ID and then
      // remove it from the array by its' index
      const index = state.findIndex(x => x.id === action.id);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    default:
      return state;
  }
};

export default cards;
