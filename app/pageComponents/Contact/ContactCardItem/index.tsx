import Image from "next/image";

import { CotactCardItemPropsType } from "./types";

const CotactCardItem = ({
  icon,
  title,
  description,
  contact,
}: CotactCardItemPropsType) => {
  return (
    <div className="flex flex-col justify-center items-center border rounded-lg shadow-md bg-gray-50 hover:bg-slate-100 pt-8 pb-8 px-8 min-h-[310px]">
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
      <p className="text-[#757575] text-center font-lato text-base font-normal leading-7">
        {description}
      </p>
      <p className="text-[#191919] text-center font-lato text-base font-bold leading-7">
        {contact}
      </p>
    </div>
  )
}
export default CotactCardItem;