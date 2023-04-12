export const initialState = {
  data: {},
  loading: true,
};

//COMPANY RAGISTRATION

export function companyRagistrationReducer(state = initialState, action) {
  switch (action.type) {
    case "COMPANY_RAGISTRATION":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

//COMPANY LOGIN

export function companyLoginReducer(state = initialState, action) {
  switch (action.type) {
    case "COMPANY_LOGIN":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

// FORGET PASSWORD

export function forgetPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case "FORGET_PASSWORD":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

// ADD COMPANY PROFILE 

export function addCompanyProfileReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_COMPANYPROFILE":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}


// JOB PREFRENCE ADD

export function jobPrefrenceAddReducer(state = initialState, action) {
  switch (action.type) {
    case "JOB_PREFRENCE_ADD":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}


// INTERNSHIP POST

export function internshipPostReducer(state = initialState, action) {
  switch (action.type) {
    case "JOB_INTERNSHIP_ADD":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

// INTERVIEW LINK 

export function internviewLinkGenrateReducer(state = initialState, action) {
  switch (action.type) {
    case "INTERVIEW_LINK":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

// INTERVIEW LINK 

export function internviewLinkInternshipGenrateReducer(state = initialState, action) {
  switch (action.type) {
    case "INTERVIEW_LINK_INTRENSHIP":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}


//HIRED USER

export function hiredUserReducer(state = initialState, action) {
  switch (action.type) {
    case "HIRED_USER":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}




