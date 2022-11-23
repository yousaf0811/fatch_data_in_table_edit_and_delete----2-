const EditableRow = ({contact})=> {
    return(
          <tr>
              <td>
              <input
            type="text"
            name='fullName'
            required="required"
            placeholder='Enter the Full Name...'          
          ></input>
              </td>
              <td>
              <input
            type="text"
            name='address'
            required="required"
            placeholder='Enter the Address...'          
          ></input>
              </td>
              <td>
              <input
            type="text"
            name='phoneNumber'
            required="required"
            placeholder='Enter the Phone Number...'          
          ></input>
              </td>
              <td>
              <input
            type="email"
            name='email'
            required="required"
            placeholder='Enter the Email...'          
          ></input>
              </td>
            </tr>
    )
}
export default EditableRow