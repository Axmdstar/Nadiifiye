import { useEffect, useState } from "react";
// import useFetch from "../utility/UseFetch";
// import { Trash2, Plus } from "lucide-react";

const OrgVolunteer = () => {
  const [VList, setVList] = useState([]);
  const [VDetail, setVDetail] = useState({});
  const MainUrl = "http://localhost:4000/Joined";
  const Apipath = "/AllJoined";
  const [FormState, setFormState] = useState(false);
  // const { SingleFetch } = useFetch();
  const OrgName = "Axmed";

  useEffect(() => {
    fetch(MainUrl + Apipath + OrgName)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setVList(data);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  }, []);

  const HandleDetail = async (id) => {
    try {
      const response = await fetch(
        "http://localhost:4000/Volunteer" + "/single/" + id
      );
      const data = await response.json();
      setVDetail(data);
      setFormState(true);
    } catch (error) {
      console.log("error");
    }
    console.log("VDetail :>> ", VDetail);
  };

  const handleCheckboxChange = (e, itemId) => {
    const { checked, name } = e.target;

    const requestOptions = {
      method: "PATCH",
      redirect: "follow",
    };

    fetch(
      `http://localhost:4000/Joined/Attended/${name}/${itemId}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        setVList((prevOrgList) =>
          prevOrgList.map((item) =>
            item._id === itemId ? { ...item, Attended: checked } : item
          )
        );
      })
      .catch((error) => console.error(error));

    // Update the item in the list based on itemId
  };

  return (
    <div className="w-full ">
      {FormState ? (
        <div>
          {/* <div className="flex-1 bg-white rounded-lg shadow-xl p-8"> */}
          <img
            src={`http://localhost:4000/uploads/VolunteerImage/${VDetail.profileImage}`}
            className="w-40 border-4 border-white rounded-full"
          />
          <h4 className="font-medium text-4xl py-5">Volunteer Info</h4>
          <ul className="mt-2 text-gray-700">
            <li className="flex border-y py-2">
              <span className="font-bold w-24">Full name:</span>
              <span className="text-gray-700">{VDetail.Name}</span>
            </li>
            <li className="flex border-b py-2">
              <span className="font-bold w-24">Phone:</span>
              <span className="text-gray-700">{VDetail.Phone}</span>
            </li>
            <li className="flex border-b py-2">
              <span className="font-bold w-24">Address:</span>
              <span className="text-gray-700">{VDetail.Address}</span>
            </li>
            <li className="flex border-b py-2">
              <span className="font-bold w-24">Email:</span>
              <span className="text-gray-700">{VDetail.Emaail}</span>
            </li>
            <li className="flex border-b py-2">
              <span className="font-bold w-24">Interest:</span>
              <span className="text-gray-700">{VDetail.TypeOfInterest}</span>
            </li>

            <li>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-9 rounded"
                onClick={() => setFormState(false)}
              >
                Back
              </button>
            </li>
           
          </ul>
          {/* </div> */}
        </div>
      ) : (
        <div>
          {/* Title  */}
          <div className="text-gray-600">
            <h1 className="font-medium text-4xl py-5">Volunteers</h1>
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
                          <th scope="col" className="px-6 py-4">
                            Attended
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {VList.length === 0 ? (
                          <tr className="">
                            <td colSpan={6} className=" text-center">
                              <p className="text-xl"> Empty </p>
                            </td>
                          </tr>
                        ) : (
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
                                  <input
                                    type="checkbox"
                                    id={item._id}
                                    name={item.VolunteerId}
                                    checked={item.Attended}
                                    onChange={(e) =>
                                      handleCheckboxChange(e, item._id)
                                    } // Add a change handler to update the item.Attended value
                                    readOnly={item.Attended}
                                    className="form-checkbox h-5 w-5 text-indigo-600"
                                  />
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  <button
                                    type="button"
                                    value={item.VolunteerId}
                                    onClick={(e) =>
                                      HandleDetail(e.target.value)
                                    }
                                  >
                                    Veiw Details
                                  </button>
                                </td>
                              </tr>
                            );
                          })
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrgVolunteer;
