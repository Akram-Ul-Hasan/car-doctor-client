import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button onClick={handleGoogleSignIn} className="btn gap-2">
          G Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
