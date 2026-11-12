import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const api_url = "https://dummyjson.com";

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchProducts = async () => {
      try {
        const response = await fetch(`${api_url}/products`, { signal });

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const result = await response.json();

        setProducts(result.products);
      } catch (error) {

        
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
          return;
        }

        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <h3>✨ Redux Play Ground</h3>
      <hr />

      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}

      {products.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </>
  );
}

export default App;
