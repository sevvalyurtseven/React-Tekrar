import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import axios from "axios";

const User = () => {
  const { id } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        setUser(response.data.data);
      })
      .catch((error) => {
        console.error(error.response.message);
      })
      .finally(() => {
        console.log("İstek sonlandırıldı");
      });
  }, []);

  return (
    <Card className="shadow-sm my-2" style={{ width: "18rem" }}>
      <img src={user.avatar} alt={user.first_name} />
      <CardBody>
        <CardTitle tag={"h5"}>{user.first_name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag={"h6"}>
          {user.email}
        </CardSubtitle>
      </CardBody>
    </Card>
  );
};
export default User;
