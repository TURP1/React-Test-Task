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
    loginMe(loginObj) {
        let { token, data } = loginObj;
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('position_id', data.position_id);
        formData.append('photo', data.photo);

        return instance.post(`/users`, formData, {
            headers: {
                'Token': token,
                'Content-Type': 'multipart/form-data',
            }
        })
    },
};

export const profileAPI = {
    getUser(id) {
        return instance.get(`users/${id}`)
    },
    getUserList(page, count, offset = 0) {
        return instance.get(`users?page=${page}&count=${count}&offset=${offset}`)
    },
    getNewUserList(url) {
        return axios.get(url)
    }

}


