import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productsData from '../../data/products.json';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'data/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      return productsData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    clearProducts: (state) => {
      state.products = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Pending durumu
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Başarı durumu
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
        state.error = null;
      })
      // Hata durumu
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearProducts } = dataSlice.actions;
export default dataSlice.reducer;
