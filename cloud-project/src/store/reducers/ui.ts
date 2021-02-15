import { CHANGE_THEME } from './../declarations/ui';
import { SHOW_TOAST, HIDE_TOAST, UIState, SHOW_MESSAGE, HIDE_MESSAGE } from '../declarations/ui';

const INIT_STATE: UIState = {
	theme: 'light',
	message: undefined,
	toast: undefined,
};

const ui = (state = INIT_STATE, action: any): UIState => {
	switch (action.type) {
		case SHOW_TOAST: {
			return {
				...state,
				toast: action.payload,
			};
		}

		case HIDE_TOAST: {
			return {
				...state,
				toast: undefined,
			};
		}

		case SHOW_MESSAGE: {
			return {
				...state,
				message: action.payload,
			};
		}

		case HIDE_MESSAGE: {
			return {
				...state,
				message: undefined,
			};
		}

		case CHANGE_THEME: {
			return {
				...state,
				theme: action.payload,
			};
		}

		default:
			return state;
	}
};

export default ui;
