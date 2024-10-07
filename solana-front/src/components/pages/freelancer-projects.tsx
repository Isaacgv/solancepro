import { Dialog } from '../ui/dialog'

import { FreelancerProjects } from '../freelancer-projects'

import { CreateProject } from '../create-project'

export function App() {
 

  return (
    <Dialog>
        <FreelancerProjects />
      <CreateProject />
    </Dialog>
  )
}
