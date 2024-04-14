import { useEffect, useState } from "react";



const useFetch =  () => {
    
    // const [ResData, setResData] = useState([]);

    const DelFetch = async (id, Route) => {

        try {
            const response = await fetch(`${Route}/delete/${id}`, {
              method: 'DELETE',
            });

            if (response.ok) {
                return true;
            } else {
                return false;
            }
          } catch (error) {
            console.error('Error deleting item:', error);
          }
        };
        
    
    

    return {
        DelFetch,
    };
}
 
export default useFetch