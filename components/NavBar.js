import Link from "next/link";
import { useRouter } from "next/router";
import { cls } from "../libs/utils";
export default function NavBar() {
  const router = useRouter();

  console.log(router.pathname);
  return (
    <nav>
      <ul className="flex bg-slate-400 justify-around">
        <li>
          <Link href="/">
            <a>메인</a>
          </Link>
        </li>
        <li>
          <Link href="/home">
            <a className={cls(router.pathname === "/home" ? "bg-red-500" : "")}>
              홈
            </a>
          </Link>
        </li>
        <li>
          <Link href="/counter">
            <a
              className={cls(
                router.pathname === "/counter" ? "bg-red-500" : ""
              )}
            >
              카운터
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a
              className={cls(router.pathname === "/about" ? "bg-red-500" : "")}
            >
              개발자 소개
            </a>
          </Link>
        </li>
        <li>
          <Link href="/todo">
            <a className={cls(router.pathname === "/todo" ? "bg-red-500" : "")}>
              todo
            </a>
          </Link>
        </li>
        <li>
          <Link href="/users">
            <a
              className={cls(router.pathname === "/users" ? "bg-red-500" : "")}
            >
              사용자목록
            </a>
          </Link>
        </li>
        <li>
          <Link href="/users/ssr">
            <a
              className={cls(
                router.pathname === "/users/ssr" ? "bg-red-500" : ""
              )}
            >
              사용자목록(SSR)
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
