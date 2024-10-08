import { X } from 'lucide-react'
import {
  Dialog,
  DialogClose,
  DialogContent,
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

import { TextArea } from './ui/text-area'
import { useProjects } from '../hooks/platform'

const CreateProjectForm = z.object({
  title: z.string().min(1, 'Provide the project title').max(96, 'The title must be 96 characters or fewer'),
  description: z.string().min(1, 'Provide the description of the project').max(700, 'The description must be 700 characters or fewer'),
  features: z.string().min(1, 'Provide the key features of the project').max(700, 'The key features must be 700 characters or fewer'),
  deliverables: z.string().min(1, 'Provide the deliverables of the project').max(700, 'The deliverables must be 700 characters or fewer'),
  desiredBudget: z.coerce.number().min(1).max(7),
})

type CreateProjectForm = z.infer<typeof CreateProjectForm>

export function CreateProject() {

  const { register, control, handleSubmit, formState, reset } =
    useForm<CreateProjectForm>({
      resolver: zodResolver(CreateProjectForm),
    })

  async function handleCreateProject(data: CreateProjectForm) {
    await addProject({
      title: data.title,
      description: data.description,
      features: data.features,
      deliverables: data.deliverables,
      budget: data.desiredBudget,
    })

  //console.log(fetchProposal("6R9ufYNWyYPkChPN9M7VVmicRK5soPmcAeDkzY5tiy4L", 0))

  //  await addProposal({
  //    description: 'descuento',
  //    budget: 1,
  //    project_idx: 2,
  //  })

    

    reset()
  }
  const { addProject, addProposal, changeStatusProject, fetchProposal } = useProjects()

  return (
    
    <DialogContent>
      <div className="flex flex-col gap-6 h-full">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <DialogTitle>Set a project</DialogTitle>
            <DialogClose>
              <X className="size-5 text-zinc-600" />
            </DialogClose>
          </div>
          

          <DialogDescription>
            Post your project. Tell the freelancer about the project.
          </DialogDescription>
        </div>

        <form
          //onSubmit={handleSubmit(handleCreateGoal)}
          onSubmit={handleSubmit(handleCreateProject)}
          className="flex-1 flex flex-col justify-between"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Project title (max 96 characters)</Label>
              <Input
                id="title"
                autoFocus
                placeholder="Example: Design of a website for a restaurant"
                {...register('title')}
              />

              {formState.errors.title && (
                <p className="text-red-400 text-sm">
                  {formState.errors.title.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="description">Describe the project (max 700 characters)</Label>
              <TextArea
                id="description"
                autoFocus
                // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
                placeholder={`Example:\nTo design and develop a modern, user-friendly, and responsive website for a restaurant that enhances online visibility and boosts customer engagement. The website will showcase the restaurant’s menu, ambiance, and services while providing an easy-to-navigate platform for users to explore the restaurant and make reservations.`}
                {...register('description')}
              />

              {formState.errors.description && (
                <p className="text-red-400 text-sm">
                  {formState.errors.description.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="features">Key Features (max 700 characters)</Label>
              <TextArea
                id="features"
                autoFocus
                placeholder={`Example:\nResponsive Design:\nThe website will be fully responsive and optimized for all devices, including desktops, tablets, and mobile phones.\n\nMenu Display:\nAn interactive and visually appealing menu section that includes item descriptions, prices, and high-quality images of dish \n\nPhoto Gallery:\nA gallery section to showcase the restaurant’s interior, ambiance, and events through high-quality image.
                `}
                {...register('features')}
              />
              {formState.errors.features && (
                <p className="text-red-400 text-sm">
                  {formState.errors.features.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="deliverables">Deliverables (max 700 characters)</Label>
              <TextArea
                id="deliverables"
                autoFocus
                // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
                placeholder={`Example:\n- Fully functional and responsive website.\n- High-quality design reflecting the restaurant’s brand and ambiance.\n- Integrated reservation and contact forms.\n- Photo gallery and menu management.`}
                {...register('deliverables')}
              />

              {formState.errors.deliverables && (
                <p className="text-red-400 text-sm">
                  {formState.errors.deliverables.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="desiredBudget">Budget</Label>
              <Controller
                control={control}
                name="desiredBudget"
                defaultValue={3}
                render={({ field }) => {
                  return (
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={String(field.value)}
                    >
                      <RadioGroupItem value="1">
                        <RadioGroupIndicator />
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          Less than $50 US
                        </span>
                        <span className="text-lg leading-none">🙂</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="2">
                        <RadioGroupIndicator />
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          $50 - $150 US
                        </span>
                        <span className="text-lg leading-none">🤗</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="3">
                        <RadioGroupIndicator />
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          $150 - $550 US
                        </span>
                        <span className="text-lg leading-none">😎</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="4">
                        <RadioGroupIndicator />
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          $550 - $1500 US
                        </span>
                        <span className="text-lg leading-none">💪🏽</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="5">
                        <RadioGroupIndicator />
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          $1500 - $2500 US
                        </span>
                        <span className="text-lg leading-none">🦾</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="6">
                        <RadioGroupIndicator />
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          $2500 - $3500 US
                        </span>
                        <span className="text-lg leading-none">🤖</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="7">
                        <RadioGroupIndicator />
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          Over $3500 US
                        </span>
                        <span className="text-lg leading-none">👽</span>
                      </RadioGroupItem>
                    </RadioGroup>
                  )
                }}
              />
            </div>
          </div>

          <div className="flex items-center gap-3 py-10">
            <DialogClose asChild>
              <Button type="button" className="flex-1" variant="secondary">
                Close
              </Button>
            </DialogClose>
            
            <Button className="flex-1">Publish</Button>
            
          </div>
        </form>
      </div>
    </DialogContent>
  
  )
}
