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
        
    
      const SingleFetch = async (id) => {
        try {
          const response = await fetch("/single/" + id);
          const data = await response.json();
          if (response.ok) {
            return data;
          }
        } catch (error) {
          console.log('error :>> ');  
        }
      };
    

    return {
        DelFetch,
        SingleFetch
    };
}
 
export default useFetch