import { connect } from 'react-redux';
import AllPuppies from './AllPuppies';
import { allPuppiesThunk } from './action-creators';

// const hardCodedData = [ { id: 1, name: 'Cody' }, { id: 2, name: 'Ben' }, { id: 3, name: 'Bubba' } ];

const mSTP = (state) => ({
	puppies: state.allPuppies
});

const mDTP = (dispatch) => ({
	loadAllPuppies: () => {
		dispatch(allPuppiesThunk());
	}
});

const componentCreator = connect(mSTP, mDTP);
const AllPuppiesContainer = componentCreator(AllPuppies);
export default AllPuppiesContainer;
