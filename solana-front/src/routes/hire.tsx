import { createFileRoute } from '@tanstack/react-router'
import { App } from '../components/pages/hire'

export const Route = createFileRoute('/hire')({
  component: () => App(),
})
