# Clean Blog Projesi
## Projeden İstenilenler

Clean Blog projesini farklı ödevlere ayırarak yapmaya çalışacağız. Bu ödevimizde yapılması gerekenler:

- CleanBlog proje klasörünü oluşturalım.

- Package.json dosyasını oluşturalım.

- Prettier ayarlarını yapalım.(İsteğe bağlı)

- Express ve Nodemon modüllerini indirelim.

- get request içerisinde const blog = { id: 1, title: "Blog title", description: "Blog description" }, içeriğini gönderelim.

### Proje Açıklaması
- İlk başta kwndi bilgisayarıma istenildiği şekilde CleanBlog s oluşturdum. Daha sonra da `npm init` ile de package.json dosyasını oluşturdum.

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

