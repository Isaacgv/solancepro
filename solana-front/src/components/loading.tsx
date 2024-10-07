import type { ReactNode } from 'react'

interface LoadingProps {
  loading: boolean
  children: ReactNode
}

const Loading = ({ loading, children }: LoadingProps) => {
  if (loading) return <p>Loading...</p>

  return <>{children}</>
}

export default Loading
