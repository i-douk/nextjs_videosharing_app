import React , {useState, useEffect} from 'react';
import {NextPage} from "next";
import {useRouter} from "next/router";
import Link from "next/link";
import GoogleLogin from 'react-google-login';
import {TiHome} from "react-icons/ti";
import {RiCloseLine, RiMenu2Fill} from "react-icons/ri";
import SeeRants from './SeeRants';
import SuggestedAccounts from './SuggestedAccounts';
import Footer from './Footer';


const Sidebar = () => {
const [showSidebar, setShowSidebar] = useState(true);
const userProfile = false;

const normalLink = "flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold rounded";
const activeLink = "";

  return (
    <div>
      <div
      className="block xl:hidden m-2 ml-4 mt-3 text-xl"
      onClick = {()=> setShowSidebar((prev)=>!prev)}>
          {showSidebar ? <RiCloseLine /> : <RiMenu2Fill /> }
      </div>
      {showSidebar && (
        <div className="xl:w-400 w-20 flex flex-col justify-start mb-10 boder-r-2 boder-blue-100 xl:border-0 p-3">
          <div className="xl:border-b-2 border-red-200 xl:pb-4">
            <Link
            href="/"
            >
              <div className={normalLink}>
                <p className="text-2xl">
                  <TiHome />
                </p>
                <span className="text-xl hidden xl:block">
                  Share a rant and gain a tfucoin.
                </span>
              </div>
            </Link>
          </div>
          {/* {!userProfile && (
            <div className="px-2 py-4 hidden xl:block">
              <p className="text-gray-400">Log in to like and comment popular rants </p>
              <div className="pr-4">
                <GoogleLogin 
                clientId=""
                render={renderProps => (
                  <button className="cursor-pointer bg-red text-lg text-[#ff1a1a] border-[1px] border-[#ff1a1a] p-1 rounded-md font-semibold outline-none w-full mt-3 hover:text-white hover:bg-[#ff1a1a]" onClick={renderProps.onClick} disabled={renderProps.disabled}>Log in with Google</button>
                )}
                onSuccess = {()=>{}}
                onFailure = {()=>{}}
                cookiePolicy={'single_host_origin'}
                />
              </div>
            </div>
            )} */}
            <SeeRants />
            <SuggestedAccounts />
            <Footer />
        </div>
      )}
    </div>
  )
}

export default Sidebar