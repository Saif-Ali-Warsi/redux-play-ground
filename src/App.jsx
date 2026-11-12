import { useGetUsersQuery } from "./services/usersApi";

function App() {
  const { data, isLoading, isError, error } = useGetUsersQuery();

  return (
    <>
      <h3>✨ Redux Play Ground</h3>
      <hr />

      {isLoading && (<p>Loading...</p>) }

      {}

      {data?.users.map((item) => (
        <p key={item.id}>{item.firstName}</p>
      ))}
    </>
  );
}

export default App;
