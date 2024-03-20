import { configureStore } from '@reduxjs/toolkit';

import newsSlice from './newsSlice';

const store = configureStore({
	reducer: {
		newsData: newsSlice,
	},
});

export default store;
