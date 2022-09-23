// export default function hello() {}

const handler = (req, res) => {
  const [mId, mPw, mProfile] = req.query;

  console.log(typeof mId);
  console.log(typeof mPw);
  console.log(typeof mProfile);

  res.json({ ok: true, method: "GET" });
};

export default handler;
