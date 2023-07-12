import error from "../../assets/404.json";
import { useLottie } from "lottie-react";

const Error = () => {
  const options = {
    animationData: error,
    loop: true
  };

  const { View } = useLottie(options);

  return <>{View}</>;
  
};

export default Error;