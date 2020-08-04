import createLogger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import {routerMiddleware} from "connected-react-router";
import {applyMiddleware, createStore} from "redux";
import createRootReducer from "./reducer";
import mySaga from "./saga/userSaga";
import history from "../utils/history";
//日志
const logger = createLogger;
//saga中间件，类似与thunk
const sagaMiddleware = createSagaMiddleware();

const initialState = {};

let middleware = [];

//根据环境去修改中间件
switch (process.env.NODE_ENV) {
    case 'production':
        middleware = [sagaMiddleware, routerMiddleware(history)];
        break;
    case 'development':
        middleware = [sagaMiddleware, routerMiddleware(history),logger];
        break;
    default:
        middleware = [sagaMiddleware, routerMiddleware(history),logger]
}

function toApplyMiddleware(middleware){
    return applyMiddleware(...middleware);
}
//构建store
const store = createStore(
    createRootReducer(history),
    initialState,
    toApplyMiddleware(middleware)
);
//启动saga
sagaMiddleware.run(mySaga,store);

export default store;
