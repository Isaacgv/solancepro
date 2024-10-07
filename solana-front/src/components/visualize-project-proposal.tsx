import { X } from 'lucide-react'
import {
  Dialog,
  DialogClose,
  DialogVisualizeContent,
  DialogDescription,
  DialogTitle,
} from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from './ui/radio-group'
import { Button } from './ui/button'

import { z } from 'zod'

import React, { useState, useEffect } from 'react';

import { TextArea } from './ui/text-area'
import { useProjects } from '../hooks/platform'
import type { IdlAccounts } from '@coral-xyz/anchor'
import type { Platform } from '../anchor/idl'
// biome-ignore lint/style/useImportType: <explanation>
import { PublicKey } from '@solana/web3.js'
import axios from 'axios';


type ProjectData = IdlAccounts<Platform>['ProjectAccount']
const CreateProjectForm = z.object({
  title: z.string().min(1, 'Provide the project title'),
  description: z.string().min(1, 'Provide the description of the project'),
  features: z.string().min(1, 'Provide the key features of the project'),
  deliverables: z.string().min(1, 'Provide the deliverables of the project'),
  desiredBudget: z.coerce.number().min(1).max(7),
})

interface VizualizeProjectForm {
    project: PublicKey
    proposalIdx: number

}



export function VisualizeProjectProposal( {project, proposalIdx}: VizualizeProjectForm) {
  const budgetList = ["Less than $50 US", "$50 - $150 US", "$150 - $550 US", "$550 - $1500 US","$1500 - $2500 US", "Over $3500 US" ]
  const budgetIcons = ["🙂", "🤗", "😎", "💪🏽", "🦾", "🤖", "👽"]

  const { fetchProposal, proposalFilter, loadingFetchProposal, initializeTransaction } = useProjects()
  const [solToUsdRate, setSolToUsdRate] = useState(0);
  fetchProposal({project, proposalIdx})
  
  const proposal = proposalFilter
  const lamportsToSol = (lamports) => lamports / 1_000_000_000;

  const solAmount = lamportsToSol(proposal.budget);
  

  // Fetch the current SOL to USD rate from CoinGecko
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

  const usdValue = solAmount * solToUsdRate; 

  return (
    
    
    <DialogVisualizeContent>
      <div className="flex flex-col gap-6 h-full">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <DialogTitle>Proposal</DialogTitle>
            <DialogClose>
              <X className="size-5 text-zinc-600" />
            </DialogClose>
          </div>

          <DialogDescription>
            Proposal Description.
          </DialogDescription>
        </div>

        { !loadingFetchProposal ? (
        <p className="text-center text-gray-500">Loading...</p> 
        ) : (!project ? (
            <p className="text-center text-gray-500">No project</p> 
        ): (
        <form
          //onSubmit={handleSubmit(handleCreateGoal)}
          
          className="flex-1 flex flex-col justify-between"
        >
          <div className="flex flex-col gap-6">
            
            <div className="flex flex-col gap-2">
              <Label htmlFor="description">Proposal description</Label>
              <TextArea
                id="description"
                autoFocus
                // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
                value={proposal.description}
                readOnly
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <Label htmlFor="budget">Budget</Label>
              <div>
              <Input
                id="budget"
                autoFocus
                // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
                value={solAmount}
                style={{ marginRight: '10px', padding: '8px', width: '100px' }}
                readOnly
              />
              <span style={{ fontSize: '16px' }}>SOL</span>
              </div>
              
            </div>
              <div style={{ marginTop: '20px', fontSize: '18px' }}>
                <strong>USD Value: </strong> ${usdValue.toFixed(2)}
              </div>
          </div>

          <div className="flex items-center gap-3 py-10">
            <DialogClose asChild>
              <Button type="button" className="flex-1" variant="secondary">
                Close
              </Button>
            </DialogClose>

            
            {proposal.accepted == 0 && (
            <DialogClose asChild>
            
            <Button className="flex-1" onClick={() => initializeTransaction(
              proposal.budget,
              0,
              proposal.authority,
              project ,
              proposalIdx)} variant="green">
              Accept
            </Button>

            </DialogClose>
            )}
            <DialogClose asChild>
            {proposal.accepted === 0 && (
              <Button className="flex-1" variant="red">Reject</Button>
            )}
            </DialogClose>

            
            
          </div>
        </form>
        ))}
      </div>
    </DialogVisualizeContent>
  )
}
