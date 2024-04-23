const Login = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white py-4 px-4 sm:px-6 lg:px-8">
        {/* middle component */}
        <div className="max-w-xl w-full   px-20 py-10 pb-20" style={{borderWidth: "25px 2px 2px 2px", borderColor: "#2563EB", borderStyle: "solid"}}>
        <div className="mb-20">
        <h2 className="text-center text-3xl mb-2 text-gray-600 font-semibold">Login</h2>
        <span className="inline-block text-center text-gray-500 ">Lorem ipsum dolor sit amet consectetur. Risus commodo
faucibus pellentesque habitan. Tincidunt</span>
        </div>
          <form className="mt-8 space-y-2" action="#" method="POST">
           
            <div className="rounded-md shadow-sm space-y-4">
              <div className="gap-y">
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none placeholder:text-zinc-400 relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email "
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none placeholder:text-zinc-400  relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
  
            <div className="flex items-end justify-end pb-8">
              <div className="text-sm">
                <a href="#" className="font-medium text-[#6a7075] hover:text-[#565b5f]">
                  Forgot Password
                </a>
              </div>
            </div>
  
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#2563EB] hover:bg-[#259cebe3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;
  