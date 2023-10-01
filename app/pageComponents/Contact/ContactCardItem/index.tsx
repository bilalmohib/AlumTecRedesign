import Image from "next/image";

import { CotactCardItemPropsType } from "./types";

const CotactCardItem = ({
  icon,
  title,
  description,
  contact,
  type,
}: CotactCardItemPropsType) => {
  return (
    <div className="flex flex-col justify-evenly items-center mlg:border mlg:rounded-lg mlg:shadow-md mlg:bg-gray-50 mlg:hover:bg-slate-100 pt-8 pb-8 px-4 mlg:px-8 md:min-h-[380px] lg:min-h-[380px] min-h-[310px]">
      <div className="bg-[#123E95] rounded-md w-16 h-16 p-[10px]">
        <Image
          className="w-11 h-11"
          src={icon}
          width={44}
          height={44}
          alt={title}
          title={title}
        />
      </div>
      <h3 className="text-[#191919] font-lato font-bold text-2xl leading-8 tracking-[0.2px] mt-4">
        {title}
      </h3>
      <div className="h-auto sm:min-h-[160px]">
        <p className="text-[#757575] text-center mt-0 font-lato text-base font-normal leading-7">
          {description}
        </p>
        {type === "email" || type == "support" ? (
          <p className="text-[#191919] text-center font-lato text-base font-bold leading-7">
            {contact}
          </p>
        ) : (
          <>
            <p className="text-[#191919] text-center font-lato text-base leading-7 my-0">
              <span className="font-bold">Office:</span> {contact}
            </p>
            <p className="text-[#191919] text-center font-lato text-base leading-7 my-0">
              <span className="font-bold">Fax:</span> +1 (866)-831-0737
            </p>
            <p className="text-[#191919] text-center font-lato text-base leading-7 my-0">
              <span className="font-bold">Cell:</span> +1 (647)-914-6522
            </p>
          </>
        )}
      </div>
    </div>
  );
};
export default CotactCardItem;
