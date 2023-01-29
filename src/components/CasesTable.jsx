import axios from "axios";
import { toast } from "react-toastify";
import { BsPlusCircleFill } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody, MDBRow, MDBCol, MDBContainer, MDBModal } from 'mdb-react-ui-kit';

function CasesTable() {

    const cases = [
        {
            detectedNumberPlate: 'ABC123',
            numberPlateImage: '',
            assignedOfficer: 'John',
            comment: 'Hit and run',
            action: 'Investigating',
            date: '1/26/23',
            status: 'Open',
            isActive: 'True',
            id: '1'
        },
        {
            detectedNumberPlate: 'AIM993',
            numberPlateImage: '',
            assignedOfficer: 'John',
            comment: 'Hit and run',
            action: 'Investigating',
            date: '1/10/23',
            status: 'Open',
            isActive: 'True',
            id: '2'
        },
        {
            detectedNumberPlate: 'MBY093',
            numberPlateImage: '',
            assignedOfficer: 'Brad',
            comment: 'Over speeding',
            action: 'Fined',
            date: '1/26/22',
            status: 'Closed',
            isActive: 'False',
            id: '3'
        },
    
    ]


    //const [data, setData] = useState([]);
    //const [formData, setFormData] = useState({});

    // useEffect(() => {
    //     loadCasesData();
    // }, []);

    // const loadCasesData = async () => {
    //     return await axios.get('')
    //         .then((response) => setData(response.data))
    //         .catch((error) => toast.error(error));
    // }

    // const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    // const [error, setError] = useState(null);
    
    // }
    // function handleEditModalOpen(id) {
    //     setIsEditModalOpen(true);
    // }
    // function handleEditModalClose() {
    //     setIsEditModalOpen(false);
    // }

    // function handleEditFormSubmit(event) {
    //     event.preventDefault();
    //     fetch('', {
    //         method: 'PUT',
    //         body: JSON.stringify(formData),
    //     }).then((response) => {
    //         if (!response.ok) {
    //             throw new Error('Error updating data');
    //         }
    //         handleEditModalClose();
    //         loadCasesData();
    //     })
    // }

    // const editOnChange = (e) => {
    //     setFormData((prevState) => ({
    //         ...prevState,
    //         [e.target.name]: e.target.value,
    //     }))
    // }

    // function EditModal() {
    //     useEffect(() => {
    //         fetch('')
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 setFormData(data);
    //             })
    //             .catch((error) => {
    //                 setError(error)
    //             });
    //     }, []);

    //     if (!isEditModalOpen) {
    //         return null;
    //     }
    //     return (
    //         <div>
    //             {error && <div>{error}</div>}

    //             <form onSubmit={handleEditFormSubmit}>

    //                 <label>
    //                     Action
    //                     <input
    //                         className="form-control"
    //                         type="text"
    //                         id="action"
    //                         name="action"
    //                         value={action}
    //                         placeholder='...'
    //                         onChange={editOnChange}
    //                     />
    //                 </label>
    //                 <label>
    //                     Comment
    //                     <input
    //                         className="form-control"
    //                         type="text"
    //                         id="comment"
    //                         name="comment"
    //                         value={comment}
    //                         placeholder='...'
    //                         onChange={editOnChange}
    //                     />
    //                 </label>
                    
    //                 <button type="submit">Save</button>
    //                 <button type="button" onClick={handleEditModalClose}>Cancel</button>
    //             </form>
    //         </div>

    //     )
    // }

    // function deleteRecord(id) {
    //     fetch(`${id}`, {
    //         method: 'Delete'
    //     }).then((result) => {
    //         result.json().then((res) => {
    //             loadCasesData();
    //         })
    //     })
    // }

    return (
        <>
        <MDBContainer>
            <div style={{ marginTop: '50px', marginRight:'25px' }}>
                <h2 className='text-center'>Cases</h2>
                <MDBRow>
                    <MDBCol size='12'>
                        <MDBTable responsive>
                            <MDBTableHead dark>
                                <tr>
                                    <th scope='col'>No.</th>
                                    <th scope='col'>Detected Number Plate</th>
                                    <th scope='col'>Number Plate Image</th>
                                    <th scope='col'>Assigned Officer</th>
                                    <th scope='col'>Comment</th>
                                    <th scope='col'>Action</th>
                                    <th scope='col'>Date</th>
                                    <th scope='col'>Status</th>
                                    <th scope='col'>Is Active</th>
                                    <th scope='col'></th>
                                </tr>
                            </MDBTableHead>
                            {cases.length === 0 ? (
                                <MDBTableBody className='align-center mb-0'>
                                    <tr>
                                        <td colSpan={8} className='text-center mb-0'>No Records Found</td>
                                    </tr>
                                </MDBTableBody>
                            ) : (
                                cases.map((item, index) => (
                                    <MDBTableBody key={index}>
                                        <tr>
                                            <th scope='row'>{index + 1}</th>
                                            <td>{item.detectedNumberPlate}</td>
                                            <td>{item.numberPlateImage}</td>
                                            <td>{item.assignedOfficer}</td>
                                            <td>{item.comment}</td>
                                            <td>{item.action}</td>
                                            <td>{item.date}</td>
                                            <td>{item.status}</td>
                                            <td>{item.isActive}</td>
                                            {/* <td>
                                                <button onClick={() => deleteRecord(item.id)}>Delete</button>
                                                <button onClick={handleEditModalOpen(item.id)}>Edit</button>
                                                <MDBModal>
                                                    <EditModal />
                                                </MDBModal>
                                            </td> */}
                                        </tr>
                                    </MDBTableBody>
                                ))
                            )}
                        </MDBTable>
                    </MDBCol>
                </MDBRow>
            </div>
        </MDBContainer>
        <div>            
            <button className="btn butn-block">
                Case
                <BsPlusCircleFill className="hue"/>
            </button>
            </div>
        </>
    )
}

export default CasesTable


