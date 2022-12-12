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

export const getTopics = createAsyncThunk(
	'images/getTopics',
	async (state, _api) => {
		try {
			let res = await api.get(`/topics`)
			_api.fulfillWithValue(res.data)
			return res.data
		} catch (error: any) {
			_api.rejectWithValue(error.message)
			return error.message
		}
	}
)

export const getTopicImages = createAsyncThunk(
	'images/getTopicImages',
	async ({ pageNumber, orderBy,  topicId } : { pageNumber: number, orderBy:string, topicId: string }, _api) => {
		try {
			let res = await api.get(`/topics/${topicId}/photos?page=${pageNumber}&per_page=30&order_by=${orderBy}`)
			_api.fulfillWithValue(res.data)
			return res.data
		} catch (error: any) {
			_api.rejectWithValue(error.message)
			return error.message
		}
	}
)

export const updateSelectedTopic = createAsyncThunk(
	'images/updateSelectedTopic',
	async ({ topic } : { topic: string }, _api) => {
		try {
			_api.fulfillWithValue(topic)
			return topic
		} catch (error: any) {
			_api.rejectWithValue(error.message)
			return error.message
		}
	}
)

export const loadMore = createAsyncThunk(
	'images/loadMore',
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

export const updatePageNumber = createAsyncThunk(
	'images/updatePageNumber',
	async ({ pageNumber }: { pageNumber: number }, _api) => {
		try {
			_api.fulfillWithValue(pageNumber)
		} catch (error: any) {
			_api.rejectWithValue(error.message)
			return error.message
		}
	}
)

export const likeImage = createAsyncThunk(
	'images/likeImage',
	async ({ imageId } : { imageId: string }, _api) => {
		try {
			let res = await api.post(`/photos/${imageId}/like`)
			_api.fulfillWithValue(res.data)
			return res.data
		} catch (error: any) {
			_api.rejectWithValue(error.message)
			return error.message
		}
	}
)

export const unlikeImage = createAsyncThunk(
	'images/unlikeImage',
	async ({ imageId } : { imageId: string }, _api) => {
		try {
			let res = await api.delete(`/photos/${imageId}/like`)
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
		images: [],
		order_by: "latest",
		topics: [],
		topic_selected: "All",
		page_number: 1
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
			console.log('faild to load images')
		})

		builder.addCase(getTopics.fulfilled, (state, action) => {
			state.topics = action.payload
		})
		
		builder.addCase(getTopics.rejected, (state, action) => {
			console.log('faild to load topics')
		})

		builder.addCase(updateSelectedTopic.fulfilled, (state, action) => {
			state.topic_selected = action.meta.arg.topic
			state.page_number = 1
		})

		builder.addCase(getTopicImages.fulfilled, (state, action) => {
			state.images = action.payload
		})
		
		builder.addCase(getTopicImages.rejected, (state, action) => {
			console.log('faild to load topic images')
		})

		builder.addCase(loadMore.fulfilled, (state, action) => {
			state.images = state.images.concat(action.payload)
		})
		
		builder.addCase(loadMore.rejected, (state, action) => {
			console.log('faild to load more images')
		})
		
		builder.addCase(updateOrderBy.fulfilled, (state, action) => {
			state.order_by = action.meta.arg.orderBy
			state.page_number = 1
		})
		
		builder.addCase(updateOrderBy.rejected, (state, action) => {
			console.log('faild to update display order')
		})

		builder.addCase(updatePageNumber.fulfilled, (state, action) => {
			state.page_number = action.meta.arg.pageNumber
		})
		
		builder.addCase(updatePageNumber.rejected, (state, action) => {
			console.log('faild to update page number')
		})

		builder.addCase(likeImage.fulfilled, (state, action) => {
			console.log("like");
		})
		
		builder.addCase(likeImage.rejected, (state, action) => {
			console.log('faild to like image')
		})

		builder.addCase(unlikeImage.fulfilled, (state, action) => {
		})
		
		builder.addCase(unlikeImage.rejected, (state, action) => {
			console.log('faild to unlike image')
		})
	}
})

export default imagesSlice.reducer