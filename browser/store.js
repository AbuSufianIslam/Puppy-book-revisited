import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { RECEIVE_PUPPIES, SELECT_PUPPY } from './action-creators';

const allPuppyreducer = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_PUPPIES:
			return action.puppies;
		default:
			return state;
	}
};

const singlePuppyReducer = (state = {}, action) => {
	switch (action.type) {
		case SELECT_PUPPY:
			return action.puppy;
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	allPuppies: allPuppyreducer,
	singlePuppy: singlePuppyReducer
});

const loggerMiddleware = createLogger();
const middlewares = applyMiddleware(loggerMiddleware, thunkMiddleware);
const store = createStore(rootReducer, middlewares);

export default store;
