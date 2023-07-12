import tech from "../../assets/tech.json";
import { useLottie } from "lottie-react";

const Tech = () => {
  const options = {
    animationData: tech,
    loop: true
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default Tech ;