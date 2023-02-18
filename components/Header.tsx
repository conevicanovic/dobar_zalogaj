import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import FullLogo from "../assets/images/FullLogo.png";
import FullLogoBlack from "../assets/images/FullLogoBlack.png";
let scroll = 0;
let timer: any = null;
function Header() {
  const [animationCSS, setAnimationCSS] = useState("");
  useEffect(() => {
    window.onscroll = () => {
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        setAnimationCSS("");
      }, 150);
      if (scroll > window.scrollY && window.scrollY > 10) {
        // console.log("gore");
        setAnimationCSS("translate-y-2");
      } else if (scroll < window.scrollY && window.scrollY > 10) {
        // console.log("dole");
        setAnimationCSS("-translate-y-2");
      }

      scroll = window.scrollY;
    };
  }, []);
  return (
    <>
      <div
        className={`fixed w-full ${animationCSS} transition-transform duration-500`}
      >
        <div className="absolute w-full h-[2rem] top-[-1rem] bg-green-900"></div>
        <div className="relative w-full flex h-[13.5rem] z-10 bg-green-900 justify-center py-5 items-center">
          <Link href="/">
            <Image
              src={FullLogoBlack}
              alt="logo missing"
              className="w-[35vw] mobile:w-[85vw] h-[9.166666666666667vw] mobile:h-[22.26190476190476vw] absolute scale-[1.03] top-[25px] opacity-10 -z-10 "
            />
            <Image
              src={FullLogo}
              alt="logo missing"
              className={`w-[35vw] mobile:w-[85vw] h-[9.166666666666667vw] mobile:h-[22.26190476190476vw] transition-all ${animationCSS}`}
            />
          </Link>
          {/* fef3c7 */}
        </div>
        {/* <div className="w-full h-[6rem] bg-amber-50 absolute top-[13.5rem] hover:opacity-10"></div> */}
        <div className="w-full rounded-t-full h-[12rem] fixed relative top-[-6rem] border-t-[6rem] border-l-[6rem] border-r-[6rem] border-green-900 bg-transparent  drop-shadow-md mobile:hidden">
          <div className="absolute top-[-1rem] left-[-6rem]  w-[6rem] h-[13rem] rounded-br-[4rem] bg-green-900"></div>
          <div className="absolute top-[-1rem] right-[-6rem] w-[6rem] h-[13rem] rounded-bl-[4rem] bg-green-900"></div>
        </div>
      </div>
    </>
  );
}

export default Header;
