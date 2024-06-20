"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, ReactNode, useEffect } from "react";

import { Paths } from "@/lib/configs";

import { Button } from "./Button";
import { ExternalLink } from "./ExternalLink";
import { Icon } from "./Icon";
import { Text } from "./Text";
import { ContactInformation, MenuItem, contactInformation } from "../app/layout";
import logo from "../public/logo_36h.png";

interface HeaderProps {
  menuItems: MenuItem[];
  contactInformation?: ContactInformation;
}

export const Header: React.FC<HeaderProps> = ({ menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Disable scrolling when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full">
      <nav className="container max-w-6xl flex items-center justify-between h-12 py-16">
        {/* <div className="md:hidden">{pathname === Paths.NETTBUTIKK ? <SheetCart /> : null}</div> */}
        {/* Hamburger Icon */}
        <Link href="/">
          <div className="flex items-center space-x-4">
            <Image src={logo} alt={"Logo"} height={32} width={33} />
            <span className="text-2xl font-semibold ml-">Satoshi Consult</span>
          </div>
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden md:flex md:space-x-12 md:items-center">
          {menuItems.map((item) => (
            <li key={item.name} className="">
              <Link href={item.href} passHref>
                <Text type={"link"}>{item.name}</Text>
              </Link>
            </li>
          ))}
          {/* <li>{pathname === Paths.NETTBUTIKK ? <SheetCart /> : null}</li>
            <Profile /> */}
          <li>
            {contactInformation?.nostr && (
              <ExternalLink link={contactInformation.nostr}>
                <Icon
                  name="nostr"
                  color="muted"
                  size="s"
                  hoverColor="foreground"
                  altText="Nostr link"
                />
              </ExternalLink>
            )}
          </li>
          <li>
            {contactInformation?.twitter && (
              <ExternalLink link={contactInformation.twitter}>
                <Icon name="twitter" color="muted" size="s" altText="Twitter/X link" />
              </ExternalLink>
            )}
          </li>
          <li>
            <Link href={Paths.KONTAKT} passHref>
              <Button>Book nå</Button>
            </Link>
          </li>
        </ul>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex top-0 right-0 z-20 relative w-10 h-10 text-foreground focus:outline-none"
          onClick={toggleMenu}
        >
          <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <span
              className={`absolute h-0.5 w-5 bg-foreground transform transition duration-100 ease-in-out ${
                isMenuOpen ? "rotate-45 delay-100" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 bg-foreground transform transition-all duration-50 ease-in-out ${
                isMenuOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-5 bg-foreground transform transition duration-100 ease-in-out ${
                isMenuOpen ? "-rotate-45 delay-100" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      </nav>
      {/* Mobile Menu */}
      <nav
        className={`fixed flex flex-col top-0 left-0 w-full p-10 z-10 h-screen pt-24 bg-background bg-opacity-100 transform delay-100 transition-all duration-200 ${
          isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
        }`}
      >
        <ul className="w-full flex flex-col grow items-center pt-8 space-y-4">
          <li>
            <NavLink
              href={Paths.HOME}
              type="repsonsive"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Forside
            </NavLink>
          </li>
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                href={item.href}
                type="repsonsive"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div>
          <div className="flex space-x-4 pt-4 justify-center">
            {contactInformation?.nostr && (
              <ExternalLink link={contactInformation.nostr}>
                <Icon name="nostr" color="muted" size="s" />
              </ExternalLink>
            )}
            {contactInformation?.twitter && (
              <ExternalLink link={contactInformation.twitter}>
                <Icon name="twitter" color="muted" size="s" />
              </ExternalLink>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

type NavLinkProps = {
  type: "desktop" | "repsonsive";
  children: ReactNode;
  href: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const NavLink: React.FC<NavLinkProps> = ({ onClick, href, children, type }) => {
  if (type === "desktop") {
    return (
      <Link href={href} passHref>
        <Button variant={"navLink"}>{children}</Button>
      </Link>
    );
  }
  return (
    <Link href={href} passHref>
      <Button variant={"link"} className="text-3xl text-foreground font-semibold" onClick={onClick}>
        {children}
      </Button>
    </Link>
  );
};
