import { styled } from '@mui/material/styles'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { CalendarPicker, calendarPickerClasses } from '@mui/x-date-pickers/CalendarPicker'
import { PickersDay, pickersDayClasses } from '@mui/x-date-pickers/PickersDay'
import { Controller, Control } from 'react-hook-form'
import styles from '@/styles/share/form/calendar.module.scss'
import theme from '@/styles/export.module.scss'

const CustCalendarPicker = styled(CalendarPicker)(() => ({
    width: '100%',
    maxWidth: '320px'
}))

const CustPickersDay = styled(PickersDay)(() => ({
    fontSize: '16px',
    color: theme['color-primary'],
    backgroundColor: 'transparent',
    borderRadius: 0,
    [`&.${pickersDayClasses.today}`]: {
        backgroundColor: theme['color-secondary'],
        border: 'none',
    },
    [`&.${pickersDayClasses.selected}`]: {
        backgroundColor: theme['color-primary'],
        '&:hover': {
            backgroundColor: theme['color-primary'],
        },
        '&:focus': {
            backgroundColor: theme['color-primary'],
        }
    }
}))

const CalendarField = (props: {
    name: string,
    control: Control,
    label?: string,
    required?: boolean,
    [restProps: string]: any
}) => {
    const {
        name,
        control,
        label = '',
        required = false,
        ...rest
    } = props

    const renderDay = (date, selectedDates, pickersDayProps) => (
        <CustPickersDay {...pickersDayProps} />
    )

    return (
        <Controller
            name={name}
            control={control}
            rules={{
                required: required,
            }}
            render={({
                field: { onChange, value, name },
                fieldState: { error },
            }) => {
                return (
                    <div className={styles.calendar} data-field={name}>
                        {label ? (
                            <label>{label}</label>
                        ) : null}
                        <div className={styles.pricker} data-error={!!error}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <CustCalendarPicker
                                    {...rest}
                                    date={value ?? null}
                                    onChange={onChange}
                                    renderDay={renderDay}
                                />
                            </LocalizationProvider>
                        </div>
                    </div>
                )}
            }
        />
    )
}
export default CalendarField