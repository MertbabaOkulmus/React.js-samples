import { SET_STAGE } from '../declarations/stage';

const INIT_STATE: Record<string, any> = {};

const stage = (state = INIT_STATE, action: any): Record<string, any> => {
	switch (action.type) {
		case SET_STAGE: {
			var result = { ...state };
			result[action.data.key] = action.data.value;

			return result;
		}

		default:
			return state;
	}
};

export default stage;
