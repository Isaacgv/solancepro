import { X } from 'lucide-react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from './ui/dialog'
import { Label } from './ui/label'

import { Button } from './ui/button'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { TextArea } from './ui/text-area'
import { useProjects } from '../hooks/platform'

import React, { useState } from 'react';
import axios from 'axios';

const SubmitProjectForm = z.object({
  description: z.string().min(1, 'Provide the description of the project'),
})

type SubmitProjectForm = z.infer<typeof SubmitProjectForm>



export function SendProject( {projectAuthority, projectIdx, proposalIdx}) {

    const { register, control, handleSubmit, formState, reset } =
    useForm<SubmitProjectForm>({
      resolver: zodResolver(SubmitProjectForm),
    })
    const { submitProject } = useProjects()


    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileProject(event.target.files[0]);
    }
    };

    const [fileProject, setFileProject] = useState<File | null>(null);
    const [ipfsUrl, setIpfsUrl] = useState<string | ''>('');  
    


    async function handleSubmitProject(data: SubmitProjectForm) {
        if (!fileProject) {
            alert('Please select a file to upload.');
            return;
          }
      
          const pinataApiKey = '564b27742401c6791dc5';
          const pinataSecretApiKey = 'badaa39e92e7c66dc55100e62e114ca8977a2eb78e297ba28a994e6370806075';
          const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
      
          // Create a new form data object to send the file
          const dataFile = new FormData();
          dataFile.append('file', fileProject);
      
          try {
            const response = await axios.post(url, dataFile, {
              headers: {
                'Content-Type': `multipart/form-data`,
                pinata_api_key: pinataApiKey,
                pinata_secret_api_key: pinataSecretApiKey,
              },
            });
      
            // The IPFS hash from Pinata
            const ipfsHashLink = response.data.IpfsHash;
            const generatedUrl = `https://gateway.pinata.cloud/ipfs/${ipfsHashLink}`;
      
            // Set the IPFS URL
            setIpfsUrl(generatedUrl);

            await submitProject({
                projectAuthority: projectAuthority,
                projectIdx: projectIdx,
                proposalIdx: proposalIdx,
                ipfsHash:generatedUrl,
                submitDescription: data.description
             
            })
      
          } catch (error) {
            console.error('Error uploading file:', error);
          }


        

        reset()
    }

    return (
        
        <DialogContent>
        <div className="flex flex-col gap-6 h-full">
            <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <DialogTitle>Proposal</DialogTitle>
                <DialogClose>
                <X className="size-5 text-zinc-600" />
                </DialogClose>
            </div>
            

            <DialogDescription>
                Submit the Project
            </DialogDescription>
            </div>

            <form
            onSubmit={handleSubmit(handleSubmitProject)}
            
            className="flex-1 flex flex-col justify-between"
            >
            <div className="flex flex-col gap-6">
                
                <div className="flex flex-col gap-2">
                <Label htmlFor="description">Project description</Label>
                <TextArea
                    id="description"
                    autoFocus
                    // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
                    placeholder={`Example:\nFrontend (React): \nsrc/App.js: The main entry point of the React application. It sets up routes and global state management for the application.`}
                    {...register('description')}
                />

                {formState.errors.description && (
                    <p className="text-red-400 text-sm">
                    {formState.errors.description.message}
                    </p>
                )}
                </div>
                
                <div className="flex flex-col gap-2">
                <Label htmlFor="description">File Upload</Label>
                
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden" // Hide the default file input
                    id="file-upload"
                />
                <label
                    htmlFor="file-upload"
                    className="cursor-pointer bg-indigo-500 text-white hover:bg-indigo-600 ring-indigo-500 rounded-md px-4 py-2"
                >
                    Select File
                </label>
            
                </div>
                

            </div>

            <div className="flex items-center gap-3 py-10">
                <DialogClose asChild>
                <Button type="button" className="flex-1" variant="secondary">
                    Close
                </Button>
                </DialogClose>
                
                <Button className="flex-1">Submit Project</Button>
                
            </div>
            </form>
        </div>
        </DialogContent>
    
    )
    }
