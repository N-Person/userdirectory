import axios from "axios";

// Our API for Random Users, which is exported to the App.js
export default {
  getRandomUsers: () => {
    return axios.get("https://randomuser.me/api/?results=30");
  }
};