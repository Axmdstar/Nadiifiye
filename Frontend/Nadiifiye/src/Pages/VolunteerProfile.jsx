// import { useEffect, useState } from 'react';
// import { useAuth } from '../utility/UserContext';

// const VolunteerProfile = () => {
//     // auth, userName, userId, setAuth, setUserName, setUserId
//     const endpoint = "http://localhost:4000/Volunteer/";
//     const [Profiledata, setProfiledata] = useState({
//             Name: "",
//             Phone: "",
//             Address: "",
//             Emaail: "",
//             TypeOfInterest: "",
//             numOfEvent: "",
//             profileImage: ""
//     });
//     const { userId } = useAuth();

//     useEffect(() => {
//         fetch(endpoint+"single/"+userId)
//         .then((res) => res.json())
//         .then((data) => {
//             setProfiledata(data);
//         })

//     }, [])

//     return (
//         <>
//         <div className="w-full h-[250px]">
//                 <img src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg" className="w-full h-full rounded-tl-lg rounded-tr-lg" />
//             </div>
//             <div className="flex flex-col items-center -mt-20">

//                 <div className="flex items-center space-x-2 mt-2">
//                     <p className="text-2xl">{Profiledata.Name}</p>
//                     <span className="bg-blue-500 rounded-full p-1" title="Verified">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
//                         </svg>
//                     </span>
//                 </div>
//             </div>

//         <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
//             <div className="w-full flex flex-col 2xl:w-1/3">
//                 <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
//                     <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
//                     <ul className="mt-2 text-gray-700">
//                         <li className="flex border-y py-2">
//                             <span className="font-bold w-24">Full name:</span>
//                             <span className="text-gray-700">{Profiledata.Name}</span>
//                         </li>

//                         <li className="flex border-b py-2">
//                             <span className="font-bold w-24">Email:</span>
//                             <span className="text-gray-700">{Profiledata.Emaail}</span>
//                         </li>
//                         <li className="flex border-b py-2">
//                             <span className="font-bold w-24">Location:</span>
//                             <span className="text-gray-700">{Profiledata.Address}</span>
//                         </li>

//                         <li className="flex border-b py-2">
//                             <span className="font-bold w-24">Tel:</span>
//                             <span className="text-gray-700">{Profiledata.Phone}</span>
//                         </li>
//                         <li className="flex border-b py-2">
//                             <span className="font-bold w-24">My Interest:</span>
//                             <span className="text-gray-700">{Profiledata.TypeOfInterest}</span>
//                         </li>
//                         <li className="flex border-b py-2">
//                             <span className="font-bold w-24">Completed:</span>
//                             <span className="text-gray-700">{Profiledata.numOfEvent}</span>
//                         </li>

//                     </ul>
//                 </div>
//                 <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
//                     <h4 className="text-xl text-gray-900 font-bold">Current Joined</h4>
//                     <div className="relative px-4">
//                         <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

//                         <div className="flex items-center w-full my-6 -ml-1.5">
//                             <div className="w-1/12 z-10">
//                                 <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
//                             </div>
//                             <div className="w-11/12">
//                                 <p className="text-sm">Profile informations changed.</p>
//                                 <p className="text-xs text-gray-500">3 min ago</p>
//                             </div>
//                         </div>

//                         <div className="flex items-center w-full my-6 -ml-1.5">
//                             <div className="w-1/12 z-10">
//                                 <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
//                             </div>
//                             <div className="w-11/12">
//                                 <p className="text-sm">
//                                     Connected with <a href="#" className="text-blue-600 font-bold">Colby Covington</a>.</p>
//                                 <p className="text-xs text-gray-500">15 min ago</p>
//                             </div>
//                         </div>

//                         <div className="flex items-center w-full my-6 -ml-1.5">
//                             <div className="w-1/12 z-10">
//                                 <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
//                             </div>
//                             <div className="w-11/12">
//                                 <p className="text-sm">Invoice <a href="#" className="text-blue-600 font-bold">#4563</a> was created.</p>
//                                 <p className="text-xs text-gray-500">57 min ago</p>
//                             </div>
//                         </div>

//                         <div className="flex items-center w-full my-6 -ml-1.5">
//                             <div className="w-1/12 z-10">
//                                 <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
//                             </div>
//                             <div className="w-11/12">
//                                 <p className="text-sm">
//                                     Message received from <a href="#" className="text-blue-600 font-bold">Cecilia Hendric</a>.</p>
//                                 <p className="text-xs text-gray-500">1 hour ago</p>
//                             </div>
//                         </div>

//                         <div className="flex items-center w-full my-6 -ml-1.5">
//                             <div className="w-1/12 z-10">
//                                 <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
//                             </div>
//                             <div className="w-11/12">
//                                 <p className="text-sm">New order received <a href="#" className="text-blue-600 font-bold">#OR9653</a>.</p>
//                                 <p className="text-xs text-gray-500">2 hours ago</p>
//                             </div>
//                         </div>

//                         <div className="flex items-center w-full my-6 -ml-1.5">
//                             <div className="w-1/12 z-10">
//                                 <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
//                             </div>
//                             <div className="w-11/12">
//                                 <p className="text-sm">
//                                     Message received from <a href="#" className="text-blue-600 font-bold">Jane Stillman</a>.</p>
//                                 <p className="text-xs text-gray-500">2 hours ago</p>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>

//         </div>
//         </>
//      );
// }

// export default VolunteerProfile;
