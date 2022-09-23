const mId = "ksw";
const mPw = "1234";

export default function handler(req, res) {
  const { id, pw } = JSON.parse(req.body);
  if ("POST" !== req.method) {
    return res.status(405).json({ ok: false, msg: "지원하지 않는 메소드" });
  }

  if (!id) {
    return res.json({ ok: false, msg: "아이디를 입력하세요" });
  }

  if (!pw) {
    return res.json({ ok: false, msg: "비밀번호를 입력하세요." });
  }

  //   console.log(id);
  //   console.log(pw);

  if (id === mId && pw === mPw) {
    res.json({ ok: true, msg: "로그인 완료" });
  } else {
    res.json({ ok: false, msg: "아이디나 비밀번호를 확인하세요." });
  }
}
