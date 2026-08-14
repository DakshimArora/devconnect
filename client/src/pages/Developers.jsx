import { useState,useEffect } from "react";
function Developers(){
    const [developers,setDevelopers]=useState([])
    useEffect(() => {
    async function fetchDevelopers() {
        const token = localStorage.getItem("token");

        const response = await fetch(
            "http://localhost:3000/users",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const data = await response.json();

        console.log(data);
        setDevelopers(data);
    }

    fetchDevelopers();
}, []);
    return(
        <div className="developersPage">
        <h1>Discover Developers</h1>

            <div className="developersGrid">
                {developers.map((developer) => (
                    <div className="developerCard" key={developer._id}>
                        <h2>{developer.name}</h2>
                        <p>{developer.email}</p>
                        <button>View Profile</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Developers;