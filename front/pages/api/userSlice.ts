import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: []
	},
	reducers: {
		login: (state, action) => {
			state.user = action.payload
		},
	}
})

export default userSlice.reducer