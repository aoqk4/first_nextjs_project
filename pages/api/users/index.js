// export default function hello() {}

const handler = (req, res) => {
  switch (req.method) {
    case "GET":
      res.json({ ok: true, method: "GET" });
  }
};

export default handler;
