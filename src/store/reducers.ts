import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

/**
 * Slices
 */
import userSlice from "@/store/slices/userSlice";
import { WebStorage } from "redux-persist/es/types";

/**
 *
 * @type {{storage, whitelist: *[], key: string}}
 */

interface persistUserConfigI {
  key: string;
  storage: WebStorage;
  whitelist: string[];
}

const persistUserConfig: persistUserConfigI = {
  key: "root",
  storage: storage,
  whitelist: [],
};

export default combineReducers({
  userReducer: persistReducer(persistUserConfig, userSlice),
});
