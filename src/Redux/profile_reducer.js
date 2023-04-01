import { authAPI, profileAPI } from "../API/api";

const SET_TOKEN = "SET_TOKEN";
const SET_POSITIONS = "SET_POSITIONS";
const SET_USER_CARDS = "SET_USER_CARDS";
const SET_NEXT_URL = "SET_NEXT_URL";
const ADD_USER_CARDS = "ADD_USER_CARDS";
const SORT_USERS_NEW_FIRST = "SORT_USERS_NEW_FIRST";



let initialState = {
    token: null,
    positions: null,
    name: null,
    email: false,
    phone: null,
    photo: null,
    id: null,
    userCards: null,
    nextUrl: null
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
        case SET_USER_CARDS: {
            return {
                ...state,
                userCards: action.userCards
            }
        }
        case ADD_USER_CARDS: {
            return {
                ...state,
                userCards: state.userCards.concat(action.userCards)
            }
        }
        case SORT_USERS_NEW_FIRST: {
            return {
                ...state,
                userCards: state.userCards.sort((a, b) => b.registration_timestamp - a.registration_timestamp)
            }
        }
        case SET_NEXT_URL: {
            return {
                ...state,
                nextUrl: action.nextUrl
            }
        }
        default:
            return state;
    }
}

const setToken = (token) => ({ type: SET_TOKEN, token });
const setPositions = (positions) => ({ type: SET_POSITIONS, positions });
const setUserCards = (userCards) => ({ type: SET_USER_CARDS, userCards });
const setNextUrl = (nextUrl) => ({ type: SET_NEXT_URL, nextUrl });
const addUserCards = (userCards) => ({ type: ADD_USER_CARDS, userCards });

export const sortUsersNewFirst = () => ({ type: SORT_USERS_NEW_FIRST });


export const getToken = () => {
    return async (dispatch) => {
        let response = await authAPI.getToken()
        if (response.data.resultCode !== 1) {
            console.log(response);
            dispatch(setToken(response.data.token));

        };
    };
}

export const getPositions = () => {
    return async (dispatch) => {
        let response = await authAPI.getPositions()
        if (response.data.resultCode !== 1) {
            console.log(response.data.positions);
            dispatch(setPositions(response.data.positions));

        };
    };
}

export const getUserCards = (page, count) => {
    return async (dispatch) => {
        let response = await profileAPI.getUserList(page, count)
        if (response.status === 200) {
            console.log(response.data.users);
            dispatch(setUserCards(response.data.users));
            if (response.data.links.next_url) {
                dispatch(setNextUrl(response.data.links.next_url));
            }
        }
    };
};

export const getNewUserCards = (url) => {
    return async (dispatch) => {
        let response = await profileAPI.getNewUserList(url)
        if (response.status === 200) {
            console.log(response.data.users);
            dispatch(addUserCards(response.data.users));
            if (response.data.links.next_url) {
                dispatch(setNextUrl(response.data.links.next_url))
            }
            else {
                dispatch(setNextUrl("Done"));
                dispatch(sortUsersNewFirst());

            }

        }
    };
};


export default profileReducer;