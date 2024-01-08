import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../main";
import { USERS_ACTION } from "../../store/users.reducers";

export const UsersList = () => {
  const { users, isError, isLoading } = useSelector(
    (state: RootState) => state.users
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: USERS_ACTION.SET_GET_USERS_IS_LOADING,
    });
  }, []);

  return (
    <div>
      <h2>Список пользователей</h2>
      {isError && <p>Не удалось загрузить</p>}
      {isLoading && <p>Идет загрузка...</p>}
      {!isError && !isLoading && (
        <ol>
          {users &&
            users.map((user) => {
              return (
                <li>
                  <p>{user["name"]}</p>
                </li>
              );
            })}
        </ol>
      )}
    </div>
  );
};
