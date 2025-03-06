import React, { useReducer, useState } from "react";
import Image from "next/image";
import logo from "@/public/images/crumNavbarLogo.png";
import Link from "next/link";
import { LoginModal } from "./LoginModal";
import { initState, reducer } from "@/lib/Reducer";
import { SigninModal } from "./SigninModal";

export const Navbar = () => {
  const [loginActive, setLoginActive] = useState(false);
  const [signin, setSignin] = useState(false);
  const [state, dispatch] = useReducer(reducer, initState);

  const handleLogin = () => {
    dispatch({ type: "MODAL_OPEN", payload: { edit: false } });
    setLoginActive(true);
  };

  const handleSignup = () => {
    dispatch({ type: "SIGNIN_MODAL_OPEN" });
    setSignin(true);
  };

  return (
    <>
      <LoginModal
        setShowModal={() => dispatch({ type: "MODAL_CLOSE" })}
        showModal={state.modalOpen}
      />
      <SigninModal
        setShowModal={() => dispatch({ type: "SIGNIN_MODAL_CLOSE" })}
        showModal={state.signinModal}
      />
      <header>
        <div className="w-full bg-[#2c0506] py-5 px-8 flex items-center justify-between text-white">
          <div className="flex items-center">
            <Image src={logo} alt="" width={120} height={40} />
          </div>
          <div className="flex items-center justify-end w-full px-6 gap-6">
            <nav className="md:flex gap-11 text-[17px] font-thin font-serif opacity-65">
              <Link href="#" className="hover:text-[#c29b40]">
                Buy
              </Link>
              <Link href="#" className="hover:text-[#c29b40]">
                Rent
              </Link>
              <Link href="#" className="hover:text-[#c29b40]">
                Sell
              </Link>
              <Link href="#" className="hover:text-[#c29b40]">
                Agents
              </Link>
              <Link href="#" className="hover:text-[#c29b40]">
                New Development
              </Link>
            </nav>

            <div className="flex items-center ml-12 font-sans ">
              <button
                onClick={handleLogin}
                className={`${
                  loginActive
                    ? "bg-[#c29b40] text-white"
                    : "hover:text-[#c29b40] text-[16px] font-light opacity-65"
                } rounded-full px-5 py-2 cursor-pointer`}
              >
                Login
              </button>

              <button
                onClick={handleSignup}
                className={`${
                  loginActive 
                    ? "hover:text-[#c29b40] text-[16px] font-light opacity-65"
                    : "bg-[#c29b40] text-white"
                } px-5 py-2 rounded-full flex justify-center items-center text-[16px] font-light cursor-pointer`}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
