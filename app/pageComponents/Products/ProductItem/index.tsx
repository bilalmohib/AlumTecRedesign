import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Importing components
import HTBLeftSliderControls from "@/app/pageComponents/Home/HomeTestimonialsBlock/HTBBody/HTBLeftContainer/HTBLeftSliderControls";

interface productItemProps {
  background: boolean;
  direction: string;
  title: string;
  descriptionList: any;
  image: string;
}

const ProductItem = ({
  background,
  direction,
  title,
  descriptionList,
  image,
}: productItemProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const randomAnimationVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      x: direction === "left" ? -20 : 20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const staggeredListVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4 + index * 0.1,
      },
    }),
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={randomAnimationVariants}
      style={{
        background: background ? "url('/Images/Products/Union.png')" : "",
        overflow: "hidden",
      }}
      className={`
      bg-cover bg-repeat w-full h-[542px]
          flex ${direction === "left" ? "flex-row" : "flex-row-reverse"}
      `}
    >
      <div className="w-3/6 flex flex-col h-full pl-20 mt-[62px]">
        <motion.h1
          className="text-5xl font-bold text-black"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h1>
        <ul className="mt-4 mb-4 text-2xl">
          {descriptionList.map((item: productItemProps, index: number) => {
            return (
              <motion.li
                className="ml-[-5px] mb-2"
                key={index}
                variants={staggeredListVariants}
                custom={index}
                initial="hidden"
                animate="visible"
              >
                {item.title}
              </motion.li>
            );
          })}
        </ul>
        <br />
        <HTBLeftSliderControls />
      </div>
      <motion.div
        className="w-3/6 flex justify-end"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Image
          src={image}
          alt="Product Image"
          width={479}
          height={496}
          className="mt-4 block mr-20"
        />
      </motion.div>
    </motion.div>
  );
};

export default ProductItem;
