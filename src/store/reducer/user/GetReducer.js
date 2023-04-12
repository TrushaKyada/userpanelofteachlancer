export const initialState = {
  data: {},
  loading: true,
};


// FETCH COMPANY PROFILE VIEW

export function getUserProfileReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_VIEW":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

// VIEW ALL TEACHER

export function getAllTeacherReducer(state = initialState, action) {
  switch (action.type) {
    case "TEACHER_VIEW":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

// GET ALL JOB

export function fetchApplyJobDataReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_APPLY_JOB":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}
// GET ALL INTERNSHIP

export function fetchApplyInternshipDataReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_APPLY_INTERNSHIP":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

// GET ALL QUESTION

export function fetchfaqReducer(state = initialState, action) {
  switch (action.type) {
    case "FAQ_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}


//GET ALL FULL TIME LECTURE LIST

export function fetchTimeLectureReducer(state = initialState, action) {
  switch (action.type) {
    case "TIME_LECTURE":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

//VIEW CARRAR DETAIL BY ID 

export function fetchCareerDtailByIdReducer(state = initialState, action) {
  switch (action.type) {
    case "VIEW_CAREER_BY_ID":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

// VIEW USERLIST FOR CHAT

export function fetchUserListReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_LIST":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

// USER BY ID FOR CHAT

export function fetchUserForChatReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_CHAT":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

//GET CHAT

export function fetchAllChatReducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_CHAT":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}


//GET CHAT BY USER

export function fetchAllChatByUserReducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_CHAT_BY_USER":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

// REMAINNING USER

export function fetchRemaingUserReducer(state = initialState, action) {
  switch (action.type) {
    case "REMAINNING_USER":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

// REMAINNING USER

export function fetchAssignmnetViewReducer(state = initialState, action) {
  switch (action.type) {
    case "ASSIGNMENTS_VIEW":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

// REMAINNING USER

export function fetchAllVideoViewReducer(state = initialState, action) {
  switch (action.type) {
    case "VIDEO_VIEW":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

// VIEW ALL COURSE GROUP

export function fetchCourseGruopReducer(state = initialState, action) {
  switch (action.type) {
    case "VIEW_GROUP":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

// VIEW GRUOP BY ID

export function fetchGruopByIdReducer(state = initialState, action) {
  switch (action.type) {
    case "GROUP_VIEWBY_ID":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

// VIEW GRUOP CHAT

export function fetchGruopChatByUserReducer(state = initialState, action) {
  switch (action.type) {
    case "GRUOP_CHAT":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

//VIEW PAYMENT BY USER ID/TOKEN

export function fetchPaymentDetailsByIdReducer(state = initialState, action) {
  switch (action.type) {
    case "PAYMENT_BY_TOKEN":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}
//DASHBOARD DATA OF USER

export function fetchDashboardDataOfUserReducer(state = initialState, action) {
  switch (action.type) {
    case "DASHBOARD_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}