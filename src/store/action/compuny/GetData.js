import { Baseurl } from "../../../baseurl";
import axios from "axios";
import Cookies from "js-cookie";
import { func } from "prop-types";


const token = Cookies.get('token')


// FETCH COMPANY PROFILE VIEW

export function fetchCompanyView() {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/company/view-profile`, {
                headers: {
                    "Authorization": token
                }
            });
            var return_response = {
                type: "COMPANY_VIEW",
                payload: response,
            };
            dispatch(return_response);
        } catch (error) {

            var return_response = {
                type: "COMPANY_VIEW",
                payload: error,
            };
            dispatch(return_response);
        }
    };
}


// JOB PREFRENCE VIEW

export function jobPrefrenceView() {

    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/jobs/list`);
            var return_response = {
                type: "JOB_PREFRENCE_VIEW",
                payload: response,
            };
            dispatch(return_response);
        } catch (error) {

            var return_response = {
                type: "JOB_PREFRENCE_VIEW",
                payload: error,
            };
            dispatch(return_response);
        }
    };
}

// JOB PREFRENCE VIEW ID

export function jobPrefrenceViewById(id) {

    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/jobs/view-by-id/${id}`);


            var return_response = {
                type: "JOB_PREFRENCE_VIEWBYID",
                payload: response,
            };
            dispatch(return_response);
        } catch (error) {

            var return_response = {
                type: "JOB_PREFRENCE_VIEWBYID",
                payload: error,
            };
            dispatch(return_response);
        }
    };
}

// JOB PREFRENCE VIEW BY COMPANY

export function jobPrefrenceViewByCompany() {

    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/jobs/view-by-company`, {
                headers: {
                    "Authorization": token
                }
            });


            var return_response = {
                type: "JOB_PREFRENCE_VIEW_BY_COMPANY",
                payload: response,
            };
            dispatch(return_response);
        } catch (error) {

            var return_response = {
                type: "JOB_PREFRENCE_VIEW_BY_COMPANY",
                payload: error,
            };
            dispatch(return_response);
        }
    };
}

// INTERNSHIP VIEW BY COMPANY

export function internshipViewByCompany() {

    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/internship/view-by-company`, {
                headers: {
                    "Authorization": token
                }
            });


            var return_response = {
                type: "INTERNSHIP_VIEW_BY_COMPANY",
                payload: response,
            };
            dispatch(return_response);
        } catch (error) {

            var return_response = {
                type: "INTERNSHIP_VIEW_BY_COMPANY",
                payload: error,
            };
            dispatch(return_response);
        }
    };
}


// INTERNSHIP VIEW ALL

export function internshipViewAll() {

    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/internship/list`);


            var return_response = {
                type: "INTERNSHIP_VIEW_ALL",
                payload: response,
            };
            dispatch(return_response);
        } catch (error) {

            var return_response = {
                type: "INTERNSHIP_VIEW_ALL",
                payload: error,
            };
            dispatch(return_response);
        }
    };
}

// INTERNSHIP VIEW ID

