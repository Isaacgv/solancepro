import { Link, Outlet, useLocation, createRootRoute, useNavigate } from '@tanstack/react-router'
import { Search, BriefcaseBusiness, ListTodo, Wallet } from 'lucide-react'
import multiavatar from '@multiavatar/multiavatar/esm'

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useProjects } from '../hooks/platform'
import Loading from '../components/loading'
import React, { useState, useEffect } from 'react';
import Logo2Component  from '../components/logo2'
import { useWallet } from '@solana/wallet-adapter-react';

function Navbar() {
  const activeProps = {
    style: {
      fontWeight: 'bold',
    },
  }

  const { initialized, initializeUser, loading, transactionPending, listProjects } =
    useProjects()

  const location = useLocation();
  const isRoot = location.pathname === '/'; 

  const handleLinkClick = () => {
    listProjects(); // Execute the listProjects function
  };
  const { publicKey, connected, disconnecting } = useWallet();

  const navigate = useNavigate();
  const goToAboutPage = () => {
        // Navigate to the 'About' page
        navigate({ to: '/' });
      };

  (!connected && !disconnecting) ? goToAboutPage() : null
  const walletAddress = publicKey ? publicKey.toBase58() : null;
 
  const svgCode = multiavatar(walletAddress);
  
  return (
    <>
      {!isRoot && (
      <div className="container flex flex-wrap items-center justify-center mx-auto text-slate-100 gap-12 pt-6">
        <div className="flex items-center">
          <Logo2Component className="mr-0 mb-" /> 
          <h1 className="mr-4 mb-1 block cursor-pointer py-1.5 text-3xl text-slate-100 font-semibold">
          olancePro
          </h1>
        </div>

        <div className="">
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <div>
              <li className="flex items-center p-1 text-base gap-x-2 text-slate-100">
                <Link
                  to="/find-projects"
                  
                  activeProps={activeProps}
                  className="flex items-center gap-2"
                >
                  <Search className="size-4" />
                  Find Projects
                </Link>
              </li>
            </div>
            <div>
              <li className="flex items-center p-1 text-base gap-x-2 text-slate-100">
                <Link
                  to="/freelancer-projects"
                  activeProps={activeProps}
                  className="flex items-center gap-2"
                >
                  <BriefcaseBusiness className="size-4" />
                  My projects as Freelancer
                </Link>
              </li>
            </div>
            <li className="flex items-center p-1 text-base gap-x-2 text-slate-100">
              <Link
                to="/hire"
               
                activeProps={activeProps}
                className="flex items-center gap-2"
              >
                <ListTodo className="size-4" />
                Hire
              </Link>
            </li>
            <li className="flex items-center p-1 text-base gap-x-2 text-slate-100">
              <Link
                to="/finances"
                activeProps={activeProps}
                className="flex items-center gap-2"
              >
                <Wallet className="size-4" />
                My Finances
              </Link>
            </li>
    
            <div>
              {initialized ? (
                <div> </div>
              ) : (
                <button
                  type="button"
                  onClick={() => initializeUser()}
                  disabled={transactionPending}
                >
                  
                </button>
              )}
            </div>
            <li  className="w-10 h-10 inline-block filter brightness-90 drop-shadow-xl saturate-50 contrast-100"
                  dangerouslySetInnerHTML={{ __html: svgCode }} >
          
            </li>
            <li className="flex items-center p-1 text-base gap-x-2 text-slate-100">
              <WalletMultiButton />
            </li>
          </ul>
        </div>
      </div>
      )}

      <Outlet />
    </>
  )
}

export const Route = createRootRoute({
  component: () => Navbar(),
})
