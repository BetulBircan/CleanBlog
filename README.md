# Clean Blog Projesi
## Projeden İstenilenler 1.Kısım

Clean Blog projesini farklı ödevlere ayırarak yapmaya çalışacağız. Bu ödevimizde yapılması gerekenler:

- CleanBlog proje klasörünü oluşturalım.
- Package.json dosyasını oluşturalım.
- Prettier ayarlarını yapalım.(İsteğe bağlı)
- Express ve Nodemon modüllerini indirelim.
- get request içerisinde const blog = { id: 1, title: "Blog title", description: "Blog description" }, içeriğini gönderelim.

### Proje Açıklaması
- İlk başta kendi bilgisayarıma istenildiği şekilde CleanBlog klasörü oluşturdum. Daha sonra da `npm init` ile de package.json dosyasını oluşturdum.
- Kodumuzun daha düzenli olmasını sağlamak için Prettier eklentisini Extention kısmından yükledim ve `npm install prettier -D --save-exact` komutuyla proje dosyama dahil ettim.
Daha sonra da CTRL+Shift+p yardımıyla Create Configuration File diyerek .prettirerc dosyasını oluşturdum, ardından da şu düzenlemeleri ekledim.

```
{
  "tabWidth": 2,
  "useTabs": false,
  "semi":true,
  "singleQuote": true,
  "trailingComma": "es5"
}

```
- Kendi Sunucumuzu yazmak için `npm i express --save` komutu ile express i, bir değişiklik yapmak istediğimizde kaydetmek için sunucuyu sürekli kapatıp yeniden başlatmamak için yani her değişiklik yaptığımızda otomatik olarak sunucunun yeniden başlatılması için de `npm install --save-dev nodemon` komutu ile de nodemon u yükledim.
- En sonunda da express i app.js dosyasına require ile ekleyerek get request içerisinde const blog = { id: 1, title: "Blog title", description: "Blog description" }, içeriğini göndermek için gerekli kodları oluşturdum.

