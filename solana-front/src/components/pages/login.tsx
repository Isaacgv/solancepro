import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useProjects } from '../../hooks/platform'

import  {BackgroundComponent }  from '../../components/background'
import  Logo2Component  from '../../components/logo2'
import { useNavigate } from '@tanstack/react-router';
import SolanaLogo from '../../components/solana-logo';
import { useState, useEffect } from 'react';

export function App() {
    const { initialized, initializeUser, loading, transactionPending, listProjects } = useProjects()
    const navigate = useNavigate();
    const goToAboutPage = () => {
        // Navigate to the 'About' page
        navigate({ to: '/find-projects' });
      };

    initialized ? goToAboutPage() : null

    const handleClick = () => {
        initializeUser();  
      };

      const [showSolanaLogo, setShowSolanaLogo] = useState(false); 
  const [logoTimer, setLogoTimer] = useState(0); 

  useEffect(() => {
    // Function to update the logo based on timing
    const updateLogo = () => {
      setLogoTimer((prev) => prev + 1); 

      if (showSolanaLogo && logoTimer >= 5) {
       
        setShowSolanaLogo(false);
        setLogoTimer(0); 
      } else if (!showSolanaLogo && logoTimer >= 7) {
        // Show Logo2Component for 10 seconds, then switch to SolanaLogo
        setShowSolanaLogo(true);
        setLogoTimer(0);
      }
    };

    // Set interval to update the logo every second
    const interval = setInterval(updateLogo, 1000); 

    return () => clearInterval(interval); 
  }, [showSolanaLogo, logoTimer]); 


      
    return (
      

        <BackgroundComponent className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mx-20 2xl:mx-[10rem]  bg-gray-800 bg-opacity-80 rounded-lg p-20 shadow-lg ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="mt-10 ml-12 flex items-center justify-start">
            {showSolanaLogo ? (
          <SolanaLogo className=" logo-animation mr-2 mb-0 py-0" />
        ) : (
          <Logo2Component className="logo-animation mr-2 mb-0 py-0" />
        )}
                <h1 className="h2-animation opacity-0  mb-0 py-0 text-3xl text-slate-100 font-semibold">
                olancePro
                </h1>
            </div>
            <h2 className=" mt-20 text-center text-2xl font-bold leading-9 tracking-tight text-zinc-400">Sign in to your account</h2>
        </div>
        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="mt-10 text-center">
                <WalletMultiButton />
            </div>
            <div className="mt-5 text-center">
                {initialized ? (
                    <div>None</div>
                ) : (

                    <button
                    type="button"
                    onClick={handleClick}
                    disabled={transactionPending}
                    >
                    Initialize
                    </button>
                )}
            </div>
            
        </div>
        <h2 className=" mt-20  mb-5 text-2xl font-bold leading-9 tracking-tight text-violet-400">Secure Freelance Transactions Powered by Blockchain</h2>
        <h1 className=" mt-5  mb-5 text-xl font-bold leading-9 tracking-tight text-white-400">Welcome to the future of freelancing</h1>
        <span className=" mt-5  mb-5 text-base leading-9 tracking-tight text-white-400">Our platform leverages cutting-edge blockchain technology to provide fast, secure, and transparent transactions between clients and freelancers, no matter where in the world you are.
        </span>
                
        </div>
        
        </BackgroundComponent>
        
        
      
      
      
    )
  }
  