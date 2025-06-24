import {connectionConfig} from "@/app/api/config";
import mysql from "mysql2/promise";

interface Row {
  id: number;
  club: string
}
type Count = { 'COUNT(*)': number };
export async function GET() {
  const SQL = `SELECT id, club from users Limit 10 OFFSET 0`;

  const connection = await mysql.createConnection(connectionConfig)

  const queryResult = await connection.execute(SQL);
  const [rows] = queryResult;

  const countResult = await connection.execute('SELECT COUNT(club) FROM users');
  const [countRows] = countResult;
  const [q] = countRows as [Count];

  return new Response(JSON.stringify({
    total: Object.values(q)[0],
    count: (rows as Row[]).length,
    clubs: rows,
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}