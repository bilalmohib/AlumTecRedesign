import styles from "./style.module.css";

const HPBHeader = () => {
  return (
    <>
      <h2
        className={`${styles.heading} text-white text-6xl font-semibold leading-5 xl:leading-[77px] text-center`}
      >
        OUR PROJECTS
      </h2>
      {/* <p
        className={`text-gray-300 text-center font-sharp text-lg font-normal leading-10 px-32 mt-8 ${styles.paragraph}`}
      >
        AlumTec Glass and Aluminium offers a wide range of aluminium products
        and services. All our products comply with Dubai Green Building
        Regulations, Dubai Civil Defense and Abu Dhabi Estidama Regulations.
      </p> */}
    </>
  );
};
export default HPBHeader;
