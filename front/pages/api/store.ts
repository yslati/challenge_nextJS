import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import imagesSlice from "./imagesSlice";

const store = configureStore({
	reducer: {
		user: userSlice,
		images: imagesSlice
	}
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch