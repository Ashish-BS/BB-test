import config from '@/constants';
import { convertToBase64 } from '@/utils/common/encrypt-decrypt';
import { createSlice } from '@reduxjs/toolkit';

const initialState = { darkMode: true };

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.darkMode = action.payload;
			// Set the `data-theme` attribute of the `documentElement`
			localStorage.setItem(
				convertToBase64(config.LOCAL_STORAGE_VARIABLES.DARK_MODE) as string,
				convertToBase64(state.darkMode.toString()) as string
			);
			if (state.darkMode) {
				document.documentElement.setAttribute('data-theme', 'dark');
			} else {
				document.documentElement.setAttribute('data-theme', 'light');
			}
		}
	}
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
