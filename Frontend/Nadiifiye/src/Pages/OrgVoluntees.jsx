import { useEffect, useState } from "react";
import useFetch from "../utility/UseFetch";
import { Trash2, Plus} from "lucide-react";


const OrgVolunteer = () => {
    const [VList, setVList] = useState([]);
    const [VDetail, setVDetail] = useState({});
    const MainUrl = "http://localhost:4000/Joined";
    const Apipath = "/AllJoined";
    const [FormState, setFormState] = useState(false);
    const { SingleFetch } = useFetch();
    const OrgName = "Axmed";


    useEffect(()=>{
        fetch(MainUrl + Apipath + OrgName)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setVList(data)
                    
                })
                .catch((err) => {
                    console.log('err :>> ', err);
                })
      }, [])



      const HandleDetail= async (id) => {
        try {
            const response = await fetch( "http://localhost:4000/Volunteer"+ "/single/" + id);
            const data = await response.json();
            setVDetail(data);
            setFormState(true)
            
        } catch (error) {
            console.log("error");
        }
        console.log('VDetail :>> ', VDetail);
    }

    return ( 
        <div className="w-full ">
      {FormState 
      ?
      <div>
        <p>{VDetail.Name}</p>
        <p>{VDetail.Phone}</p>
        <p>{VDetail.Address}</p>
        <p>{VDetail.Emaail}</p>
        <p>{VDetail.TypeOfInterest}</p>
        <p>{VDetail.Name}</p>
      
      </div>
      :
      
      <div>
      {/* Title  */}
      <div className="text-gray-600">
        <h1 className="font-medium text-4xl py-5">Volunteers</h1>
        


        {/* New Org btn  */}
        <div className="  flex transition-all duration-100  ease-in-out w-12 hover:w-40">
          <button className="bg-green-500 relative flex group w-full  text-white px-4 py-2  hover:bg-green-600 rounded-lg   "
            onClick={() => setFormState(true)}
          >
            <Plus></Plus>
            <span className="opacity-0 w-30 invisible group-hover:opacity-100 group-hover:visible absolute left-10 top-2 text-white z-10">New Campaign</span>
          </button>
        </div>
      </div>

      {/* table */}
      <div className=" w-11/12  ">
        <div className="flex flex-col">
          <div className="overflow-y-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-y-scroll h-[80vh]">
                <table className="min-w-full text-left text-sm font-light  ">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                      Campaign
                      </th>
                      <th scope="col" className="px-6 py-4">
                      Volunteers
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    

                    
                    {VList.length === 0 ?
                    <tr className="">
                      <td colSpan={6} className=" text-center">
                        <p className="text-xl"> Empty </p> 
                      </td>
                    </tr>
                     :
                     
                     VList.map((item, i) => {
                      return (
                        <tr
                          key={i}
                          className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-green-100"
                        >

                          <td className="whitespace-nowrap px-6 py-4">
                            {item.CampaignName}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {item.VolunteerName}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <button type="button" value={item.VolunteerId} 
                            onClick={(e) => HandleDetail(e.target.value)}
                            >Veiw Details</button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      }
  </div>
            
        
     );
}
 
export default OrgVolunteer;