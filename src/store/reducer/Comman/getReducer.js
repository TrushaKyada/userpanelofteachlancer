export const initialState = {
    data: {},
    loading: true,
  };
  
  
// FETCH TERMWISE DATA
  
  export function fetchtermWiseViewReducer(state = initialState, action) {
    switch (action.type) {
      case "TERMWISE_DATA":
        return { data: action.payload, loading: false };
      default:
        return state;
    }
  }
  
  // FETCH COURSE-DETAIL BY ID
  
  export function fetchtCourseDetailReducer(state = initialState, action) {
    switch (action.type) {
      case "COURSE_DETAIL":
        return { data: action.payload, loading: false };
      default:
        return state;
    }
  }
  

   // FETCH COURSE-DETAIL BY ID
  
   export function fetchCoursesDataReducer(state = initialState, action) {
    switch (action.type) {
      case "COURSES_DATA":
        return { data: action.payload, loading: false };
      default:
        return state;
    }
  }
  

  