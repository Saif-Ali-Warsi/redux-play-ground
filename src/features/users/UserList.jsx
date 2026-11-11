import { useGetUsersQuery } from "./usersApi";

function UserList() {
  const { data, isLoading, isError, error } = useGetUsersQuery();

  if (isLoading) {
    return (
      <>
        <p>Loading</p>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <p>{error?.message}</p>
      </>
    );
  }

  return (
    <>
      {data?.users?.map((item) => (
        <p key={item.id}>{item.firstName}</p>
      ))}
    </>
  );
}

export default UserList;
