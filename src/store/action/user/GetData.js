import { Baseurl } from "../../../baseurl";
import axios from "axios"
import Cookies from "js-cookie";


const token = Cookies.get('token')


// FETCH COMPANY PROFILE VIEW

export function fetchUserView() {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/user/view-profile`, { headers: { "Authorization": token } });
            var return_response = {
                type: "USER_VIEW",
                payload: response,
            };
            dispatch(return_response);
        } catch (error) {
            var return_response = {
                type: "USER_VIEW",
                payload: error,
            };
            dispatch(return_response);
        }
    };
}

// VIEW ALL TEACHER

export function fetchTainerData() {
    return async (dispatch) => {
        try {

            const response = await axios.get(`${Baseurl}/teacher/view-all`);
            var return_response = {
                type: "TEACHER_VIEW",
                payload: response,
            };
            dispatch(return_response);
        } catch (error) {

            var return_response = {
                type: "TEACHER_VIEW",
                payload: error,
            };
            dispatch(return_response);
        }
    };
}

// GET ALL JOB

export function fetchApplyJobData() {
    return async (dispatch) => {
        try {

            const response = await axios.get(`${Baseurl}/applies/get-job`, {
                headers: {
                    "Authorization": token
                }
            });

            var return_response = {
                type: "FETCH_APPLY_JOB",
                payload: response,
            };
            dispatch(return_response);
        } catch (error) {

            var return_response = {
                type: "FETCH_APPLY_JOB",
                payload: error,
            };
            dispatch(return_response);
        }
    };
}


// GET ALL INTERNSHIP

export function fetchApplyInternshipData() {
    return async (dispatch) => {
        try {

            const response = await axios.get(`${Baseurl}/applies/get-internship  `, {
                headers: {
                    "Authorization": token
                }
            });

            var return_response = {
                type: "FETCH_APPLY_INTERNSHIP",
                payload: response,
            };
            dispatch(return_response);
        } catch (error) {

            var return_response = {
                type: "FETCH_APPLY_INTERNSHIP",
                payload: error,
            };
            dispatch(return_response);
        }
    };
}
// GET ALL QUESTION

export function fetchfaq() {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/faq/view`, {
                headers: {
                    "Authorization": token
                }
            });
            var return_response = {
                type: "FAQ_DATA",
                payload: response,
            };
            dispatch(return_response);
        } catch (error) {
            var return_response = {
                type: "FAQ_DATA",
                payload: error,
            };
            dispatch(return_response);
        }
    };
}


//GET ALL LECTURE
export function fetchTimeLecture(id) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/lecture/view-by-course-id/${id}`);
            const return_response = {
                type: "TIME_LECTURE",
                payload: response
            }
            dispatch(return_response)
        } catch (error) {
            const return_response = {
                type: "TIME_LECTURE",
                payload: error
            }
            dispatch(return_response);
        }
    }
}

//VIEW CARRAR DETAIL BY ID 

export function fetchCareerDtailById(id) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/career/view-by-user-id/${id}`);
            const return_response = {
                type: "VIEW_CAREER_BY_ID",
                payload: response
            }
            dispatch(return_response)
        } catch (error) {
            const return_response = {
                type: "VIEW_CAREER_BY_ID",
                payload: error
            }
            dispatch(return_response);
        }
    }
}


// VIEW USERLIST FOR CHAT

export function fetchUserList(id) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/user/view-all`);
            const return_response = {
                type: "USER_LIST",
                payload: response
            }
            dispatch(return_response)
        } catch (error) {
            const return_response = {
                type: "USER_LIST",
                payload: error
            }
            dispatch(return_response);
        }
    }
}

// USER BY ID FOR CHAT

export function fetchUserForChat(id) {

    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/user/view-by-id/${id}`);
            const return_response = {
                type: "USER_CHAT",
                payload: response
            }
            dispatch(return_response);

        } catch (error) {
            const return_response = {
                type: "USER_CHAT",
                payload: error
            }
            dispatch(return_response);
        }
    }
}


//GET CHAT

export function fetchAllChat(id) {
    return async (dispatch) => {
        try {
            const chatRoom = Cookies.get("chatRoom");
            const response = await axios.get(`${Baseurl}/chat/get-chat/${chatRoom}`);
            const return_response = {
                type: "ALL_CHAT",
                payload: response
            }
            dispatch(return_response);
        } catch (error) {
            const return_response = {
                type: "ALL_CHAT",
                payload: error
            }
            dispatch(return_response);
        }
    }
}

