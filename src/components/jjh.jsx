const [isActive, setIsActive] = useState(true);

function updateStatus(event) {  
    setIsActive(!isActive);

         event.preventDefault();
         fetch('', {
            method: 'PUT',
             body: JSON.stringify(formData),
         })}

         <button onClick={updateStatus}>
            Change Status
         </button>
         {isActive ? 'Active' : 'Inactive'}