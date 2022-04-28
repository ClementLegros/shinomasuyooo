import http from "../http-common";
class HasLinkDataService {
    get(id) {
        return http.get(`/haslink/${id}`);
    }
}

export default new HasLinkDataService();