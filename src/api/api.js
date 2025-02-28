const { default: axiosInstance } = require("src/axios/AxiosInstance");

export const contact =async()=>{
    try {
        const response = await axiosInstance.get('/company/get-company-details')
        return response
    } catch (error) {
        console.error(error);
        
    }
}