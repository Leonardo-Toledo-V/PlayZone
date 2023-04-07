import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';

 function LoginForm() {
    const router = useRouter();
  
    const handleLogin = (e)=>{
      e.preventDefault();
      Swal.fire({
        icon: 'success',
        title: 'Login Success',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        router.push("/dashboard");
    });
    }
  return (
    <>
      <div className="flex min-h-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="logo.png"
              alt="Your Company"
            />
          </div>
          <form onSubmit={handleLogin} className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <input
                  id="user"
                  type="text"
                  required
                  autocomplete="off"
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="User"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  autocomplete="off"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-orange-400 px-3 py-2 text-sm font-semibold text-white hover:bg-orange-500 transition duration-300 "
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-orange-500 group-hover:text-orange-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default LoginForm;