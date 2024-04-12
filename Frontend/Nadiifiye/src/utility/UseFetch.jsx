import { useEffect, useState } from "react";



const useFetch =  (Url) => {
    const MainUrl = "http://localhost:4000/";
    const [ResData, setResData] = useState([]);
    const [Err, setErr] = useState();
    
    useEffect(() => {
        fetch(MainUrl + Url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setResData(data)
            })
            .catch((err) => {
                setErr(err)
            })
    },[])
    

    return {
        ResData
    };
}
 
export default useFetch