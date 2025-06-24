// export const dynamic = 'force-static'

import mysql from 'mysql2/promise';

const connectionConfig = {
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
}

export async function GET() {

  const SQL = `SELECT a.*,
    b.id AS fid, b.img AS banner, b.club AS club
    , GROUP_CONCAT(t2.id separator '|') as rti
    , GROUP_CONCAT(t2.class separator '|') as rtc
    , GROUP_CONCAT(t2.type separator '|') as rtt
    FROM fighters AS a, users AS b
    JOIN things as t2
    WHERE a.master = b.id AND t2.dressed = a.id
    GROUP BY a.id
    LIMIT 10 OFFSET 0 `
  ;

  // todo - switch to pool
  const connection = await mysql.createConnection(connectionConfig)

  const TEST_SQL = 'SELECT * from fighters where id = 1';

  const [rows] = await connection.execute(SQL);

  const [[q]] = await connection.execute('SELECT COUNT(*) FROM fighters');
  console.log(q)

  return new Response(JSON.stringify({
    total: Object.values(q)[0],
    count: rows.length,
    fighters: rows,
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });

}