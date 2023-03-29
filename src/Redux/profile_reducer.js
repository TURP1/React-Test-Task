import { authAPI } from "../API/api";

const SET_TOKEN = "SET_TOKEN";
const SET_POSITIONS = "SET_POSITIONS";


let initialState = {
    token: null,
    positions: null,
    name: null,
    email: false,
    phone: null,
    photo: null,
    id: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN: {
            return {
                ...state,
                token: action.token
            }
        }
        case SET_POSITIONS: {
            return {
                ...state,
                positions: action.positions
            }
        }
        default:
            return state;
    }
}

const setToken = (token) => ({ type: SET_TOKEN, token });
const setPositions = (positions) => ({ type: SET_POSITIONS, positions });


export const getToken = () => {
    return async (dispatch) => {
        let response = await authAPI.getToken()
        if (response.data.resultCode !== 1) {
            console.log(response);
            dispatch(setToken(response.data.token));
            // dispatch(setAuth(true))
        };

    };
}

export const getPositions = () => {
    return async (dispatch) => {
        let response = await authAPI.getPositions()
        if (response.data.resultCode !== 1) {
            console.log(response.data.positions);
            dispatch(setPositions(response.data.positions));
            // dispatch(setAuth(true))
        };

    };
}

export default profileReducer;