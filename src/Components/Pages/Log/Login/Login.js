import { Link, useLocation, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomLink from "../../../Hooks/Custom/CustomLink/CustomLink";
import Loading from "../../../Hooks/Custom/Loading/Loading";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, gitHubUser, gitHubLoading, gitHubError] =
    useSignInWithGithub(auth);
  const [signInWithEmail, user, hookError] =
    useSignInWithEmailAndPassword(auth);
  // validation
  // ---------------------------------------------------
  const handleEmailToLogin = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);

    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid Your Email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };

  const handlePasswordToLogin = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);

    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({
        ...errors,
        password: "Your Must Be Your Password Minimum 6 characters!",
      });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const navigate = useNavigate();
  const handleLoginSubmitButton = (e) => {
    e.preventDefault();
    signInWithEmail(userInfo.email, userInfo.password);
  };
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from);
      setTimeout(() => {
        alert("WELCOME TO OUR WAREHOUSE WEBSITE");
      }, 2000);
    }
  }, [user]);

  useEffect(() => {
    const error = hookError;
    if (error) {
      switch (error?.code) {
        case "auth/invalid-email":
          toast("Invalid email provided, please provide a valid email");
          break;

        case "auth/invalid-password":
          toast("Wrong password. Please Try again!!");
          break;
        default:
          toast("something went wrong. Please try again");
      }
    }
  }, [hookError]);
  if (user?.id) {
    return <Loading></Loading>;
  }

  if (googleLoading || gitHubLoading) {
    return <Loading></Loading>;
  }

  let socialError;
  if (googleError || gitHubError) {
    socialError = (
      <p className="text-danger">
        Error: {googleError?.message} {gitHubError?.message}
      </p>
    );
    return;
  }
  if (googleUser || gitHubUser) {
    navigate("/");

    return;
  }

  // ---------------------------------------------------------------------------------------------------

  return (
    <div>
      <div className="mx-auto pt-36 xl:pt-56 xl:pb-56 xl:w-1/2">
        <div className="shadow">
          <div className="p-5 mx-auto xl:w-5/6">
            <h1 className="pb-3 font-serif font-bold text-center">
              Login Your Account{" "}
            </h1>

            {errors?.email && <p className="text-danger">{errors.email}</p>}
            {setErrors && <p className="text-danger">{errors.password}</p>}
            {hookError && <Alert variant="danger">{hookError}</Alert>}
            {socialError && <Alert variant="danger">{socialError}</Alert>}

            <form action="#" onSubmit={handleLoginSubmitButton}>
              <div className="font-serif xl:text-xl">
                <div className="grid pt-4">
                  <label htmlFor="email" className="">
                    Email
                  </label>
                  <input
                    onBlur={handleEmailToLogin}
                    className="p-2 font-serif xl:text-xl"
                    type="email"
                    name="email"
                    id=""
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="grid pt-4 grid-2">
                  <label htmlFor="password" className="">
                    Password
                  </label>
                  <input
                    onBlur={handlePasswordToLogin}
                    className="p-2 font-serif xl:text-xl"
                    type="password"
                    name="password"
                    id=""
                    placeholder="Password"
                    required
                  />
                </div>

                <div>
                  <input
                    className="w-full mt-5 bg-pink-600 text-pink btn button"
                    type="submit"
                    name="button"
                    value="Login"
                  />
                </div>
                <div className="flex">
                  <div className="h-1 my-4 w-80 bg-slate-900"></div>
                  <div className="p-2 text-2xl">or</div>
                  <div className="h-1 my-4 w-80 bg-slate-900"></div>
                </div>
                <div name="social Login">
                  <div className="grid gap-2 pt-2 pb-2 xl:gap-3 xl:flex">
                    <button
                      onClick={() => signInWithGoogle()}
                      className="w-full py-2 bg-pink-600 xl:button"
                    >
                      Google <i className="fab fa-google-plus-g"></i>
                    </button>
                    <button
                      onClick={() => signInWithGithub()}
                      className="w-full py-2 bg-pink-600 xl:button"
                    >
                      GitHub <i className="fab fa-github"></i>
                    </button>
                  </div>
                </div>
                <br />
                <div className="text-center ">
                  <Link to="/forgotPassword">
                    <button className="w-full py-2" to="/forgot-password">
                      Did you forget your password ?
                    </button>
                  </Link>{" "}
                </div>
                <br />
                <div name="option">
                  <div className="flex w-full gap-2 mx-auto xl:w-1/2">
                    <p>Not a member?</p>
                    <>
                      <CustomLink to="/signup">
                        <span className="text-pink-400 hover:text-pink-700">
                          Signup
                        </span>
                      </CustomLink>
                    </>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
