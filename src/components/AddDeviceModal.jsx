 const [isAddDeviceModalOpen, setIsAddDeviceModalOpen] = useState(false);
 const [error, setError] = useState(null);
    
    
    function handleAddDeviceModalOpen(id) {
        setIsAddDeviceModalOpen(true);
    }
    function handleAddDeviceModalClose() {
        setIsAddDeviceModalOpen(false);
    }

    function handleAddDeviceFormSubmit(event) {
        event.preventDefault();
        fetch('', {
            method: 'POST',
            body: JSON.stringify(formData),
        }).then((response) => {
            if (!response.ok) {
                throw new Error('Error updating data');
            }
            handleAddDeviceModalClose();
            loadDevicesData();
        })
    }

    const addDeviceOnChange = (e) => {
        setFormData(() => ({
            [e.target.name]: e.target.value,
        }))
    }

    function AddDeviceModal() {
        useEffect(() => {
            fetch('')
                .then((response) => response.json())
                .then((data) => {
                    setFormData(data);
                })
                .catch((error) => {
                    setError(error)
                });
        }, []);

        if (!isAddDeviceModalOpen) {
            return null;
        }
        return (
            <div>
                {error && <div>{error}</div>}

                <form onSubmit={handleAddDeviceFormSubmit}>

                    <label>
                        Address
                        <input
                            className="form-control"
                            type="text"
                            id="address"
                            name="address"
                            value={address}
                            placeholder='Enter address'
                            onChange={addDeviceOnChange}
                            required
                        />
                    </label>
                    <label>
                        Latitude
                        <input
                            className="form-control"
                            type="number"
                            id="latitude"
                            name="latitude"
                            value={location.coordinates[0]}
                            placeholder='Enter latitude'
                            onChange={addDeviceOnChange}
                            required
                        />
                    </label>
                    <label>
                        Longitude
                        <input
                            className="form-control"
                            type="number"
                            id="longitude"
                            name="longitude"
                            value={location.coordinates[1]}
                            placeholder='Enter longitude'
                            onChange={addDeviceOnChange}
                            required
                        />
                    </label>
                    <label>
                        Status
                        <input
                            className="form-control"
                            type="text"
                            id="status"
                            name="status"
                            value={isActive}
                            placeholder='Status'
                            onChange={addDeviceOnChange}
                            required
                        />
                    </label>
                    
                    <button type="submit">Save</button>
                    <button type="button" onClick={handleAddDeviceModalClose}>Cancel</button>
                </form>
            </div>

        )
    }
