// ALL OF THE API URLs USED IN THIS PROJECT:

// Base API URL
export const baseURL = "https://itpuavz5l8.execute-api.us-east-1.amazonaws.com";

// GET citizen
export const getCitizen = baseURL + "/dev/citizen/user?citizen_id=";

// POST citizen
export const postCitizen = baseURL + "/dev/citizen/report";

// POST sign up
export const postSignUp = baseURL + "/dev/citizen/sign-up";

// POST log in
export const postLogIn = baseURL + "/dev/login";

// GET reports given a citizen's id
export const getCitizenReports = baseURL + "/dev/citizen/reports?citizen_id=";

export default getCitizen;
