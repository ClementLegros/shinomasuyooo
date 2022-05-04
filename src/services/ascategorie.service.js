import http from "../http-common";
class AsCategorieDataService {
  get(id) {
    return http.get(`/ascategorie/${id}`);
  }
}

export default new AsCategorieDataService();
