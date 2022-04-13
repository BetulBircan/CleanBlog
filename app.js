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
//postController dosyasını app.js dosyasında çağırma
const postController = require('./controllers/postController')
//pageController dosyasını app.js dosyasında çağırma
const pageController = require('./controllers/pageController')

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
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
); //burada delete yani silme işlemi için post olarak simüle etme ve get isteği yapma

//Routers
app.get('/',postController.getAllPosts); //Bütün postları göstermek için
app.get('/post/:id', postController.getPost ); //tek bir postu göstermek için
app.post('/post', postController.createPost); //yeni bir post eklemek için
app.put('/post/:id', postController.updatePost); //put requesti ile post verilerini güncelleme
app.delete('/post/:id', postController.deletePost); //delete requesti ile fotoğrafı silme

app.get('/about', pageController.getAboutPage); //about sayfasına yönlendirme
app.get('/addpost', pageController.getAddPage ); //add new post saygfasına yönlendirme
app.get('/post/edit/:id', pageController.getEditPage); //get request ile edit.ejs sayfasına yani post bilgileri güncelleme sayfasına yönlendirme

//Port numarası tanımlama ve o port üzerinden sunucuyu başlatma
const port = 3300;
app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı porrta başlatıldı`);
});
