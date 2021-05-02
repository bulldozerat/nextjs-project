export default (req, res) => {
  // By default it works for all (GET, POST, PUT ect)
  if (req.method === 'GET') {
    res.status(200).json({ pdpId: req.query.id });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};