//GET CHAT BY USER

export function fetchAllChatByUser() {
    return async (dispatch) => {
        try {
            const id = Cookies.get("userId");
            const response = await axios.get(`${Baseurl}/chat/get-chat-by-user/${id}`);
            const return_response = {
                type: "ALL_CHAT_BY_USER",
                payload: response
            }
            dispatch(return_response);
        } catch (error) {
            const return_response = {
                type: "ALL_CHAT_BY_USER",
                payload: error
            }
            dispatch(return_response);
        }
    }
}


// REMAINNING USER

export function fetchRemaingUser() {
    return async (dispatch) => {
        try {
            const id = Cookies.get("userId");
            const response = await axios.get(`${Baseurl}/chat/remaining-user/${id}`);
            const return_response = {
                type: "REMAINNING_USER",
                payload: response
            }
            dispatch(return_response);
        } catch (error) {
            const return_response = {
                type: "REMAINNING_USER",
                payload: error
            }
            dispatch(return_response);
        }
    }
}

//ASSIGNMENTS VIEW

export function fetchAssignmnetView() {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/assignment/get-by-user`, {
                headers: {
                    "Authorization": token
                }
            });
            const return_response = {
                type: "ASSIGNMENTS_VIEW",
                payload: response
            }
            dispatch(return_response);
        } catch (error) {
            const return_response = {
                type: "ASSIGNMENTS_VIEW",
                payload: error
            }
            dispatch(return_response);
        }
    }
}

// VIEW ALL VIDEOS

export function fetchAllVideoView() {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/video/get-by-user`, {
                headers: {
                    "Authorization": token
                }
            });
            const return_response = {
                type: "VIDEO_VIEW",
                payload: response
            }
            dispatch(return_response);
        } catch (error) {
            const return_response = {
                type: "VIDEO_VIEW",
                payload: error
            }
            dispatch(return_response);
        }
    }
}

// VIEW ALL COURSE GROUP

export function fetchCourseGruop() {
    return async (dispatch) => {
        try {
            const id = Cookies.get("userId");
            const response = await axios.get(`${Baseurl}/group/view-group/${id}`);
            const return_response = {
                type: "VIEW_GROUP",
                payload: response
            }
            dispatch(return_response);
        } catch (error) {
            const return_response = {
                type: "VIEW_GROUP",
                payload: error
            }
            dispatch(return_response);
        }
    }
}

// VIEW GRUOP BY ID

export function fetchGruopById(id) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/group/group-list/${id}`);
            const return_response = {
                type: "GROUP_VIEWBY_ID",
                payload: response
            }
            dispatch(return_response);
        } catch (error) {
            const return_response = {
                type: "GROUP_VIEWBY_ID",
                payload: error
            }
            dispatch(return_response);
        }
    }
}

// VIEW GRUOP CHAT

export function fetchGruopChatByUser() {
    return async (dispatch) => {
        try {
            const id = Cookies.get("group_id");
            const response = await axios.get(`${Baseurl}/group/view-chat/${id}`);
            console.log("respo", response)
            const return_response = {
                type: "GRUOP_CHAT",
                payload: response
            }
            dispatch(return_response);
        } catch (error) {
            const return_response = {
                type: "GRUOP_CHAT",
                payload: error
            }
            dispatch(return_response);
        }
    }
}

// VIEW PAYMENT BY USER ID/TOKEN
export function fetchPaymentDetailsById() {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/payment/view-by-user`, {
                headers: {
                    Authorization: token
                }
            })
            console.log("resonseee", response);
            var return_response = {
                type: "PAYMENT_BY_TOKEN",
                payload: response
            }
            dispatch(return_response)
        } catch (error) {
            console.log("error", error);
            var return_response = {
                type: "PAYMENT_BY_TOKEN",
                payload: error
            }
            dispatch(return_response)
        }
    }
}

//DASHBOARD DATA OF USER 

export function fetchDashboardDataOfUser() {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/user/info-for-dashboard`, {
                headers: {
                    Authorization: token
                }
            })
            console.log("responseee", response);
            var return_response = {
                type: "DASHBOARD_DATA",
                payload: response
            }
            dispatch(return_response);
        } catch (error) {
            console.log("error", error);
            var return_response = {
                type: "DASHBOARD_DATA",
                payload: error
            }
            dispatch(return_response);
        }
    }
}