import { RouterProvider, createRouter } from '@tanstack/react-router'

import { routeTree } from './routeTree.gen'
import { WalletConnectProvider } from './components/wallet-connect-provider'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export function App() {
  return (
    <WalletConnectProvider>
      <RouterProvider router={router} />
    </WalletConnectProvider>
  )
}
