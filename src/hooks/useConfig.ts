import getConfig from 'next/config'

const useConfig = () => {
    return getConfig().publicRuntimeConfig
}

export default useConfig