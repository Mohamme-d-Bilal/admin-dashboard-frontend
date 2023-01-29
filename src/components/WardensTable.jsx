import axios from "axios";
import { toast } from "react-toastify";
import { useState, useEffect } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody, MDBRow, MDBCol, MDBContainer, MDBModal } from 'mdb-react-ui-kit';

function WardensTable() {

    const wardens = [
        {
            username: 'John',
            id: '1',
            name: 'John Doe',
            isActive: 'True',
            profileImageUrl: '',
            deviceId: '55',
            location: {
                coordinates: [51.4333, -34.4547],
                address: 'Johar'
            }
        },
        {
            username: 'Brad',
            id: '2',
            isActive: 'True',
            name: 'Brad Pitt',
            profileImageUrl: '',
            deviceId: '23',
            location: {
                coordinates: [41.4333, 24.4547],
                address: '13-D'
            }
        },
        {
            username: 'aksdn',
            id: '3',
            isActive: 'True',
            name: 'aksdn asds',
            profileImageUrl: '',
            deviceId: '12',
            location: {
                coordinates: [1.4333, 4.4547],
                address: 'aidoas'
            }
        },
    ]

    // const [data, setData] = useState([]);
    // //const [formData, setFormData] = useState({});

    // useEffect(() => {
    //     loadWardensData();
    // }, []);

    // const loadWardensData = async () => {
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
    //         loadWardensData();
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
    //                     Name
    //                     <input
    //                         className="form-control"
    //                         type="text"
    //                         id="name"
    //                         name="name"
    //                         value={name}
    //                         placeholder='Enter name'
    //                     />
    //                 </label>
    //                 <label>
    //                     Address
    //                     <input
    //                         className="form-control"
    //                         type="text"
    //                         id="address"
    //                         name="address"
    //                         value={address}
    //                         placeholder='Enter address'
    //                         onChange={editDeviceOnChange}
    //                     />
    //                 </label>
    //                 <label>
    //                     Latitude
    //                     <input
    //                         className="form-control"
    //                         type="number"
    //                         id="latitude"
    //                         name="latitude"
    //                         value={location.coordinates[0]}
    //                         placeholder='Enter latitude'
    //                         onChange={editDeviceOnChange}
    //                     />
    //                 </label>
    //                 <label>
    //                     Longitude
    //                     <input
    //                         className="form-control"
    //                         type="number"
    //                         id="longitude"
    //                         name="longitude"
    //                         value={location.coordinates[1]}
    //                         placeholder='Enter longitude'
    //                         onChange={editDeviceOnChange}
    //                     />
    //                 </label>
                    
    //                 <button type="submit">Save</button>
    //                 <button type="button" onClick={handleEditModalClose}>Cancel</button>
    //             </form>
    //         </div>

    //     )
    // }

    return (
        <>
        <MDBContainer>
            <div style={{ marginTop: '50px' }}>
                <h2 className='text-center'>Wardens</h2>
                <MDBRow>
                    <MDBCol size='12'>
                        <MDBTable responsive>
                            <MDBTableHead dark>
                                <tr>
                                    <th scope='col'>No.</th>
                                    <th scope='col'>UserName</th>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Is Active</th>
                                    <th scope='col'>Device ID</th>
                                    <th scope='col'>Coordinates</th>
                                    <th scope='col'>Address</th>
                                    <th scope='col'></th>
                                </tr>
                            </MDBTableHead>
                            {wardens.length === 0 ? (
                                <MDBTableBody className='align-center mb-0'>
                                    <tr>
                                        <td colSpan={8} className='text-center mb-0'>No Records Found</td>
                                    </tr>
                                </MDBTableBody>
                            ) : (
                                wardens.map((item, index) => (
                                    <MDBTableBody key={index}>
                                        <tr>
                                            <th scope='row'>{index + 1}</th>
                                            <td>{item.username}</td>
                                            <td>{item.name}</td>
                                            <td>{item.isActive}</td>
                                            <td>{item.deviceId}</td>
                                            <td>{item.location.coordinates[0]}, {item.location.coordinates[1]}</td>
                                            <td>{item.location.address}</td>
                                            {/* <td>
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
        </>
    )
}

export default WardensTable


