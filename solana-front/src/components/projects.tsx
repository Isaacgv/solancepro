
import IconComponent  from './icon'
import  {BackgroundComponent }  from '../components/background'

import { Separator } from './ui/separator'

import { TodoSection, } from './todosection'
import {useProjects} from '../hooks/platform'


//dayjs.locale(ptBR)

export function Projects() {

  const { listAllIncompleteProjects, listAllProjects, loadingAllProjects } = useProjects()
  listAllProjects()
  return (
    <BackgroundComponent className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

    <div className="mx-20  lg:mx-20  bg-gray-800 bg-opacity-80 rounded-lg p-10 shadow-lg ">

    <div className="py-0 max-w-[600px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <IconComponent />
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <span className="text-2xl font-semibold capitalize">Freelance Online Jobs</span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Number of projects {listAllProjects.length}
          </span>
        </div>
      </div>

      <Separator />
     
      <TodoSection title="Projects" completed={false} projects={listAllIncompleteProjects} isLoading={loadingAllProjects} makeProposal={true}/>
      
    </div>
    </div>
    </BackgroundComponent>
  )
}
