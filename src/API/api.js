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
        let { token, name, email, phone, position_id, photo } = loginObj;
        // console.log({
        //     headers:
        //         { 'Token': token }
        // },
        // {
        //     "name": name,
        //     "email": email,
        //     "phone": +phone,
        //     "position_id": position_id,
        //     "photo": photo
        // });
        return instance.post(`auth/login`,
            {
                "name": name,
                "email": email,
                "phone": +phone,
                "position_id": position_id,
                "photo": photo
            },
            {
                headers: {
                    'token': token,
                    'Access-Control-Allow-Origin': 'http://your-web-application-domain.com',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Token',
                    'Access-Control-Allow-Credentials': 'true'
                }
            }
        )
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


