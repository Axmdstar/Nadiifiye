import { useEffect, useState } from "react";
import useFetch from "../utility/UseFetch";
import { Trash2, Plus} from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const OrgCampaigns = () => {
    const [CampaignList, setCampaignList] = useState([]);
    const MainUrl = "http://localhost:4000/Campaign";
    const Apipath = "/OrgCampaign/";
    const [FormState, setFormState] = useState(false);
    const { DelFetch } = useFetch();

    const demoName = "Axmed";

    

    // formdata 
    const [name, setName] = useState("");
    const [Location, setLocation] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [Type, setType] = useState("");
    const [NumOfPeople, setNumOfPeople] = useState("");
    const [file, setFile] = useState();


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
    


    const NewCampaigns = (e) => {
      e.preventDefault();

      console.log(name);
      console.log(Location);
      console.log(startDate);
    const formdata = new FormData();
    formdata.append("Name", name);
    formdata.append("Organizer", demoName);
    formdata.append("Location", Location);
    formdata.append("DateTime", startDate);
    formdata.append("Type", Type);
    formdata.append("NumOfPeople", NumOfPeople);
    formdata.append("Image", file);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };

    console.log('formdata :>> ', formdata);
    fetch("http://localhost:4000/Campaign/addCampaign", requestOptions)
    .then((response) => response.json())
    .then((result) => alert(result.message))
    .catch((error) => console.error(error));

    }


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
        <div>
        
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
  
            <div className="flex flex-col">
            <div className="text-gray-600 ">
              <p className="font-medium text-4xl py-4">New Campaign</p>
              <p>Please fill out all the fields.</p>
            </div>
  
            <form className="mt-10" onSubmit={NewCampaigns} >
  
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
  
                <div className="md:col-span-5">
                  <label  className="font-medium">Campaign Name</label>
                  <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
  
                <div className="md:col-span-5">
                  <label htmlFor="email" className="font-medium">Type</label>
                  <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                  onChange={(e) => setType(e.target.value)}
                  />
                </div>
  
                <div className="md:col-span-3">
                  <label htmlFor="Location" className="font-medium">Location</label>
                  <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" 
                  onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
  
                <div className="md:col-span-2">
                  <label className="font-medium" >No.Volunteers</label>
                  <input type="text"   className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" 
                  onChange={(e) => setNumOfPeople(e.target.value)}
                  />
                </div>

                <div className="md:col-span-2">
                <label htmlFor="city">Date</label>
                    <DatePicker className="h-10 py-2 border mt-1 rounded px-4 w-full bg-gray-50" selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                </div>
                
              {/* file */}
              <div className="py-3">
                
                <input type="file" name="image" id="image" 
                onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
  
                <div className="md:col-span-5 text-right pt-7 flex gap-4">
  
                  {/* submit  */}
                  <div className="inline-flex items-end">
                    <input type="submit" className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" placeholder="Submit"/>
                  </div>
  
                  {/* Cancel  */}
                  <div className="inline-flex items-end">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                      onClick={() => setFormState(false)}
                      >Cancel</button>
                  </div>
                  
                </div>
  
              </form>
            </div>
          </div>
        </div>
      
      </div>
    
      :
      
      <div>
      {/* Title  */}
      <div className="text-gray-600">
        <h1 className="font-medium text-4xl py-5">My Campaigns</h1>

        {/* New Org btn  */}
        <div className="  flex transition-all duration-100  ease-in-out w-12 ">
              <button
                className="bg-green-500  w-full  text-white  py-2  hover:bg-green-600 rounded-lg"
                onClick={() => setFormState(true)}
              >
                <Plus className="mx-auto"></Plus>
              </button>
            </div>
      </div>

      {/* table */}
      <div className=" w-11/12  ">
        <div className="flex flex-col">
          <div className="overflow-y-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-y-scroll h-[70vh]">
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