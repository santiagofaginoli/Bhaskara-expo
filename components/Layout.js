import React from "react";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { SunIcon } from "../public/icon/SunIcon";
import { MoonIcon } from "../public/icon/MoonIcon";
import Link from "next/link";
import { Switch, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClick = () => {
    console.log("onClick");
    document.documentElement.classList.toggle("dark")
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen)
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="">
      <Head>
        <title>Iresm</title>
        <link rel="icon" type="image/png" href="/img/logo.png"  ></link>
        <meta
          name="description"
          content="Calculadora Bhaskara"
        />
        <meta name="author" content="DivGeeks" />
        <meta name="robots" content="index" />
        <meta lang="en" />
        <meta
          name="keywords"
          content="desarrolo web, paginas web, web development, web page, nextJs, html, css, wonderful, increible,calculadora de bhaskara, calculadora, bhaskara, asombroso, incredible, amazing, empresa de desarrolo web, web development company, Divgeeks, divgeeks, divgeek, divgee, Divgeek, div,geeks,geek,Geek,Geeks,Div,Divgeks,Divgek"
        />
        <meta charSet="utf-8" />
      </Head>
      <nav
        className="fixed top-0 left-0 z-30 bg-[#7b7b7b6c] w-full transition  "
      >
        <div className=" px-10 flex flex-wrap items-center justify-between ">
          <div className="flex flex-col justify-center p-4 md:order-1  font-medium ">
            <a href="https://iresm.edu.ar" className="flex items-center">
              <img
                src="img/LOGO.png"
                className="h-11 mr-3"
                alt="Flowbite Logo"
              />
              <span
                className={`self-center text-2xl font-semibold text-white whitespace-nowra`}>
                IRESM
              </span>
            </a>
          </div>
          <div href="#" className="justify-center flex md:order-4 items-center">
            <div className="relative hidden md:block  ">
              <Switch
                onChange={onClick}
                defaultSelected
                size="lg"
                color="warning"
                startContent={<SunIcon />}
                endContent={<MoonIcon />}
              >
              </Switch>
            </div>
          </div>
          <div className="flex flex-col justify-center p-4 md:hidden  font-medium ">
            <Dropdown>
              <DropdownTrigger>
                <button
                  className="border text-white rounded-full p-2"
                >
                  Open Menu
                </button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Dynamic Actions" >
                <DropdownItem
                  key={"Inicio"}
                >
                  <Link href="#inicio">
                    <h2 className="font-bold ">Inicio</h2>
                  </Link>
                </DropdownItem>
                <DropdownItem
                  key={"Chat"}
                >
                  <Link href="#chat">
                    <h2 className="font-bold ">Chat</h2>
                  </Link>
                </DropdownItem>
                <DropdownItem
                  key={"Explicación"}
                >
                  <Link href="#Explicacion">
                    <h2 className="font-bold ">Explicación</h2>
                  </Link>
                </DropdownItem>
                <DropdownItem
                  key={"Matematicos"}
                >
                  <Link href="#Matematicos">
                    <h2 className="font-bold ">Matematicos</h2>
                  </Link>
                </DropdownItem>
                <DropdownItem
                  key={"Contacto"}
                >
                  <Link href="https://divgeeks-ccqalgxj0-divgeeks.vercel.app/contacto/contacto">
                    <h2 className="font-bold ">Contacto</h2>
                  </Link>
                </DropdownItem>
                <DropdownItem
                  key={"Theme"}>
                  <Switch
                    onChange={onClick}
                    defaultSelected
                    size="lg"
                    color="warning"
                    startContent={<SunIcon />}
                    endContent={<MoonIcon />}
                  >
                  </Switch>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="items-center md:order-3 justify-center  hidden w-full md:flex md:w-auto ">
            <ul className="flex space-x-4">
              <li>
                <Link href="#inicio">
                  <h2 className="font-bold ">Inicio</h2>
                </Link>
              </li>
              <li>
                <Link href="#chat" >
                  <h2 className="font-bold ">Chat</h2>
                </Link>
              </li>
              <li>
                <Link href="#Explicacion">
                  <h2 className="font-bold ">Explicacion</h2>
                </Link>
              </li>
              <li>
                <Link href="#Matematicos">
                  <h2 className="font-bold ">Matematicos</h2>
                </Link>
              </li>
              <li>
                <Link href="https://divgeeks-ccqalgxj0-divgeeks.vercel.app/contacto/contacto">
                  <h2 className="font-bold ">Contacto</h2>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav >
      {children}
      <div className="w-full min-h-[400px] bg-[url('/img/fondoFooter.jpg')] bg-no-repeat ">
        <div className="w-full grid grid-cols-12 min-h-[400px] bg-no-repeat py-10 bg-[rgba(241,248,255,0.193)]">
          <div className="grid  col-span-12 ml-5">
            <div className="flex justify-start">
              <div className="grid col-span-12 ">
                <div className="flex justify-center">
                  <div>
                    <Avatar
                      src="/img/logo.png"
                      css={{ h: "60px", w: "60px" }}
                      id="avatarFooter"
                      className="bg-transparent"
                    />
                  </div>
                  <div>
                    <div css={{ mb: "5px" }} className="font-bold text-white">
                      <h2>DivGeeks</h2>
                    </div>
                    <div css={{ mt: "-25px", ml: "2px" }}>
                      <h2 className=" text-[#1c1c1c] font-bold " >
                        {" "}
                        If you can imagine it, we can program it
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full grid sm:col-span-1 "> </div>
          <div className="grid col-span-12 ">
            <div className="flex  justify-center gap-1">
              <ul className="flex  gap-5">
                <li>
                  <Link target="_blank" href="https://www.instagram.com/divgeeks/">
                    <h3 className="font-bold text-white">Instagram</h3>
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="http://wa.me/3541389764">
                    <h3 className="font-bold text-white">Whatsapp</h3>
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="https://www.facebook.com/people/Div-Geeks/pfbid0Uww2po6mv4b4GyKsVnRCHgHgvWejM48qxqpTfEdfzk2S8feXEWSLrLELCV84mio5l/">
                    <h3 className="font-bold text-white">Facebook</h3>
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="https://divgeeks-ccqalgxj0-divgeeks.vercel.app/contacto/contacto">
                    <h3 className="font-bold text-white">Gmail</h3>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid col-span-12 ">
            <div className="w-full flex justify-start  ml-5">
              <h3 className=" text-[#1c1c1c]  font-black">
                © 2023 DivGeeks. Portafolio web developers.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Layout;
