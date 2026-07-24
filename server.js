const http = require("http");
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const port = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
  });

  try {
    const client = await pool.connect();

    const result = await client.query("SELECT * FROM students");

    client.release();

    let html = `
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<title>ฐานข้อมูลนักศึกษา</title>

<style>
body{
    margin:0;
    font-family: 'Segoe UI',sans-serif;
    background:linear-gradient(135deg,#ffd6ea,#fff0f7);
}

.container{
    width:85%;
    max-width:900px;
    margin:40px auto;
    background:#ffffffee;
    border-radius:25px;
    padding:30px;
    box-shadow:0 10px 25px rgba(255,105,180,.25);
    text-align:center;
}

h1{
    color:#ff4f93;
    margin-bottom:5px;
}

.subtitle{
    color:#777;
    margin-bottom:25px;
}

.kitty{
    font-size:45px;
    margin-bottom:10px;
}

table{
    width:100%;
    border-collapse:collapse;
    overflow:hidden;
    border-radius:15px;
}

th{
    background:#ff8fc2;
    color:white;
    padding:15px;
}

td{
    padding:12px;
    border-bottom:1px solid #ffd6ea;
}

tr:nth-child(even){
    background:#fff5fa;
}

tr:hover{
    background:#ffe1ef;
}

.footer{
    margin-top:25px;
    color:#ff5c9a;
    font-size:18px;
}
</style>

</head>

<body>

<div class="container">

<div class="kitty">
🐱🎀🩷🌸🐱
</div>

<h1>ฐานข้อมูลนักศึกษา</h1>

<p class="subtitle">
Welcome to My First Server 💕
</p>

<table>

<tr>
<th>รหัสนักศึกษา</th>
<th>ชื่อ-นามสกุล</th>
</tr>
`;

    result.rows.forEach((row) => {
      html += `
<tr>
<td>${row.student_id}</td>
<td>${row.student_name}</td>
</tr>
`;
    });

    html += `
</table>

<div class="footer">
🎀 Made with Love by หนึ่งฤทัย ทองศรี 🩷
</div>

</div>

</body>
</html>
`;

    res.end(html);
  } catch (err) {
    console.error(err);

    res.statusCode = 500;
    res.end(`
    <h1>❌ เกิดข้อผิดพลาด</h1>
    <p>${err.message}</p>
    `);
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
