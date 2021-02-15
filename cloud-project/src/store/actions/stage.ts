import { SET_STAGE } from '../declarations/stage';

export const setStage = (key: string, value: any) => {
	return { type: SET_STAGE, data: { key, value } };
};
