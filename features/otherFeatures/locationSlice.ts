// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// interface Location {
//   name?: string;
//   image?: string;
//   propertyCount?: string;
//   showOverlay?: boolean;
//   description?: string;
// }

// interface LocationState {
//   locations: Location[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: LocationState = {
//   locations: [],
//   loading: false,
//   error: null,
// };

// export const fetchLocations = createAsyncThunk(
//   "locations/fetchLocations",
//   async () => {
//     const response = await fetch("https://picsum.photos/images");
//     if (!response.ok) throw new Error("Failed to fetch locations");
//     return response.json();
//   }
// );

// const locationSlice = createSlice({
//   name: "locations",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchLocations.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchLocations.fulfilled, (state, action) => {
//         state.loading = false;
//         state.locations = action.payload;
//       })
//       .addCase(fetchLocations.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || "Something went wrong";
//       });
//   },
// });

// export default locationSlice.reducer;
