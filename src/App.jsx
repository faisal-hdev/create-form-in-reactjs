function App() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-purple-500">
      {/* Form section start */}
      <form className="w-2/3 lg:w-2/5  bg-white rounded-xl p-8 shadow-lg">
        <h2 className="text-4xl mb-6 text-sky-500 text-center">Sign up form</h2>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="py-2 px-1 border-2 border-gray-400 w-full rounded text-lg mb-3"
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="py-2 px-1 border-2 border-gray-400 w-full rounded text-lg mb-3"
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="py-2 px-1 border-2 border-gray-400 w-full rounded text-lg mb-3"
        />
        <div className="flex justify-end mt-3">
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 duration-100 text-white text-xl px-5 py-2 rounded"
          >
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
