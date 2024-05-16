import "./UserList.css";
import User from "./User";
import { Link } from "react-router-dom";

function UserList(props) {
  const { users, type } = props;

  return (
    <div className="user-container">
      {users.map((user) => (
        <Link to={`/users/${user.id}`} key={user.id} className="user-list">
          <User user={user} type={type} />
        </Link>
      ))}
    </div>
  );
}
export default UserList;
