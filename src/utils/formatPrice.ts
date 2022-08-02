import { toNumber } from 'lodash'

const formatPrice = (price: string | number) => {
    return toNumber(price).toLocaleString('en-US')
}
export default formatPrice