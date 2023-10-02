import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("form submit");
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    //  create User
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      console.log(result.user)
    })
    .catch(error => {
      console.error(error)
    })
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
          />
          <br />
          <input
            className="mb-4 w-3/4 px-3 py-1 border-dotted border-4 border-green-500"
            type="password"
            name="password"
            id=""
            placeholder="password"
          />
          <br />
          <input
            className="mb-4 w-3/4 btn btn-secondary"
            type="submit"
            value="Register"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
