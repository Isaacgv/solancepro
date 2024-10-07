import { Plus } from 'lucide-react'
import { Button } from './ui/button'
import { Dialog, DialogTrigger } from './ui/dialog'
import IconComponent from './icon'
import  {BackgroundComponent }  from '../components/background'

import { Separator } from './ui/separator'

import { TodoSection } from './todosection'

import { CreateProject } from './create-project'
import {useProjects} from '../hooks/platform'


export function ProjectsSummary() {

  const { incompleteProjects, toConfirmProjects,progressProjects, completedProjects, listProjects, loadingProjects, finishedProjects} = useProjects()
  listProjects()
  
  return (
    <BackgroundComponent className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

    <div className="mx-20  lg:mx-20 bg-gray-800 bg-opacity-80 rounded-lg p-10 shadow-lg ">
    <Dialog>
    <div className="py-0  max-w-[600px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <IconComponent />
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <span className="text-2xl font-semibold capitalize">Posted Projects</span>
        </div>
        

        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Add a New Project
          </Button>
        </DialogTrigger>

        <CreateProject />

      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            You have {finishedProjects.length} project finished.
            
          </span>
        </div>
      </div>

      <Separator />
      <TodoSection title="No Assigned Projects" completed={true} projects={incompleteProjects} isLoading={loadingProjects} makeProposal={false} viewProposal={false}/>

      <Separator />
      <TodoSection title="To Confirm Proposals" completed={true} projects={toConfirmProjects} isLoading={loadingProjects} makeProposal={false} viewProposal={true}/>

      <Separator />
      <TodoSection title="In Progress" completed={false} projects={progressProjects} isLoading={loadingProjects} makeProposal={false} viewProposal={true}/>

      <Separator />
      <TodoSection title="Completed" completed={true} projects={completedProjects} isLoading={loadingProjects} makeProposal={false} viewProposal={true}/>

      <Separator />
      <TodoSection title="Approved" completed={true} projects={finishedProjects} isLoading={loadingProjects} makeProposal={false} viewProposal={true}/>
    </div>
    </Dialog>
     </div>
     </BackgroundComponent>
  )
}
