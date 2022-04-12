//Post ile ilgili gelen isteklere karşı yönlendirmeler burada yapılır.

const Post = require('../models/Post'); //model dosyası içerisinde photo modelini çağırma

//Bütün Postlar burada listelenir.
exports.getAllPosts = async  (req, res) => {
    //veritabanına gönderilen postları  index.ejs dosyasında göstermek istiyoruz.
    const posts = await Post.find({});
     //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/' isteğine karşılık index.ejs dosyasını render ederiz.
     res.render('index', {
       posts
     });
   }

//Tekil post sayfası burada oluşturulur.unique değer olan id özelliğini yakalayıp o id ye ait post için post.ejs dosyasını render etme
exports.getPost = async (req, res) => {
    //postun id sine göre listeleme
    // console.log(req.params.id)
    const post = await Post.findById(req.params.id)
     //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/post' isteğine karşılık post.ejs dosyasını render ederiz.
     //Burada post değişkenine gelen postun özelliklerini post.ejs dosyasına eklemiş oluyoruz.
    res.render('post', {
      post
    })
  }

//Yeni bir post ekleme işlemi burada yapılır
exports.createPost = async (req, res) => {
  
    await Post.create(req.body) 
    res.redirect('/');
  }

//Post Güncelleme işlemi burada yapılır.
exports.updatePost = async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    post.title = req.body.title;
    post.detail = req.body.detail;
    post.save();
  
    res.redirect(`/post/${req.params.id}`)
  }

//Post silme işlemi burada yapılır
exports.deletePost = async (req, res) => {
    await Post.findByIdAndRemove(req.params.id);
    res.redirect('/')
  }
