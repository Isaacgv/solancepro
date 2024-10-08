import { X } from 'lucide-react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'

import { Button } from './ui/button'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { TextArea } from './ui/text-area'
import { useProjects } from '../hooks/platform'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateProposalForm = z.object({
  description: z.string().min(1, 'Provide the description of the project').max(700, 'The description must be 700 characters or fewer'),
  budget: z.coerce.number(),
})

type CreateProposalForm = z.infer<typeof CreateProposalForm>

export function CreateProposal( {projectPDA, lastProposal}) {

  
  const [solToUsdRate, setSolToUsdRate] = useState(0);
  const { register, control, handleSubmit, formState, reset, watch } =
    useForm<CreateProposalForm>({
      resolver: zodResolver(CreateProposalForm),
    })
  
  const solAmount = watch('budget', 0);

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

  
  async function handleCreateProposal(data: CreateProposalForm) {
    await addProposal({
      description: data.description,
      budget: data.budget,
      projectPda: projectPDA,
      lastProposal: lastProposal
        
    })

  //console.log(fetchProposal("6R9ufYNWyYPkChPN9M7VVmicRK5soPmcAeDkzY5tiy4L", 0))

  //  await addProposal({
  //    description: 'descuento',
  //    budget: 1,
  //    project_idx: 2,
  //  })

    

    reset()
  }
  const { addProject, addProposal, changeStatusProject, fetchProposal } = useProjects()

  return (
    
    <DialogContent>
      <div className="flex flex-col gap-6 h-full">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <DialogTitle>Proposal</DialogTitle>
            <DialogClose>
              <X className="size-5 text-zinc-600" />
            </DialogClose>
          </div>
          

          <DialogDescription>
            Make a proposal
          </DialogDescription>
        </div>

        <form
          //onSubmit={handleSubmit(handleCreateGoal)}
          onSubmit={handleSubmit(handleCreateProposal)}
          className="flex-1 flex flex-col justify-between"
        >
          <div className="flex flex-col gap-6">
            
            <div className="flex flex-col gap-2">
              <Label htmlFor="description">Describe the proposal project (max 700 characters)</Label>
              <TextArea
                id="description"
                autoFocus
                // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
                placeholder={`Example:\nTo design and develop a modern, user-friendly, and responsive website for a restaurant that enhances online visibility and boosts customer engagement. The website will showcase the restaurant’s menu, ambiance, and services while providing an easy-to-navigate platform for users to explore the restaurant and make reservations.`}
                {...register('description')}
              />

              {formState.errors.description && (
                <p className="text-red-400 text-sm">
                  {formState.errors.description.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2" >
              <Label htmlFor="budget">Budget</Label>
              <div>
              <Input
                id="budget"
                type="number"
                autoFocus
                placeholder="0"
                min="0"
                step="any"
                value={solAmount}
                {...register('budget')}
                style={{ marginRight: '10px', padding: '8px', width: '100px' }}
              
              />

              {formState.errors.budget && (
                <p className="text-red-400 text-sm">
                  {formState.errors.budget.message}
                </p>
              )}
              <span style={{ fontSize: '16px' }}>SOL</span>
              </div>
            </div>

              <div style={{ marginTop: '20px', fontSize: '18px' }}>
                <strong>USD Value: </strong> ${usdValue.toFixed(2)}
              </div>

            </div>
          
            <div style={{ marginTop: '50px', fontSize: '14px', textAlign: 'right', marginRight: '20px'}}>
              <strong>Current SOL to USD rate:</strong> ${solToUsdRate}
            </div>

          <div className="flex items-center gap-3 py-10">
            <DialogClose asChild>
              <Button type="button" className="flex-1" variant="secondary">
                Close
              </Button>
            </DialogClose>
            
            <Button className="flex-1">Make Proposal</Button>
            
          </div>
        </form>
      </div>
    </DialogContent>
  
  )
}
