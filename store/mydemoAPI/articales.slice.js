import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_articale_list = createAsyncThunk(
  "articales/api_v1_articale_list",
  async payload => {
    const response = await apiService.api_v1_articale_list(payload)
    return response.data
  }
)
export const api_v1_articale_create = createAsyncThunk(
  "articales/api_v1_articale_create",
  async payload => {
    const response = await apiService.api_v1_articale_create(payload)
    return response.data
  }
)
export const api_v1_articale_retrieve = createAsyncThunk(
  "articales/api_v1_articale_retrieve",
  async payload => {
    const response = await apiService.api_v1_articale_retrieve(payload)
    return response.data
  }
)
export const api_v1_articale_update = createAsyncThunk(
  "articales/api_v1_articale_update",
  async payload => {
    const response = await apiService.api_v1_articale_update(payload)
    return response.data
  }
)
export const api_v1_articale_partial_update = createAsyncThunk(
  "articales/api_v1_articale_partial_update",
  async payload => {
    const response = await apiService.api_v1_articale_partial_update(payload)
    return response.data
  }
)
export const api_v1_articale_destroy = createAsyncThunk(
  "articales/api_v1_articale_destroy",
  async payload => {
    const response = await apiService.api_v1_articale_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const articalesSlice = createSlice({
  name: "articales",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_articale_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_articale_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_articale_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_articale_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_articale_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_articale_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_articale_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_articale_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_articale_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_articale_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_articale_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_articale_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_articale_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_articale_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_articale_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_articale_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_articale_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_articale_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_articale_list,
  api_v1_articale_create,
  api_v1_articale_retrieve,
  api_v1_articale_update,
  api_v1_articale_partial_update,
  api_v1_articale_destroy,
  slice: articalesSlice
}
