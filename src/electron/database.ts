import path from 'path';
import Database from 'better-sqlite3';
import isDev from 'electron-is-dev';

export default function loadDatabase(app: Electron.App, file: string) {
  const dbFile = isDev
    ? path.join(app.getAppPath(), `src/db/${file}`)
    : path.join(process.resourcesPath, file);

  const db = new Database(`${dbFile}.db`);

  /** Create memberships table*/
  db.prepare(
    `
    CREATE TABLE IF NOT EXISTS memberships (
        record INTEGER UNIQUE, 
        account	TEXT NOT NULL,
        phone	TEXT NOT NULL,
        first	TEXT NOT NULL,
        last TEXT NOT NULL,
        since	TEXT NOT NULL,
        type TEXT NOT NULL,
        fee	NUMERIC NOT NULL,
        gallon INTEGER NOT NULL,
        previous INTEGER,
        buy INTEGER NOT NULL,
        remain INTEGER NOT NULL,
        date TEXT NOT NULL,
        time NUMERIC NOT NULL,
        note TEXT,
    PRIMARY KEY (record AUTOINCREMENT)
  );
`
  ).run();

  /** Create users table  */
  db.prepare(
    `
    CREATE TABLE IF NOT EXISTS users ( 
        username TEXT UNIQUE, 
        password TEXT
    );
`
  ).run();

  const users = db.prepare(`SELECT * FROM users`).all();

  /** Insert default password if no auth account is created */
  if (!users.length) {
    db.prepare(
      `INSERT INTO users (username, password) VALUES ('pw', '1234');`
    ).run();
  }

  return db;
}
