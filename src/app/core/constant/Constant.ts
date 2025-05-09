export const Constant = {
    LOCAL_STORAGE_KEY: 'onboradingUser',
    VALIDATION_MESSAGE: {
        REQUIRED: 'This is required',
        MOBILE_MIN_LENGTH: '10 Char Needed',
        EMAIL_PATTERN: 'Email is Not Correct'
    }
}

export const ValidationConstant = { 
    REQUIRED: 'Required',
    MOBILE_MIN_LENGTH: '10 Char Needed',
    EMAIL_PATTERN: 'Email is Not Correct',
    REG_EX: {
        PAN_CARD:'/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/',
        AADHAR_CARD:'/^[2-9]{1}[0-9]{11}$/'
    }
}


export const APIMethodConstant = {
    EMPLOYEE: {
        LOGIN: 'Employee/login',
    },
    MASTER: {
        GET_DEPARTMENT: 'Master/departments',
        GET_DESIGNATION_BY_ID:'Master/GetDesignationsByDeptId?id='
    } 
}