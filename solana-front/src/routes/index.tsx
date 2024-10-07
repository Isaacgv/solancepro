import { createFileRoute } from '@tanstack/react-router'
import { App } from '../components/pages/login'

export const Route = createFileRoute('/')({
  component: () => App(),
})
