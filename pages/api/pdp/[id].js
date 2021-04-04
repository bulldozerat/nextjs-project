export default (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json({ pdpId: req.query.id });
  }

  // res.status(200).json({ name: 'John Doe' });
};
