export const initialState = {
    data: {},
    loading: true,
};



// CHANGE PASSWORD

export function changePasswordReducer(state = initialState, action) {
    switch (action.type) {
        case "CHANGE_PASSWORD":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

// RESET PASSWORD

export function resetPasswordReducer(state = initialState, action) {
    switch (action.type) {
        case "RESET_PASSWORD":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}


// COMPANY UPDATE PROFILE

export function CompanyProfileUpadteReducer(state = initialState, action) {
    switch (action.type) {
        case "COMPANY_PROFILEUPADTE":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}


// COMPANY PROFILE REMOVE

export function CompanyProfileRemoveReducer(state = initialState, action) {
    switch (action.type) {
        case "COMPANY_PROFILEREMOVE":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}


// JOB PREFRENCE UPDATE

export function jobPrefrenceUpdateReducer(state = initialState, action) {
    switch (action.type) {
      case "JOB_PREFRENCE_UPDATE":
        return { data: action.payload, loading: false };
      default:
        return state;
    }
  }
  
  // INTERNSHIP UPDATE

export function CompanyIternshipPostUpdateReducer(state = initialState, action) {
    switch (action.type) {
      case "INTERNSHIP_UPDATE":
        return { data: action.payload, loading: false };
      default:
        return state;
    }
  }
  