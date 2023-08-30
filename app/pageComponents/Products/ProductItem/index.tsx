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
      bg-cover bg-repeat w-full h-full mlg:min-h-[542px] px-3 sm:px-10 
          flex ${
            direction === "left"
              ? "flex-col mlg:flex-row"
              : "flex-col mlg:flex-row-reverse"
          } justify-center mlg:justify-between
      `}
    >
      <div
        className={`w-full mlg:w-6/12 h-full flex flex-row justify-center items-center mlg:items-start mlg:justify-start
      ${
        direction === "left"
          ? "mt-0 mlg:mt-[-10px] lg:mt-[-30px] xl:mt-[-50px] ml-auto mlg:ml-8"
          : "mr-auto ml-auto mlg:ml-8 mlg:mr-0 mt-0 mlg:mt-[-10px] lg:mt-[-30px] xl:mt-[-50px] lg:ml-[120px]"
      }
      `}
      >
        <div className="flex flex-col mlg:items-start min-w-full justify-center mlg:justify-start mt-0 sm:mt-8 xl:mt-12 items-center">
          <motion.h1
            className="text-center sm:text-left text-3xl ssm:text-4xl sm:text-5xl font-bold text-black mx-auto mlg:mx-0"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h1>
          <div>
            <ul className="mt-4 mb-4 text-lg sm:text-2xl mx-auto mlg:mx-0 min-w-full mlg:h-full">
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
          </div>
          <br />
          <HTBLeftSliderControls />
        </div>
      </div>
      <motion.div
        className={`w-full mlg:w-6/12 flex flex-row justify-center mt-[-1.5rem] sm:mt-0
        ${
          direction === "left"
            ? "mr-auto mlg:mr-[20px]"
            : "ml-auto mlg:ml-[-20px]"
        }
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
          className="mt-14 lg:mt-4 block w-11/12 h-auto sm:w-96 sm:h-96 mlg:w-[420px] mlg:h-[440px] xl:w-[496px] xl:h-[496px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default ProductItem;
