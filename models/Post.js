//mongoose u kullanmak için Post.js dosyasına çağırıyoruz.
const mongoose = require('mongoose');
//Schema Oluşturmak
const Schema = mongoose.Schema;

//Create Schema-Kullanacağımı post bilgilerine ait şablon oluşturma
const PostSchema = new Schema({
  title: String,
  detail: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

//Create Model-Veritabanamozdaki collection ve dökümanımızı oluşturur.
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
