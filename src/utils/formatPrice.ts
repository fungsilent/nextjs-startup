import { toNumber, isNaN } from 'lodash'

const formatPrice = (price: string | number): string => {
    const num = toNumber(price)
    if (isNaN(num)) return ''
    return num.toLocaleString('en-US')
}
export default formatPrice