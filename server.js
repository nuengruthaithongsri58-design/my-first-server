// 1. เรียกใช้งาน Module 'http'
const http = require('http');

// 2. กำหนด Port
const port = process.env.PORT || 3000;

// 3. สร้าง Server
const server = http.createServer((req, res) => {

    // 3.1 สถานะการตอบกลับ
    res.statusCode = 200;

    // 3.2 กำหนดชนิดข้อมูล
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    // 3.3 ส่งหน้าเว็บ
    res.end(`
    <!DOCTYPE html>
    <html lang="th">
    <head>
        <meta charset="UTF-8">
        <title>My Web Server</title>
        <style>
            body{
                margin:0;
                padding:0;
                font-family: "TH Sarabun New", Tahoma, sans-serif;
                background: linear-gradient(135deg,#ffd6e7,#ffeef5);
                display:flex;
                justify-content:center;
                align-items:center;
                height:100vh;
            }

            .card{
                background:#fff;
                padding:40px;
                border-radius:20px;
                box-shadow:0 8px 20px rgba(255,105,180,0.25);
                text-align:center;
                width:500px;
            }

            h1{
                color:#e75480;
                margin-bottom:15px;
            }

            p{
                color:#666;
                font-size:22px;
                margin:10px 0;
            }

            .footer{
                margin-top:20px;
                color:#ff69b4;
                font-size:18px;
            }

            .heart{
                font-size:40px;
            }
        </style>
    </head>

    <body>

        <div class="card">
            <div class="heart">💗</div>

            <h1>สวัสดีค่ะ</h1>

            <p>
                นี่คือ Web Server ของ
                <br><strong>นางสาว หนึ่งฤทัย ทองศรี</strong>
            </p>

            <p>
                รหัสนักศึกษา <strong>69319010232</strong>
            </p>

            <p>เครื่องแม่ข่ายทำงานปกติบนระบบ Railway แล้วค่ะ 🎉</p>

            <div class="footer">
                Pastel Pink Theme 🌸
            </div>
        </div>

    </body>
    </html>
    `);
});

// 4. เริ่มทำงาน
server.listen(port, () => {
    console.log(`Server is running! เครื่องแม่ข่ายเปิดทำงานแล้วที่ช่องทาง: ${port}`);
});
 });
