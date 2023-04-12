import { Baseurl } from "../../../baseurl";
import axios from "axios"
import Cookies from "js-cookie";


const token = Cookies.get('token')

//COMPANY RAGISTRATION

export function compunyRagistration(data) {
    return async (dispatch) => {
       try {
        const response = await axios.post(`${Baseurl}/company/registration`, data);
        var return_response = {
            type: "COMPANY_RAGISTRATION",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {

        var return_response = {
            type: "COMPANY_RAGISTRATION",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}


//COMPANY LOGIN

export function compunyLogin(data) {
    return async (dispatch) => {
       try {
        const response = await axios.post(`${Baseurl}/company/login`, data);
       
        Cookies.set('token',response.data.token)

        var return_response = {
            type: "COMPANY_LOGIN",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
       
        var return_response = {
            type: "COMPANY_LOGIN",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}


// FORGET PASSWORD

export function forgetPassword(data) {
    return async (dispatch) => {
       try {
        const response = await axios.post(`${Baseurl}/common/forget-password`, data);
       

        var return_response = {
            type: "FORGET_PASSWORD",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
       
        var return_response = {
            type: "FORGET_PASSWORD",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}


// ADD COMPANY PROFILE 

export function addCompanyProfile(data) {
 
    return async (dispatch) => {
       try {
        const response = await axios.post(`${Baseurl}/company/add-image`, data,{
            headers:{
                "Authorization":token
            }
        });
       

        var return_response = {
            type: "ADD_COMPANYPROFILE",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
       
        var return_response = {
            type: "ADD_COMPANYPROFILE",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}


// JOB PREFRENCE ADD

export function jobPrefrenceAdd(data) {
 
    return async (dispatch) => {
       try {
        const response = await axios.post(`${Baseurl}/jobs/post`, data,{
            headers:{
                "Authorization":token
            }
        });
        var return_response = {
            type: "JOB_PREFRENCE_ADD",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
       
        var return_response = {
            type: "JOB_PREFRENCE_ADD",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}


// INTERNSHIP POST

export function internshipPost(data){
 
    return async (dispatch) => {
       try {
        const response = await axios.post(`${Baseurl}/internship/post`, data,{
            headers:{
                "Authorization":token
            }
        });
       console.log("res::",response)

        var return_response = {
            type: "JOB_INTERNSHIP_ADD",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
        console.log("error:",error)
       
        var return_response = {
            type: "JOB_INTERNSHIP_ADD",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}


// INTERVIEW LINK JOB

export function internviewLinkGenrate(id){
   
    return async (dispatch) => {
       try {
        const response = await axios.post(`${Baseurl}/applies/take-action-job/${id}`, {},{
            headers:{
                "Authorization":token
            }
        });
       

        var return_response = {
            type: "INTERVIEW_LINK",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
       
        var return_response = {
            type: "INTERVIEW_LINK",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}

// INTERVIEW LINK INTERNSHIP

export function internviewLinkInternshipGenrate(id){
   
    return async (dispatch) => {
       try {
        const response = await axios.post(`${Baseurl}/applies/take-action-intern/${id}`, {},{
            headers:{
                "Authorization":token
            }
        });
       

        var return_response = {
            type: "INTERVIEW_LINK_INTRENSHIP",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
       
        var return_response = {
            type: "INTERVIEW_LINK_INTRENSHIP",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}



//HIRED USER

export function hiredUser(id,data){
   
    return async (dispatch) => {
       try {
        const response = await axios.put(`${Baseurl}/applies/update-status/${id}`, {"status":data},{
            headers:{
                "Authorization":token
            }
        });
       console.log("res:::::::",response)

        var return_response = {
            type: "HIRED_USER",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
        console.log("error:::::::",error)
       
        var return_response = {
            type: "HIRED_USER",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}
