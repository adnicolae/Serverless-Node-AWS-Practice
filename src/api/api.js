const bodyParser = require('body-parser');
const express = require('express')
const router = new express.Router();
const app = express();

app.use(express.json());
app.use(router);
app.use(bodyParser.json());

const items = [
  { id: 1, description: 'Finish writing lambdas', completed: false },
  { id: 2, description: 'Finish writing express', completed: true }
];

router.get('/', (req, res) => {
  res.json({
    message: 'Hello world!'
  });
});

router.get('/items', (req, res) => {
  res.json({ data: items });
});

router.get('/items/:itemId', (req, res) => {
  const { itemId } = req.params;

  res.json(items.filter(it => it.id == itemId));
})

router.post('/items', (req, res) => {
  const { id, description, completed } = req.body;

  items.push({ id, description, completed });

  res.json({ data: items });
})

module.exports = app;