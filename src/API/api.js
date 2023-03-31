import axios from "axios";

const instance = axios.create({
    baseURL: `https://frontend-test-assignment-api.abz.agency/api/v1/`
});

export const authAPI = {
    getToken() {
        return instance.get(`token`)
    },
    getPositions() {
        return instance.get(`positions`)
    }
};

export const loginAPI = {
    loginMe(token, name, email, phone, position_id, photo) {
        return instance.post(`auth/login`,
            { headers: token },
            { name, email, phone, position_id, photo }
        )
    },
};

export const profileAPI = {
    getUser(id) {
        return instance.get(`users/${id}`)
    },
    getUserList(page,count, offset = 0 ) {
        return instance.get(`users?page=${page}&count=${count}&offset=${offset}`)
    },
    getNewUserList(url) {
        return axios.get(url)
    }

}


