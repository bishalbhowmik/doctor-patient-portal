const { useState, useEffect } = require("react")


const useAdmin = (email) =>{
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(()=>{
        fetch(`http://localhost:5000/users/admin/${email}`)
        .then(res => res.json())
        .then(data =>{
            setIsAdmin(data.isAdmin);
        })
    },[email])

    return [isAdmin];
}

export default useAdmin;