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

export const loginStatus = createAsyncThunk(
	'user/loginStatus',
	async ({ status } : { status: string }, _api) => {
		try {
			_api.fulfillWithValue(status)
			return status
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
		builder.addCase(loginStatus.fulfilled, (state, action) => {
			console.log(action.payload);
		})
	},	
})

export default userSlice.reducer