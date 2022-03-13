//Express i sayfaya ekleme
const express = require('express');
//mongoose u kullanmak için app.js dosyasına ekliyoruz.
const mongoose = require('mongoose');
//ejs tempalte şablonunu kullanmak için ejs modülünü app.js sayfasına dahil etme
const ejs = require('ejs');
//app değişkenine express fonksiyonunu atama
const app = express();

//mongoose ile veritabanına bağlanma
mongoose.connect('mongodb://localhost/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/*EJS modülü template dosyaları görebilmek için varsayılan olarak views
 klasörünün içerisindeki .ejs uzantılı dosyalara bakar. Bu ne denle temp dosyamızın 
 ismini views olarak değiştiriyoruz. Videws klasörü içerisindeki tüm .html uzantılarını 
 .ejs olarak değiştiriyoruz.  */

//Template Engine
app.set('view engine', 'ejs');

//Middleware
app.use(express.static('public')); //index.html,css gibi statik dosyaları ekleme
app.use(express.urlencoded({extended:true})) //url deki datayı okumamızı sağlar
app.use(express.json()) //url deki datayı json formatına dönüştürmemizi sağlar.

//Routers
app.get('/', (req, res) => {
  //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/' isteğine karşılık index.ejs dosyasını render ederiz.
  res.render('index');
});

app.get('/about', (req, res) => {
  //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/about' isteğine karşılık about.ejs dosyasını render ederiz.
  res.render('about');
});

app.get('/addpost', (req, res) => {
  //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/addpost' isteğine karşılık add_post.ejs dosyasını render ederiz.
  res.render('add_post');
});

app.post('/post',  (req, res) => {
  //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/post' isteğine karşılık post.ejs dosyasını render ederiz.
   console.log(req.body) 
  res.redirect('/');
});

//Port numarası tanımlama ve o port üzerinden sunucuyu başlatma
const port = 3300;
app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı porrta başlatıldı`);
});
