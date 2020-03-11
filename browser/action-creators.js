import axios from 'axios';

export const RECEIVE_PUPPIES = 'RECEIVE_PUPPIES';
export const SELECT_PUPPY = 'SELECT_PUPPY';

const receivedPuppies = (puppies) => ({
	type: RECEIVE_PUPPIES,
	puppies
});

export const allPuppiesThunk = () => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get('/api/puppies');
			dispatch(receivedPuppies(data));
		} catch (error) {
			dispatch(error);
		}
	};
};

const selectPuppy = (puppy) => ({
	type: SELECT_PUPPY,
	puppy
});

export const singlePuppyThunk = (puppyId) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(`/api/puppies/${puppyId}`);
			dispatch(selectPuppy(data));
		} catch (error) {
			dispatch(error);
		}
	};
};
