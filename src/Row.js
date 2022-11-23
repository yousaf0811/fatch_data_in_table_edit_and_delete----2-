import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ReadOnlyRow = ({contact})=> {
    return(
          <tr>
              <td>{contact.fullName}</td>
              <td>{contact.address}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
            </tr>

    )
}
export default ReadOnlyRow