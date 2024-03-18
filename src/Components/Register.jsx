import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isChecked) {
      return;
    }
    const userInfo = { name: name, email: email, password: password };
    console.log(userInfo);
    setIsSubmitted(true);
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-purple-500">
      {/* Form section start */}
      <form
        onSubmit={(event) => handleSubmit(event)}
        className="w-2/3 lg:w-2/5  bg-white rounded-xl p-8 shadow-lg"
      >
        <h2 className="text-4xl mb-6 text-sky-500 text-center">Sign up form</h2>
        <label>Name</label>
        <input
          required
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Enter your name"
          className="py-2 px-1 border-2 border-gray-400 w-full rounded text-lg mb-3"
        />
        <label>Email</label>
        <input
          required
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="Enter your email"
          className="py-2 px-1 border-2 border-gray-400 w-full rounded text-lg mb-3"
        />
        <label>Password</label>
        <input
          required
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="Enter your password"
          className="py-2 px-1 border-2 border-gray-400 w-full rounded text-lg mb-3"
        />
        <input
          onChange={(event) => setIsChecked(event.target.checked)}
          type="checkbox"
        />{" "}
        Do you agree with our terms and condition?
        <div className="flex justify-end mt-3">
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 duration-100 text-white text-xl px-5 py-2 rounded"
          >
            SignUp
          </button>
        </div>
      </form>

      {/* Modal content */}
      {isSubmitted && (
        <div className="fixed top-0 flex justify-center items-center h-screen w-full bg-purple-500">
          <div className="w-2/3 h-2/3 rounded bg-purple-400 text-center">
            <h2 className="text-4xl mb-6 text-white my-6">
              You have submitted form the successfully
            </h2>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
