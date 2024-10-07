import { Eye, Trash2, SquarePen, Upload } from 'lucide-react'
import { Button } from './ui/button'
import { Dialog, DialogTrigger } from './ui/dialog'
import { VisualizeProposal } from './visualize-proposal'
import { SendProject } from './send-project'
import { VisualizeProposalProject } from './visualize-proposal-project'
import multiavatar from '@multiavatar/multiavatar/esm'
import type { IdlAccounts } from '@coral-xyz/anchor'
import type { Platform } from '../anchor/idl'
import { useProjects } from '../hooks/platform'


type ProposalData = IdlAccounts<Platform>['ProposalAccount']

interface TodoSectionProps {
  proposals: ProposalData[]
  title: string
  completed?: boolean
  isLoading: boolean
  makeProposal: boolean
}

export function ProposalSection({ title, completed, proposals, isLoading }: TodoSectionProps) {
 const { fetchProject, projectFilter } = useProjects()
   

  return (
    <Dialog>
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-medium">{title}</h2>
      { !isLoading ?  (
        <p className="text-center text-gray-500">Loading...</p> 
      ) : (proposals.length === 0 ? (
        <p className="text-center text-gray-500">No proposals</p> 
      ) : (
        <ul>
        {proposals.map((proposal, index) => {
          // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
          const walletAddress = proposal.projectAuthority ? proposal.projectAuthority.toBase58() : null;
          const svgCode = multiavatar(walletAddress);
          return ( <li key={proposal.idx}>
            <span className="group bg-black border border-zinc-900 rounded-lg px-4 py-5 flex justify-between items-center outline-none">
              <span  className="w-10 h-10 inline-block filter brightness-90 drop-shadow-xl saturate-50 contrast-100"
                    dangerouslySetInnerHTML={{ __html: svgCode }} >
            
              </span>
              <span className="text-white ml-3"> {proposal.projectTitle} </span>
              <div className="flex items-center gap-4  ml-4">
              <DialogTrigger asChild>
                <Button size="sm" className="flex items-center gap-2 ml-auto mr-2" variant="primary2">
                  <Eye className="size-4" />
                  Proposal
                  </Button>
              </DialogTrigger>
              <VisualizeProposal  proposal={proposal}/>

            
              <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" className="flex items-center gap-2 ml-auto mr-2" >
                  <Eye className="size-4" />
                  Project
                  </Button>
              </DialogTrigger>
              <VisualizeProposalProject  authorityPda={proposal.projectAuthority}  projectIdx={proposal.projectIdx}/>
              </Dialog>
              {proposal.accepted === 1 && (
              <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" className="flex items-center gap-2 ml-auto mr-2"  variant="indigo">
                  <Upload className="size-4" />
                  Submit
                  </Button>
              </DialogTrigger>
              <SendProject  projectAuthority={proposal.projectAuthority}  projectIdx={proposal.projectIdx} proposalIdx={proposal.idx}/>
              
              </Dialog>
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
