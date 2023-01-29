const [isAddCaseModalOpen, setIsAddCaseModalOpen] = useState(false);
const [error, setError] = useState(null);
   
   
   function handleAddCaseModalOpen(id) {
       setIsAddCaseModalOpen(true);
   }
   function handleAddCaseModalClose() {
       setIsAddCaseModalOpen(false);
   }

   function handleAddCaseFormSubmit(event) {
       event.preventDefault();
       fetch('', {
           method: 'POST',
           body: JSON.stringify(formData),
       }).then((response) => {
           if (!response.ok) {
               throw new Error('Error updating data');
           }
           handleAddCaseModalClose();
           loadCasesData();
       })
   }

   const addCaseOnChange = (e) => {
       setFormData(() => ({
           [e.target.name]: e.target.value,
       }))
   }

   function AddCaseModal() {
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

       if (!isAddCaseModalOpen) {
           return null;
       }
       return (
           <div>
               {error && <div>{error}</div>}

               <form onSubmit={handleAddCaseFormSubmit}>

                   <label>
                       Address
                       <input
                           className="form-control"
                           type="text"
                           id="address"
                           name="address"
                           value={address}
                           placeholder='Enter address'
                           onChange={addCaseOnChange}
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
                           onChange={addCaseOnChange}
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
                           onChange={addCaseOnChange}
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
                           onChange={addCaseOnChange}
                           required
                       />
                   </label>
                   
                   <button type="submit">Save</button>
                   <button type="button" onClick={handleAddCaseModalClose}>Cancel</button>
               </form>
           </div>

       )
   }
