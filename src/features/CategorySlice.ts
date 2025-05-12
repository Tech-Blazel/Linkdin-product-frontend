import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Category {
  id: string;
  name: string;
  status: "Active" | "Inactive";
}

interface CategoryState {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  categories: [{name:"Client", id:"1", status:"Active"}],
  loading: false,
  error: null,
};

export const fetchCategories = createAsyncThunk<Category[]>("categories/fetch", async () => {
  const res = await axios.get<Category[]>("/api/categories");
  return res.data;
});

export const addCategory = createAsyncThunk<Category, string>(
  "categories/add",
  async (name: string) => {
    const res = await axios.post<Category>("/api/categories", { name });
    return res.data;
  }
);

export const deleteCategory = createAsyncThunk<string, string>(
  "categories/delete",
  async (id: string) => {
    await axios.delete(`/api/categories/${id}`);
    return id;
  }
);

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    editCategoryName: (state, action: PayloadAction<{ id: string; name: string }>) => {
      const category = state.categories.find((c) => c.id === action.payload.id);
      if (category) category.name = action.payload.name;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter((cat) => cat.id !== action.payload);
      });
  },
});

export const { editCategoryName } = categorySlice.actions;
export default categorySlice.reducer;