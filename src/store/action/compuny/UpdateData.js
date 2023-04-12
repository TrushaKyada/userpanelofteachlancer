import { Baseurl } from "../../../baseurl";
import axios from "axios"
import Cookies from "js-cookie";


const token = Cookies.get('token')


// CHANGE PASSWORD

export function changePassword(data) {
   
    return async (dispatch) => {
       try {
        const response = await axios.put(`${Baseurl}/company/change-password`, data,{
            headers:{
                "Authorization":token
            }
        });
    

        var return_response = {
            type: "CHANGE_PASSWORD",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
       
        var return_response = {
            type: "CHANGE_PASSWORD",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}

// RESET PASSWORD

export function resetPassword(data,query) {
    
    return async (dispatch) => {
       try {
        const response = await axios.put(`${Baseurl}/common/reset-password/${query.token}/${query.index}`, data,{
            headers:{
                "Authorization":token
            }
        });
    

        var return_response = {
            type: "RESET_PASSWORD",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
       
        var return_response = {
            type: "RESET_PASSWORD",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}


// COMPANY UPDATE PROFILE

export function CompanyProfileUpadte(data) {
   
    return async (dispatch) => {
       try {
        const response = await axios.put(`${Baseurl}/company/update-profile`, data,{
            headers:{
                "Authorization":token
            }
        });
    

        var return_response = {
            type: "COMPANY_PROFILEUPADTE",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
       
        var return_response = {
            type: "COMPANY_PROFILEUPADTE",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}


// COMPANY PROFILE REMOVE

export function CompanyProfileRemove() {

    return async (dispatch) => {
       try {
        
        const response = await axios.put(`${Baseurl}/company/remove-image`,{},{
            headers:{
                "Authorization":token
            }
        });
    

        var return_response = {
            type: "COMPANY_PROFILEREMOVE",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
       
        var return_response = {
            type: "COMPANY_PROFILEREMOVE",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}


// JOB PREFRENCE UPDATE

export function CompanyJobPostUpdate(data,id) {
   
    return async (dispatch) => {
       try {
     
        const response = await axios.put(`${Baseurl}/jobs/update/${id}`,data,{
            headers:{
                "Authorization":token
            }
        });
    

        var return_response = {
            type: "JOB_PREFRENCE_UPDATE",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
       
        var return_response = {
            type: "JOB_PREFRENCE_UPDATE",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}

// INTRNSHIP UPDATE

export function CompanyIternshipPostUpdate(data,id) {
    return async (dispatch) => {
       try {
        const response = await axios.put(`${Baseurl}/internship/update/${id}`,data,{
            headers:{
                "Authorization":token
            }
        });
    

        var return_response = {
            type: "INTERNSHIP_UPDATE",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
       
        var return_response = {
            type: "INTERNSHIP_UPDATE",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}