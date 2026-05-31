import sqlite3 from "sqlite3";

export class DbHelper {
  static async getUser(username: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const db = new sqlite3.Database("./database/test.db");

      db.get(
        `
          SELECT *
          FROM users
          WHERE username = ?
          `,
        [username],
        (err, row) => {
          db.close();

          if (err) {
            reject(err);
          }

          resolve(row);
        },
      );
    });
  }
}
