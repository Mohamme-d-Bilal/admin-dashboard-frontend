import axios from "axios";
import { BsPlusCircleFill } from 'react-icons/bs'
import { toast } from "react-toastify";
import { useState, useEffect } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody, MDBRow, MDBCol, MDBContainer, MDBModal } from 'mdb-react-ui-kit';

function DevicesTable() {
    const devices = [
        {
            id: '1',
            isActive: 'True',
            unRegisteredCarsDetected: '11',
            date: '6/31/2020',
            token: '',
            location: {
                coordinates: [31.4353, 34.4547],
                address: 'Gulshan bl-4'
            }
        },
        {
            id: '2',
            isActive: 'False',
            unRegisteredCarsDetected: '7',
            date: '6/31/2022',
            token: '',
            location: {
                coordinates: [51.4333, -34.4547],
                address: 'Johar'
            }
        },
        {
            id: '3',
            isActive: 'True',
            unRegisteredCarsDetected: '111',
            date: '6/31/2016',
            token: '',
            location: {
                coordinates: [-91.4353, 74.4547],
                address: 'Phase VIII'
            }
        },
    ]

    // const [data, setData] = useState([]);
    // //const [formData, setFormData] = useState({});

    // useEffect(() => {
    //     loadDevicesData();
    // }, []);

    // const loadDevicesData = async () => {
    //     return await axios.get('http://143.198.40.40:5002/devices/getAllDevices')
    //         .then((response) => setData(response.data))
    //         .catch((error) => toast.error(error));
    // }

    // const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    // const [error, setError] = useState(null);
    // const [isActive, setIsActive] = useState(true);

// function updateStatus(event) {  
//     setIsActive(!isActive);

//          event.preventDefault();
//          fetch('', {
//             method: 'PUT',
//              body: JSON.stringify(formData),
//          })}
    
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
    //         loadDevicesData();
    //     })
    // }

    // const editDeviceOnChange = (e) => {
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
    //                 <label>
    //                     Status
    //                      <button onClick={updateStatus}>
    //                          Change Status
    //                      </button>
    //                      {isActive ? 'Active' : 'Inactive'}
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
    //             loadDevicesData();
    //         })
    //     })
    // }

    return (
        <>
        <MDBContainer>
            <div style={{ marginTop: '50px' }}>
                <h2 className='text-center'>Devices</h2>
                <MDBRow>
                    <MDBCol size='12'>
                        <MDBTable responsive>
                            <MDBTableHead dark>
                                <tr>
                                    <th scope='col'>No.</th>
                                    <th scope='col'>Is Active</th>
                                    <th scope='col'>UnRegistered Cars Detected</th>
                                    <th scope='col'>Date</th>
                                    <th scope='col'>Coordinates</th>
                                    <th scope='col'>Address</th>
                                    <th scope='col'></th>
                                </tr>
                            </MDBTableHead>
                            {devices.length === 0 ? (
                                <MDBTableBody className='align-center mb-0'>
                                    <tr>
                                        <td colSpan={8} className='text-center mb-0'>No Records Found</td>
                                    </tr>
                                </MDBTableBody>
                            ) : (
                                devices.map((item, index) => (
                                    <MDBTableBody key={index}>
                                        <tr>
                                            <th scope='row'>{index + 1}</th>
                                            <td>{item.isActive}</td>
                                            <td>{item.unRegisteredCarsDetected}</td>
                                            <td>{item.date}</td>
                                            <td>{item.location.coordinates[0]}, {item.location.coordinates[1]}</td>
                                            <td>{item.location.address}</td>
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
                Device
                <BsPlusCircleFill className="hue"/>
            </button>
            </div>
        </>
    )
}

export default DevicesTable


