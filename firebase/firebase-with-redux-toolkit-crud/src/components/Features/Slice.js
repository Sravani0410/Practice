import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getData = createAsyncThunk("post/getPost", async () => {
    try {
      const response = await fetch('http://localhost:3004/posts');
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error fetching data:", error);
      throw error;
    }
  });
  export const getDataParticularId = createAsyncThunk("post/getPost", async (id) => {
    try {
      const response = await fetch(`http://localhost:3004/posts/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error fetching data:", error);
      throw error;
    }
  });

export const deleteData = createAsyncThunk("post/deletePost", async (id) => {
  try {
    await fetch(`http://localhost:3004/posts/${id}`, {
      method: 'DELETE'
    });
    return id;
  } catch (error) {
    console.log("Error deleting data:", error);
    throw error;
  }
});


export const createData = createAsyncThunk(
  "post/createPost",
  async ({ values }, { dispatch }) => {
    try {
      const response = await fetch('http://localhost:3004/posts', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({
          title: values.title,
          author: values.author
        })
      });
      const data = await response.json();
      dispatch(getData()); // Dispatch the getData action after creating the post
      console.log('Created', data);
      return data;
    } catch (error) {
      console.log('Error creating data:', error);
      throw error;
    }
  }
);

export const updateData = createAsyncThunk(
  "post/updatePost",
  async ({ id, title, author }) => {
    try {
      const response = await fetch(`http://localhost:3004/posts/${id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({
          title,
          author
        })
      });
      const data = await response.json();
      console.log('Updated', data);
      return data;
    } catch (error) {
      console.log('Error updating data:', error);
      throw error;
    }
  }
);


    const postSlice = createSlice({
        name: "post",
        initialState: {
          data: [],
          loading: false,
          error: null,
        },
        reducers: {
          // Other reducers...
        },
        extraReducers: (builder) => {
          builder
            .addCase(getData.pending, (state) => {
              state.loading = true;
            })
            .addCase(getData.fulfilled, (state, action) => {
              state.loading = false;
              state.data = action.payload;
            })
            .addCase(getData.rejected, (state, action) => {
              state.loading = false;
              state.error = action.error.message;
            })
            .addCase(deleteData.pending, (state) => {
              state.loading = true;
            })
            .addCase(deleteData.fulfilled, (state, action) => {
              state.loading = false;
              state.data = state.data.filter((item) => item.id !== action.payload);
            })
            .addCase(deleteData.rejected, (state, action) => {
              state.loading = false;
              state.error = action.error.message;
            })
            .addCase(createData.pending, (state) => {
              state.loading = true;
            })
            .addCase(createData.fulfilled, (state, action) => {
              state.loading = false;
              state.data.push(action.payload);
            })
            .addCase(createData.rejected, (state, action) => {
              state.loading = false;
              state.error = action.error.message;
            })
            .addCase(updateData.pending, (state) => {
              state.loading = true;
            })
            .addCase(updateData.fulfilled, (state, action) => {
              state.loading = false;
              const { id, title, author } = action.payload;
              const updatedIndex = state.data.findIndex((item) => item.id === id);
              if (updatedIndex !== -1) {
                state.data[updatedIndex].title = title;
                state.data[updatedIndex].author = author;
              }
            })
            .addCase(updateData.rejected, (state, action) => {
              state.loading = false;
              state.error = action.error.message;
            });
        },
           
            
          // Add other cases for createData, updateData...
      
      });
      
      export default postSlice.reducer;