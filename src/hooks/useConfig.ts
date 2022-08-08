import getConfig from 'next/config'

type Config = {
    seo: {
        siteName: string
        description: string
    }
}

const useConfig = (): Config => {
    return getConfig().publicRuntimeConfig as Config
}

export default useConfig