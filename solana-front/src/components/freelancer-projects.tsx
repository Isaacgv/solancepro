
import IconComponent  from './icon'
import  {BackgroundComponent }  from '../components/background'

import { Separator } from './ui/separator'

import { ProposalSection } from './proposalsection'
import {useProjects} from '../hooks/platform'

//dayjs.locale(ptBR)

export function FreelancerProjects() {
  const {  toConfirmProposals, progressProposals, completedProposals, submitedProposals, loadingProposals, listProposals} = useProjects()

  listProposals()
  return (
    <BackgroundComponent className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

    <div className="mx-20  lg:mx-20  bg-gray-800 bg-opacity-80 rounded-lg p-10 shadow-lg ">
    <div className="py-0 max-w-[600px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <IconComponent/>
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <span className="text-2xl font-semibold capitalize">My Projects</span>
        </div>

        
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            You have completed {completedProposals.length} project
          </span>
        </div>
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            You have {progressProposals.length} project progress
          </span>
        </div>
      </div>

      <Separator />
     
      
      <ProposalSection title="To be Confirmed" completed={true} proposals={toConfirmProposals} isLoading={loadingProposals} makeProposal={false}/>

      <Separator />
      <ProposalSection title="In Progress" completed={false} proposals={progressProposals} isLoading={loadingProposals} makeProposal={false}/>

      <Separator />
      <ProposalSection title="Submited" completed={false} proposals={submitedProposals} isLoading={loadingProposals} makeProposal={false}/>

      <Separator />
      <ProposalSection title="Completed" completed={false} proposals={completedProposals} isLoading={loadingProposals} makeProposal={false}/>

    </div>
    </div>
    </BackgroundComponent>
  )
}
