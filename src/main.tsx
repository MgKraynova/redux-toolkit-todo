import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { todosReducer } from "./store/todos.reducer.ts";
import { usersReducer } from "./store/users.reducers.ts";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./store/root.saga.ts";
import { configureStore } from "@reduxjs/toolkit";

export type RootState = ReturnType<typeof rootReducer>;

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

sagaMiddleware.run(rootSaga);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
