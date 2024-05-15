const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/login', (req, res) => {
  const htmlForm = `
    <style>
      /* Basic styling for the form */
      .login-form {
        max-width: 400px;
        margin: auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #f9f9f9;
      }
      .login-form label {
        display: block;
        margin-bottom: 10px;
      }
      .login-form input {
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
      .login-form button {
        padding: 10px 20px;
        border: none;
        background-color: #28a745;
        color: white;
        border-radius: 5px;
        cursor: pointer;
      }
      .login-form button:hover {
        background-color: #218838;
      }
    </style>

    <form class="login-form" action="/login" method="POST">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>

      <button type="submit">Login</button>
      <button type="button" onclick="document.forms[0].reset();">Reset</button>
    </form>
  `;

  res.send(htmlForm);
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Define correct username and password
  const correctUsername = 'vishal';
  const correctPadsfssword = '2005';

  if (username === correctUsername && password === correctPassword) {
    res.send(`Welcome, ${username}!`);
  } else {
    // Redirect to the invalid login page if login fails
    res.redirect('/invalid-login');
  }
});

// Create the "Invalid Login" page
app.get('/invalid-login', (req, res) => {
  const invalidLogin = `
    <style>
      .invalid-login {
        max-width: 400px;
        margin: auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #f9f9f9;
      }
      .invalid-login button {
        padding: 10px 20px;
        border: none;
        background-color: #dc3545;
        color: white;
        border-radius: 5px;
        cursor: pointer;
      }
      .invalid-login button:hover {
        background-color: #c82333;
      }
    </style>

    <div class="invalid-login">
      <p>Invalid username or password.</p>
      <button onclick="window.location.href='/reset-password'">Reset Password</button>
    </div>
  `;

  res.send(invalidLogin);
});

// Create the "Reset Password" page
app.get('/reset-password', (req, res) => {
  const resetForm = `
    <style>
      .reset-form {
        max-width: 400px;
        margin: auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #f9f9f9;
      }
      .reset-form label {
        display: block;
        margin-bottom: 10px;
      }
      .reset-form input {
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
      }
      .reset-form button {
        padding: 10px 20px;
        border-radius: 5px;
        border: none;
        background-color: #28a745;
        color: white;
      }
    </style>

    <form class="reset-form" action="/submit-reset-password" method="POST">
      <label for="new-password">New Password:</label>
      <input type="password" id="new-password" name="new-password" required>

      <button type="submit">Reset Password</button>
    </form>
  `;

  res.send(resetForm);
});

app.post('/submit-reset-password', (req, res) => {
  const { 'new-password': newPassword } = req.body;

  // In a real application, you would save this to a database
  res.send(`Your password has been reset to: ${newPassword}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
