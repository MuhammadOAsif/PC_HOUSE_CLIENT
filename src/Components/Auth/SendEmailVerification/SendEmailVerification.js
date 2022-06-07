import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Hooks/Custom/Loading/Loading";
import emailVerification from "../../../images/emailVerification/emailVerification.jpg";

const SendEmailVerification = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification] = useSendEmailVerification(auth);
  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div className="pt-32 text-center">
        <div className="w-1/3 mx-auto">
          <img src={emailVerification} alt="" />
        </div>
        <div className="text-center">
          <h3 className="w-2/5 pb-2 mx-auto text-[#1FAA59]">
            Your Email Is not Verified Please Verified Your Email And Continue
            My WareHouse
          </h3>
        </div>
        <button
          className="btn button"
          onClick={async () => {
            await sendEmailVerification();
            toast("Sent email");
          }}
        >
          Send Verification Email Again
        </button>
      </div>
    );
  }

  return children;
};

export default SendEmailVerification;
