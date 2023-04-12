import { combineReducers } from 'redux';

import {
    companyRagistrationReducer,
    companyLoginReducer,
    forgetPasswordReducer,
    addCompanyProfileReducer,
    jobPrefrenceAddReducer,
    internshipPostReducer,
    internviewLinkGenrateReducer,
    internviewLinkInternshipGenrateReducer,
    hiredUserReducer,
} from './reducer/company/AddReducer';

import {
    changePasswordReducer,
    resetPasswordReducer,
    CompanyProfileUpadteReducer,
    CompanyProfileRemoveReducer,
    jobPrefrenceUpdateReducer,
    CompanyIternshipPostUpdateReducer
} from "./reducer/company/UpdateReducer"

import {
    getCompanyProfileReducer,
    jobPrefrenceViewReducer,
    jobPrefrenceViewByIdReducer,
    jobPrefrenceViewByCompanyReducer,
    internshipViewByCompanyReducer,
    internshipViewByIdReducer,
    internshipAllViewCompanyReducer,
    internshipViewByLocationReducer,
    internshipViewByTechnologyReducer,
    jobViewByLocationReducer,
    jobViewByTechnologyReducer,
    jobViewBypositionReducer,
    fetchApplyCountReducer,
    fetchAlluserAppledListReducer,
    fetchInternshipApplyListReducer,
    fetchApplyAllUserReducer
} from "./reducer/company/GetReducer"

import {
    delatejobsReducer,
    delateInternshipReducer
} from "./reducer/company/deleteReducer"

import { GetInToTouchReducer } from "./reducer/Comman/addReducer";

// user---------------------------

import {
    userRagistrationReducer,
    userLoginReducer,
    addUserProfileReducer,
    applyInternshipReducer,
    applyJobReducer,
    addCareerDetailsReducer,
    addEnrollReducer,
    joinRoomCreateReducer,
    addPaymentReducer
} from './reducer/user/Addreducer'

import {
    getUserProfileReducer,
    getAllTeacherReducer,
    fetchApplyJobDataReducer,
    fetchApplyInternshipDataReducer,
    fetchfaqReducer,
    fetchTimeLectureReducer,
    fetchCareerDtailByIdReducer,
    fetchUserListReducer,
    fetchUserForChatReducer,
    fetchAllChatReducer,
    fetchAllChatByUserReducer,
    fetchRemaingUserReducer,
    fetchAssignmnetViewReducer,
    fetchAllVideoViewReducer,
    fetchCourseGruopReducer,
    fetchGruopByIdReducer,
    fetchGruopChatByUserReducer,
    fetchPaymentDetailsByIdReducer,
    fetchDashboardDataOfUserReducer
} from './reducer/user/GetReducer'

import {
    userProfileUpadteReducer,
    userChangePasswordReducer,
    userProfileRemoveReducer,
    careerDetailUpadteReducer
} from './reducer/user/UpdateReducer'


import {
    fetchtermWiseViewReducer,
    fetchtCourseDetailReducer,
    fetchCoursesDataReducer
} from './reducer/Comman/getReducer'

const rootReducer = combineReducers({
    // add company---------------
    compunyRagistration: companyRagistrationReducer,
    compunyLogin: companyLoginReducer,
    forgetPassword: forgetPasswordReducer,
    addCompanyProfile: addCompanyProfileReducer,
    jobPrefrenceAdd: jobPrefrenceAddReducer,
    internshipPost: internshipPostReducer,
    internviewLinkGenrate: internviewLinkGenrateReducer,
    internviewLinkInternshipGenrate: internviewLinkInternshipGenrateReducer,
    hiredUser: hiredUserReducer,
    // fetch company data---------
    fetchCompanyView: getCompanyProfileReducer,
    jobPrefrenceView: jobPrefrenceViewReducer,
    jobPrefrenceViewById: jobPrefrenceViewByIdReducer,
    jobPrefrenceViewByCompany: jobPrefrenceViewByCompanyReducer,
    internshipViewByCompany: internshipViewByCompanyReducer,
    internshipViewById: internshipViewByIdReducer,
    internshipViewAll: internshipAllViewCompanyReducer,
    internshipViewByLocation: internshipViewByLocationReducer,
    internshipViewByTechnology: internshipViewByTechnologyReducer,
    jobViewByLocation: jobViewByLocationReducer,
    jobViewByTechnology: jobViewByTechnologyReducer,
    jobViewByposition: jobViewBypositionReducer,
    fetchApplyCount: fetchApplyCountReducer,
    fetchAllapplyList: fetchAlluserAppledListReducer,
    fetchInternshipApplyList: fetchInternshipApplyListReducer,
    fetchApplyAllUser: fetchApplyAllUserReducer,

    // company update------------
    changePassword: changePasswordReducer,
    resetPassword: resetPasswordReducer,
    CompanyProfileUpadte: CompanyProfileUpadteReducer,
    CompanyProfileRemove: CompanyProfileRemoveReducer,
    CompanyJobPostUpdate: jobPrefrenceUpdateReducer,
    CompanyIternshipPostUpdate: CompanyIternshipPostUpdateReducer,

    // delete data

    delatejobs: delatejobsReducer,
    delateInternship: delateInternshipReducer,

    // add user------------------
    userRagistration: userRagistrationReducer,
    userLogin: userLoginReducer,
    addUserProfile: addUserProfileReducer,
    applyInternship: applyInternshipReducer,
    applyJob: applyJobReducer,
    addCareerDetails: addCareerDetailsReducer,
    addEnroll: addEnrollReducer,
    addPayment: addPaymentReducer,
    joinRoomCreate: joinRoomCreateReducer,


    //payment already 

    fetchPaymentDetailsById: fetchPaymentDetailsByIdReducer,

    //lecture time list 

    fetchTimeLecture: fetchTimeLectureReducer,

    // user dashboard data 

    fetchDashboardDataOfUser: fetchDashboardDataOfUserReducer,


    // fetch user---------
    fetchUserView: getUserProfileReducer,
    fetchTainerData: getAllTeacherReducer,
    fetchApplyJobData: fetchApplyJobDataReducer,
    fetchfaq: fetchfaqReducer,
    fetchApplyInternshipData: fetchApplyInternshipDataReducer,
    fetchCareerDtailById: fetchCareerDtailByIdReducer,
    fetchUserList: fetchUserListReducer,
    fetchUserForChat: fetchUserForChatReducer,
    fetchAllChat: fetchAllChatReducer,
    fetchAllChatByUser: fetchAllChatByUserReducer,
    fetchRemaingUser: fetchRemaingUserReducer,
    fetchAssignmnetView: fetchAssignmnetViewReducer,
    fetchAllVideoView: fetchAllVideoViewReducer,
    fetchCourseGruop: fetchCourseGruopReducer,
    fetchGruopById: fetchGruopByIdReducer,
    fetchGruopChatByUser: fetchGruopChatByUserReducer,
    // updare user-------
    userProfileUpadte: userProfileUpadteReducer,
    userChangePassword: userChangePasswordReducer,
    UserProfileRemove: userProfileRemoveReducer,
    careerDetailUpadte: careerDetailUpadteReducer,


    // COMMAN 

    fetchtermWiseView: fetchtermWiseViewReducer,
    fetchtCourseDetail: fetchtCourseDetailReducer,
    fetchCoursesData: fetchCoursesDataReducer,
    getInToTouch: GetInToTouchReducer,


})


export default rootReducer;