// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    /* responsive hedder that including logo  home page, about page Sign in button */
    <header className='text-gray-600 body-font bg-emerald-300 py-4'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        
      </div>
    </header>
  );
}
