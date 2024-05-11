import { useEffect, useState, useContext } from "react";
// import { useAuth } from '../utility/UserContext';

const AdminDashBoard = () => {
  const [DshCount, setDshCount] = useState({ Vol: 0, Org: 0, Camp: 0 });
  const [JoinedList, setJoinedList] = useState([]);
  //   const { Auth, UserName, UserId, userId, usrType } = useContext();

  const GetJoined = () => {
    console.log("called");
    fetch("http://localhost:4000/Joined/AllJoinedDsh")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("data :>> ", data);
        setJoinedList(data);
      })
      .catch((err) => {
        console.log("err :>> ", err.message);
      });
  };

  const GetDshCount = () => {
    const url = "http://localhost:4000/AdminDsh/DshCounts";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDshCount({
          Vol: data.totalVolunteers,
          Org: data.totalOrganizers,
          Camp: data.totalCampaigns,
        });
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  };

  useEffect(() => {
    GetJoined();
    GetDshCount();
  }, []);

  return (
    <div className="w-screen">
      <div className="py-4">
        <h1 className="font-medium text-gray-800 text-4xl">Admin Dashboard</h1>
      </div>

      <div className="bg-white shadow-lg rounded-lg w-4/5 h-auto px-4 py-4 flex flex-row justify-between divide-x divide-solid divide-gray-400">
        <div className="relative flex-1 flex flex-col gap-2 px-4">
          <label className="text-gray-800 text-base font-semibold tracking-wider">
            Organizers
          </label>
          <label className="text-gray-600 text-4xl font-bold">
            {DshCount.Org}
          </label>
        </div>
        <div className="relative flex-1 flex flex-col gap-2 px-4">
          <label className="text-gray-800 text-base font-semibold tracking-wider">
            Campaigns
          </label>
          <label className="text-gray-600 text-4xl font-bold">
            {DshCount.Camp}
          </label>
        </div>
        <div className="relative flex-1 flex flex-col gap-2 px-4">
          <label className="text-gray-800 text-base font-semibold tracking-wider">
            Volunteers
          </label>
          <label className="text-gray-600 text-4xl font-bold">
            {DshCount.Vol}
          </label>
        </div>
      </div>
      <div className="py-6">
        <div className="w-4/5  bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-xl text-gray-800">
              Joined Recently
            </h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Name</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Campaign</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Organizer</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {JoinedList.length === 0 ? (
                    <tr className="">
                      <td colSpan={6} className=" text-center">
                        <p className="text-xl"> Empty </p>
                      </td>
                    </tr>
                  ) : (
                    JoinedList.map((data, key) => {
                      return (
                        <tr key={key}>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">
                              {data.VolunteerName}
                            </div>
                          </td>

                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-green-500">
                              {data.CampaignName}
                            </div>
                          </td>

                          <td className="p-2 whitespace-nowrap">
                            <div className="text-lg text-left">
                              {data.OrganizerName}
                            </div>
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
  );
};

export default AdminDashBoard;
