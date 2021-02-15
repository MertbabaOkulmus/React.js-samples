//import { MessageBarType } from 'app/components/MessageBar';
//import { ToastType } from 'app/components/Toast';
// Constants
export const SHOW_TOAST = 'SHOW_TOAST';
export const HIDE_TOAST = 'HIDE_TOAST';
export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const HIDE_MESSAGE = 'HIDE_MESSAGE';
export const CHANGE_THEME = 'CHANGE_THEME';

export type UIState = {
	theme: string;
	message: { message: string; style: any } | undefined;
	toast: { body: React.ReactNode; style:any } | undefined;
};
