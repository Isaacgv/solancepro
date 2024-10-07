import { createFileRoute } from '@tanstack/react-router'

import { App } from '../components/pages/finances'

export const Route = createFileRoute('/finances')({
  component: () => App(),
})
