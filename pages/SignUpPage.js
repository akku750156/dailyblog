import Head from "next/head";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { newUser, checkUser } from "../pages/api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUpPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [login, setLogin] = useState(false);
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.push("/");
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const notify = () => toast("Login Error");

  const addUser = async () => {
    const payload = {
      name: name,
      username: username,
      password: password,
    };

    await newUser(payload);
    setUsername("");
    setPassword("");
    setLogin(true);
  };

  const authenticateUser = async () => {
    const payload = {
      username: username,
      password: password,
    };
    const response = await checkUser(payload);
    if (response) {
      router.push("/");
    }
  };

  return (
    <div>
      <Head>
        <title>Daily Blog | {login ? "Login" : "SignUp"}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/blog-logo-1.png" className="text-white" />
      </Head>
      <div className="min-h-screen w-full mx-auto mt-24 md:mt-24">
        <div className="flex justify-center items-center w-full mt-32 lg:mb-12 mb-2">
          <div className=" py-4 font-semibold lg:font-bold text-6xl sm:text-7xl md:text-8xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-br from-green-700 to-blue-600">
            Hey, Welcome
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-center w-full">
          <div className="lg:w-5/12 sm:w-7/12 w-11/12  shadow-[0px_0px_100px_40px_rgba(253,255,255,0.1)] px-12 py-12 m-16 rounded-sm">
            <div className="w-full flex flex-col justify-center items-center">
              <div className="my-4">
                <div className="w-full text-yellow-300 text-2xl">
                  {login ? "Login" : "SignUp"}
                </div>
              </div>

              <hr className="border-t w-full rounded-xl border-gray-700" />
              {!login && (
                <div className="w-full sm:my-4 my-2">
                  <div className="sm:my-2 my-1">Name</div>
                  <input
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    className="w-full  px-4 py-1 rounded-md bg-gray-800 outline-none"
                  />
                </div>
              )}

              <div className="w-full sm:my-4 my-2">
                <div className="sm:my-2 my-1">Username</div>
                <input
                  type="text"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full  px-4 py-1 rounded-md bg-gray-800 outline-none"
                />
              </div>
              <div className="w-full sm:my-4 my-2">
                <div className="sm:my-2 my-1">Password</div>
                <input
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-1 rounded-md bg-gray-800 outline-none"
                />
              </div>

              <div className="w-full bg-yellow-300 p-1 my-4 text-gray-700 flex justify-center items-center rounded-md ">
                <button
                  className="font-light text-xl"
                  onClick={() => (login ? authenticateUser() : addUser())}
                >
                  {login ? "Welcome Back" : "Welcome to Community"}
                </button>
              </div>
              <div>
                {login ? (
                  <button
                    className="text-yellow-300 my-4"
                    onClick={() => setLogin(false)}
                  >
                    Create an account !
                  </button>
                ) : (
                  <button
                    className="text-yellow-300 my-4"
                    onClick={() => setLogin(true)}
                  >
                    Already have an account ?
                  </button>
                )}
              </div>
            </div>
          </div>
          {login ? (
            <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] mr-4 sm:mt-0">
              <Image
                layout="fill"
                src="/illus7.png"
                alt="Image"
                className="w-full h-full object-contain "
              />
            </div>
          ) : (
            <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] mr-4 sm:mt-0">
              <Image
                layout="fill"
                src="/illus6.png"
                alt="Image"
                className="w-full h-full object-contain "
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
