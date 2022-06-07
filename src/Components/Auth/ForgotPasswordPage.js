import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import Loading from "../Hooks/Custom/Loading/Loading";

const ForgotPasswordPage = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
    await sendPasswordResetEmail(email);
    alert("Sent your email");
    if (alert) {
      return alert("Your password reset was sent successfully");
    }
  };

  if (error) {
    return toast.error(error?.massage);
  }
  if (sending) {
    return <Loading></Loading>;
  }

  return (
    <div className="pt-36">
      <h1 className="text-center text-pink-700">FORGOT PASSWORD</h1>
      <form action="#" onSubmit={handleResetPassword}>
        <div className="grid grid-cols-1 p-4 pt-5 mx-auto xl:w-1/4 xl:p-0">
          <label className="text-pink-700" htmlFor="email">
            Email Address
          </label>
          <input
            className="p-2 border-2 border-black rounded"
            type="email"
            name="email"
            id=""
            placeholder="Email"
            required
          />
          <input className="mt-5 btn button" type="submit" value="Submit" />
        </div>
      </form>
      <div className="flex p-4 mx-auto text-center xl:w-1/4 xl:p-0">
        <div className="w-32 h-1 my-3 bg-[#03C6C7]"></div>
        <div className="p-2 text-sm text-[#03C6C7]">or login</div>
        <div className="w-32 h-1 my-3 bg-[#03C6C7]"></div>
      </div>
      <div name="social Login">
        <div className="grid gap-2 p-4 pt-2 pb-2 mx-auto xl:w-1/4 xl:gap-3 xl:flex xl:p-0">
          <button className="w-full py-2 bg-[#03C6C7] border-0">
            Google <i className="fab fa-google-plus-g"></i>
          </button>
          <button className="w-full py-2 bg-[#03C6C7] border-0">
            GitHub <i className="fab fa-github"></i>
          </button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ForgotPasswordPage;
