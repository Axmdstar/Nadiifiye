import { useEffect, useState } from "react";
import useFetch from "../utility/UseFetch";
import { DeleteBtn } from "../components/buttons";

const OrganizerPage = () => {
  
  const { ResData } = useFetch("Organizer/AllOrganizers");

  console.log("Organizers :>> ", ResData);
//   useEffect(() => {

//   }, [])

  return (
    <div className="w-full ">
      {/* Title  */}
      <div className="">
        <h1 className="text-4xl py-5">Organzier</h1>
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
                        Website
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-green-200">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        <img
                          src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                          className="w-12 rounded-full"
                          alt="Avatar"
                        />
                      </td>

                      <td className="whitespace-nowrap px-6 py-4">Mark</td>
                      <td className="whitespace-nowrap px-6 py-4">Otto</td>
                      <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                      <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                      <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                      
                    </tr>

                    
                    {ResData.map((item, i) => {
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
                            {item.website}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <DeleteBtn id={item._id}/>
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
};

export default OrganizerPage;
