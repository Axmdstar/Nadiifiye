import { useEffect, useState } from "react";
import useFetch from "../utility/UseFetch";
import { Trash2, Edit, Plus } from "lucide-react";

import { Link } from "react-router-dom";

// import { DeleteBtn } from "../components/buttons";

const OrganizerPage = () => {
  const [OrgList, setOrgList] = useState([]);
  const MainUrl = "http://localhost:4000/Organizer";
  const Apipath = "/AllOrganizers";
  const [FormState, setFormState] = useState(false);
  const { DelFetch } = useFetch();

  // FormData
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orgType, setorgType] = useState("");
  const [website, setwebsite] = useState("");
  const [tel, setTel] = useState("");
  const [addrss, setAddress] = useState("");
  const [file, setFile] = useState();

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  useEffect(() => {
    fetch(MainUrl + Apipath)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setOrgList(data);
        console.log("data :>> ", data);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  }, []);

  const handleDelete = (id) => {
    const status = DelFetch(id, MainUrl);
    if (status) {
      setOrgList(OrgList.filter((item) => item._id !== id));
    } else {
      alert("Error");
    }
  };

  const AddUserData = () => {
    // e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      username: Username,
      email: email,
      password: Password,
      userType: "user",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:4000/auth/register", requestOptions)
      .then((response) => response.json())
      .then((result) => alert(result.message))
      .catch((error) => console.error(error));
  };

  function NewOrg(e) {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("Name", name);
    formdata.append("Phone", tel);
    formdata.append("Address", addrss);
    formdata.append("Emaail", email);
    formdata.append("orgType", orgType);
    formdata.append("website", website);
    formdata.append("profileImage", file);

    console.log("object :>> ", {
      name,
      tel,
      addrss,
      email,
      orgType,
      website,
      file,
    });

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:4000/Organizer/addorganizer", requestOptions)
      .then((response) => response.json())
      .then((result) => AddUserData())
      .catch((error) => console.error(error));
  }

  return (
    <div className="w-full ">
      {FormState ? (
        <div>
          <div className="grid text-sm grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col">
              <div className="text-gray-600 ">
                <p className="font-medium text-4xl pt-5">Organizers Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <form className="mt-10" onSubmit={NewOrg}>
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label className="font-medium">organization Name</label>
                    <input
                      type="text"
                      name="full_name"
                      id="full_name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email" className="font-medium">
                      Email Address
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="email@domain.com"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="orgType" className="font-medium">
                      Organizer type
                    </label>
                    <input
                      type="text"
                      name="orgType"
                      id="orgType"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="type"
                      onChange={(e) => setorgType(e.target.value)}
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="address" className="font-medium">
                      Address / Street
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="city">Tel</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                      onChange={(e) => setTel(e.target.value)}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="website" className="font-medium">
                      website
                    </label>
                    <input
                      type="text"
                      name="website"
                      id="website"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="www.exmaple.com"
                      onChange={(e) => setwebsite(e.target.value)}
                    />
                  </div>
                </div>

                {/* file */}
                <div className="py-8">
                  <input
                    type="file"
                    name="image"
                    id="image"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>

                <div className="md:col-span-5 text-right  flex gap-4">
                  {/* submit  */}
                  <div className="inline-flex items-end">
                    <input
                      type="submit"
                      className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      placeholder="Submit"
                    />
                  </div>

                  {/* Cancel  */}
                  <div className="inline-flex items-end">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => setFormState(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div>
              <div className="md:col-span-5">
                <div className="mt-36 pt-1 ml-11">
                  <label className="font-medium">UserName</label>
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="md:col-span-5 py-4 ml-11">
                  <label htmlFor="password" className="font-medium">
                    Password
                  </label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* Title  */}
          <div className="text-gray-600">
            <h1 className="font-medium text-4xl py-5">Organizers</h1>

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
                            orgnizer Type
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Website
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {OrgList.length === 0 ? (
                          <tr className="">
                            <td colSpan={6} className=" text-center">
                              <p className="text-xl"> Empty </p>
                            </td>
                          </tr>
                        ) : (
                          OrgList.map((item, i) => {
                            return (
                              <tr
                                key={i}
                                className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-green-100"
                              >
                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                  <img
                                    src={`http://localhost:4000/uploads/organizerImage/${item.profileImage}`}
                                    className="w-12 rounded-full"
                                    alt="avatar"
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
                                  {item.orgType}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  {item.website}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  {item.status}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  <Link to={`../updateOrg/${item._id}`}>
                                    <Edit className="text-green-600"></Edit>
                                  </Link>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  <button
                                    type="button"
                                    onClick={() => {
                                      handleDelete(item._id);
                                    }}
                                  >
                                    <Trash2 className="text-red-600 text-3xl"></Trash2>
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

export default OrganizerPage;
