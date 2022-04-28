import http from "../http-common";
class CharacterDataService {
    get(id) {
        return http.get(`/character/${id}`);
    }
}

export default new CharacterDataService();