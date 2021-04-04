// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  // req.method === GET, POST, ect
  // req.body // body like express
  const envKey = process.env.testKey;
  res.status(200).json({ name: envKey });
};
