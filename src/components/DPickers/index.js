import React, { useState } from 'react'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

function MaterialUIPickers() {

  const [selectedDate, setSelectedDate] = useState(new Date('2021-07-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
       <KeyboardDatePicker
          className='sales-view-date-picker'
          margin="normal"
          id="date-picker-dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
    </MuiPickersUtilsProvider>
  )
}

export default MaterialUIPickers