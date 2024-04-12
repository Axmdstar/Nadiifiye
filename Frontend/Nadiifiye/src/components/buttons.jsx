import { Trash2, Edit} from "lucide-react";

export const DeleteBtn = ({id}) => {

    console.log('id :>> ', id);
    const OnclickDelete = (id) => {
        fetch("http://localhost:4000/Organizer/delete/" + id, {
            method: "Delete"
        })
        .then((res) => {
            console.log('res :>> ', res);
        })
        .catch((err) => {
            console.log('err :>> ', err);
        })
    }

    return ( 
        <button type="button"
                onClick={() => {OnclickDelete(id)}}           >
            <Trash2 /></button>
     );
}
 


export const EditBtn = () => {
    return ( 
        <button type="button"><Edit /></button>
     );
}
 
// export default EditBtn, DeleteBtn;