import { EXCEPTION, LOGIN, LOGOUT, SET_AVATAR, SET_LOGO, SET_TOKEN } from '../declarations/authentication';
//import { Session } from 'models';

const INIT_STATE = {
	isAuthenticated: false,
	principal: null,
	token: undefined,
	message: undefined,
	balance: 0,
};

export const authentication = (state = INIT_STATE, action: any) => {
	switch (action.type) {
		case LOGIN: {
			return {
				isAuthenticated: true,
				principal: action.data,
				token: undefined,
				message: undefined,
				balance: 0,
			};
		}

		case LOGOUT: {
			if (sessionStorage.getItem('jwt')) {
				sessionStorage.removeItem('jwt');
			}

			return {
				isAuthenticated: false,
				principal: null,
				token: undefined,
				message: undefined,
				balance: 0,
			};
		}

		case SET_TOKEN: {
			return {
				...state,
				token: action.data,
			};
		}

		case EXCEPTION: {
			return {
				...state,
				message: action.data,
			};
		}

		case SET_AVATAR: {
			if (state.principal) {
				return {
					...state,
					principal: { ...state.principal, avatar: action.data },
				};
			} else {
				return state;
			}
		}

		case SET_LOGO: {
			if (state.principal) {
				return {
					...state,
					principal: { ...state.principal, logo: action.data },
				};
			} else {
				return state;
			}
		}

		default:
			return state;
	}
};

export default authentication;
