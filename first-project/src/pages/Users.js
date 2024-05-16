import { useEffect, useState } from "react";
import UserList from "../components/user/UserList";
import Search from "../components/user/Search";
import axios from "axios";

function Users(props) {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  function handleChange(event) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?per_page=12")
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.error(error.response.message);
      })
      .finally(() => {
        console.log("İstek sonlandırıldı");
      });
  }, []); //didMount

  useEffect(() => {
    const searchResult = users.filter((user) =>
      user.first_name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(searchResult);
  }, [search, users]);

  return (
    <section className="user-area">
      <Search search={search} handleChange={handleChange} />
      <UserList users={filteredUsers} />
    </section>
  );
}
export default Users;
