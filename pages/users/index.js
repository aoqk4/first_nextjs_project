import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

export default function users() {
  const [users, setUsers] = useState([]);

  let URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios.get(URL).then((res) => {
      setUsers(res.data);
    });
  }, []);

  console.log(users);

  return (
    <Layout>
      <div>사용자 목록페이지 @@@@@@@@@@@@@@</div>

      {0 === users.length ? <div>로딩중...</div> : null}

      {users?.map((user, idx) => {
        return (
          <div className="border mg-5 p-3" key={user.id}>
            <div className="text-2xl font-bold">{user.username}</div>
            <div>{user.name}</div>
            <div className="text-gray-500">{user.email}</div>
            <a href={`https://${user.website}`}>{user.website}</a>
          </div>
        );
      })}
    </Layout>
  );
}
