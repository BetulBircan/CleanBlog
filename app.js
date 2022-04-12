//Express i sayfaya ekleme
const express = require('express');
//mongoose u kullanmak için app.js dosyasına ekliyoruz.
const mongoose = require('mongoose');
//ejs template şablonunu kullanmak için ejs modülünü app.js sayfasına dahil etme
const ejs = require('ejs');
//put ve delete metodunu post metodu gibi işlev görmesi için app.js dosyasında çağırma
const methodOverride = require('method-override'); 
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
app.use(methodOverride('_method')); //burada Put yani güncelleme işlemini Post olarak simüle etme

//Routers
app.get('/',async  (req, res) => {
 //veritabanına gönderilen postları  index.ejs dosyasında göstermek istiyoruz.
 const posts = await Post.find({});
  //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/' isteğine karşılık index.ejs dosyasını render ederiz.
  res.render('index', {
    posts
  });
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
  
  await Post.create(req.body) 
  res.redirect('/');
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

//Post güncellemesi işlemi burada yapılır
//get request ile edit.ejs sayfasına yani post bilgileri güncelleme sayfasına yönlendirme
app.get('/post/edit/:id', async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/photos/edit/:id isteğine karşılık edit.ejs dosyasını render ederiz.
  res.render('edit', {
    post,
  });
});

//put requesti ile post verilerini güncelleme
app.put('/post/:id', async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  post.title = req.body.title;
  post.detail = req.body.detail;
  post.save();

  res.redirect(`/post/${req.params.id}`)
});

//Port numarası tanımlama ve o port üzerinden sunucuyu başlatma
const port = 3300;
app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı porrta başlatıldı`);
});
