import http from "../http-common";
class StatDataService {
    get(id) {
        return http.get(`/stat/${id}`);
    }
}

export default new StatDataService();