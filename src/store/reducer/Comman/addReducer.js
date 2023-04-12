export const initialState = {
    data: {},
    loading: true,
  };
  
  

//GETINTOUCH
  
  export function GetInToTouchReducer(state = initialState, action) {
    switch (action.type) {
      case "GETINTOUCH":
        return { data: action.payload, loading: false };
      default:
        return state;
    }
  }
  