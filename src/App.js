import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import data from './data.json';
import ReadOnlyRow from './Row';
import {nanoid} from 'nanoid';
import Tableh from './table';

function App() {
  const [contacts,setContacts] = useState(data);
  const [addformdata,setAddformdata] = useState({
    fullName: '',
    address: '',
    p: '',
    email: '',
  }) 
  const handleAddformchange = (event)=>{
    event.preventDefault();

    const fieldName = event.target.getAttribute('name'); 

    const fieldValue = event.target.value;
    const newFormData = {...addformdata};
    newFormData[fieldName] = fieldValue;
    setAddformdata(newFormData);
    console.log(newFormData);
  };
  const handleAddFormSubmit = (event)=>{
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      fullName : addformdata.fullName,
      address : addformdata.address,
      number : addformdata.phoneNumber,
      email : addformdata.email,
    };
    const newContacts = [...contacts,newContact];
    setContacts(newContacts);
  };
  return (
    <div className="app_container">

      {/* <Tableh /> */}
      <table className="table table-success table-striped" >
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody>
          {contacts.map((contact)=>(
            <ReadOnlyRow contact={contact} />
            ))};
          </tbody>
        </table>
        <h2>Add new Details</h2>
        <form onSubmit={handleAddFormSubmit} >
          <input
            type="text"
            name='fullName'
            required="required"
            placeholder='Enter the Full Name...'
            onChange={handleAddformchange}          
          />
          <input
            type="text"
            name='address'
            required="required"
            placeholder='Enter the Address...'
            onChange={handleAddformchange}          
          />
          <input
            type="text"
            name='p'
            required="required"
            placeholder='Enter the Number...'
            onChange={handleAddformchange}         
          />
          <input
            type="email"
            name='email'
            required="required"
            placeholder='Enter the E-mail...'
            onChange={handleAddformchange}          
          />
          <button type='submit' >Add</button>
        </form>
    </div>
  );
}
export default App;























        {/* <table className="table table-success table-striped" >
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>E-mail</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {contacts.map((contact)=>(
          <tr>
              <td>{contact.fullName}</td>
              <td>{contact.address}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
              <td>
              <button type='submit' >view</button>
              <button type='submit' >Delete</button>
              </td>
            </tr>))}
          </tbody>
        </table> */}