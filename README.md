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

### Proje Açıklaması
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

![cleanblogaddpost1](https://user-images.githubusercontent.com/86554799/157757180-30ad4345-d287-4291-ab5a-8130ff005648.jpg)

![cleanblogaddpost2](https://user-images.githubusercontent.com/86554799/157756586-41541235-fdd6-4140-a1e9-ff1ad2746300.jpg)

