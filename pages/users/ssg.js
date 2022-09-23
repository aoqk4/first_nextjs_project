import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

export default function users(props) {
  console.log("Compo");

  return (
    <Layout>
      <div>사용자 목록페이지 @@@@@@@@@@@@@@</div>

      {0 === props.users.length ? <div>SSR 로딩중</div> : null}

      {props.users?.map((user, idx) => {
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

export async function getStaticProps() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  console.log(res.data);
  return {
    props: {
      users: res.data,
      sunmoon: "선문대학교입니다.",
    },
  };
}
