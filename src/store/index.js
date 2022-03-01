import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga'
import { IMAGES } from "../constants";

import rootReducer from "../reducers";
import rootSaga from "../sagas";

const configureStore = () => {
    // Note: passing middleware as the last argument to createStore requires redux@>=3.1.0
    const sagaMiddleware = createSagaMiddleware()

    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
    sagaMiddleware.run(rootSaga);

    /* store.dispatch({ type: "HELLO" });
    store.dispatch({ type: "HELLO" });
    store.dispatch({ type: "HELLO" });

    store.dispatch({ type: "LOGIN" });
    store.dispatch({ type: "LOGIN" });
    store.dispatch({ type: "LOGIN" });

    store.dispatch({ type: "HELLO2" }); */

    // store.dispatch({ type: IMAGES.LOAD })
    // store.dispatch({ type: IMAGES.LOAD })
    return store;
}

export default configureStore;