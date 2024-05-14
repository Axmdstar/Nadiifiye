// import React, { useState, } from "react";

// const ComboBox = ({ options, onSelect, type }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//     setIsOpen(false);
//     onSelect(option);
//   }

//   return (
//     <div className="w-52">
//       <div
//         className="inline-flex w-52 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span>{selectedOption ? selectedOption.label : `Select a ${type}`}</span>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-5 h-5 ml-2 -mr-1"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//           aria-hidden="true"
//         >
//           <path
//             fillRule="evenodd"
//             d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </div>
//       {isOpen && (
//         <div className="absolute z-10 mt-1 w-52 bg-white shadow-lg rounded-md">
//           {options.map((option, i) => (
//             <div
//               key={i}
//               className="cursor-pointer py-2 px-4 hover:bg-gray-100"
//               onClick={() => handleOptionClick(option)}
//             >
//               {option.label}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ComboBox;
