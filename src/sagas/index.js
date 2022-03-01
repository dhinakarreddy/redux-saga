
// import { takeEvery, put, take, call } from 'redux-saga/effects'
/*import { IMAGES } from "../constants";
import { takeEvery } from 'redux-saga/effects'
 
// watcher saga
/* function* rootSaga() {
    yield takeEvery("HELLO", workerSaga);
    yield take("LOGIN");
    yield call(login);

    yield takeEvery("HELLO2", workerSaga);
} 

// worker saga
function* workerSaga() {
    console.log("Hello has been called at " + new Date());
    yield put({ type: "NEW_EVENT" })
}

function login() {
    console.log("Login done at " + new Date());
} 

// watcher saga -> actions -> worker saga



// watcher saga
function* rootSaga() {
    yield takeEvery(IMAGES.LOAD, workerSaga);
}

// worker saga
function workerSaga() {
    console.log("Fetching images at " + new Date());
}

export default rootSaga; */

import imagesSaga from "./imagesSaga";
export default imagesSaga;

