import { X } from 'lucide-react'
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

import { z } from 'zod'

import { TextArea } from './ui/text-area'

import type { IdlAccounts } from '@coral-xyz/anchor'
import type { Platform } from '../anchor/idl'


type ProjectData = IdlAccounts<Platform>['ProjectAccount']
const CreateProjectForm = z.object({
  title: z.string().min(1, 'Provide the project title'),
  description: z.string().min(1, 'Provide the description of the project'),
  features: z.string().min(1, 'Provide the key features of the project'),
  deliverables: z.string().min(1, 'Provide the deliverables of the project'),
  desiredBudget: z.coerce.number().min(1).max(7),
})

interface VizualizeProjectForm {
  project: ProjectData
  
}



export function VisualizeProject( {project}: VizualizeProjectForm) {
  const budgetList = ["Less than $50 US", "$50 - $150 US", "$150 - $550 US", "$550 - $1500 US","$1500 - $2500 US", "Over $3500 US" ]
  const budgetIcons = ["🙂", "🤗", "😎", "💪🏽", "🦾", "🤖", "👽"]

 
  return (
    
    <DialogVisualizeContent>
      <div className="flex flex-col gap-6 h-full">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <DialogTitle>Project</DialogTitle>
            <DialogClose>
              <X className="size-5 text-zinc-600" />
            </DialogClose>
          </div>

          <DialogDescription>
            Project Description.
          </DialogDescription>
        </div>

        <form
          //onSubmit={handleSubmit(handleCreateGoal)}
          
          className="flex-1 flex flex-col justify-between"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Project title</Label>
              <Input
                id="title"
                autoFocus
                value={project.title}
                readOnly
              />

              
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="description">Description</Label>
              <TextArea
                id="description"
                autoFocus
                // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
                value={project.description}
                readOnly
                
              />

            
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="features">Key Features</Label>
              <TextArea
                id="features"
                autoFocus
                value={project.features}
                readOnly
               
              />
              
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="deliverables">Deliverables</Label>
              <TextArea
                id="deliverables"
                autoFocus
                // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
                value={project.deliverables}
                readOnly
              />

             
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="desiredBudget">Budget</Label>
              <RadioGroup value={"1"}>
              <RadioGroupItem value="1">
                <RadioGroupIndicator />
                  <span className="text-zinc-300 text-sm font-medium leading-none">
                    {budgetList[project.budget - 1]}
                  </span>
                  <span className="text-lg leading-none">{budgetIcons[project.budget - 1]}</span>
                </RadioGroupItem>
              </RadioGroup>
            </div>
          </div>

          <div className="flex items-center gap-3 py-10">
            <DialogClose asChild>
              <Button type="button" className="flex-1" variant="secondary">
                Close
              </Button>
            </DialogClose>
            
          </div>
        </form>
      </div>
    </DialogVisualizeContent>
  )
}
