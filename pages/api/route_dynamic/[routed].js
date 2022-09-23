// export default function hello() {}

const handler = (req, res) => {
  console.log(req.query);
  res.json({ ok: true, method: "GET" });
};

export default handler;
