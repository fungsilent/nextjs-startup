import { toQueryString } from '@/utils'
import moment from 'moment'

export type CalendarData = {
    text: string
    details: string
    location: string
    date: Date
    time: Date
}

const getGoogleCalendarLink = (data: CalendarData): string => {
    const { date, time, ...rest } = data
    let params = {
        action: 'TEMPLATE',
        dates: null,
        ctz: 'Asia/Hong_Kong',
        ...rest,
    }

    const startDate = moment(date).format('YYYYMMDD') + moment(time).format('THHmmSSZ')
    const endDate = moment(startDate).add(1, 'hours').format('YYYYMMDDTHHmmSSZ')
    params = {
        ...params,
        dates: `${startDate}/${endDate}`,
    }

    return 'https://www.google.com/calendar/render?' + toQueryString(params)
}

export default getGoogleCalendarLink