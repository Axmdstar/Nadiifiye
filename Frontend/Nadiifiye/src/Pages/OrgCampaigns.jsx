import { useEffect, useState } from "react";
import useFetch from "../utility/UseFetch";
import { Trash2, Plus} from "lucide-react";

const OrgCampaigns = () => {
    const [CampaignList, setCampaignList] = useState([]);
    const MainUrl = "http://localhost:4000/Campaign";
    const Apipath = "/OrgCampaign/";
    const [FormState, setFormState] = useState(false);
    const { DelFetch } = useFetch();

    const demoName = "Axmed";

    useEffect(()=>{
        fetch(MainUrl + Apipath + demoName)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setCampaignList(data)
                    console.log('data :>> ', data);
                })
                .catch((err) => {
                    console.log('err :>> ', err);
                })
      }, [])
    


    const handleDelete = (id) => {
        const status = DelFetch(id, MainUrl);
        if (status) {
          setCampaignList(CampaignList.filter(item => item._id !== id));
        }
        else {
          console.log("Error");
        }
      };


    return ( 
        <div className="w-full ">
      {FormState 
      ?
      <div>
        
      
      </div>
    


      :
      
      <div>
      {/* Title  */}
      <div className="text-gray-600">
        <h1 className="font-medium text-4xl py-5">My Campaigns</h1>

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
                        Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Organizer
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Locations
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Type
                      </th>
                      <th scope="col" className="px-6 py-4">
                        No.Volunteers
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    

                    
                    {CampaignList.length === 0 ?
                    <tr className="">
                      <td colSpan={6} className=" text-center">
                        <p className="text-xl"> Empty </p> 
                      </td>
                    </tr>
                     :
                     
                     CampaignList.map((item, i) => {
                      return (
                        <tr
                          key={i}
                          className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-green-100"
                        >

                          <td className="whitespace-nowrap px-6 py-4">
                            {item.Name}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {item.Organizer}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {item.Location}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {item.DateTime}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {item.Type}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {item.NumOfPeople}
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
 
export default OrgCampaigns;