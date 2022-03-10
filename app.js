//Express i sayfaya ekleme
const express = require('express');
//statik dosyaları response olarak döndürmek için path modülünü app.js sayfasına dahil etme
const path = require('path'); 

//app değişkenşne express fonksiyonunu atama
const app =express();

//Middleware
app.use(express.static('public'))

//Get metodu ile request yollama ve res.send ile de blog ile bilgileri response olarak dönme
app.get('/', (req, res) => {
    //template klasöründeki index.html dosyasını resolve olarak döndürme
    res.sendFile(path.resolve(__dirname, 'template/index.html'))
})

//Port numarası tanımlama ve o port üzerinden sunucuyu başlatma
const port = 3300
app.listen(port, () => {
    console.log(`Sunucu ${port} numaralı porrta başlatıldı`)
})