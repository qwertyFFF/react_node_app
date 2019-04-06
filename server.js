const express = require('express');
const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {
      id: 1,
      firstName: 'Alessandro',
      lastName: 'Freitas'
    },
    {
      id: 2,
      firstName: 'Luana',
      lastName: 'Cardozo'
    },
    {
      id: 3,
      firstName: 'Miguel',
      lastName: 'Cardozo'
    }
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
