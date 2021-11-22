import axios from "axios";

const api_Caller = async (type, body, authorizationHeader = null) => {
  try {
    const result = await axios.post(
      `https://whispering-garden-30057.herokuapp.com/user/${type}`,
      body,
      {
        headers: {
          Authorization: authorizationHeader,
        },
      }
    );

    return result;
  } catch (e) {
    return e.response;
  }
};
export default api_Caller;
