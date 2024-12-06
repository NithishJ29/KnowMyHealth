import React from "react";
import {
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Drawer from "./Drawer";
import Logo from '/public/images/logo.png'
import Image from "next/image";
<<<<<<< HEAD
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline';
=======
>>>>>>> 906d4111242898be760e4f4ac5ff6854ba6d62e1

const mainmenus = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default async function Navigate() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  const safeUser = user
    ? {
      given_name: user.given_name || undefined,
      family_name: user.family_name || undefined,
      picture: user.picture || undefined,
    }
    : null;

  return (
<<<<<<< HEAD
    <nav className="flex items-center justify-between lg:p-6 px-3">

      <Image src={Logo} width={80} height={60} alt="know my health" />

      {/* the desktop code */}
      <div className=' gap-4 lg:flex hidden flex-wrap bg-zinc-100 lg:p-2 rounded-2xl'>
        <label className="input input-bordered rounded-xl flex items-center gap-2">
          <MapPinIcon className='size-4' />
          <input type="text" className="grow" placeholder="enter location" />
        </label>

        <label className="input input-bordered rounded-xl flex items-center gap-2">
          <MagnifyingGlassIcon className='size-4' />
          <input type="text" className="grow" placeholder="Search" />
        </label>
      </div>

      {/* the mobile code */}
      <div className=' gap-4 lg:hidden flex flex-wrap p-2 rounded-2xl'>

          <MapPinIcon className='size-6 m-4' />

       
          <MagnifyingGlassIcon className='size-6 m-4' />

      </div>

      <div>
=======
    <nav className="navbar bg-base-100">
      {/* Logo and main navigation */}
      <div className="flex-1 items-center">
        <div className="flex items-center">
          <Image src={Logo} width={60} height={60} alt="know my health"/>
          <a href="/" className="btn btn-ghost text-xl">
            Know My Health
          </a>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal space-x-0">
            {mainmenus.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex-none">
>>>>>>> 906d4111242898be760e4f4ac5ff6854ba6d62e1
        {!await isAuthenticated() ? (
          <div className="p-1">
            <LoginLink className="btn btn-primary">Get Started</LoginLink>
          </div>
        ) : (
          <Drawer user={safeUser} />
        )}
      </div>
    </nav>
  );
}
