import axiosInstance from "src/axios/AxiosInstance";

export const organization =async()=>{
    try {
        const response = await axiosInstance.get('/company/get-company-details')
        return response
    } catch (error) {
        console.error(error);
        
    }
}
export const testimonials =async()=>{
    try {
        const response = await axiosInstance.get('/contents/testimonials')
        return response
    } catch (error) {
        console.error(error);
        
    }
}
export const service =async()=>{
    try {
        const response = await axiosInstance.get('/service/get-all-service')
        return response
    } catch (error) {
        console.error(error);
        
    }
}
export const singleService =async(id)=>{
    try {
        const response = await axiosInstance.get(`/service/get-service/${id}`)
        return response
    } catch (error) {
        console.error(error);
        
    }
}

export const team =async(id)=>{
    try {
        const response = await axiosInstance.get(`/team/get-team/${id}`)
        return response
    } catch (error) {
        console.error(error);
        
    }
}