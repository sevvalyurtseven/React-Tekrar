import UserList from "../components/user/UserList";

function Users(props) {
  const { users } = props;
  return (
    <section className="user-area">
      <UserList users={users} />
    </section>
  );
}
export default Users;
