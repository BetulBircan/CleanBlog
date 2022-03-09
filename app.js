//Express i sayfaya ekleme
const express = require('express');

//app değişkenşne express fonksiyonunu atama
const app =express();

//Get metodu iel request yollama ve res.send ile de blog ile bilgileri response olarak dönme
app.get('/', (req, res) => {
    const blog = {
        id: 1,
        title: "Blog Title",
        description: "Blog Description"
    }
    res.send(blog)
})

//Port numarası tanımlama ve o port üzerinden sunucuyu başlatma
const port = 3300
app.listen(port, () => {
    console.log(`Sunucu ${port} numaralı porrta başlatıldı`)
})