import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import data from './data.json';
const Tableh = ()=>{
    const [contacts,setContacts] = useState(data);
    return (
        <div>
        <table className="table table-success table-striped" >
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
        </table>
        </div>
    )
}
export default Tableh