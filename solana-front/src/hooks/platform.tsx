import { useEffect, useMemo, useState } from 'react'
import {
  Connection,
  clusterApiUrl,
  PublicKey,
  SystemProgram,
  Keypair,
  LAMPORTS_PER_SOL
} from '@solana/web3.js'
import toast from 'react-hot-toast'
import * as token from '@solana/spl-token';
import BN from 'bn.js';


// biome-ignore lint/style/useImportType: <explanation>
import { AnchorProvider, Program, IdlAccounts, Idl, web3 } from '@coral-xyz/anchor'

import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from '@solana/wallet-adapter-react'
import { authorFilter } from '../utils'
// biome-ignore lint/style/useImportType: <explanation>
import { IDL, Platform } from '../anchor/idl'
import { programId } from '../anchor/setup'

// biome-ignore lint/style/useImportType: <explanation>

export function useProjects() {
  const { connection } = useConnection()
  const [userData, setUserData] = useState<UserData | null>(null)

  const { publicKey } = useWallet()
  const anchorWallet = useAnchorWallet()

  const [initialized, setInitialized] = useState(false)
  const [initializedProjects, setInitializedProjects] = useState(false)
  const [initializedFetchProject, setInitializedFetchProject] = useState(false)
  const [initializedProposals, setInitializedProposals] = useState(false)
  const [initializedAllProjects, setInitializedAllProjects] = useState(false)
  const [lastProject, setLastProject] = useState(0)
  const [lastIncome, setLastIncome] = useState(0)
  const [lastOutcome, setLastOutcome] = useState(0)
  const [lastProposal, setLastProposal] = useState(0)
  const [projects, setProjects] = useState<ProjectData[]>([])
  const [proposals, setProposals] = useState<ProposalData[]>([])
  const [proposalFilter, setProposalFilter] = useState<ProposalData[]>([])
  const [projectFilter, setProjectFilter] = useState<ProjectData[]>([])
  const [allProjects, setAllProjects] = useState<ProjectData[]>([])
  const [loading, setLoading] = useState(false)
  const [loadingAllProjects, setLoadingAllProjects] = useState(false)
  const [loadingProjects, setLoadingProjects] = useState(false)
  const [loadingProposals, setLoadingProposals] = useState(false)
  const [loadingFetchProject, setLoadingFetchProject] = useState(false)
  const [loadingFetchProposal, setLoadingFetchProposal] = useState(false)
  const [transactionPending, setTransactionPending] = useState(false)
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const solToLamports = (sol) => sol * 1_000_000_000;
  const lamportsToSol = (lamports) => lamports / 1_000_000_000;

  //const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')

  const wallet = useAnchorWallet()
  const [program, setProgram] = useState<Program | null>(null)

  useEffect(() => {
    if (wallet) {
      const provider = new AnchorProvider(connection, wallet, {
        preflightCommitment: 'confirmed',
      })

      //const program = new Program<Platform>(IDL, programId, provider)
      const newProgram = new Program<Platform>(IDL, programId, provider)
      setProgram(newProgram as unknown as Program<Idl>)

      const [userPDA] = PublicKey.findProgramAddressSync(
        [new TextEncoder().encode('UserProfile')],
        newProgram.programId
      )

      const [projectPDA] = PublicKey.findProgramAddressSync(
        [new TextEncoder().encode('ProjectAccount')],
        newProgram.programId
      )


    }
  }, [wallet, connection])

  type ProjectData = IdlAccounts<Platform>['ProjectAccount']
  type ProposalData = IdlAccounts<Platform>['ProposalAccount']

  type UserData = IdlAccounts<Platform>['UserProfile']

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
   
    const findProfileAccounts = async () => {
      if (program && publicKey && !transactionPending) {
        try {
          setLoading(true)
          const encoder = new TextEncoder()
          const [profilePda, profileBump] =
            await PublicKey.findProgramAddressSync(
              [encoder.encode('USER_STATE'), publicKey.toBuffer()],
              program.programId
            )
          const profileAccount = (await program.account.userProfile.fetch(
            profilePda
          )) as UserData

          if (profileAccount) {
            setLastProject(profileAccount.lastProject)
            setLastIncome(lamportsToSol(profileAccount.incomes))
            setLastOutcome(lamportsToSol(profileAccount.outcomes))
            setInitialized(true)

            
          } else {
            setInitialized(false)
          }
        } catch (error) {
          console.log('Error fetching profile or projects:', error)
          setInitialized(false)
          setProjects([])
        } finally {
          setLoading(false)
        }
      }
    }

    findProfileAccounts()
  }, [publicKey, program, transactionPending])


  const listProjects = async () => {

    if (program && publicKey && !initializedProjects) {
      setInitializedProjects(true)
      try {
        const projectsAccounts = await program.account.projectAccount.all([
          authorFilter(publicKey.toString()),
        ])

        //const projectDataArray = projectsAccounts.map(pa => pa.account)
        setProjects(projectsAccounts)

        //const proposalsAccounts = await program.account.proposalAccount.all([
        //  authorFilter(publicKey.toString()),
        //])

        //const proposalDataArray = proposalsAccounts.map(pa => pa.account)
        //setProposals(proposalDataArray)

        //const allProjectsAccounts =
        //  await program.account.projectAccount.all()

        //const filterAllProjects = allProjectsAccounts.filter(
        //  project =>
        //    project.account.authority.toString() !== publicKey.toString()
        //)

        //const allProjectDataArray = filterAllProjects.map(pa => pa.account)
        //setAllProjects(allProjectDataArray)
        setLoadingProjects(true)
    }catch (error) {
      console.log(error)
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error(String(error))
      } 
    } finally {
        await delay(500);
        setInitializedProjects(false)
      }
    }}
  
  const listAllProjects = async () => {

      if (program && publicKey && !initializedAllProjects) {
        setInitializedAllProjects(true)
        try {
  
          //const proposalsAccounts = await program.account.proposalAccount.all([
          //  authorFilter(publicKey.toString()),
          //])
  
          //const proposalDataArray = proposalsAccounts.map(pa => pa.account)
          //setProposals(proposalDataArray)
  
          const allProjectsAccounts =
            await program.account.projectAccount.all()
  
          const filterAllProjects = allProjectsAccounts.filter(
            project =>
              project.account.authority.toString() !== publicKey.toString()
          )
  
          //const allProjectDataArray = filterAllProjects.map(pa => pa.account)
          setAllProjects(filterAllProjects)
          setLoadingAllProjects(true)
      }catch (error) {
        console.log(error)
        if (error instanceof Error) {
          toast.error(error.message)
        } else {
          toast.error(String(error))
        } 
      } finally {
          await delay(5000);
          setInitializedAllProjects(false)
        }
      }}

  const listProposals = async () => {
    if (program && publicKey && !initializedProposals) {
      setInitializedProposals(true)
      try {
        const projectsAccounts = await program.account.projectAccount.all([
          authorFilter(publicKey.toString()),
        ])

        //const projectDataArray = projectsAccounts.map(pa => pa.account)
        //setProjects(projectsAccounts)

        const proposalsAccounts = await program.account.proposalAccount.all([
          authorFilter(publicKey.toString()),
        ])

        const proposalDataArray = proposalsAccounts.map(pa => pa.account)
        setProposals(proposalDataArray)

        //const allProjectsAccounts =
        //  await program.account.projectAccount.all()

        //const filterAllProjects = allProjectsAccounts.filter(
        //  project =>
        //    project.account.authority.toString() !== publicKey.toString()
        //)

        //const allProjectDataArray = filterAllProjects.map(pa => pa.account)
        //setAllProjects(allProjectDataArray)
        setLoadingProposals(true)
    }catch (error) {
      console.log(error)
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error(String(error))
      } 
    } finally {
        await delay(5000);
        setInitializedProposals(false)
      }
    }}
  
  const initializeUser = async () => {
    if (program && publicKey) {
      try {
        setTransactionPending(true)
        const [profilePda, profileBump] = PublicKey.findProgramAddressSync(
          [new TextEncoder().encode('USER_STATE'), publicKey.toBuffer()],
          program.programId
        )

        const tx = await program.methods
          .initializeUser()
          .accounts({
            userProfile: profilePda,
            authority: publicKey,
            systemProgram: SystemProgram.programId,
          })
          .rpc()
        setInitialized(true)
        toast.success('Successfully initialized user.')
        
      } catch (error) {
        console.log(error)
        if (error instanceof Error) {
          toast.error(error.message)
        } else {
          toast.error(String(error))
        }
      } finally {
        setTransactionPending(false)
      }
    }
  }

  const addProject = async ({
    title,
    description,
    features,
    deliverables,
    budget,
  }: {
    title: string
    description: string
    features: string
    deliverables: string
    budget: number
  }) => {
    if (program && publicKey) {
      try {
        setTransactionPending(true)
        const [profilePda, profileBump] = PublicKey.findProgramAddressSync(
          [new TextEncoder().encode('USER_STATE'), publicKey.toBuffer()],
          program.programId
        )
        const [projectPda, projectBump] = PublicKey.findProgramAddressSync(
          [
            new TextEncoder().encode('PROJECT_STATE'),
            publicKey.toBuffer(),
            Uint8Array.from([lastProject]),
          ],
          program.programId
        )

        if (!title || !description || !features || !deliverables || !budget) {
          setTransactionPending(false)
          return
        }

        await program.methods
          .addProject(title, description, features, deliverables, budget)
          .accounts({
            userProfile: profilePda,
            projectAccount: projectPda,
            authority: publicKey,
            systemProgram: SystemProgram.programId,
          })
          .rpc()
        toast.success('Successfully added Project.')
      } catch (error) {
        console.log(error)
        if (error instanceof Error) {
          toast.error(error.message)
        } else {
          toast.error(String(error))
        }
      } finally {
        setTransactionPending(false)
      }
    }
  }

  const changeStatusProject = async (
    projectIdx: number,
    status: number
  ) => {
    if (program && publicKey) {
      try {
        setTransactionPending(true)
        setLoading(true)
        const [profilePda, profileBump] = PublicKey.findProgramAddressSync(
          [new TextEncoder().encode('USER_STATE'), publicKey.toBuffer()],
          program.programId
        )

        const [projectPda, projectBump] = PublicKey.findProgramAddressSync(
          [
            new TextEncoder().encode('PROJECT_STATE'),
            publicKey.toBuffer(),
            Uint8Array.from([projectIdx]),
          ],
          program.programId
        )


        await program.methods
          .chageStatusProject(projectIdx, status)
          .accounts({
            userProfile: profilePda,
            projectAccount: projectPda,
            authority: publicKey,
            systemProgram: SystemProgram.programId,
          })
          .rpc()
        toast.success('Successfully marked project.')
      } catch (error) {
        console.log(error)
        if (error instanceof Error) {
          toast.error(error.message)
        } else {
          toast.error(String(error))
        }
      } finally {
        setLoading(false)
        setTransactionPending(false)
      }
    }
  }

  const initializeTransaction = async (
    aToBAmount: number,
    bToAAmount: number,
    sideB: PublicKey,
    project: PublicKey,
    proposalIdx: number
  ) => {
    
    if (program && publicKey) {
      try {
        setTransactionPending(true)
        setLoading(true)

        const [proposalPda, proposalBump] = PublicKey.findProgramAddressSync(
          [
            new TextEncoder().encode('PROPOSAL_STATE'),
            project.toBuffer(),
            Uint8Array.from([proposalIdx]),
          ],
          program.programId
        )
        
        const [escrowPda, escrowBump] = PublicKey.findProgramAddressSync(
          [new TextEncoder().encode('ESCROW_STATE'), 
            publicKey.toBuffer(),
            sideB.toBuffer(),
            new Uint8Array(new BigUint64Array([BigInt(aToBAmount)]).buffer),
            project.toBuffer(),
            proposalPda.toBuffer()], 
          program.programId
        )

        await program.methods
          .initializeTransaction(
            new BN(aToBAmount),
            new BN(bToAAmount), 
            sideB,
            project, 
            proposalPda)
          .accounts({
            sideA: publicKey,
            sideB: sideB,
            escrow: escrowPda,
            projectAccount: project,
            proposalAccount: proposalPda,
            systemProgram: SystemProgram.programId,
          })
          .rpc()
        toast.success('Successfully marked project.')
      } catch (error) {
        console.log(error)
        if (error instanceof Error) {
          toast.error(error.message)
        } else {
          toast.error(String(error))
        }
      } finally {
        setLoading(false)
        setTransactionPending(false)
      }
    }
  }

  const finalizeTransaction = async (
    project: PublicKey,
    proposalIdx: number,
    sideB: PublicKey,
    aToBAmount: number
  ) => {
    
    if (program && publicKey) {
      try {
        setTransactionPending(true)
        setLoading(true)

        const [proposalPda, proposalBump] = PublicKey.findProgramAddressSync(
          [
            new TextEncoder().encode('PROPOSAL_STATE'),
            project.toBuffer(),
            Uint8Array.from([proposalIdx]),
          ],
          program.programId
        )

        const [escrowPda, escrowBump] = PublicKey.findProgramAddressSync(
          [new TextEncoder().encode('ESCROW_STATE'), 
            publicKey.toBuffer(),
            sideB.toBuffer(),
            new Uint8Array(new BigUint64Array([BigInt(aToBAmount)]).buffer),
            project.toBuffer(),
            proposalPda.toBuffer()], 
          program.programId
        )

        const [profileAPda, profileABump] = PublicKey.findProgramAddressSync(
          [new TextEncoder().encode('USER_STATE'), publicKey.toBuffer()],
          program.programId
        )

        const [profileBPda, profileBBump] = PublicKey.findProgramAddressSync(
          [new TextEncoder().encode('USER_STATE'), sideB.toBuffer()],
          program.programId
        )

        await program.methods
          .finalizeTransaction()
          .accounts({
            sideA:publicKey,
            escrow: escrowPda,
            sideB: sideB,
            userProfileA: profileAPda,
            userProfileB:profileBPda,
            projectAccount: project,
            proposalAccount: proposalPda,
            systemProgram: SystemProgram.programId,
          })
          .rpc()
        toast.success('Successfully marked project.')
      } catch (error) {
        console.log(error)
        if (error instanceof Error) {
          toast.error(error.message)
        } else {
          toast.error(String(error))
        }
      } finally {
        setLoading(false)
        setTransactionPending(false)
      }
    }
  }


  const submitProject = async ({
    projectAuthority,
    projectIdx,
    proposalIdx,
    ipfsHash,
    submitDescription
  } : { 
    projectAuthority: PublicKey,
    projectIdx: number,
    proposalIdx: number,
    ipfsHash: string,
    submitDescription: string
  }
  ) => {
    if (program && publicKey) {
      try {
        setTransactionPending(true)
        setLoading(true)

        const [projectPda, projectBump] = PublicKey.findProgramAddressSync(
          [
            new TextEncoder().encode('PROJECT_STATE'),
            projectAuthority.toBuffer(),
            Uint8Array.from([projectIdx]),
          ],
          program.programId
        )

        const [proposalPda, proposalBump] = PublicKey.findProgramAddressSync(
          [
            new TextEncoder().encode('PROPOSAL_STATE'),
            projectPda.toBuffer(),
            Uint8Array.from([proposalIdx]),
          ],
          program.programId
        )
        

        await program.methods
          .submitProject(
            proposalIdx,
            projectIdx, 
            projectAuthority,
            ipfsHash,
            submitDescription
            )
          .accounts({
            proposalAccount: proposalPda,
            projectAccount: projectPda,
            authority: publicKey, 
            systemProgram: SystemProgram.programId,
          })
          .rpc()
        toast.success('Successfully marked project.')
      } catch (error) {
        console.log(error)
        if (error instanceof Error) {
          toast.error(error.message)
        } else {
          toast.error(String(error))
        }
      } finally {
        setLoading(false)
        setTransactionPending(false)
      }
    }
  }


  const cancelSubmitProject = async ({
    project,
    projectIdx,
    proposalIdx
    
  } : { project: PublicKey,
    projectIdx: number,
    proposalIdx: number
    
  }
  ) => {
    if (program && publicKey) {
      try {
        setTransactionPending(true)
        setLoading(true)


        const [proposalPda, proposalBump] = PublicKey.findProgramAddressSync(
          [
            new TextEncoder().encode('PROPOSAL_STATE'),
            project.toBuffer(),
            Uint8Array.from([proposalIdx]),
          ],
          program.programId
        )
        

        await program.methods
          .cancelSubmitProject(
            proposalIdx,
            projectIdx, 
            )
          .accounts({
            projectAccount: project,
            proposalAccount: proposalPda,
            authority: publicKey, 
            systemProgram: SystemProgram.programId,
          })
          .rpc()
        toast.success('Successfully marked project.')
      } catch (error) {
        console.log(error)
        if (error instanceof Error) {
          toast.error(error.message)
        } else {
          toast.error(String(error))
        }
      } finally {
        setLoading(false)
        setTransactionPending(false)
      }
    }
  }


  const removeProject = async (projectIdx: number) => {
    if (program && publicKey) {
      try {
        setTransactionPending(true)
        setLoading(true)
        const [profilePda, profileBump] = PublicKey.findProgramAddressSync(
          [new TextEncoder().encode('USER_STATE'), publicKey.toBuffer()],
          program.programId
        )

        const [projectPda, projectBump] = PublicKey.findProgramAddressSync(
          [
            new TextEncoder().encode('PROJECT_STATE'),
            publicKey.toBuffer(),
            Uint8Array.from([projectIdx]),
          ],
          program.programId
        )

        await program.methods
          .removeProject(projectIdx)
          .accounts({
            userProfile: profilePda,
            projectAccount: projectPda,
            authority: publicKey,
            systemProgram: SystemProgram.programId,
          })
          .rpc()
        toast.success('Successfully removed project.')
      } catch (error) {
        console.log(error)
        if (error instanceof Error) {
          toast.error(error.message)
        } else {
          toast.error(String(error))
        }
      } finally {
        setLoading(false)
        setTransactionPending(false)
      }
    }
  }

  const fetchProject = async ({
    authorityPda,
    projectIdx
  }: {
    authorityPda: PublicKey,
    projectIdx: number
  }) => {
    if (program && publicKey && !initializedFetchProject) {
      setInitializedFetchProject(true)
      try {
        
        const [projectPda, projectBump] = PublicKey.findProgramAddressSync(
          [new TextEncoder().encode('PROJECT_STATE'), authorityPda.toBuffer(), Uint8Array.from([projectIdx])],
          program.programId
        )
        
        const projectAccount = await program.account.projectAccount.fetch(
          projectPda.toString())
        

        //const projectDataArray = projectAccount.map(pa => pa.account)
        setProjectFilter(projectAccount)

        setLoadingFetchProject(true)
      } catch (error) {
        console.log(error)
        if (error instanceof Error) {
          toast.error(error.message)
        } else {
          toast.error(String(error))
        }
      } finally {
        setInitializedFetchProject(false)
      }
    }
  }

  const fetchProposal = async ({
    project,
    proposalIdx
  }: {
    project: PublicKey
    proposalIdx: number
  }) => {
    if (program && publicKey && !initializedProjects) {
      setInitializedProjects(true)
      try {

        const [proposalPda, proposalBump] = PublicKey.findProgramAddressSync(
          [
            new TextEncoder().encode('PROPOSAL_STATE'),
            project.toBuffer(),
            Uint8Array.from([proposalIdx]),
          ],
          program.programId
        )
        
        const proposalAccount = await program.account.proposalAccount.fetch(
          proposalPda.toString())

        //const proposalDataArray = proposalsAccounts.map(pa => pa.account)
        setProposalFilter(proposalAccount)

        setLoadingFetchProposal(true)
      } catch (error) {
        console.log(error)
        if (error instanceof Error) {
          toast.error(error.message)
        } else {
          toast.error(String(error))
        }
      } finally {
        setInitializedProjects(false)
      }
    }
  }



  const fetchProposalAuthority = async (
    project: PublicKey,
    proposalIdx: number
  ) =>  {
    if (program && publicKey) {
      
      try {
        // Find the PDA for the proposal
        const [proposalPda, proposalBump] = PublicKey.findProgramAddressSync(
          [
            new TextEncoder().encode('PROPOSAL_STATE'),
            project.toBuffer(),
            Uint8Array.from([proposalIdx]),
          ],
          program.programId
        );
        
        const proposalAccount =  await program.account.proposalAccount.fetch(
          proposalPda.toString()
        );
  
        return proposalAccount.authority;
  
      } catch (error) {
        console.log(error);
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error(String(error));
        }
  
        return null; 
      } 
    }
  
    return null;
  };
  

  

  const addProposal = async ({
    description,
    budget,
    projectPda,
    lastProposal
  }: {
    description: string
    budget: number
    projectPda: PublicKey
    lastProposal: number
  }) => {
    const budgetSol = solToLamports(budget)
    if (program && publicKey) {
      try {
        
        setTransactionPending(true)

        const [proposalPda, proposalBump] = PublicKey.findProgramAddressSync(
          [
            new TextEncoder().encode('PROPOSAL_STATE'),
            projectPda.toBuffer(),
            Uint8Array.from([lastProposal]),
          ],
          program.programId
        )

        if (!description || !budget) {
          setTransactionPending(false)
          return
        }
        
        await program.methods
          .addProposal(description, new BN(budgetSol))
          .accounts({
            projectAccount: projectPda,
            proposalAccount: proposalPda,
            authority: publicKey,
            systemProgram: SystemProgram.programId,
          })
          .rpc()
        toast.success('Successfully added Proposal.')
      } catch (error) {
        console.log(error)
        if (error instanceof Error) {
          toast.error(error.message)
        } else {
          toast.error(String(error))
        }
      } finally {
        setTransactionPending(false)
      }
    }
  }

 

  const incompleteProjects = useMemo(
    () => projects.filter(project => project.account.status === 0),
    [projects]
  )

  const toConfirmProjects = useMemo(
    () => projects.filter(project => project.account.status === 1),
    [projects]
  )
  const progressProjects = useMemo(
    () => projects.filter(project => project.account.status === 2),
    [projects]
  )
  const completedProjects = useMemo(
    () => projects.filter(project => project.account.status === 3),
    [projects]
  )

  const finishedProjects = useMemo(
    () => projects.filter(project => project.account.status === 4),
    [projects]
  )

 
  const toConfirmProposals = useMemo(
    () => proposals.filter(proposal => proposal.accepted === 0),
    [proposals]
  )
  const progressProposals = useMemo(
    () => proposals.filter(proposal => proposal.accepted === 1),
    [proposals]
  )

  const submitedProposals = useMemo(
    () => proposals.filter(proposal => proposal.accepted === 2),
    [proposals]
  )
  const completedProposals = useMemo(
    () => proposals.filter(proposal => proposal.accepted === 3),
    [proposals]
  )
 

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const listAllIncompleteProjects = useMemo(
    () => allProjects.filter(project => project.account.status === 0),
    [allProjects]
  )

  return {
    initialized,
    initializeUser,
    loading,
    transactionPending,
    addProject,
    changeStatusProject,
    removeProject,
    addProposal,
    incompleteProjects,
    progressProjects,
    completedProjects,
    listAllIncompleteProjects,
    toConfirmProjects,
    listProjects,
    listAllProjects,
    loadingAllProjects, 
    loadingProjects,
    toConfirmProposals,
    progressProposals,
    completedProposals,
    loadingProposals,
    listProposals,
    projectFilter,
    fetchProject, 
    loadingFetchProject,
    fetchProposal,
    proposalFilter,
    loadingFetchProposal,
    initializeTransaction,
    submitedProposals,
    submitProject,
    finishedProjects,
    finalizeTransaction,
    lastOutcome,
    lastIncome,
    cancelSubmitProject,
    fetchProposalAuthority

    
    
    

  }
}
