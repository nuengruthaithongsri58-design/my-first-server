const http = require("http");
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const port = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  try {
    const client = await pool.connect();

    const result = await client.query("SELECT * FROM students");

    client.release();

    let html = `
      <h1>ฐานข้อมูลนักศึกษา (ทดสอบการเชื่อมต่อ)</h1>
      <table border="1" cellpadding="10">
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

    html += "</table>";

    res.end(html);
  } catch (err) {
    console.error(err);

    res.statusCode = 500;
    res.end(`
      <h1>เกิดข้อผิดพลาด!</h1>
      <p>${err.message}</p>
    `);
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
