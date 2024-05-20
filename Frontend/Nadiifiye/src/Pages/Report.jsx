import { useEffect, useState } from "react";
import ComboBox from "../components/ComboBox";
import SearchDropdown from "../components/Search";
import ExportBtn from "../components/ExportBtn";

const Reporting = () => {
  const [selectedReport, setSelectedReport] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedValue, setSelectedValue] = useState(null);
  const [fetchedlist, setFetchedlist] = useState([]);

  const options = [
    { label: "Organizers", value: "Organizers" },
    { label: "Campaigns", value: "Campaigns" },
    { label: "Volunteers", value: "Volunteers" },
  ];

  useEffect(() => {
    if (selectedReport != null && selectedValue == null) {
      switch (selectedReport.value) {
        case "Organizers":
          getOrganizer();
          break;
        case "Volunteers":
          getVolunteers();
          break;
        case "Campaigns":
          getCampaigns();
          break;
      }
    } else if (selectedValue != null) {
      switch (selectedReport.value) {
        case "Organizers":
          OrgsCampaign(selectedValue);
          break;
      }
    }
  }, [selectedReport, selectedValue]);

  const handleReportType = (option) => {
    setSelectedReport(option);
    setSelectedValue(null);
  };

  const handleSelectedValue = (option) => {
    setSelectedValue(option);
  };

  const getOrganizer = () => {
    const endpoint = "http://localhost:4000/Organizer/AllOrganizers";
    setIsLoading(true);
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setFetchedlist(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching organizers:", error);
        setIsLoading(false);
      });
  };

  const getVolunteers = () => {
    const endpoint = "http://localhost:4000/Volunteer/AllVolunteers";
    setIsLoading(true);
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setFetchedlist(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching volunteers:", error);
        setIsLoading(false);
      });
  };

  const getCampaigns = () => {
    const endpoint = "http://localhost:4000/Campaign/AllCampaigns";
    setIsLoading(true);
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setFetchedlist(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching campaigns:", error);
        setIsLoading(false);
      });
  };

  const OrgsCampaign = (orgname) => {
    const endpoint = `http://localhost:4000/Campaign/OrgCampaign/${orgname}`;
    setIsLoading(true);
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setFetchedlist(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching campaigns for organizer:", error);
        setIsLoading(false);
      });
  };

  return (
    <div className="w-10/12">
      <div className="text-gray-600 w-fit">
        <h1 className="font-medium text-4xl py-5">Reports</h1>
      </div>

      <div className="w-full flex flex-row gap-4">
        <ComboBox
          options={options}
          onSelect={handleReportType}
          type={"Report"}
        />

        {isLoading ? (
          <div>...</div>
        ) : selectedReport && selectedReport.value === "Organizers" ? (
          <SearchDropdown
            options={fetchedlist}
            onSelect={handleSelectedValue}
          />
        ) : null}

        <ExportBtn
          tabledata={fetchedlist}
          type={!isLoading ? selectedReport?.value : ""}
        />
      </div>

      {selectedReport != null && fetchedlist.length !== 0 && (
        <div>
          <div className="flex flex-col">
            <div className="overflow-y-auto overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block py-2 sm:px-6">
                <div className="overflow-x-scroll overflow-y-scroll h-[68vh]">
                  <table className="w-11/12 text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        {Object.keys(fetchedlist[0] || {})
                          .slice(
                            2,
                            Object.keys(fetchedlist[0] || {}).length - 1
                          )
                          .map((k, index) => (
                            <th key={index} scope="col" className="px-6 py-4">
                              {k}
                            </th>
                          ))}
                      </tr>
                    </thead>
                    <tbody>
                      {fetchedlist.length === 0 ? (
                        <tr>
                          <td
                            colSpan={
                              Object.keys(fetchedlist[0] || {}).slice(
                                2,
                                Object.keys(fetchedlist[0] || {}).length - 1
                              ).length
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
                              .slice(
                                2,
                                Object.keys(fetchedlist[0] || {}).length - 1
                              )
                              .map((value, index) => {
                                const key = Object.keys(
                                  fetchedlist[0] || {}
                                ).slice(
                                  2,
                                  Object.keys(fetchedlist[0] || {}).length - 1
                                )[index];
                                return key === "profileImage" ? (
                                  <td
                                    key={index}
                                    className="whitespace-nowrap px-6 py-4 font-medium"
                                  >
                                    {selectedReport.label === "Volunteers" && (
                                      <img
                                        src={`http://localhost:4000/uploads/VolunteerImage/${item.profileImage}`}
                                        className="w-12 rounded-full"
                                        alt="Avatar"
                                      />
                                    )}
                                    {selectedReport.label === "Organizers" && (
                                      <img
                                        src={`http://localhost:4000/uploads/organizerImage/${item.profileImage}`}
                                        className="w-12 rounded-full"
                                        alt="Avatar"
                                      />
                                    )}
                                    {selectedReport.label === "Campaigns" && (
                                      <img
                                        src={`http://localhost:4000/uploads/CampaignImage/${item.profileImage}`}
                                        className="w-12 rounded-full"
                                        alt="Avatar"
                                      />
                                    )}
                                  </td>
                                ) : (
                                  <td
                                    key={index}
                                    className="whitespace-nowrap px-6 py-4"
                                  >
                                    {value}
                                  </td>
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
      )}
    </div>
  );
};

export default Reporting;
