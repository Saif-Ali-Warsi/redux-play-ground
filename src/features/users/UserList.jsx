import Button from "../../app/components/Button";
import { useGetUsersQuery } from "../../services/userApi";

function UserList() {
  const { data, isLoading, isError, error } = useGetUsersQuery();

  if (isLoading) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <p>{error}</p>
      </>
    );
  }

  const handleGreet = () => {
    console.log("hi");
  };

  return (
    <>
      {" "}
      <Button btnTitle={"This is Button"} onClick={handleGreet} />
      {data?.users?.map((item) => (
        <p key={item.id}>{item.firstName}</p>
      ))}
    </>
  );
}

export default UserList;
