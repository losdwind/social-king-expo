import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, polygonAmoy } from 'wagmi/chains'

export const config = createConfig({
    chains: [mainnet, sepolia],
    transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
        [polygonAmoy.id]: http(process.env.EXPO_PUBLIC_ALCHEMY_RPC),
    },
})