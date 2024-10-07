import { createFileRoute } from '@tanstack/react-router'
import { App } from '../components/pages/projects'

export const Route = createFileRoute('/find-projects')({
  component: () => App(),
})
