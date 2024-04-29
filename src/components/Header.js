import React, { useState } from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const currentUser = auth.currentUser;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = useSelector((store) => store.user);

  const signoutHandler = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="absolute bg-gradient-to-b from-black w-full flex justify-between items-center py-6 px-8 z-10 ">
      <div className="flex gap-3 items-center">
        <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="Netflix_logo" />
        <div className="text-white ">
          <ul className="flex gap-3 cursor-pointer  text-lg">
            <Link to="/browse">
              {" "}
              <li>Home</li>
            </Link>
            <Link to="/tvseries">
              {" "}
              <li>TV shows</li>
            </Link>
            <li>Movies</li>
            <Link to="/gptsearch">
              {" "}
              <li>GPT Search</li>
            </Link>
          </ul>
        </div>
      </div>

      {currentUser && (
        <div className="">
          <button
            className="outline-none border-none"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <img
              className="w-12 h-12 rounded-full"
              src={user?.photoURL}
              alt="profile"
            />
          </button>
          <button onClick={signoutHandler} className="cursor-pointer">
            signout
          </button>
          {isDropdownOpen && (
            <div className="bg-red-100 rounded-lg px-4 py-2 absolute right-3 cursor-pointer text-lg text-left ">
              <ul>
                <li className="px-4 my-2 py-2 border-b-2 border-gray-100 hover:bg-red-200 hover:rounded-lg ">
                  {user?.displayName}
                </li>
                <li
                  className="px-4 my-2 py-2 hover:bg-red-200 hover:rounded-lg "
                  onClick={signoutHandler}
                >
                  sign out
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
