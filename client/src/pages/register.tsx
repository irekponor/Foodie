const Register = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center tracking-[5px]">
        SIGN UP
      </h1>
      <form action="" method="POST">
        <div className="pl-20 pr-10 grid md:grid-cols-2 gap-4"></div>
        <div className="pl-20 pr-10">
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2 font-semibold">
              Full Name
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-500"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2 font-semibold">
              Email ID
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-500"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2 font-semibold">
              Password
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-500"
              type="password"
              name="password"
            />
          </div>
          <button
            className="bg-color2 text-gray-200 mt-4 w-full p-4 rounded-xl font-semibold text-[18px]"
            type="submit"
          >
            Register
          </button>

          <div className="text-center">
            <p className="mt-4">
              Already registered?
              <a className="text-color1" href="/login">
                Login
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
