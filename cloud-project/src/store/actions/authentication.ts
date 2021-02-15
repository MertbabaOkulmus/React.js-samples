//import { Principal } from 'models';
import { LOGIN, LOGOUT, SET_TOKEN, EXCEPTION } from '../declarations/authentication';

export const login = (principal) => {
	return {
		type: LOGIN,
		data: principal,
	};
};

export const logout = () => {
	return {
		type: LOGOUT,
	};
};

export const setToken = (token: string | undefined) => {
	return {
		type: SET_TOKEN,
		data: token,
	};
};

export const exception = (message: string | undefined) => {
	return {
		type: EXCEPTION,
		data: message,
	};
};

export const setAvatar = (fileId?: string) => {
	return {
		type: 'SET_AVATAR',
		data: fileId,
	};
};

export const setLogo = (fileId?: string) => {
	return {
		type: 'SET_LOGO',
		data: fileId,
	};
};
