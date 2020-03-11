import { connect } from 'react-redux';
import SinglePuppy from './SinglePuppy';
import { singlePuppyThunk } from './action-creators';

// const hardcodedPuppy = {
// 	id: 1,
// 	name: 'Taylor',
// 	image: 'https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584'
// };

const mSTP = (state) => ({
	singlePuppy: state.singlePuppy
});

const mDTP = (dispatch) => ({
	loadSinglePuppy: (id) => {
		dispatch(singlePuppyThunk(id));
	}
});

const componentCreator = connect(mSTP, mDTP);
const SinglePuppyContainer = componentCreator(SinglePuppy);
export default SinglePuppyContainer;
