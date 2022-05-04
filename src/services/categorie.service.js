import http from "../http-common";
class CategorieDataService {
  get(id) {
    return http.get(`/categorie/${id}`);
  }
}

export default new CategorieDataService();
