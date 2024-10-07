import { Dialog } from '../ui/dialog'

import { Finances } from '../finances'

import { CreateProject } from '../create-project'

export function App() {
  
  return (
    <Dialog>
       <Finances /> 
      <CreateProject />
    </Dialog>
  )
  
}
