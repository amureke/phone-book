import { Connection } from "mysql";
import { QueryError } from "mysql2";

export const seedData = (connection: Connection): void => {
  connection.query(`CREATE DATABASE phone_book_db`, (err: QueryError): void => {
    if (err) {
      console.log(`Warning: Database phone_book_db already exists.`);
    } else {
      console.log("Database created.");
    }

    connection.query(`USE phone_book_db`, (err: QueryError): void => {
      if (err) throw err;

      console.log(`Using phone_book_db database.`);

      const createTableQuery = `CREATE TABLE records (
        id INT(11) NOT NULL AUTO_INCREMENT,
        first_name VARCHAR(20) NOT NULL,
        last_name VARCHAR(20) NOT NULL,
        phone_number VARCHAR(20) NOT NULL,
        PRIMARY KEY (id)
      )`;

      connection.query(createTableQuery, (err: QueryError): void => {
        if (err) {
          console.log("Warning: Table records already exists.");
        } else {
          console.log("Table 'records' created.");

          const insertRowsQuery = `INSERT INTO records (
            first_name,
            last_name,
            phone_number
          ) VALUES ?`;

          const values = [
            ["Jon", "Doe", "857-896-1251"],
            ["Frank", "Jacob", "458-625-7412"],
            ["Joseph", "Bo", "452-786-3214"],
            ["Smith", "Kelton", "895-412-3562"],
            ["Kent", "Royce", "784-512-6325"],
          ];

          connection.query(insertRowsQuery, [values], (err, result) => {
            if (err) throw err;

            console.log(`${result.affectedRows} rows created.`);
          });
        }
      });
    });
  });
};
