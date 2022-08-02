import { reduce, isNull } from 'lodash'

const toQueryString = (obj: Object): string => {
	const qs =  reduce(obj, (result, value, key) => (
		!isNull(value) ? result += `${key}=${value}&` : result
	), '')
	return qs.slice(0, -1)
}

export default toQueryString