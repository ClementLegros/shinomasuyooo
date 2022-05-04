import http from "../http-common";
class CardDataService {
  getAll() {
    return http.get("/card");
  }
  get(id) {
    return http.get(`/card/${id}`);
  }
  getWithCharacter(id) {
    return http.get(`/card/character/${id}`);
  }
}

export default new CardDataService();