export function internshipViewById(id) {

    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/internship/view-by-id/${id}`, {
                headers: {
                    "Authorization": token
                }
            });


            var return_response = {
                type: "INTERNSHIP_VIEWBYID",
                payload: response,
            };
            dispatch(return_response);
        } catch (error) {

            var return_response = {
                type: "INTERNSHIP_VIEWBYID",
                payload: error,
            };
            dispatch(return_response);
        }
    };
}


// INTERNSHIP VIEW BY LOCATION

export function internshipViewByLocation(data) {

    return async (dispatch) => {
        try {
            const response = await axios.post(`${Baseurl}/internship/view-by-location`, data);


            var return_response = {
                type: "INTERNSHIP_VIEWBYLOCATION",
                payload: response,
            };
            dispatch(return_response);
        } catch (error) {

            var return_response = {
                type: "INTERNSHIP_VIEWBYLOCATION",
                payload: error,
            };
            dispatch(return_response);
        }
    };
}

// INTERNSHIP VIEW BY TECHNOLOGY

export function internshipViewByTechnology(data) {

    return async (dispatch) => {
        try {
            const response = await axios.post(`${Baseurl}/internship/view-by-technology`, data);


            var return_response = {
                type: "INTERNSHIP_VIEWBY_TECHNOLOGY",
                payload: response,
            };
            dispatch(return_response);
        } catch (error) {

            var return_response = {
                type: "INTERNSHIP_VIEWBY_TECHNOLOGY",
                payload: error,
            };
            dispatch(return_response);
        }
    };
}


// JOB VIEW BY LOCATION

export function jobViewByLocation(data) {

    return async (dispatch) => {
        try {
            const response = await axios.post(`${Baseurl}/jobs/view-by-location`, data);


            var return_response = {
                type: "JOB_VIEWBYLOCATION",
                payload: response,
            };
            dispatch(return_response);
        } catch (error) {

            var return_response = {
                type: "JOB_VIEWBYLOCATION",
                payload: error,
            };
            dispatch(return_response);
        }
    };
}

// JOB VIEW BY TECHNOLOGY

export function jobViewByTechnology(data) {

    return async (dispatch) => {
        try {
            const response = await axios.post(`${Baseurl}/jobs/view-by-technology`, data);


            var return_response = {
                type: "JOB_VIEWBY_TECHNOLOGY",
                payload: response,
            };
            dispatch(return_response);
        } catch (error) {

            var return_response = {
                type: "JOB_VIEWBY_TECHNOLOGY",
                payload: error,
            };
            dispatch(return_response);
        }
    };
}

// JOB VIEW BY POSTION

export function jobViewByposition(data) {

    return async (dispatch) => {
        try {
            const response = await axios.post(`${Baseurl}/jobs/view-by-position`, data);


            var return_response = {
                type: "JOB_VIEWBY_POSITION",
                payload: response,
            };
            dispatch(return_response);
        } catch (error) {

            var return_response = {
                type: "JOB_VIEWBY_POSITION",
                payload: error,
            };
            dispatch(return_response);
        }
    };
}



// APPLY COUNT FETCH

export function fetchApplyCount() {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/company/count`, {
                headers: {
                    "Authorization": token
                }
            });
            var return_response = {
                type: "APPLY_COUNT",
                payload: response,
            };
            dispatch(return_response);
        } catch (error) {

            var return_response = {
                type: "APPLY_COUNT",
                payload: error,
            };
            dispatch(return_response);
        }
    };
}

//USER APPLY LIST  JOB 

export function fetchAllapplyList(id) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/applies/list-apply-job/${id}`, {
                headers: {
                    Authorization: token
                }
            })

            var return_response = {
                type: "APPLY_USER_LIST",
                payload: response
            }
            dispatch(return_response);
        } catch (error) {


            var return_response = {
                type: "APPLY_USER_LIST",
                payload: error
            }
            dispatch(return_response);
        }
    }
}


//USER APPLY LIST  INTERNSHIP 

export function fetchInternshipApplyList(id) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/applies/list-apply-intern/${id}`, {
                headers: {
                    Authorization: token
                }
            })

            var return_response = {
                type: "INTERN_APPLY_USER_LIST",
                payload: response
            }
            dispatch(return_response);
        } catch (error) {


            var return_response = {
                type: "INTERN_APPLY_USER_LIST",
                payload: error
            }
            dispatch(return_response);
        }
    }
}

// APPLY ALL LIST INTERNSHIP 

export function fetchApplyAllUser() {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${Baseurl}/company/apply-user-list`, {
                headers: {
                    Authorization: token
                }
            })

            var return_response = {
                type: "USER_LIST_ALL",
                payload: response
            }
            dispatch(return_response);
        } catch (error) {


            var return_response = {
                type: "USER_LIST_ALL",
                payload: error
            }
            dispatch(return_response);
        }
    }
}


