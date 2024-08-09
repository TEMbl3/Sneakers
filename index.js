let express = require(`express`)
let app = express()
let cors = require(`cors`)
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser')
const axios = require('axios')
const crypto = require('crypto')

app.listen(port, function () {
  console.log(`Сервер запущен: http://localhost:${port}`)
})

app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use(bodyParser.json())

let mongoose = require('mongoose')
mongoose.connect('mongodb+srv://artemkh23:1BDyzuzO7W5M1iF1@cluster.iuczapd.mongodb.net/LuxSneakers')

let sneakerSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  imageUrl: String
})

let Sneaker = mongoose.model('sneaker', sneakerSchema)

app.get(`/Sneakers`, async function (req, res) {
  let data = await Sneaker.find()
  res.send(data)
})

const SHOP_ID = '415999'
const SECRET_KEY = 'test_07i1UsEEoJn_g_SIh-vYmiJDKGZ1Oksy3dMrNfXU0cw'
const RETURN_URL = 'http://localhost:5173/payment-success'

app.post('/create-payment', async (req, res) => {
  const { amount } = req.body

  const idempotenceKey = crypto.randomBytes(16).toString('hex')

  try {
    const response = await axios.post(
      'https://api.yookassa.ru/v3/payments',
      {
        amount: {
          value: amount,
          currency: 'RUB'
        },
        capture: true,
        confirmation: {
          type: 'redirect',
          return_url: RETURN_URL
        },
        description: 'Оплата товаров'
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Idempotence-Key': idempotenceKey
        },
        auth: {
          username: SHOP_ID,
          password: SECRET_KEY
        }
      }
    )

    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.post('/webhook', (req, res) => {
  console.log('Webhook received');
  console.log('Headers:', req.headers); // Выводим заголовки запроса
  console.log('Body:', req.body); // Выводим тело запроса

  const event = req.body.event;

  if (event === 'payment.succeeded') {
    console.log('Payment succeeded event received');
    // Здесь можно добавить логику для обработки успешного платежа
  } else {
    console.log('Other event received:', event);
  }

  res.status(200).send('OK');
});
