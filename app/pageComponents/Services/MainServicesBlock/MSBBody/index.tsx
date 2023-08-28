import MSBBodyLeftSide from "./MSBBodyLeftSide";
import MSBBodyRightSide from "./MSBBodyRightSide";

import { ServicesBlockProps } from "../types";

const MSBBody = ({
  title,
  description,
  direction,
  background,
  image,
}: ServicesBlockProps) => {
  return (
    <div
      className={`h-full flex-col mlg:h-auto mlg:w-full mlg:flex ${
        direction === "left"
          ? "flex-row mlg:flex-row"
          : "flex-row-reverse mlg:flex-row-reverse"
      }
          ${background ? background : "bg-white"}`}
    >
      <div
        className={`w-full flex justify-center
      mlg:w-6/12 mlg:h-full mlg:block
      `}
      >
        <MSBBodyLeftSide image={image} />
      </div>
      <div className={` w-full h-full block
      mlg:w-6/12 mlg:h-full mlg:block
      `}>
        <MSBBodyRightSide title={title} description={description} />
      </div>
    </div>
  );
};
export default MSBBody;
