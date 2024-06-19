import axios from "axios";


export class TrackingApi {
  
  constructor() {
    this.baseUrl = import.meta.env.VITE_API_URL;
  }
  
  createRequestUrl(endpoint) {
    const requestUrl = `${this.baseUrl}/${endpoint}`;
    return requestUrl;
  }
  
  logResponse(response, endpoint, verb) {
    // Helper method to perform console.log() on API response objects.
    console.log(`${verb} API response status for "${endpoint}" endpoint: \n${response.status} - ${response.statusText}.`);
    console.log(response);
  }
  
  async get(endpoint) {
    /* Helper method for making GET requests (following DRY principle). 
    Called upon by the `.getVideo()` and `.getVideosArray()` methods. */
    const requestUrl = this.createRequestUrl(endpoint);
    try {
      const response = await axios.get(requestUrl);
      const itemsArray = response.data;
      return itemsArray;
    } catch (error) {
      console.error(`GET request for "${endpoint}" endpoint failed: ${error}`)
      return false;
    }
  }
  
  async getHistory(username) {
    const data = await this.get(`history/${username}`);
    return data;
  }

  
  async post(endpoint, bodyObject) {
    const requestUrl = this.createRequestUrl(endpoint);
    const headers = {'Content-Type': 'application/json'};
    try {
      const response = await axios.post(requestUrl, bodyObject, headers);
      return response
    } catch (error) {
      console.error(`POST request failed: ${error}`);
      return false;
    }
  }
  
  async postActivity(activityObject, username) {
    const endpoint = `history/${username}`;
    const response = await this.post(endpoint, activityObject);
    return response;
  }
}

const apiInstance = new TrackingApi();
export default apiInstance;