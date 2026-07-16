const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<title>My Web Server</title>

<style>
body{
    margin:0;
    font-family:Arial,sans-serif;
    background:#ffe4ec;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
}

.card{
    background:white;
    padding:40px;
    border-radius:20px;
    box-shadow:0 0 20px rgba(255,105,180,0.3);
    text-align:center;
}

h1{
    color:#ff4f8b;
}

p{
    color:#555;
    font-size:20px;
}
</style>

</head>

<body>

<div class="card">
<h1>🌸 สวัสดีค่ะ 🌸</h1>

<p>นี่คือ Web Server ของ</p>

<p><strong>นางสาว หนึ่งฤทัย ทองศรี</strong></p>

<p>รหัสนักศึกษา 69319010232</p>

<p>เครื่องแม่ข่ายทำงานปกติบนระบบ Railway แล้วค่ะ 💗</p>

</div>

</body>
</html>
`);
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
