import logo from '../assets/logo-incon.svg'
import letsStart from '../assets/lets-start-illustration.svg'

import { DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'

export function EmptyProjects() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="SolancePro" />
      <img src={letsStart} alt="SolancePr" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        You haven't set any projects yet, how about setting one right now?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Register a task
        </Button>
      </DialogTrigger>
    </div>
  )
}
