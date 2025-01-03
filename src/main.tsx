import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./store/root.saga.ts";
import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./features/todo-list/todo-list-slice.ts";
import { usersReducer } from "./features/users-list/users-list-slice.ts";

const rootReducer = combineReducers({
  todo: todosReducer,
  users: usersReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(sagaMiddleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSaga);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
