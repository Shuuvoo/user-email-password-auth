import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const [registerError, setRegigterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("form submit");
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // reset error
    setRegigterError("");
    setSuccess("");

    if (password.length < 6) {
      // setRegigterError('Password must be at least 6 characters')
      alert("Password must be 6 or more characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegigterError("Password must be at least one uppercase letter");
      return;
    }

    //  create User
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User Created Successfully");
      })
      .catch((error) => {
        console.error(error);
        setRegigterError(error.message);
      });
  };

  return (
    <div className="">
      <div className="mx-auto md:w-1/2">
        <h3 className="text-5xl text-pink-600 font-bold mb-10">
          Please Register
        </h3>

        <form onSubmit={handleRegister}>
          <input
            className="mb-4 w-3/4 px-3 py-1  border-double border-4 border-green-500"
            type="email"
            name="email"
            id=""
            placeholder="E-mail"
            required
          />
          <br />
          <input
            className="mb-4 w-3/4 px-3 py-1 border-dotted border-4 border-green-500"
            type={ showPassword ? "text" :"password"}
            name="password"
            id=""
            placeholder="password"
            required
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {
              showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
            }
          </span>
          <br />
          <input
            className="mb-4 w-3/4 btn btn-secondary"
            type="submit"
            value="Register"
          />
        </form>

        {registerError && <p className="text-red-700">{registerError}</p>}
        {success && <p className="text-green-400">{success}</p>}
      </div>
    </div>
  );
};

export default Register;
