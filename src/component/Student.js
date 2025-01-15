import React, { useState } from 'react'
 import './style.css'
 function Student() {
   const [values,setValues] = useState( {
      firstname:'',
      lastname: '',
      email: '',
      gender: '',
      select: '',
      resume: '',
      about: ''


   })
   const handleChanges = (e) =>  {
    const {name,value} = e.target
       setValues(
         {
            ...values,
            [name]:value
         }
       )
   }
   const handleSubmit = (e) => {
      e.preventDefault()
      console.log(values)

   }
   const resetHandle = () => {
      setValues(
         {
            firstname: '',
            lastname: '',
            email: ''
         }
      )
   }
  return (
   <form className='student' onSubmit={handleSubmit}>
    <h1>Student Registration Form</h1>
    <div>
    <label>First Name:</label>
    <input  type='text'  placeholder='Enter First Name'name='firstname' onChange={(e) =>handleChanges(e)}/>
    </div>
    <div>
    <label >Last Name:</label>
    <input  type='text' placeholder='Enter Last Name' name='lastname' onChange={(e) =>handleChanges(e)}/>
    </div>
    <div>
    <label>Email:</label>
    <input  type='text' placeholder='Enter Email' name='email' onChange={(e) =>handleChanges(e)} required/>
    </div>
    <div>
    <label>Gender</label>
    <input type='radio'name='gender' onChange={(e) =>handleChanges(e)}/>Male
     <input type='radio' name='gender' onChange={(e) =>handleChanges(e)}/>Female
     <input type='radio' name='gender' onChange={(e) =>handleChanges(e)}/>Other
     </div>
     <div>
        <label>Select Course</label>
     <select name='select' onChange={(e) =>handleChanges(e)}> 
        <option>JAVA</option>
        <option>C++</option>
     </select>
     </div>
     <div>
     <label>Upload resume</label>
     <input type='file' name="resume" onChange={(e) =>handleChanges(e)}/>
     </div>
    <label>About</label>
    <textarea  name = "about" id='about' cols="30" rows="10" onChange={(e) =>handleChanges(e)}></textarea>
    <button onClick={resetHandle}>Reset</button>
    <button>Submit</button>
   </form>
  )
}
export default Student
