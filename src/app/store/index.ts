import { configureStore } from '@reduxjs/toolkit';
import pageReducers from '../pages/pageRedusers';
import rootReducer from './rootReducer';

(module as any).hot.accept(rootReducer, () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires,@typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const newRootReducer = require(rootReducer).default;
  store.replaceReducer(newRootReducer.createReducer());
});

const middlewares: any[] = [];

const store = configureStore({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  reducer: {
    ...pageReducers,
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middlewares),
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
