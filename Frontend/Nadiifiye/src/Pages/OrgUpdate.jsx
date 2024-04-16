import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

export default function OrgUpdate() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [website, setwebsite] = useState("");
  // const [tel, setTel] = useState("");
  // const [addrss, setAddress] = useState("");
  const [file, setFile] = useState(null);
  //const [imageFile, setImageFile] = useState(null);
  // const [FormState, setFormState] = useState(false);
  //get SingleONe
  const { id } = useParams();
  const [getdata, setgetdata] = useState({
    id: id,
    Name: "",
    Emaail: "",
    Address: "",
    Phone: "",
    website: "",
  });
  /////////////comm/     const HandlegetSigle =()=>{

  // axios.get(`http://localhost:4000/Organizer/single/${params.id}`).then((response)=>{
  // console.log(response.data)
  // setgetdata(response.data)

  // //   setName(response.data.name);
  // //   setEmail(response.data[0].email);
  // //   setAddress(response.data[0].addrss);
  // //   setTel(response.data[0].tel);
  // // setwebsite(response.data[0].website)

  // }).catch((error)=>{
  //     console.log({error})
  // })
  //     }
  //////////////////////////

  useEffect(() => {
    axios
      .get("http://localhost:4000/Organizer/single/" + id)
      .then((response) => {
        console.log(response.data);
        setgetdata(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  //update
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/Organizer/update/" + id, getdata)
      .then((res) => {
        alert("success fully updated !!");
        navigate("/Admin/Organizer");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
        <div className="flex flex-col">
          <div className="text-gray-600 ">
            <p className="font-medium text-4xl py-5">Organizers Details</p>
            <p>Please fill out all the fields.</p>
          </div>

          <form className="mt-10" onSubmit={handleUpdate}>
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-5">
                <label className="font-medium">organization Name</label>
                <input
                  type="text"
                  name="Name"
                  id="Name"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value={getdata.Name}
                  onChange={(e) =>
                    setgetdata({ ...getdata, Name: e.target.value })
                  }
                />
              </div>

              <div className="md:col-span-5">
                <label htmlFor="email" className="font-medium">
                  Email Address
                </label>
                <input
                  type="text"
                  name="Emaail"
                  id="Emaail"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  placeholder="email@domain.com"
                  value={getdata.Emaail}
                  onChange={(e) =>
                    setgetdata({ ...getdata, Emaail: e.target.value })
                  }
                />
              </div>

              <div className="md:col-span-3">
                <label htmlFor="address" className="font-medium">
                  Address / Street
                </label>
                <input
                  type="text"
                  name="Address"
                  id="Address"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  placeholder=""
                  value={getdata.Address}
                  onChange={(e) =>
                    setgetdata({ ...getdata, Address: e.target.value })
                  }
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="city">Tell</label>
                <input
                  type="text"
                  name="Phone"
                  id="Phone"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  placeholder=""
                  value={getdata.Phone}
                  onChange={(e) =>
                    setgetdata({ ...getdata, Phone: e.target.value })
                  }
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
                  value={getdata.website}
                  onChange={(e) =>
                    setgetdata({ ...getdata, website: e.target.value })
                  }
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

            <div className="md:col-span-5 text-right pt-7 flex gap-4">
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
                <Link to={"../Organizer"}>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                  Cancel
                </button > 

                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
