import { createFileRoute } from '@tanstack/react-router'

import { App } from '../components/pages/freelancer-projects'

export const Route = createFileRoute('/freelancer-projects')({
  component: () => App(),
})
