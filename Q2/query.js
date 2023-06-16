import { DB } from "./db.js";

export const retrieveData = () => {
    DB.connect((err, client, done) => {
      if (err) {
        console.error('Error connecting to the database:', err);
        return;
      }
      console.log('Connected to the database!');
  
      // Perform the join operation
      const query = `
        SELECT users.*, orders.order_number, orders.order_date
        FROM users
        INNER JOIN orders ON users.order_id = orders.id
      `;
  
      // Execute the query
      client.query(query, (err, result) => {
        done(); // Release the client back to the connection pool
  
        if (err) {
          console.error('Error executing the query:', err);
          return;
        }
  
        // Log the combined data
        console.log('Combined data:', result.rows);
  
        // Close the database connection
        client.end((err) => {
          if (err) {
            console.error('Error closing the database connection:', err);
            return;
          }
          console.log('Database connection closed.');
        });
      });
    });
  };
  
  