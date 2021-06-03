import { all, call } from "redux-saga/effects";

import ordersSagas from "../Redux/Products/orders.saga";

export default function* rootSaga() {
    yield all([
        call(ordersSagas),
    ])
}