import http from "./http.js";

class CreditApi {
  async getAllCreditTypes() {
    const response = await http.get("/credits/types");
    return response.data;
  }

  async getCreditSchemesByType(typeID) {
    const response = await http.get(`/credits/schemes/${typeID}`);
    return response.data;
  }
}

export default new CreditApi();
