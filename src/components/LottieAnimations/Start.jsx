import endfooter from "../../assets/endfooter.json";
import { useLottie } from "lottie-react";

const EndFooter = () => {
  const options = {
    animationData: endfooter,
    loop: true
  };

  const { View } = useLottie(options);

  return (
    <div style={{ width: "500px", height: "500px" }}>
      <div style={{ overflow: "visible" }}>{View}</div>
    </div>
  );
};

export default EndFooter;