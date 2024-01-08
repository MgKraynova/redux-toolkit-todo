import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchUsersStarted } from "./users-list-slice";

export const UsersList = () => {
  const { users, isError, isLoading } = useAppSelector((state) => state.users);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsersStarted());
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
                <li key={user.id}>
                  <p>{user["name"]}</p>
                </li>
              );
            })}
        </ol>
      )}
    </div>
  );
};
