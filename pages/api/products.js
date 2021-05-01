export default (req, res) => {
  const dummyProducts = [
    {
      id: '1',
      title: 'first product',
      description: 'description 1',
    },
    {
      id: '2',
      title: 'second product',
      description: 'description 2',
    },
  ];

  res.status(200).json({ list: dummyProducts });
};
