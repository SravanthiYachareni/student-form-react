import React from 'react'
 import './style.css'
 function Student() {
  return (
   <form className='student'>
    <h1>Student Registration Form</h1>
    <label>First Name:</label>
    <input type='text'/>
    <label>Last Name:</label>
    <input type='text'/>
    <label>Email:</label>
    <input type='text'/>
    <label>comments</label>
    <textarea></textarea>
   </form>
  )
}
export default Student
