import "./UserList.css";
import User from "./User";
import { Link } from "react-router-dom";

function UserList(props) {
  const { users } = props;
  return (
    <div className="user-container">
      {users.map((user) => (
        <Link to={`/user/${user.id}`}>
          <User user={user} key={user.id} />
        </Link>
      ))}
    </div>
  );
}
export default UserList;
