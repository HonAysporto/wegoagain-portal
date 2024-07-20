import React, { useState } from "react";

const Portal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allStudents, setAllStudents] = useState([]);
  const [isEditing, setisEditing] = useState(false);
  const [editIndex, seteditIndex] = useState(null);
  const [signBtn, setsignBtn] = useState('register')


  const register = () => {
    if (isEditing) {
        const updatedStudent = [...allStudents];
        updatedStudent[editIndex] = {firstName, lastName, email, password}
        setAllStudents(updatedStudent)
        setisEditing(false)
        seteditIndex(null)
        setsignBtn('register')
    } else {
    let student = { firstName, lastName, email, password };
    setAllStudents([...allStudents, student]);
    console.log(allStudents);
    }
    // Clear form fields after registration
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");

  };

  const delet = (index) => {
    const updatedStudent = allStudents.filter((student, i)=> i !== index)
    setAllStudents(updatedStudent)
  }

  const editStudent = (index) => {
    setisEditing(true);
    seteditIndex(index);
    const studentToEdit = allStudents[index];
    setFirstName(studentToEdit.firstName);
    setLastName(studentToEdit.lastName);
    setEmail(studentToEdit.email);
    setPassword(studentToEdit.password)
    setsignBtn('update')
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="shadow-lg w-full min-w-4/5 sm:w-1/2 rounded bg-yellow-200">
          <div className="flex flex-col justify-center p-5">
            <h1 className="text-2xl font-bold mb-7 text-center text-yellow-700">
              School Portal
            </h1>
            <p className="text-center mb-1">Fill in the form below</p>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              className="pl-4 h-12 border rounded-full mb-4 bg-white text-gray-800 placeholder-gray-400 border-gray-300"
              type="text"
              placeholder="First Name"
            />
            <input
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              className="pl-4 h-12 border rounded-full mb-4 bg-white text-gray-800 placeholder-gray-400"
              type="text"
              placeholder="Last Name"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="pl-4 h-12 border rounded-full mb-4 bg-white text-gray-800 placeholder-gray-400"
              type="text"
              placeholder="Email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="pl-4 h-12 border rounded-full mb-4 bg-white text-gray-800 placeholder-gray-400"
              type="password"
              placeholder="Password"
            />
            <button
              onClick={register}
              className="bg-yellow-700 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full shadow-md"
            >
              {signBtn}
            </button>
          </div>
        </div>
      </div>
      <hr className="text-5xl mt-5" />
      <div className="flex flex-wrap justify-center gap-4 mt-7">
        {allStudents.map((student, index) => (
          <div key={index} className="bg-white w-72 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {student.firstName} {student.lastName}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {student.email}
              </span>
              <div className="flex mt-4 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>editStudent(index)}
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 bg-red-700 rounded-lg border border-gray-500 hover:bg-red-500" onClick={()=>delet(index)}
                >
                  Delete
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Portal;