![cleanblogappjs](https://user-images.githubusercontent.com/86554799/157501686-04c5e81f-33e7-42e7-8ea9-cebb31f453ea.jpg)

**Sonucu**

![cleanblog1](https://user-images.githubusercontent.com/86554799/157501747-d9925fcf-ed6b-447c-95e0-1dec86832c62.jpg)

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Projeden İstenilenler 2.Kısım
- Public klasörü oluşturup statik dosyalarımızı içerisine yerleştirelim.
- İlgili middleware fonksiyonunu yazarak public klasörümüzü uygulamamıza kaydedelim.
- EJS modülünü indirelim.
- Uygulamamızda EJS modülünü kullanacağımızı belirtelim.
- Views klasörü oluşturalım ve tüm .html dosyalarımız views klasörü içerisinde .ejs dosyalarına çevirelim.
- Partials klasör yapısını oluşturalım.
- İlgili yönlendirmeleri ve _navigation.ejs klasöründeki link düzenlemelerini yapalım.

## Proje Açıklaması
- İlk başta proje klasörüne public klasörünü oluşturdum ve projede kullanılacak olan stil dosyaları gibi static dosyalarını bu klasörün içine attım.

![cleanblogpublic](https://user-images.githubusercontent.com/86554799/157748842-00801976-a66d-48a8-9e61-0a5ea04d031b.jpg)

- Public klasörünü uygulamaya kaydetmek için ilgili middleware fonksiyonunu yazdım.

```
//MIDDLEWARES
app.use(express.static('public'));  //index.html,css gibi statik dosyaları ekleme
```
- Sayfamızın dinamik bir şekilde çalışmasını yani içeriğinde değişiklikler yapmak istediğimizde template engine -şablon motoru- kullanılırız.Template engine bize  değişen içeriğin html kodu içerisinde dosya uzantısı değiştirilerek kullanmamızı sağlar. Template engineler sayesinde bir static dosyaları ve değieşn dinamik içeriği birlikte kullanabiliriz. Farklı template engineler kullanılabilir, fakat bu çalışmaada EJS template engine yapısını kullanacağım.
- EJS, Embedded Java Script kelimelerinden oluşur ve bize saf Javascript kodları kullanmamıza imkan verirken aynı zamanda çalışmamıza ait değişen içerikleri de kullanabiliriz.
- Bunun için de `npm i ejs` komutuyla ejs modülünü indirdim.Somrasında da 
```
//Template Engine
app.set('view engine', 'ejs');
```
fonksiyon ile uygulamada ejs modülünü kullanacağımı belirttim.

- EJS modülü template dosyaları görebilmek için varsayılan olarak views klasörünün içerisindeki .ejs uzantılı dosyalara bakar. Bu sebeple de proje dosyasına views klasörünü oluşturdum ve tüm .html dosyalarını views klasörü içerisinde .ejs dosyalarına çevirdim.

![cleanblogviews](https://user-images.githubusercontent.com/86554799/157752377-c72f5065-d4cf-43c6-9b0c-98454b827720.jpg)

- Sonrasında views klasörü içerisine partials klasörü oluşturdum. Bu klasörün içerisine tüm ejs dosyalarında ortak olarak yazılan header kısımını _header.ejs, nav kısmını  _navigation.ejs ve footer kısmını _footer.ejs olacak şekilde düzenledim.

![cleanblogpartials](https://user-images.githubusercontent.com/86554799/157754125-3fdac24f-33a2-4eaa-b302-fce3f3a87057.jpg)

- En sonunda da index,about ve app.data sayfalarına get metodu ile app.js dosyasında ilgili yönlendirmeleri yaptım ve  _navigation.ejs klasöründeki link düzenlemelerini yaptım.

**App.js Dosyası**

![cleanblogappjs1](https://user-images.githubusercontent.com/86554799/157755866-040d3090-c071-41e2-bcb9-9dc4252d4b0b.jpg)

![cleanblogappjs2](https://user-images.githubusercontent.com/86554799/157755899-53277b5e-0cae-4043-9156-4dc9179f4e3e.jpg)

**_navigation.ejs**

![cleanblognavigation](https://user-images.githubusercontent.com/86554799/157756146-e2b887be-6626-4a60-9b03-93c1eaf8a760.jpg)

**Sonucu**

**Home**

![cleanbloghome1](https://user-images.githubusercontent.com/86554799/157756266-b121dcfc-890d-48c4-b7d9-e1995827d301.jpg)

![cleanbloghome2](https://user-images.githubusercontent.com/86554799/157756381-5f780e2f-fa41-4cfd-b0f0-4e6d477fd93d.jpg)

**About**

![cleanblogabout1](https://user-images.githubusercontent.com/86554799/157756445-ccd94539-2608-40a6-8a4d-0bec90bc96fb.jpg)

![cleanblogabout2](https://user-images.githubusercontent.com/86554799/157756471-75c60824-eba5-4c29-a6ab-2f7e0325b24d.jpg)

**Add Post**

![cleanblogaddpost1](https://user-images.githubusercontent.com/86554799/158072065-53ce45bb-9cd1-4065-bdb5-50eebf73c573.jpg)

![cleanblogaddpost2](https://user-images.githubusercontent.com/86554799/158074288-6b46de1c-13d1-45f7-9fc7-7fc5709826f9.jpg)

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Projeden İstenilenler 3. Kısım
- Cleanblog-test-db adında bir veri tabanı için mongoose ile gerekli bağlantı bilgilerini yazalım.
- "Add New Post" sayfamızdan göndericeğimiz veriler req.body ile yakalayalım, gerekli middleware fonksiyonarını kullanalım.
- title:String, detail:String, dateCreated:Date(default now) özelliklerine sahip Post modelini oluşturalım.
- Veri tabanımızda 3 adet pos dökümanı oluşturalım.
- Oluşturduğumuz post dökümanlarını Blog sitemizin anasayfasında gösterelim.

## Proje Açıklaması
Uygulamamızın sayfalarına ulaşabiliyoruz. Ancak hala uygulama verilerimizi tamamı statik bir şekilde template dosyalarının içerisinde bulunuyor. Bir uygulama oluşturmanın temel mantığı nedir? Uygulamamızdaki verileri gerektiğinde silmek, güncellemek, yeni veri yüklemek ve bu değişimleri görmektir.

Bunun için verilerimizi uygulamamızın dışında başka bir yazılımlarda bulundurmak en kolay yöntemdir. Bu yazılımlara veritabanı denir. Ben MongoDB veri tabanından yararlanacağım. MongoDB bir NoSQL veri tabanıdır. Node.js de ennsık kullanılan veri tabanlarından biridir çünkü yapısı json dökümanına benzer.

Biz Node.js http çekirdek modülü sayesinde kendi web sunucumuzu yazabiliriz, ancak bizim açımızdan yönlendirmeleri (routes) daha kolay yapabilmek ve başka avantajları sayesinde express modülünü kullandık. Aynı şekilde biz veritabanımızda oluşturmak istediğimiz dökümanları mongoDB ile oluşturabiliyoruz.

Bir nesne veri modelleme (ODM) kütüphanesi olarak mongoose, Schema yapısı sayesinde türetilen nesneleri mongoDB içerisindeki dökümanlara dönüştürür. Burada belirtilen Schema, projemizde kullanacağımız verilere ait bir şablon yapısıdır.

- İlk istenileni yapmak için önce mongoose modelini indirmek gerekir.

`npm i mongoose`

- Sonrasında mongoose modülünü ve app.js dosyasında çağırdım ve veritabanına bağlanması için gerekli kodları yazdım.

```
//mongoose u kullanmak için app.js dosyasına ekliyoruz.
const mongoose = require('mongoose');

//mongoose ile veritabanına bağlanma-mongoose.connect('veritabanı://localbağlantı(bağlanacağın yer)/veritabanıadı') 
mongoose.connect('mongodb://localhost/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```
- İkinci istenileni yerine getirmek için "Add New Post" sayfasında bulunan formda methodu POST olacak ve action="/post" olacak şekilde düzenledim ve de sonrasında bu sayfadan gönderilen verileri req.body ile yakalayıp, gerekli middleware fonksiyonlarını yazdım. Sonra da alınan bilgileri göstermelik olarak console a yazdırdım.

```
//Middleware
app.use(express.urlencoded({extended:true})) //url deki datayı okumamızı sağlar
app.use(express.json()) //url deki datayı json formatına dönüştürmemizi sağlar.

app.post('/post',  (req, res) => {
  //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/' isteğine karşılık index.ejs dosyasını render ederiz.
   console.log(req.body) 
  res.redirect('/');
});
```

![cleanblogpost1](https://user-images.githubusercontent.com/86554799/158078634-16e93e90-874d-45a2-952f-7bdec3f65cea.jpg

![cleanblogpost2](https://user-images.githubusercontent.com/86554799/158078646-bb7149db-58f7-4504-8495-f93e6735fcf4.jpg)

- Üçüncü istenileni gerçekleştirmek için önce proje dosyasına models adlı klasör oluşturdum ve onun içerisine Post.js adlı dosya oluşturdum ve modelle ilgili istenilen bilgiyi oraya kodlar ile yazdım.

![cleanblogPost js](https://user-images.githubusercontent.com/86554799/158081980-4a3eaddb-7f94-4d44-84d7-cc21ab05a266.jpg)

- En sonunda V-veri tabanına 3 adet post dökümanı oluşturmak için ve bu  post dökümanlarını Blog sitesinde anasayfada göstermek için add.js dosyasında gerekli yönlendirmeleri yaptım ve index.ejs dosyasında da gerekli işlemleri yaptım.

**App.js**

```
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

```

**index.ejs**

```
<!-- Main Content -->
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        
        <% for(let i = 0; i < posts.length; i++) { %>

        <div class="post-preview">
          <a href="post.html">
            <h2 class="post-title">
             <%= posts[i].title %>
            </h2>
            
          </a>
          <p class="post-meta"><%= posts[i].detail %></p>
        </div>
        <hr>
        <% } %>
```
**Sonucu**
![cleanblog](https://user-images.githubusercontent.com/86554799/158083438-3c9be738-6181-479a-856d-acc872618534.gif)

![cleanblogmongodb](https://user-images.githubusercontent.com/86554799/158083478-bd8952df-ad90-4b21-bc99-78716755df83.jpg)





