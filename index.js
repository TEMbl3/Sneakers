let express = require(`express`);
let app = express();
let cors = require(`cors`);
let port = 3000;

app.listen(port, function() {
  console.log(`Сервер запущен: http://localhost:${port}`);
});

app.use(cors());
app.use(express.json())
app.use(express.static('public'));

let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/LuxSneakers')

let sneakerSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  imageUrl: String
});

let Sneaker = mongoose.model('sneaker', sneakerSchema)

app.get(`/Sneakers`, async function(req, res){
  let data = await Sneaker.find()
  res.send(data)
})