import "./UserList.css";
import User from "./User";

function UserList(props) {
  const { users } = props;
  return (
    <div className="user-container">
      {users.map((user) => (
        <User user={user} />
      ))}
    </div>
  );
}
export default UserList;
