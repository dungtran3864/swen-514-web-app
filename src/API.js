// ALL OF THE API URLs USED IN THIS PROJECT:

// BASE URL
export const baseURL = "https://itpuavz5l8.execute-api.us-east-1.amazonaws.com/dev";

// GET citizen
export const getCitizen = baseURL + "/citizen/user?citizen_id=";

// POST citizen
export const postCitizen = baseURL + "/citizen/report";

// POST sign up
export const postSignUp = baseURL + "/citizen/sign-up";

// POST log in
export const postLogIn = baseURL + "/login";

// GET reports given a citizen's id
export const getCitizenReports = baseURL + "/citizen/reports?citizen_id=";

export const updateReport = baseURL + "/government/report";

export default baseURL;
