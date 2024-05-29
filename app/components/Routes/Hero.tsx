import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { BiSearch } from 'react-icons/bi';

type Props = {};

const Hero: FC<Props> = (props) => {
  return (
    <div className="w-full mt-4  1000px:flex items-center justify-center relative">      
        <div className='1000px:w-[35%] rounded-full hero_animation  m-auto mt-12 flex 1000px:h-auto items-center justify-end pt-[10%] 1000px:pt-[0] z-10'>
          <Image
          src={require("../../../public/images/1695553286999-removebg-preview.png")}
          alt=""
          width={700} // Add appropriate width
          height={700} // Add appropriate height
          className="1100px:max-w-[90%] m-auto 1500px:max-w-[85%] h-[auto] z-[10]"
        />   
        </div>

      <div className="1000px:w-[60%] flex flex-col items-center 1000px:mt-[0px] text-center 1000px:text-left mt-[150px]">
        <h2 className="dark:text-white text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[50px] font-[600] font-Josefin py-2 1000px:w-[90%]">
          Empower Your Real Estate Journey with Cutting-Edge Online Learning
        </h2>
        <br />
        <p className="dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[18px] 1500px:!w-[55%] 1100px:!w-[78%]">
          Welcome to Al-Mokhbir Al-Aqari, your premier destination for mastering real estate through innovative online learning.
          Our platform is designed to provide you with comprehensive, expert-led courses that can be accessed anytime, anywhere.
        </p>
        <br />
        <br />
        <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent relative">
          <input
            type="search"
            placeholder="Search courses"
            className="bg-transparent border dark:border-none dark:bg-[#15153b] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none"
          />
          <div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3] rounded-r-[5px]">
            <BiSearch className="text-white" size={30} />
          </div>
        </div>
        <br />
        <br />
        <div className="1500px:w-[55%] 1100px:w-[70%] w-[90%] flex items-center">
          <Image
            src={require("../../../public/images/avatar11.jpg")}
            alt=""
            width={50} // Add appropriate width
            height={50} // Add appropriate height
            className="rounded-full"
          />
          <Image
            src={require("../../../public/images/avatar14.jpg")}
            alt=""
            width={50} // Add appropriate width
            height={50} // Add appropriate height
            className="rounded-full ml-[-20px]"
          />
          <Image
            src={require("../../../public/images/avatar9.jpg")}
            alt=""
            width={50} // Add appropriate width
            height={50} // Add appropriate height
            className="rounded-full ml-[-20px]"
          />
          <p className="font-Josefine dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] font-[600]">
            Trusted by 120k+ clients already.{' '}
            <Link
              href="/courses"
              className="dark:text-[#46e256] text-[crimson]"
            >
              View Courses
            </Link>{' '}
          </p>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Hero;
