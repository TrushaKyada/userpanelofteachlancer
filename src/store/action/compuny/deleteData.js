import { Baseurl } from "../../../baseurl";
import axios from "axios";
import Cookies from "js-cookie";


const token = Cookies.get('token')

// DELETE A JOB 

export function delatejobs(id) {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`${Baseurl}/jobs/delete/${id}`, {
                headers: {
                    "Authorization": token
                }
            });
            var return_response = {
                type: "DELETE_JOB",
                payload: response,
            };
            dispatch(return_response);
        } catch (error) {
           
            var return_response = {
                type: "DELETE_JOB",
                payload: error,
            };
            dispatch(return_response);
        }
    };
}


// DELETE A INTERNSHIP 

export function delateInternship(id) {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`${Baseurl}/internship/delete/${id}`, {
                headers: {
                    "Authorization": token
                }
            });
            var return_response = {
                type: "DELETE_INTERNSHIP",
                payload: response,
            };
            dispatch(return_response);
        } catch (error) {
           
            var return_response = {
                type: "DELETE_INTERNSHIP",
                payload: error,
            };
            dispatch(return_response);
        }
    };
}


