import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const setUser = createAsyncThunk(
	'user/setUser',
	async ({ user } : { user: any }, _api) => {
		try {
			_api.fulfillWithValue(user)
			return user
		} catch (error: any) {
			_api.rejectWithValue(error.message)
			return error.message
		}
	}
)

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: null
	},
	reducers: {
		login: (state, action) => {
			state.user = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(setUser.fulfilled, (state, action) => {
			console.log("payload: ", action.payload);
			state.user = action.meta.arg.user
			console.log("the: ", state.user);
		})
	},	
})

export default userSlice.reducer