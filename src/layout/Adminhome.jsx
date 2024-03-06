import axios from "axios";
import { useEffect, useState } from "react";
import React, { useContext } from "react";
import RepairContext from "../contexts/RepairContext";
import { SiReaddotcv } from "react-icons/si";
import { BiSolidEdit } from "react-icons/bi";

export default function Adminhome( ) {
  const { adminData } = useContext(RepairContext);
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 10;

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const renderTodos = adminData
    .slice((currentPage - 1) * todosPerPage, currentPage * todosPerPage)
    .map((el) => (
      <tr key={el.id}>
        <td className="border px-4 py-2">{new Date(el.requesDate).toLocaleDateString()}</td>
        <td className="border px-4 py-2">{el?.user.username}</td>
        <td className="border px-4 py-2">{el?.equiment}</td>
        <td className="border px-4 py-2">{el?.detail}</td>
        <td className="border px-4 py-2">{el?.location}</td>
        <td className="border px-4 py-2">
        <span className={`font-semibold ${
          el.status === "ส่งซ่อม" ? "text-blue-700" :
          el.status === "รอดำเนินการ" ? "text-orange-700" :
          el.status === "สำเร็จ" ? "text-green-700" :
          "text-lime-700"
        }`}>
          {el.status}
        </span>
      </td>
        <td className="border px-4 py-2">{el?.user.phon}</td>
        <td className="border px-4 py-2"><BiSolidEdit/></td>
        <td className="border px-4 py-2"><SiReaddotcv/></td>
      </tr>
    ));

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(adminData.length / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold mt-28">รายการแจ้งซ่อมทั้งหมด</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">วันที่แจ้ง</th>
              <th className="px-4 py-2">ชื่อผู้แจ้ง</th>
              <th className="px-4 py-2">อุปกรณ์</th>
              <th className="px-4 py-2">รายละเอียด</th>
              <th className="px-4 py-2">ห้องหรือสถานที่</th>
              <th className="px-4 py-2">สถานะการซ่อม</th>
              <th className="px-4 py-2">เบอร์โทร</th>
              <th className="px-4 py-2">แก้ไข</th>
              <th className="px-4 py-2">เพิ่มรายละเอียด</th>
            </tr>
          </thead>
          <tbody>
            {renderTodos}
          </tbody>
        </table>
      </div>
      <ul className="flex justify-center mt-4">
        {pageNumbers.map((number) => (
          <li
            key={number}
            id={number}
            className={`px-4 py-2 cursor-pointer ${
              currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={handleClick}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
}