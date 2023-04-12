export const initialState = {
    data: {},
    loading: true,
};

// CHANGE PASSWORD

export function userChangePasswordReducer(state = initialState, action) {
    switch (action.type) {
        case "CHANGE_USERPASSWORD":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}
// USER UPDATE PROFILE

export function userProfileUpadteReducer(state = initialState, action) {
    switch (action.type) {
        case "USER_PROFILEUPADTE":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}
// USER PROFILE REMOVE

export function userProfileRemoveReducer(state = initialState, action) {
    switch (action.type) {
        case "USER_PROFILEREMOVE":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}
// USER CAREER DETAIL UPDATE

export function careerDetailUpadteReducer(state = initialState, action) {
    switch (action.type) {
        case "CAREER_UPADTE":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}