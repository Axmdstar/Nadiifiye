import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";



const JoinForm = () => {

    const [Name, setName] = useState("");
    const [Phone, setPhone] = useState("");
    const [Address, setAddress] = useState("");
    const [Emaail, setEmaail] = useState("");
    const [TypeOfInterest, setTypeOfInterest] = useState("");
    const [numOfEvent, setnumOfEvent] = useState("");
    const [profileImage, setprofileImage] = useState("");

    const { id }  = useParams();
    
    function NewOrg(e) {
        e.preventDefault();
    
        const formdata = new FormData();
        formdata.append("Name", Name);
        formdata.append("Phone", Phone);
        formdata.append("Address", Address);
        formdata.append("Emaail", Emaail);
        formdata.append("TypeOfInterest", TypeOfInterest);
        formdata.append("numOfEvent", numOfEvent);
        formdata.append("profileImage", profileImage);
        formdata.append("Campaigns", id);
    
        
    
        const requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow",
        };
    
        fetch("http://localhost:4000/Organizer/addorganizer", requestOptions)
          .then((response) => response.json())
          .then((result) => alert(result.message))
          .catch((error) => console.error(error));
    
      }


    return ( 
        <>
        <div className="mx-auto px-6">
          <div className=" text-sm ">
            <div className="flex flex-col">
              <div className="text-gray-600 ">
                <p className="font-medium text-4xl pt-5">Join Campaign</p>
                <p>Please fill out all the fields.</p>
              </div>

              <form className="mt-10" onSubmit={NewOrg}>
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label className="font-medium">Fullname</label>
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
                      onChange={(e) => setEmaail(e.target.value)}
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
                    <label htmlFor="city">Phone</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="website" className="font-medium">
                    Type Of Interest
                    </label>
                    <input
                      type="text"
                      name="website"
                      id="website"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      onChange={(e) => setTypeOfInterest(e.target.value)}
                    />
                  </div>
                </div>

                

                {/* file */}
                <div className="py-8">
                    <p>Upload Image</p>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    onChange={(e) => setprofileImage(e.target.files[0])}
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

                  
                  <div className="inline-flex items-end">
                    
                    
                      <Link to={"../campaigns"} className="font-medium text-2xl">Cancel</Link>
                    
                  </div>
                </div>
              </form>
            </div>

            
          </div>
        </div>
        </>
     );
}



// export const JoinFormLoader = async ({ params }) => {
//     const { id } = params;
  
//     const url = `http://localhost:4000/Campaign/single/${id}`;
    
//     const result = await fetch(url);
//   const data = await result.json();

  
  
    
  
    
//     return data;
//   };
 
export default JoinForm;