// import { SAVE_ORDER_HISTORY_START, 
//     GET_USER_ORDER_HISTORY_START, SET_USER_ORDER_HISTORY } from "./type";
// import { takeLatest, put, all, call } from "redux-saga/effects";
// import { handleSaveOrder } from "./orders.helpers";
// import app from "firebase/app";


// const auth = app.auth();

// export function* saveOrder({ payload }) {
//     try { 
//         const timeStamps = new Date().toDateString();
//         yield handleSaveOrder({
//             ...payload,
//             orderUserID: auth.currentUser.uid,
//             orderCreatedDate: timeStamps
//         });

//     } catch (err) {
//         console.log(err);
//     }
// }


// export function* onSaveOrderHistoryStart() {
//     yield takeLatest(SAVE_ORDER_HISTORY_START, saveOrder);
// }

// export default function* ordersSagas() {
//     yield all([
//         call(onSaveOrderHistoryStart),
//     ])
// }