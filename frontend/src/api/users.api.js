import http from "./http.js";

class UsersApi {
  async login(email, password) {
    const response = await http.post("/auth/login", {
      email,
      password,
    });
    return response.data;
  }

  async register(firstName, lastName, email, password) {
    const response = await http.post("/auth/registration", {
      firstName,
      lastName,
      email,
      password,
    });
    return response.data;
  }

  async getMeInfo() {
    const response = await http.get("/users/me");
    return response.data;
  }

  async getUserInfo(userID) {
    const response = await http.get(`/users/${userID}`);
    return response.data;
  }
}

export default new UsersApi();
