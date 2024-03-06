import React from 'react'
import { MdFileOpen } from "react-icons/md";
import ModalTa from '../components/ModalTa';

export default function Tenichend() {

  const openmodal = () =>{
    document.getElementById("my_modal_2").showModal()
  }

  return (
    <div className="flex flex-col gap-4 "> 
    <div className="text-center mt-20"> รายชื่อช่าง</div>
       {/* <Modalshow el={todos[showIdx]}/> */}
       <ModalTa/>
      <div className="w-5/6 overflow-x-auto mx-auto mt-16">
      {/* w-5/6 overflow-x-auto mt-4" */}
        <table className="table table-zebra">
          {/* head */}
          <thead >
            <tr >
              <th>ชื่อ</th>
              <th>เบอร์โทร</th>
      
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
          {/* {todos.map(el => (  */}
            <tr >
              <th></th>
              <td></td>
              <td></td>
              <td></td>
              <td className="cursor-pointer active:shadow-none active:translate-x-2 active:translate-y-1"></td>
              <td className="cursor-pointer active:shadow-none active:translate-x-2 active:translate-y-1"><MdFileOpen className="size-6  text-blue-400 " onClick={openmodal} /></td>
            </tr>
              {/* ))
            } */}
            
          </tbody>
        </table>
      </div>
    </div>  
  )
}
