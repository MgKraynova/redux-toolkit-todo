import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { TTodoState, todosReducer } from "./store/todos.reducer.ts";
import { TUserState, usersReducer } from "./store/users.reducers.ts";
import { composeWithDevTools } from '@redux-devtools/extension';

export type RootState = {
  todo: TTodoState,
  users: TUserState
}

const rootReducer = combineReducers({
  todo: todosReducer,
  users: usersReducer,
});

const store = createStore(rootReducer, {}, composeWithDevTools());

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
