import { Baseurl } from "../../../baseurl";
import axios from "axios"
import Cookies from "js-cookie";

const token = Cookies.get('token')

//USER RAGISTRATION

export function userRagistration(data) {

    return async (dispatch) => {
        try {
            const response = await axios.post(`${Baseurl}/user/registration`, data);
            console.log("response", response)
            var return_response = {
                type: "USER_RAGISTRATION",
                payload: response,
            };
            dispatch(return_response);
        } catch (error) {
            console.log("erooor:", error)
            var return_response = {
                type: "USER_RAGISTRATION",
                payload: error,
            };
            dispatch(return_response);
        }
    };
}

//USER LOGIN

export function userLogin(data) {

    return async (dispatch) => {
        try {

            const response = await axios.post(`${Baseurl}/user/login`, data);
            Cookies.set('token', response.data.token)
            Cookies.set('userId', response.data.user_id)

            var return_response = {
                type: "USER_LOGIN",
                payload: response,
            };
            dispatch(return_response);
        } catch (error) {

            var return_response = {
                type: "USER_LOGIN",
                payload: error,
            };
            dispatch(return_response);
        }
    };
}


// ADD user PROFILE 

export function addUserProfile(data) {

    return async (dispatch) => {
        try {
            const response = await axios.post(`${Baseurl}/user/add-profile`, data, {
                headers: {
                    "Authorization": token
                }
            });


            var return_response = {
                type: "ADD_USERPROFILE",
                payload: response,
            };
            dispatch(return_response);
        } catch (error) {

            var return_response = {
                type: "ADD_USERPROFILE",
                payload: error,
            };
            dispatch(return_response);
        }
    };
}

// ADD INTERNSHIP 

export function applyInternship(id) {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${Baseurl}/applies/apply-internship/${id}`, {}, {
                headers: {
                    "Authorization": token
                }
            });
            var return_response = {
                type: "APPLY_INTERNSHIP",
                payload: response,
            };
            dispatch(return_response);
        } catch (error) {

            var return_response = {
                type: "APPLY_INTERNSHIP",
                payload: error,
            };
            dispatch(return_response);
        }
    };
}

// ADD JOB 

export function applyJob(id) {
    return async (dispatch) => {
        console.log("token::", token)
        try {
            const response = await axios.post(`${Baseurl}/applies/apply-job/${id}`, {}, {
                headers: {
                    "Authorization": token
                }
            });
            console.log("token::", response)

            var return_response = {
                type: "APPLY_JOB",
                payload: response,
            };
            dispatch(return_response);
        } catch (error) {
            console.log("token::", error)
            var return_response = {
                type: "APPLY_JOB",
                payload: error,
            };
            dispatch(return_response);
        }
    };
}

//ADD CAREER DETAILS 

export function addCareerDetails(data) {

    return async (dispatch) => {
        try {
            const response = await axios.post(`${Baseurl}/career/insert-career`, data, {
                headers: {
                    Authorization: token
                }
            })

            var return_response = {
                type: "ADD_CAREER",
                payload: response
            }
            dispatch(return_response)
        } catch (error) {


            var return_response = {
                type: "ADD_CAREER",
                payload: error
            }
            dispatch(return_response)
        }
    }
}

//ADD PAYMENT

export function addPayment(payment, enroll) {
    return async (dispatch) => {
        try {
            //localhost:8000/payment/pay/:user_id/:course_id
            console.log("enroll", enroll.course_id);
            const response = await axios.post(`${Baseurl}/payment/pay-fees/${enroll.userId}/${enroll.course_id}`, payment, {
                headers: {
                    Authorization: token
                }
            })
            var return_response = {
                type: "ADD PAYMENT",
                payload: response
            }
            dispatch(return_response)
        } catch (error) {
            var return_response = {
                type: "ADD_ENROLL",
                payload: error
            }
            dispatch(return_response)
        }
    }
}

//ADD ENROLL 

export function addEnroll(data) {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${Baseurl}/enrolled/insert`, data, {
                headers: {
                    Authorization: token
                }
            })
            var return_response = {
                type: "ADD_ENROLL",
                payload: response
            }
            dispatch(return_response)
        } catch (error) {
            var return_response = {
                type: "ADD_ENROLL",
                payload: error
            }
            dispatch(return_response)
        }
    }
}


// JOIN ROOM

export function joinRoomCreate(data) {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${Baseurl}/chat/join-chat-room`, data)
            Cookies.set('chatRoom', response && response.data.data._id)
            var return_response = {
                type: "JION_ROOM",
                payload: response
            }
            dispatch(return_response)
        } catch (error) {
            var return_response = {
                type: "JION_ROOM",
                payload: error
            }
            dispatch(return_response)
        }
    }
}