import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer kiIA3ZOJzcbpMNG_d3LBqDhM6sseI4ZGdAWvCOe9WvgMPb1R1vveriLu1T7exYIZTUKre2cOXfv0M4DuLJtIRErPRMseyA5LR0dX1fnEcNuZEk8j3rG5EnLft4rCXnYx",
  },
});
