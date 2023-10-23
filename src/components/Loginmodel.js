import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    // Create a data object with the user's email and password
    const data = {
      email,
      password,
    };

    try {
      const response = await fetch(
        "https://lastlast.onrender.com/api/users/signIn/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        // Assuming the response includes a token, you can save it to a secure location, such as localStorage.
        localStorage.setItem("token", responseData.token);
        // Redirect to a new page or perform any other action for a successful login.
        console.log("Login successful");
      } else {
        // Handle login failure, e.g., display an error message to the user.
        console.error("Login failed");
      }
    } catch (error) {
      // Handle network errors or other exceptions.
      console.error("An error occurred:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
