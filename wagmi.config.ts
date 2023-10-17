import { defineConfig } from '@wagmi/cli'
import { foundry, react } from '@wagmi/cli/plugins'

export default { out: 'wagmi-generated.ts', contracts: [], plugins: [
    foundry({
        project: "./"
    }),
    react()
] }
