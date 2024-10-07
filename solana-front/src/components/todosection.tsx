import { Eye, Trash2, SquarePen, Check, X, Download } from 'lucide-react'
import { Button } from './ui/button'
import { Dialog, DialogTrigger } from './ui/dialog'
import { VisualizeProject } from './visualize-project'
import { VisualizeProposal } from './visualize-proposal'

import { VisualizeSubmitProject } from './visualize-submit-project'
import { VisualizeProjectProposal}  from './visualize-project-proposal'
import multiavatar from '@multiavatar/multiavatar/esm'

import type { IdlAccounts } from '@coral-xyz/anchor'
import type { Platform } from '../anchor/idl'
import { useProjects } from '../hooks/platform'
import { CreateProposal } from '../components/create-proposal'
import React, { useState, useEffect } from 'react';

type ProjectData = IdlAccounts<Platform>['ProjectAccount']

interface TodoSectionProps {
  projects: ProjectData[]
  title: string
  completed?: boolean
  isLoading: boolean
  makeProposal: boolean
  viewProposal: boolean
}

export function TodoSection({ title, completed, projects, isLoading, makeProposal, viewProposal }: TodoSectionProps) {
  
  const { removeProject, finalizeTransaction, fetchProposal, proposalFilter, fetchProposalAuthority} = useProjects()
  
  
  async function handleAcceptProject(project, proposalIdx) {
    await fetchProposal({project, proposalIdx})
    const proposal = proposalFilter
    await finalizeTransaction(project, proposalIdx, proposal.authority, proposal.budget)
  }
  
  const [proposalAuthorities, setProposalAuthorities] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    // Fetch all proposal authorities for projects asynchronously
    const fetchAllAuthorities = async () => {
      const newProposalAuthorities: { [key: string]: string } = {};
      
      for (let project of projects) {
        if (!makeProposal) {
          const proposalAuthority = await fetchProposalAuthority(project.publicKey, project.account.lastProposal - 1);
          newProposalAuthorities[project.publicKey.toBase58()] = proposalAuthority;
        }
      }

      setProposalAuthorities(newProposalAuthorities);
    };

    if (!makeProposal && projects.length > 0) {
      fetchAllAuthorities();
    }
  }, [projects, makeProposal]);
  

  return (
    <Dialog>
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-medium">{title}</h2>
      { !isLoading ?  (
        <p className="text-center text-gray-500">Loading...</p> 
      ) : (projects.length === 0 ? (
        <p className="text-center text-gray-500">No projects</p> 
      ) : (
        <ul>
        {projects.map((project, index) => {
          let walletAddress = ''
          let svgCode = ''
          if (makeProposal) {
            walletAddress = project.account.authority ? project.account.authority.toBase58() : null;
            svgCode = multiavatar(walletAddress);
          } else {

            const proposalAuthority = proposalAuthorities[project.publicKey.toBase58()];
            svgCode = multiavatar(proposalAuthority || '');
         
          }
          // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
          return ( <li key={project.idx}>
            <span className="group bg-black border border-zinc-900 rounded-lg px-4 py-5 flex justify-between items-center outline-none">
              <span  className="w-10 h-10 inline-block filter brightness-90 drop-shadow-xl saturate-50 contrast-100"
                    dangerouslySetInnerHTML={{ __html: svgCode }} >
            
              </span>
              <span className="text-white ml-3"> {project.account.title} </span>
              
              <div className="flex items-center gap-4 ml-4">
              {project.account.status !== 3 &&(
              <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" className="flex items-center gap-2 ml-auto mr-2">
                  <Eye className="size-4" />
                  Project
                  </Button>
              </DialogTrigger>
              <VisualizeProject  project={project.account}/>
              </Dialog>
              
              )}

              {viewProposal &&(
                <Dialog>
                  <DialogTrigger asChild>
                  <Button size="sm" className="flex items-center gap-3 mr-2" variant="primary2">
                    <Eye className="size-4" />
                    Proposal
                  </Button>
                  </DialogTrigger>
                  <VisualizeProjectProposal project={project.publicKey} proposalIdx={project.account.lastProposal -1} />
                </Dialog>
              )}
              {makeProposal &&(
                <Dialog>
                  <DialogTrigger asChild>
                  <Button size="sm" className="flex items-center gap-3 mr-2" variant="primary2">
                    <SquarePen className="size-4" />
                    Make Proposal
                  </Button>
                  </DialogTrigger>
                  <CreateProposal projectPDA={project.publicKey} lastProposal={project.account.lastProposal}/>
                </Dialog>
              )}
              {completed &&  project.account.status === 3 &&(
                <Dialog>
                <DialogTrigger asChild>
                <Button size="sm" className="flex items-center gap-3 mr-2" variant="indigo">
                  <Download className="size-4" />
                  Project
                </Button>
                </DialogTrigger>
                <VisualizeSubmitProject project={project.publicKey} proposalIdx={project.account.lastProposal -1} projectIdx={project.account.idx}/>
              </Dialog>
              )}
              
              
               {completed &&  project.account.status === 0 &&(
                <Button size="sm" className="flex items-center gap-3 mr-2" variant="red" onClick={() => removeProject(project.idx)}>
                  <Trash2 className="size-4" />
                  Remove
                </Button>
              )}
              </div>
            </span>

          </li>)
        })}
        </ul>
      ))}
    </div>
    </Dialog>
  )
}
