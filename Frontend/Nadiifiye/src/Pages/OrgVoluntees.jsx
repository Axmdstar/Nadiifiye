import { useEffect, useState } from "react";
import useFetch from "../utility/UseFetch";
import { Trash2, Plus } from "lucide-react";

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
            {/* <li className="flex items-center border-b py-2 space-x-2">
                            <span className="font-bold w-24">Elsewhere:</span>
                            <a href="#" title="Facebook">
                                <svg className="w-5 h-5" id="Layer_1"  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 506.86 506.86"><path className="cls-1" d="M506.86,253.43C506.86,113.46,393.39,0,253.43,0S0,113.46,0,253.43C0,379.92,92.68,484.77,213.83,503.78V326.69H149.48V253.43h64.35V197.6c0-63.52,37.84-98.6,95.72-98.6,27.73,0,56.73,5,56.73,5v62.36H334.33c-31.49,0-41.3,19.54-41.3,39.58v47.54h70.28l-11.23,73.26H293V503.78C414.18,484.77,506.86,379.92,506.86,253.43Z"></path><path className="cls-2" d="M352.08,326.69l11.23-73.26H293V205.89c0-20,9.81-39.58,41.3-39.58h31.95V104s-29-5-56.73-5c-57.88,0-95.72,35.08-95.72,98.6v55.83H149.48v73.26h64.35V503.78a256.11,256.11,0,0,0,79.2,0V326.69Z"></path></svg>
                            </a>
                            <a href="#" title="Twitter">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333333 333333" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd"><path d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm90493 110539c-6654 2976-13822 4953-21307 5835 7669-4593 13533-11870 16333-20535-7168 4239-15133 7348-23574 9011-6787-7211-16426-11694-27105-11694-20504 0-37104 16610-37104 37101 0 2893 320 5722 949 8450-30852-1564-58204-16333-76513-38806-3285 5666-5022 12109-5022 18661v4c0 12866 6532 24246 16500 30882-6083-180-11804-1876-16828-4626v464c0 17993 12789 33007 29783 36400-3113 845-6400 1313-9786 1313-2398 0-4709-247-7007-665 4746 14736 18448 25478 34673 25791-12722 9967-28700 15902-46120 15902-3006 0-5935-184-8860-534 16466 10565 35972 16684 56928 16684 68271 0 105636-56577 105636-105632 0-1630-36-3209-104-4806 7251-5187 13538-11733 18514-19185l17-17-3 2z" fill="#1da1f2"></path></svg>
                            </a>
                            <a href="#" title="LinkedIn">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333333 333333" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd"><path d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-18220 138885h28897v14814l418 1c4024-7220 13865-14814 28538-14814 30514-1 36157 18989 36157 43691v50320l-30136 1v-44607c0-10634-221-24322-15670-24322-15691 0-18096 11575-18096 23548v45382h-30109v-94013zm-20892-26114c0 8650-7020 15670-15670 15670s-15672-7020-15672-15670 7022-15670 15672-15670 15670 7020 15670 15670zm-31342 26114h31342v94013H96213v-94013z" fill="#0077b5"></path></svg>
                            </a>
                            <a href="#" title="Github">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="0" height="0" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 640 640"><path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"></path></svg>
                            </a>
                        </li> */}
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
