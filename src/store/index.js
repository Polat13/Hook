import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice';
import themeReducer from './slices/themeSlice';
import languageReducer from './slices/languageSlice';
import uiReducer from './slices/uiSlice';
import dataReducer from './slices/dataSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'cart', 'theme', 'language'], 
};

// Root reducer'ı persist ile sarmalama
const persistedReducer = persistReducer(persistConfig, (state, action) => ({
  auth: authReducer(state?.auth, action),
  cart: cartReducer(state?.cart, action),
  theme: themeReducer(state?.theme, action),
  language: languageReducer(state?.language, action),
  ui: uiReducer(state?.ui, action),
  data: dataReducer(state?.data, action),
}));

// Store configuration
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
