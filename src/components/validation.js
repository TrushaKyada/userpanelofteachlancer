import * as Yup from 'yup';


//  USER & COMPANY SIGN IN VALIDATION
export const validationSchema = Yup.object().shape({

    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),

    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),

});

// USER VALIDATION SIGN UP

export const UservalidationSchema = Yup.object().shape({
    first_name: Yup.string()
        .required('Name is required')
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .min(2),
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    mobile: Yup.string()
        .required('Mobile number is required')
        .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, 'Password must be 10 digit'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});

// COMPANY VALIDATION ON SIGN UP

export const CompanyvalidationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Company name is required'),
    type: Yup.string()
        .required('Type is required'),
    industry_type: Yup.string()
        .required('Industry Type is required'),
    no_of_emp: Yup.string()
        .required('Number of employee is required')
        .matches(/^[0-9]*$/, "Only digit are allowed"),
    your_name: Yup.string()
        .required(' Your name is required')
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name'),
    your_role: Yup.string()
        .required('Role is required'),
    country: Yup.string()
        .required("Country name is requied")
        .matches(/^[A-Za-z ]*$/, 'Please enter valid state'),
    state: Yup.string()
        .required("State name is requied")
        .matches(/^[A-Za-z ]*$/, 'Please enter valid state'),
    city: Yup.string()
        .required("City name is requied")
        .matches(/^[A-Za-z ]*$/, 'Please enter valid city'),
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    wallet: Yup.string()
        .required('Wallet is required'),
    mobile: Yup.string()
        .required('Mobile number is required')
        .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, 'Password must be 10 digit'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});


// JOB POST 
export const JobvalidationSchema = Yup.object().shape({
    type: Yup.string()
        .required().oneOf(["1", "2"], 'Selecting the type is required'),
    position: Yup.string()
        .required('Position is required'),
    description: Yup.string()
        .required('Description is required'),
    technology: Yup.string()
        .required('Technology is required'),
    salary: Yup.string()
        .required('Salary is required'),
    active: Yup.string()
        .required().oneOf(["1", "0"], 'Selecting the type is required'),
    vacancy: Yup.string()
        .required().matches(/^[0-9]*$/, "Only digit are allowed"),
});

// internship POST 
export const internshipValidationSchema = Yup.object().shape({
    type: Yup.string()
        .required().oneOf(["1", "2"], 'Selecting the type is required'),
    time: Yup.string()
        .required().oneOf(["1", "2"], 'Selecting the time is required'),
    start_date: Yup.date()
        .required('date is required'),
    duration: Yup.string()
        .required('duration is required')
        .matches(/^[0-9]*$/, "Only digit are allowed"),
    description: Yup.string()
        .required('Description is required'),
    technology: Yup.string()
        .required('Technology is required'),
    skills: Yup.string()
        .required('skills is required'),
    active: Yup.string()
        .required().oneOf(["1", "2"], 'Selecting the type is required'),
    vacancy: Yup.string()
        .required().matches(/^[0-9]*$/, "Only digit are allowed"),
}); 