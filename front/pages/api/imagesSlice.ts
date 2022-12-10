import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../services/unsplash_api";


export const getFirstImages = createAsyncThunk(
	'images/firstTime',
	async (state, _api) => {
		try {
			let res = await api.get('/photos')
			_api.fulfillWithValue(res.data)
			return res.data
		} catch (error: any) {
			_api.rejectWithValue(error.message)
			return error.message
		}
	}
)

export const getImagesByPage = createAsyncThunk(
	'images/pageNumber',
	async ({ page_number }: { page_number: number }, _api) => {
		try {
			let res = await api.get(`/photos?page=${page_number}`)
			_api.fulfillWithValue(res.data)
			return res.data
		} catch (error: any) {
			_api.rejectWithValue(error.message)
			return error.message
		}
	}
)

export const imagesSlice = createSlice({
	name: 'images',
	initialState: {
		images: []
	},
	reducers: {
		load: (state, action) => {
			state.images = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getFirstImages.fulfilled, (state, action) => {
			state.images = action.payload
		})
		
		builder.addCase(getFirstImages.rejected, (state, action) => {
			console.log('faild to load images ')
		})
	}
})

export default imagesSlice.reducer