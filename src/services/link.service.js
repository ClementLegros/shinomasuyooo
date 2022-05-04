import http from "../http-common";
class LinkDataService {
  get(id) {
    return http.get(`/link/${id}`);
  }
}

export default new LinkDataService();
