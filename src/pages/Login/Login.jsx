import "./Login.css";

const Login = () => {
  return (
    <>
      <form action="" method="post">
        <label htmlFor="username">
          Username
          <input type="text" name="username" id="username" />
        </label>
        <br />
        <label htmlFor="password">
          Password
          <input type="password" name="password" id="password" />
        </label>
        <input type="button" value="Submit" />
      </form>
    </>
  );
};

export default Login;
