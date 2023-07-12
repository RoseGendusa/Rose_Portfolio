import endfooter from "../../assets/endfooter.json";
import { useLottie } from "lottie-react";

const EndFooter = () => {
  const options = {
    animationData: endfooter,
    loop: true
  };

  const { View } = useLottie(options);

  return <div style={{ width: "150px", height: "100px" }}>{View}</div>;
};

export default EndFooter;