import { useEffect, useState } from "react";

const VolunteersPage = () => {
    const [Vlist, setVlist] = useState([]);
    
    const MainUrl = "http://localhost:4000/Volunteer";
    const Apipath = "/AllVolunteers"
    // http://localhost:4000/Volunteer/AllVolunteers
    
    useEffect(()=>{
      fetch(MainUrl + Apipath)
              .then((res) => {
                  return res.json();
              })
              .then((data) => {
                  setVlist(data)
                  console.log('data :>> ', data);
              })
              .catch((err) => {
                  console.log('err :>> ', err);
              })
    }, [])


    return ( 
        <div className="w-full ">
      {/* Title  */}
      <div className="text-gray-600">
        <h1 className=" font-medium text-4xl py-5">Volunteers</h1>
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
                        Profile
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Phone
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Address
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Interest
                      </th>
                      <th scope="col" className="px-6 py-4">
                        NO.Events
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    

                    
                    {Vlist.length === 0 ?
                    <tr className="">
                      <td colSpan={6} className=" text-center">
                        <p className="text-xl"> Empty </p> 
                      </td>
                    </tr>
                     :
                     
                     Vlist.map((item, i) => {
                      return (
                        <tr
                          key={i}
                          className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-green-100"
                        >
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            <img
                              src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                              className="w-12 rounded-full"
                              alt="Avatar"
                            />
                          </td>

                          <td className="whitespace-nowrap px-6 py-4">
                            {item.Name}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {item.Phone}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {item.Address}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {item.Emaail}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {item.TypeOfInterest}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {item.numOfEvent}
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
     );
}
 
export default VolunteersPage;