// Auth selectors
export const selectUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

// Cart selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) => state.cart.items.length;

// Theme selectors
export const selectIsDark = (state) => state.theme.isDark;

// Language selectors
export const selectLanguage = (state) => state.language.lang;

// UI selectors
export const selectWindowSize = (state) => state.ui.windowSize;

// Data selectors
export const selectProducts = (state) => state.data.products;
export const selectDataLoading = (state) => state.data.loading;
export const selectDataError = (state) => state.data.error;
