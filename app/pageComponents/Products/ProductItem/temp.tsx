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
        // border: "5px solid red",
      }}
      className={`
      bg-cover bg-repeat lg:w-full lg:h-[542px] px-14 lg:px-20
          flex flex-col h-full ${
            direction === "left"
              ? "flex-row lg:flex-row"
              : "flex-row-reverse lg:flex-row-reverse"
          } lg:justify-between justify-center items-center
      `}
    >
      <div
        className={`w-full lg-w-6/12 h-full flex flex-row justify-center items-center
      ${
        direction === "left"
          ? "mt-[-5px] lg:mt-[-30px] xl:mt-[-50px] ml-0"
          : "mr-0 mt-[-35px] lg:mt-[-30px] xl:mt-[-50px]"
      }
      `}
      >
        <div>
          <motion.h1
            className="text-5xl font-bold text-black"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h1>
          <div className="flex flex-col justify-center items-center lg:block">
            <ul className="mt-4 mb-4 text-2xl">
              {descriptionList.map((item: productItemProps, index: number) => {
                return (
                  <motion.li
                    className=" lg:ml-[-5px] mb-2"
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
          </div>
          <br />
          <div className="flex justify-center items-center lg:block">
            <HTBLeftSliderControls />
          </div>
        </div>
      </div>
      <motion.div
        className={`w-full lg:w-6/12 flex flex-row justify-center
        ${direction === "left" ? "lg:mr-[20px]" : "lg:ml-[-25px]"}
        `}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Image
          src={image}
          alt="Product Image"
          width={479}
          height={496}
          className="mt-14 lg:mt-4 block w-96 h-96 lg:w-[479px] lg:h-[496px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default ProductItem;
