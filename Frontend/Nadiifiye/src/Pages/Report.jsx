import { useEffect, useState } from "react";
import ComboBox from "../components/ComboBox";
import SearchDropdown from "../components/Search";
import ExportBtn from "../components/ExportBtn";

const Reporting = () => {
  const [selectedReport, setSelectedReport] = useState(null);
  const [IsLoading, setIsLoading] = useState(true);
  // const [selectedOrg, setSelectedOrg] = useState("");
  const [SelectedValue, setSelectedValue] = useState(null);
  // const [selectedCamp, setSelectedCamp] = useState("");

  const [fetchedlist, setFetchedlist] = useState([]);

  const options = [
    { label: "Organizers", value: "Organizers" },
    { label: "Campaigns", value: "Campaigns" },
    { label: "Volunteers", value: "Volunteers" },
  ];

  useEffect(() => {
    // console.log('selectedReport :>> ', selectedReport);
    if (selectedReport && SelectedValue == null) {
      switch (selectedReport.value) {
        case "Organizers":
          getOrganizer();
          console.log("selectedReport :>> ", selectedReport);
          break;
        case "Volunteers":
          getVolunteers();
          console.log("selectedReport :>> ", selectedReport);
          break;
        case "Campaigns":
          getCampaigns();
          console.log("selectedReport :>> ", selectedReport);
          break;

        default:
          
          break;
      }
    } else {
      
      switch (selectedReport) {
        case "Organizers":
          
          break;
        case "Volunteers":
          
          
          break;
        case "Campaigns":
          
          
          break;

        default:
          break;
      }

    }
  }, [selectedReport, SelectedValue]);

  // http://localhost:4000/Organizer/AllOrganizers
  // http://localhost:4000/Campaign/OrgCampaign/:name

  const handleReportType = (option) => {
    console.log("option :>> ", option);
    setSelectedReport(option);
  };

  const handleSelectedValue = (option) => {
    setSelectedValue(option);
  };

  const getOrganizer = () => {
    const endpoint = "http://localhost:4000/Organizer/AllOrganizers";
    setIsLoading(true);
    fetch(endpoint)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFetchedlist(data);
        setIsLoading(false);
        console.log("data :>> ", data);
      });
  };

  const getVolunteers = () => {
    const endpoint = "http://localhost:4000/Volunteer/AllVolunteers";
    setIsLoading(true);
    fetch(endpoint)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFetchedlist(data);
        setIsLoading(false);
        console.log("data :>> ", data);
      });
  };

  const getCampaigns = () => {
    const endpoint = "http://localhost:4000/Campaign/AllCampaigns";
    setIsLoading(true);
    fetch(endpoint)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFetchedlist(data);
        setIsLoading(false);
      });
  };

  return (
    <div className="w-10/12">

      <div className="text-gray-600 w-fit ">
        <h1 className=" font-medium text-4xl py-5">Reports</h1>
      </div>

      <div className=" w-full flex flex-row gap-4">
        <ComboBox
          options={options}
          onSelect={handleReportType}
          type={"Report"}
        />

        {IsLoading ? (
          <div>...</div>
        ) : (
          <SearchDropdown options={fetchedlist} onSelect={handleSelectedValue} />
        )}
        
        <ExportBtn tabledata={fetchedlist} type={ !IsLoading ? selectedReport.value : "" } />
      </div>
      
      



      {selectedReport != null && fetchedlist.length != 0 ? (
        <div className=" ">
          <div className="flex flex-col">
            <div className="overflow-y-auto overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block py-2 sm:px-6 ">
                <div className="overflow-x-scroll overflow-y-scroll h-[68vh]">
                  <table className="w-11/12 text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        {/* Object.keys(fetchedlist[0] || {}).slice(1).map */}
                        {Object.keys(fetchedlist[0] || {})
                          .slice(1, Object.keys(fetchedlist[0]).length - 1)
                          .map((k, index) => (
                            <th key={index} scope="col" className="px-6 py-4">
                              {k}
                            </th>
                          ))}
                      </tr>
                    </thead>
                    <tbody>
                      {fetchedlist.length === 0 ? (
                        <tr className="">
                          <td
                            colSpan={
                              Object.keys(fetchedlist[0] || {}).slice(1, Object.keys(fetchedlist[0]).length - 1).length
                            }
                            className="text-center"
                          >
                            <p className="text-xl"> Empty </p>
                          </td>
                        </tr>
                      ) : (
                        fetchedlist.map((item, i) => (
                          <tr
                            key={i}
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-green-100"
                          >
                            {Object.values(item)
                              .slice(1, Object.keys(fetchedlist[0]).length - 1)
                              .map((value, index) => {
                                return Object.keys(fetchedlist[1]).slice(1, Object.keys(fetchedlist[0]).length - 1)[index] == "profileImage" ? (
                                  // <td key={index} className="whitespace-nowrap px-6 py-4"> {value} </td>
                                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                                    {selectedReport.label == "Volunteers" ? (
                                      <img
                                        src={`http://localhost:4000/uploads/VolunteerImage/${item.profileImage}`}
                                        className="w-12 rounded-full"
                                        alt="Avatar"
                                      />
                                    ) : (
                                      ""
                                    )}

                                    {selectedReport.label == "Organizers" ? (
                                      <img
                                        src={`http://localhost:4000/uploads/organizerImage/${item.profileImage}`}
                                        className="w-12 rounded-full"
                                        alt="Avatar"
                                      />
                                    ) : (
                                      ""
                                    )}

                                    {selectedReport.label == "Campaigns" ? (
                                      <img
                                        src={`http://localhost:4000/uploads/CampaignImage/${item.profileImage}`}
                                        className="w-12 rounded-full"
                                        alt="Avatar"
                                      />
                                    ) : (
                                      ""
                                    )}
                                  </td>
                                ) : (
                                  <td key={index} className="whitespace-nowrap px-6 py-4"> {value} </td>
                                );
                              })}
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Reporting;

{
  /* <table className="min-w-full text-left text-sm font-light  ">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>

                        {Object.keys(fetchedlist[1]).map((k, index) => {
                          return(
                            <th scope="col" key={index} className="px-6 py-4">
                          {k}
                        </th>
                          )
                        })}

                      </tr>
                    </thead>
                    <tbody>
                      
  
                      
                      {fetchedlist.length === 0 ?
                      <tr className="">
                        <td colSpan={6} className=" text-center">
                          <p className="text-xl"> Empty </p> 
                        </td>
                      </tr>
                       :
                       
                       fetchedlist.map((item, i) => {
                        return (
                          <tr
                            key={i}
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-green-100"
                          >
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              <img
                                src={`http://localhost:4000/uploads/VolunteerImage/${item.profileImage}`}
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








 */
}
