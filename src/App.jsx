import { useGetProductsQuery } from "./services/productsApi";

function App() {
  const { data, isLoading, isError, error } = useGetProductsQuery();

  return (
    <>
      <h3>✨ Redux Play Ground</h3>
      <hr />

      {isLoading && <p>Loading...</p>}

      {isError && <p>{error}</p>}

      {data?.products?.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </>
  );
}

export default App;
