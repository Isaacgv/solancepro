import { X, Download, Check } from 'lucide-react'
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
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
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
    projectIdx: number
    project: PublicKey
    projectAuthority: PublicKey

}



export function VisualizeSubmitProject( {project, proposalIdx, projectIdx}: VizualizeProjectForm) {
  const budgetList = ["Less than $50 US", "$50 - $150 US", "$150 - $550 US", "$550 - $1500 US","$1500 - $2500 US", "Over $3500 US" ]
  const budgetIcons = ["🙂", "🤗", "😎", "💪🏽", "🦾", "🤖", "👽"]

  const { fetchProposal, proposalFilter, loadingFetchProposal, initializeTransaction, finalizeTransaction, removeProject, cancelSubmitProject } = useProjects()
  const [solToUsdRate, setSolToUsdRate] = useState(0);
  fetchProposal({project, proposalIdx})
  
  const proposal = proposalFilter

  async function handleAcceptProject(project, proposalIdx,) {
    await fetchProposal({project, proposalIdx})
    const proposal = proposalFilter
    await finalizeTransaction(project, proposalIdx, proposal.authority, proposal.budget)
  }

  async function handleRejectProject(project, projectIdx, proposalIdx) {
   
    await cancelSubmitProject({
        project: project,
        projectIdx: projectIdx,
        proposalIdx: proposalIdx
     
    })
  }
  
  
 
  
  return (
    
    
    <DialogVisualizeContent>
      <div className="flex flex-col gap-6 h-full">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <DialogTitle>Submited Project</DialogTitle>
            <DialogClose>
              <X className="size-5 text-zinc-600" />
            </DialogClose>
          </div>

          <DialogDescription>
            Project details submited..
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
              <Label htmlFor="description">Description</Label>
              <TextArea
                id="description"
                autoFocus
                // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
                value={proposal.submitDescription}
                readOnly
              />
            </div>
            <div className="flex">
            <a className="flex items-center gap-3 cursor-pointer bg-indigo-500 text-white hover:bg-indigo-600 ring-indigo-500 rounded-md px-4 py-2"href={proposal.ipfsHash} target="_blank" download>
                <Download className="size-4" />
                Download File
            </a>
            </div>
         
            
            
              
            </div>
            
          <div className="flex items-center gap-3 py-10">
            <DialogClose asChild>
              <Button type="button" className="flex-1" variant="secondary">
                Close
              </Button>
            </DialogClose>

            
        
            <DialogClose asChild>
            <Button className="flex-1" variant="green" onClick={() => handleAcceptProject(project, proposalIdx)}>
            <Check className="size-4" />
              Accept
            </Button>
            </DialogClose>
            <DialogClose asChild>
            
            <Button className="flex-1" variant="red" onClick={() => handleRejectProject(project, projectIdx, proposalIdx)}>
            <X className="size-4" />
                Reject
            </Button>
        
            </DialogClose>

            
            
          </div>
        </form>
        ))}
      </div>
    </DialogVisualizeContent>
  )
}
