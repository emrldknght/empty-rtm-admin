// export const dynamic = 'force-static'

import mysql from 'mysql2/promise';
import {connectionConfig} from "@/app/api/config";

interface Row {
  id: number;
}

type Count = { 'COUNT(*)': number };
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

  // const TEST_SQL = 'SELECT * from fighters where id = 1';

  const queryResult = await connection.execute(SQL);
  const [rows] = queryResult;

  const countResult = await connection.execute('SELECT COUNT(*) FROM fighters');
  const [countRows] = countResult;
  const [q] = countRows as [Count];

  return new Response(JSON.stringify({
    total: Object.values(q)[0],
    count: (rows as Row[]).length,
    fighters: rows,
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });

}