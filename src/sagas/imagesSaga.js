import { takeEvery, select, call, put } from "redux-saga/effects";
import { fetchImages } from "../api";
import { IMAGES } from "../constants";
import { setImages, setError } from "../actions";
// watcher saga
export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

const getPage = state => state.nextPage;

// worker saga
function* handleImagesLoad() {
    try {
        const page = yield select(getPage);
        // console.log('page no', page)
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
        // update store
    } catch (error) {
        // dispatch error action
        yield put(setError(error.toString()));
    }

}