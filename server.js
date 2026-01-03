const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'Belajar-Web-Artikel')));

app.get('/', (req, res) => {
    res.sendFile(__dirname, '..', 'Belajar-Web-Artikel', 'index.html');
});

app.get('/api/info', (req, res) => {
    res.json({
        pesan: "Halo ini dari node.js",
        waktu: new Date().toISOString()
    });
});
app.listen(3000, () => {
    console.log('Server jalan di https://localhost:300)')
});