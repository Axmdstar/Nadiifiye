import { Trash2, Edit } from "lucide-react";
import useFetch from "../utility/UseFetch";

// export const DeleteBtn = ({ id, Route, onDelete }) => {

//     console.log('id :>> ', id);
//     const handleClick = async () => {
//   try {
//     const response = await fetch(`http://localhost:4000/${Route}/delete/${id}`, {
//       method: 'DELETE',
//     });
//     if (response.ok) {
//       onDelete(); // Call the onDelete callback function passed from the parent component
//     } else {
//       console.error('Failed to delete item');
//     }
//   } catch (error) {
//     console.error('Error deleting item:', error);
//   }
// };

//     return <button onClick={handleClick}>Delete</button>;
//   };

// export const DeleteBtn = ({id, Route, index}) => {
//     const {ResData, setResData} =useFetch();
//     const Url = "http://localhost:4000/" + Route +"/delete/" + id;

//     const OnclickDelete = () => {
//         console.log('Url :>> ', ResData);
//         fetch( Url, {
//             method: "Delete"
//         })
//         .then((res) => {
//             if(res.ok){
//                 const newData = [...ResData]
//                 newData.splice(index, 1)
//                 setResData(newData)
//             }
//         })
//         .catch((err) => {
//             console.log('err :>> ', err);
//         })
//     }

//     return (
//         <button type="button"
//                 onClick={() => {OnclickDelete(id)}}           >
//             <Trash2 /></button>
//      );
// }

export const EditBtn = () => {
  return (
    <button type="button">
      <Edit />
    </button>
  );
};

// export default EditBtn, DeleteBtn;
