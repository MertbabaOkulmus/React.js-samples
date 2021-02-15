import uiState from './ui';
import authentication from './authentication';
import stage from './stage';
import { UIState } from '../declarations/ui';
import { combineReducers } from 'redux';
//import { Session } from 'models';

export type RootState = {
	ui: UIState;
	//authentication;
	stage: Record<string, any>;
};

const createRootReducer = () =>
	combineReducers<RootState>({
		ui: uiState,
		//authentication: authentication,
		stage: stage,
	});

export default createRootReducer();
