import { Baseurl } from "../../../baseurl";
import axios from "axios"



//GETINTOUCH

export function getInToTouch(data) {
    return async (dispatch) => {
       try {
        const response = await axios.post(`${Baseurl}/contact/insert`, data);
        console.log("response",response)
        var return_response = {
            type: "GETINTOUCH",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
        var return_response = {
            type: "GETINTOUCH",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}
