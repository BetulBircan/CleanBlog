//Express i sayfaya ekleme
const express = require('express');
//mongoose u kullanmak için app.js dosyasına ekliyoruz.
const mongoose = require('mongoose');
//ejs template şablonunu kullanmak için ejs modülünü app.js sayfasına dahil etme
const ejs = require('ejs');
//Post modelini app.js dosyasında çağırma
const Post = require('./models/Post');

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
app.get('/',async  (req, res) => {
 //veritabanına gönderilen postları  index.ejs dosyasında göstermek istiyoruz.
 const posts = await Post.find({})
  //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/' isteğine karşılık index.ejs dosyasını render ederiz.
  res.render('index', {
    posts
  });
});

//unique değer olan id özelliğini yakalayıp o id ye ait post için post.ejs dosyasını render etme
app.get('/post/:id', async (req, res) => {
  //postun id sine göre listeleme
  // console.log(req.params.id)
  const post = await Post.findById(req.params.id)
   //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/post' isteğine karşılık post.ejs dosyasını render ederiz.
   //Burada post değişkenine gelen postun özelliklerini post.ejs dosyasına eklemiş oluyoruz.
  res.render('post', {
    post
  })
});

app.get('/about', (req, res) => {
  //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/about' isteğine karşılık about.ejs dosyasını render ederiz.
  res.render('about');
});

app.get('/addpost', (req, res) => {
  //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/addpost' isteğine karşılık add_post.ejs dosyasını render ederiz.
  res.render('add_post');
});

app.post('/post', async (req, res) => {
  //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/' isteğine karşılık index.ejs dosyasını render ederiz.
  await Post.create(req.body) 
  res.redirect('/');
});

//Port numarası tanımlama ve o port üzerinden sunucuyu başlatma
const port = 3300;
app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı porrta başlatıldı`);
});
