import React from 'react'
 import './style.css'
 function Student() {
  return (
   <form className='student'>
    <h1>Student Registration Form</h1>
    <div>
    <label>First Name:</label>
    <input  type='text'  placeholder='Enter First Name'name='firstname'/>
    </div>
    <div>
    <label >Last Name:</label>
    <input  type='text' placeholder='Enter Last Name' name='lastname'/>
    </div>
    <div>
    <label>Email:</label>
    <input  type='text' placeholder='Enter Email' name='email'/>
    </div>
    <div>
    <label>Gender</label>
    <input type='radio'name='gender'/>Male
     <input type='radio' name='gender'/>Female
     <input type='radio' name='gender'/>Other
     </div>
     <div>
        <label>Select Course</label>
     <select> 
        <option>JAVA</option>
        <option>C++</option>
     </select>
     </div>
     <div>
     <label>Upload resume</label>
     <input type='file'/>
     </div>
    <label>About</label>
    <textarea id='about' cols="30" rows="10"></textarea>
    <button>Reset</button>
    <button>Submit</button>
   </form>
  )
}
export default Student
