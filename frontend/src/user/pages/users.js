import React, { useEffect, useState } from 'react';
import UsersList from '../components/userList/usersList'
import ErrorModal from '../../shared/components/uiElements/errorModal/errorModal';
import LoadingSpinner from '../../shared/components/uiElements/loadingSpinner/loadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
const Users = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          'http://localhost:8080/api/users'
        );

        setLoadedUsers(responseData.users);
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}
    </React.Fragment>
  );
};

export default Users;

