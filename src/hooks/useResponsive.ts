import useMediaQuery from '@mui/material/useMediaQuery'
import theme from '@/styles/export.module.scss'

type Responsive = {
    isDesktop: boolean
    isTablet: boolean
    isMobile: boolean
    isResponsive: boolean
}

const useResponsive = (): Responsive => {
    const isTablet = useMediaQuery(`(max-width: ${theme['breakpoint-tablet']})`)
    const isMobile = useMediaQuery(`(max-width: ${theme['breakpoint-mobile']})`)
    return {
        isDesktop: !isTablet,
        isTablet: isTablet && !isMobile,
        isMobile,
        isResponsive: isTablet,
    }
}

export default useResponsive