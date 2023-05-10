import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://drive.google.com/uc?export=view&id=1kCXI1aiZH6ZTh_0stQ-E-iQjE5ibAikR)",
      }}
    >
      <div className={`ml-20 w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#ffffff] font-[600]`}
        >
          Discover The Beauty of Indonesian Culture.
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#ffffffba]">
        Welcome to our online store that celebrates the beauty and diversity of Indonesia's traditional crafts and goods. 
        We offer a wide range of authentic products, including handmade batik, traditional toys, intricately woven silk fabrics, 
        and more. Item is crafted by skilled artisans who have inherited the art of their ancestors
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
