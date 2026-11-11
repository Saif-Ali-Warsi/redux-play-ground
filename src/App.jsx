import { useGetUsersQuery } from "./features/users/usersApi";

function App() {
  const { data, isLoading, isError, error } = useGetUsersQuery();

  if (isLoading) return <p>Loading users...</p>;

  if (isError) return <p>{error?.message || "Failed to fetch users"}</p>;

  return (
    <>
      <h3>✨ Redux Play Ground</h3>
      <hr />

      {data?.users?.map((item) => (
        <p key={item.id}>{item.firstName}</p>
      ))}
    </>
  );
}

export default App;
