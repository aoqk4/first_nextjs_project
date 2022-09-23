// export default function hello() {}

const handler = (req, res) => {
  const {
    query: { api_key, lang, region, id },
  } = req;

  console.log(api_key);
  console.log(lang);
  console.log(region);
  console.log(id);

  res.json({ ok: true, method: "GET" });
};

export default handler;
