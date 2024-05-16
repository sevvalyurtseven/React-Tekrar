import { useEffect, useState } from "react";
import UserList from "../components/user/UserList";
import Search from "../components/user/Search";

function Users(props) {
  const { users } = props;
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  function handleChange(event) {
    setSearch(event.target.value);
  }

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
