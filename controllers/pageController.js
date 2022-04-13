//About, Add New Post ve Post güncellemesi için oluşturulan edit.ejs sayfalarına yönlendirme işlemleri burada yapılır.

const Post = require('../models/Post') //model dosyası içerisinde Post modelini çağırma

//About yani hakkımızda sayfasına yönlendirmeyle ilgili işlemler burada yapılır.
exports.getAboutPage =  (req, res) => {
    //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/about' isteğine karşılık about.ejs dosyasını render ederiz.
    res.render('about');
  }

//Add yani post ekleme sayfasına yönlendirmeyle ilgili işlemler burada yapılır.
exports.getAddPage = (req, res) => {
    //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/addpost' isteğine karşılık add_post.ejs dosyasını render ederiz.
    res.render('add_post');
  }

//Post güncellemesi için oluşturulan edit.ejs dosyasına yönledirme işlemleri burada yapılır.
exports.getEditPage = async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/photos/edit/:id isteğine karşılık edit.ejs dosyasını render ederiz.
    res.render('edit', {
      post,
    });
  }