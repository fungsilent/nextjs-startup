import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { CalendarPicker, CalendarPickerProps } from '@mui/x-date-pickers/CalendarPicker'
import { PickersDay } from '@mui/x-date-pickers/PickersDay'
import { Controller, FieldPath, FieldValues, UseControllerProps } from 'react-hook-form'
import { setClassName } from '@/utils'
import styles from '@/styles/share/form/calendar.module.scss'

type CalendarFieldProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = UseControllerProps<TFieldValues, TName> & Omit<CalendarPickerProps<Date>, 'date' | 'onChange'> & {
    label?: string
    required?: boolean
    layout?: 'default'
}

const CalendarField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    name,
    control,
    label = '',
    required = false,
    layout = 'default',
    ...rest
}: CalendarFieldProps<TFieldValues, TName>) => {
    const renderDay = (date, selectedDates, pickersDayProps) => (
        <PickersDay
            {...pickersDayProps}
            classes={{
                root: styles.date,
                today: styles.today,
                selected: styles.selected,
            }}
        />
    )

    return (
        <Controller
            name={name}
            control={control}
            rules={{
                required,
            }}
            render={({
                field: { onChange, value, name },
                fieldState: { error },
            }) => (
                    <div className={setClassName([styles.calendar, styles[`layout-${layout}`]])} data-field={name}>
                        {label ? (
                            <label>{label}</label>
                        ) : null}
                        <div className={setClassName([styles.root, [!!error, styles.error]])}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <CalendarPicker
                                    {...rest}
                                    classes={{
                                        root: styles.picker
                                    }}
                                    date={value ?? null}
                                    onChange={onChange}
                                    renderDay={renderDay}
                                />
                            </LocalizationProvider>
                        </div>
                    </div>
                )
            }
        />
    )
}
export default CalendarField