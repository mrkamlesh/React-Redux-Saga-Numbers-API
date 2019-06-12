import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from "../actions/actionTypes";

export function* watcherSaga() {
  yield takeLatest(API_CALL_REQUEST, workerSaga);
}

function* workerSaga(action) {
  try {
    if (action.number === "") {
      throw new Error("You have to provide a number or type random.");
    }
    if (
      !/^[+-]?[0-9]+[.]?[0-9]*$/.test(action.number) &&
      action.number !== "random"
    ) {
      throw new Error("You have to provide a number or type random.");
    }
    if (
      action.number !== "random" &&
      !Number.isInteger(Number(action.number))
    ) {
      throw new Error("The number must be a whole number.");
    }
    if (action.number !== "random" && !Number(action.number) < 0) {
      throw new Error("The number must be positive.");
    }
    const response = yield call(() => fetchData(action.number));
    const message = response.data;
    if (message.includes("Bad Gateway")) {
      throw new Error("Bad response from the server. Try again.");
    }
    yield put({ type: API_CALL_SUCCESS, message });
  } catch (error) {
    yield put({ type: API_CALL_FAILURE, error });
  }
}

function fetchData(number) {
  const url = `https://numbers-api-proxy.dci-fbw121.now.sh/?number=${number}`;
  return axios.get(url);
}
