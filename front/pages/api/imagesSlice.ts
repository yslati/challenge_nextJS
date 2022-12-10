import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../services/unsplash_api";


export const getImages = createAsyncThunk(
	'images/getImages',
	async ({ pageNumber, orderBy } : { pageNumber: number, orderBy:string }, _api) => {
		try {
			let res = await api.get(`/photos?page=${pageNumber}&per_page=30&order_by=${orderBy}`)
			_api.fulfillWithValue(res.data)
			return res.data
		} catch (error: any) {
			_api.rejectWithValue(error.message)
			return error.message
		}
	}
)

export const updateOrderBy = createAsyncThunk(
	'images/updateOrderBy',
	async ({ orderBy }: { orderBy: string }, _api) => {
		try {
			_api.fulfillWithValue(orderBy)
		} catch (error: any) {
			_api.rejectWithValue(error.message)
			return error.message
		}
	}
)

export const imagesSlice = createSlice({
	name: 'images',
	initialState: {
		images: [],
		order_by: "latest"
	},
	reducers: {
		load: (state, action) => {
			state.images = action.payload
		},

	},
	extraReducers: (builder) => {
		builder.addCase(getImages.fulfilled, (state, action) => {
			state.images = action.payload
		})
		
		builder.addCase(getImages.rejected, (state, action) => {
			console.log('faild to load images ')
		})
		
		builder.addCase(updateOrderBy.fulfilled, (state, action) => {
			state.order_by = action.meta.arg.orderBy
		})
		
		builder.addCase(updateOrderBy.rejected, (state, action) => {
			console.log('faild to update display order')
		})
	}
})

export default imagesSlice.reducer