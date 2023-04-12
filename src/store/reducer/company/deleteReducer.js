export const initialState = {
    data: {},
    loading: true,
  };
  
  // DELETE A JOB 
  
  export function delatejobsReducer(state = initialState, action) {
    switch (action.type) {
      case "DELETE_JOB":
        return { data: action.payload, loading: false };
      default:
        return state;
    }
  }

    // DELETE A JOB 
  
    export function delateInternshipReducer(state = initialState, action) {
        switch (action.type) {
          case "DELETE_INTERNSHIP":
            return { data: action.payload, loading: false };
          default:
            return state;
        }
      }