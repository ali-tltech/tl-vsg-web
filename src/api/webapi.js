import axiosInstance from '../axios/AxiosInstance';

export const Enquery =async(data)=>{
    try {
        const response = await axiosInstance.post('/enquiries/create-enquiry',data)
        return response
    } catch (error) {
        console.error(error);
        
    }
}
export const Subscribe =async(data)=>{
    try {
        const response = await axiosInstance.post('/newsletter/subscribe',{email:data})
        return response
    } catch (error) {
        console.error(error);
        
    }
}
export const handleFaqs =async()=>{
    try {
        const response = await axiosInstance.get('/qna/get-faqs')
        return response
    } catch (error) {
        console.error(error);
        
    }
}
export const getPrivacyPolicy =async()=>{
    try {
        const response = await axiosInstance.get('/document/get-privacy')
        return response
    } catch (error) {
        console.error(error);
        
    }
}
export const getTerms =async()=>{
    try {
        const response = await axiosInstance.get('/document/get-terms')
        return response
    } catch (error) {
        console.error(error);
        
    }
}
export const getSocial =async()=>{
    try {
        const response = await axiosInstance.get('/social/get-social')
        return response
    } catch (error) {
        console.error(error);
        
    }
}
export const getTeamDetails =async()=>{
    try {
        const response = await axiosInstance.get('/team/active-team')
        return response
    } catch (error) {
        console.error(error);
        
    }
}
export const getSEO = async (pageTitle) => {
    try {
      const response = await axiosInstance.get(`/seo/get-seo/${pageTitle}`);
      return response;
    } catch (error) {
      console.error("Error fetching SEO data:", error);
    }

    
  };

  export const getBlog = async () => {
    try {
      const response = await axiosInstance.get(`/blog/get-all-blogs`);
      return response;
    } catch (error) {
      console.error("Error fetching Blog data:", error);
    } 
  };


  export const getBlogById = async (id) => {
    try {
      const response = await axiosInstance.get(`/blog/get-blog/${id}`);
      return response;
    } catch (error) {
      console.error("Error fetching Blog data:", error);
    } 
  };


  export const getAllYouTubeVideos = async () => {
    try {
      const response = await axiosInstance.get(`/youtube/get-all-youtube-videos`);
      return response;
    } catch (error) {
      console.error("Error fetching Youtube Video data:", error);
    } 
  };