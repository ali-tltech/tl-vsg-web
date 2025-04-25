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
    if (!id) {
      console.error("getBlogById called without an ID");
      throw new Error("Blog ID is required");
    }
  
    try {
      // You might need to include a timeout to prevent hanging requests
      const response = await axiosInstance.get(`/blog/get-blog/${id}`, {
        timeout: 8000 // 8 second timeout
      });
      
      // Add some validation of the response
      if (!response.data) {
        throw new Error("Invalid response: No data received");
      }
      
      return response;
    } catch (error) {
      // Handle different types of errors differently
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(`Server error for blog ID ${id}:, {
          status: error.response.status,
          data: error.response.data
        }`);
        
        // Return null data for 404s instead of throwing
        if (error.response.status === 404) {
          return { data: { data: null } };
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.error(`Network error for blog ID ${id}:, error.request`);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error(`setting up request for blog ID ${id}:`, error.message);
      }
      
      // Re-throw the error to be handled by the calling function
      throw error;
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