import React from 'react';
//import { MessageBarType } from 'app/components/MessageBar';
//import { ToastType } from 'app/components/Toast';
import { SHOW_TOAST, HIDE_TOAST, SHOW_MESSAGE, HIDE_MESSAGE, CHANGE_THEME } from '../declarations/ui';

export const showToast = (body: React.ReactNode, style?) => {
	return { type: SHOW_TOAST, payload: { body, style } };
};

export const hideToast = () => {
	return { type: HIDE_TOAST };
};

export const showMessage = (message: string, messageType) => {
	return { type: SHOW_MESSAGE, payload: { message, messageType } };
};

export const hideMessage = () => {
	return { type: HIDE_MESSAGE };
};

export const changeTheme = (theme: string) => {
	return { type: CHANGE_THEME, payload: theme };
};
