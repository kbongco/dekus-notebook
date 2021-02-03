import React from 'react';
import './Student.css'


export default function Students(props) {
  const {students} = props
  console.log(props)
  return (
    <div className='all-students'>
      {students.map((student) => (
        <div className='students-container'>
          <p>{student.name}</p>
          <p>{student.quirk}</p>
          <img className='student-pics'src={student.images[1]}/>
          </div>
      ))}
        </div>
  )
}