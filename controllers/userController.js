import pool from '../databaseConnection.js'

export const getAllUsers = (req, res) => {
  const queryString = "SELECT * FROM users";
  try {
    pool.query(queryString, (error, results) => {
      res.status(200).json({
        message: "GET route",
        users: results.rows
      });
    });
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

export const addUser = (req, res) => {
  console.log(req.body)
  const { name, email, username, dob } = req.body;
  const queryString = "INSERT INTO users (name, email, username, dob) VALUES ($1, $2, $3, $4)";
  try {
    pool.query(queryString, [name, email, username, dob], (error, results) => {
      res.status(201).json({
        message: "POST route",
        users: `user ${name} was created`
      });

  })
  } catch (err) {
    res.status(500).json({ message: err });
  }
};