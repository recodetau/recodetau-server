import { useAxios } from "../hooks/use-axios";

import { USER } from "../datas/constants/url";

const axios = useAxios();

export default class UserService {
    async getCurrentUser() {
        try {
            const data = await axios.get(USER.CURRENT);
            return data.data;
        } catch (error) {
            return console.log(error);
        }
    }
}
