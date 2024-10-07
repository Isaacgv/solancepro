
import IconComponent from './icon'
import  {BackgroundComponent }  from '../components/background'
import React, { useState, useEffect } from 'react';
import { Separator } from './ui/separator'

import {useProjects} from '../hooks/platform'
import axios from 'axios';

export function Finances() {
  
  const { lastIncome, lastOutcome, completedProposals, finishedProjects} = useProjects()
  const [solToUsdRate, setSolToUsdRate] = useState(0);

  useEffect(() => {
    const fetchSolPrice = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd'
        );
        setSolToUsdRate(response.data.solana.usd);
      } catch (error) {
        console.error("Error fetching SOL price:", error);
      }
    };

    fetchSolPrice();
  }, []);

  const usdIncome =  lastIncome * solToUsdRate; 
  const usdOutcome =  lastOutcome * solToUsdRate; 
  return (
    <BackgroundComponent className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

    <div className="mx-20  lg:mx-20  bg-gray-800 bg-opacity-80 rounded-lg p-10 shadow-lg ">

    <div className="py-6 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <IconComponent />
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <span className="text-2xl font-semibold capitalize">Finances</span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
          Incomes and outcomes for finished projects
          </span>
        </div>
      </div>

      <Separator />

      
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Incomes as a Freelancer</h2>
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            You have completed {completedProposals.length} project
          </span>
        </div>
        <ul>
          <li>
            <span className="group bg-black border border-zinc-900 rounded-lg px-4 py-5 flex justify-between items-center outline-none">
              <span className="text-white">{lastIncome} SOL</span>
            </span>
            <div style={{ marginTop: '20px', fontSize: '18px' }}>
              <strong>USD Value: </strong> ${usdIncome.toFixed(2)}
            </div>
          </li>
        </ul>
      </div>

      <Separator />
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Expenses from Contracts</h2>
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            You have paid for {finishedProjects.length} projects.
          </span>
        </div>
        <ul>
          <li>
            <span className="group bg-black border border-zinc-900 rounded-lg px-4 py-5 flex justify-between items-center outline-none">
              <span className="text-white">{lastOutcome} SOL</span>
            </span>
            <div style={{ marginTop: '20px', fontSize: '18px' }}>
              <strong>USD Value: </strong> ${usdOutcome.toFixed(2)}
            </div>
          </li>
        </ul>
      </div>
      <div style={{ marginTop: '50px', fontSize: '14px', textAlign: 'right', marginRight: '20px'}}>
          <strong>Current SOL to USD rate:</strong> ${solToUsdRate}
      </div>
    </div>
    </div>
    </BackgroundComponent>
  )
}
