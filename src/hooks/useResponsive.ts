import { useSelector } from '@/hooks/useStore'
import useMediaQuery from '@mui/material/useMediaQuery'
import theme from '@/styles/export.module.scss'

type Responsive = {
    isDesktop: boolean
    isTablet: boolean
    isMobile: boolean
    isResponsive: boolean
}

const useResponsive = (): Responsive => {
    const isSsr = useSelector((state) => state.app.isSsr)
    const isTablet = useMediaQuery(`(max-width: ${theme['breakpoint-desktop']})`)
    const isMobile = useMediaQuery(`(max-width: ${theme['breakpoint-tablet']})`)
    return {
        isDesktop: isSsr ? isSsr : !isTablet,
        isTablet: isSsr ? isSsr : (isTablet && !isMobile),
        isMobile: isSsr ? isSsr : isMobile,
        isResponsive: isSsr ? isSsr : isTablet,
    }
}

export default useResponsive