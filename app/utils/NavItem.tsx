import Link from 'next/link';
import React from 'react'


export const navItemsData = [
    {
        name: 'Home',
        url:'/',
    },
    {
        name: 'Formations',
        url:'/courses',
    },
    {
        name: 'About',
        url:'/about',
    },
    {
        name: 'Policy', 
        url:'/policy',
    },
    {
        name: 'FAQ',
        url:'/faq',
    },
];

type Props = {
    activeItem: number;
    isMobile: boolean;
}

const NavItem: React.FC<Props> = ({activeItem, isMobile}) => {
  return (
    <>
     <div className="hidden 800px:flex">
        {
            navItemsData && 
             navItemsData.map((i,index) => (
                <Link href={`${i.url}`} key={index} passHref>
                    <span 
                    className={`${
                        activeItem === index 
                         ? 'dark:text-[#FFC100] text-[crimson]'
                         : 'dark:text-white text-black'
                    } text-[18px] px-6 font-Poppins font-[400]`}
                    >
                        {i.name}
                    </span>
                </Link>
             ))
        }
     </div>
        {
            isMobile && (
             <div className="800px:hidden mt-5">
               <div className="w-full text-left py-6 flex flex-col items-left space-y-4">
                   {
                    navItemsData && navItemsData.map((i,index) => (
                        <Link href={i.url} key={index} passHref>
                   <span className={
                            `${
                                activeItem === index 
                                ? 'dark:text-[#37a39a] text-[crimson]'
                                : 'dark:text-white text-black'
                           } text-[18px] px-6 font-Poppins font-[400]`
                        }>
                            {i.name}
                        </span>
                   </Link>
                    ))
                   }
               </div>
             </div>
                
            )
        }
    </>
  )
}

export default NavItem