import { configureStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { mainReducer } from "../modules/app/mainReducer";
import { mainSaga } from "../modules/app/mainSaga";
import { configure } from "@testing-library/react";

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = configureStore(
  mainReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(mainSaga);

export default store;