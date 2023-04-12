export const initialState = {
  data: {},
  loading: true,
};


// FETCH COMPANY PROFILE VIEW

export function getCompanyProfileReducer(state = initialState, action) {
  switch (action.type) {
    case "COMPANY_VIEW":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

// JOB PREFRENCE VIEW

export function jobPrefrenceViewReducer(state = initialState, action) {
  switch (action.type) {
    case "JOB_PREFRENCE_VIEW":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

// JOB PREFRENCE VIEW BY ID

export function jobPrefrenceViewByIdReducer(state = initialState, action) {
  switch (action.type) {
    case "JOB_PREFRENCE_VIEWBYID":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

// JOB PREFRENCE BY COMPANY

export function jobPrefrenceViewByCompanyReducer(state = initialState, action) {
  switch (action.type) {
    case "JOB_PREFRENCE_VIEW_BY_COMPANY":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

// INTERNSHIP VIEW ALL

export function internshipAllViewCompanyReducer(state = initialState, action) {
  switch (action.type) {
    case "INTERNSHIP_VIEW_ALL":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}


// INTERNSHIP BY COMPANY

export function internshipViewByCompanyReducer(state = initialState, action) {
  switch (action.type) {
    case "INTERNSHIP_VIEW_BY_COMPANY":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

// INTERNSHIP VIEW BY ID

export function internshipViewByIdReducer(state = initialState, action) {
  switch (action.type) {
    case "INTERNSHIP_VIEWBYID":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}


// INTERNSHIP VIEW BY LOCATION

export function internshipViewByLocationReducer(state = initialState, action) {
  switch (action.type) {
    case "INTERNSHIP_VIEWBYLOCATION":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}


// INTERNSHIP VIEW BY TECHNOLOGY

export function internshipViewByTechnologyReducer(state = initialState, action) {
  switch (action.type) {
    case "INTERNSHIP_VIEWBY_TECHNOLOGY":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

// JOB VIEW BY LOCATION

export function jobViewByLocationReducer(state = initialState, action) {
  switch (action.type) {
    case "JOB_VIEWBYLOCATION":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}


// JOB VIEW BY TECHNOLOGY

export function jobViewByTechnologyReducer(state = initialState, action) {
  switch (action.type) {
    case "JOB_VIEWBY_TECHNOLOGY":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}


// JOB VIEW BY  POSTION

export function jobViewBypositionReducer(state = initialState, action) {
  switch (action.type) {
    case "JOB_VIEWBY_POSITION":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}


// APPLY COUNT FETCH

export function fetchApplyCountReducer(state = initialState, action) {
  switch (action.type) {
    case "APPLY_COUNT":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}


//USER APPLY LIST  JOB 

export function fetchAlluserAppledListReducer(state = initialState, action) {
  switch (action.type) {
    case "APPLY_USER_LIST":
      return { data: action.payload, loading: false };
    default:
      return state
  }
}



//USER APPLY LIST  INTERNSHIP 

export function fetchInternshipApplyListReducer(state = initialState, action) {
  switch (action.type) {
    case "INTERN_APPLY_USER_LIST":
      return { data: action.payload, loading: false };
    default:
      return state
  }
}


// APPLY ALL LIST INTERNSHIP 

export function fetchApplyAllUserReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_LIST_ALL":
      return { data: action.payload, loading: false };
    default:
      return state
  }
}
