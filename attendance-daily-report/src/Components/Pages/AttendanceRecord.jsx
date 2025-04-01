import React, { useEffect, useState } from 'react'
import Header from '../Resuables/Header'
import AttendanceForm from '../Forms/AttendanceForm'
import { useSelector } from 'react-redux'

const tableHeadings = ['Name','Status','Date']
const AttendanceRecord = () => {
  const [tableHead, setTableHead] = useState(tableHeadings)
  const [attendance, setAttendance] = useState({
    name:'',
    attendance:'',
    date:'',
  })

  const attendanceData = useSelector((state) => state.attendance)
  useEffect(()=>{
    console.log("data: ",attendance);
  },[])

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 mt-5">
          <Header header={'Attendance'} subheader={'Daily Attendance Record'} />
        </div>
        <div className="col-md-12 mt-4">
          <AttendanceForm />
          <div className="table-responsive">
          <table className='table table-striped-columns'>
            <thead>
              <tr>
                <th>S.no</th>
                {
                  tableHead.map((head,index) => (
                    <th key={index}>{head}</th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {
                attendanceData.map((item,index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    {
                      tableHead.map((list)=>(
                        <td key={list}>{item[list.toLowerCase()]}</td>
                      ))
                    }
                  </tr>
                ))
              }
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttendanceRecord
