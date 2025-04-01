import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAttendance } from '../../redux/slice/AttendanceReducer';
const AttendanceForm = () => {
    const [attendance, setAttendance] = useState({
        name: '',
        date: '',
        status:''
    });

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addAttendance(attendance))
        setAttendance({
            name: '',
            date: '',
            status:''
        })
    }
  return (
    <div>
      <div className="row mb-4">
            <div className="col">
              <input type="text" className="form-control" value={attendance.name} onChange={(e) => setAttendance({...attendance, name: e.target.value})} placeholder="Name" aria-label="First name" />
            </div>
            <div className="col">
              <input type="text" className="form-control" value={attendance.status} onChange={(e) => setAttendance({...attendance, status: e.target.value})} placeholder="Present / Absent" aria-label="Last name" />
            </div>
            <div className="col">
              <input type="date" className="form-control" value={attendance.date} onChange={(e) => setAttendance({...attendance, date: e.target.value})} placeholder="" aria-label="First name" />
            </div>
            <div className="col">
              <button className="btn btn-success" onClick={(e)=>handleSubmit(e)}>Submit</button>
            </div>
          </div>
    </div>
  )
}

export default AttendanceForm
