import React from "react";

export default function Modalshow(props) {
  const { el } = props;

  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
      <div className="modal-box">
       <h1 className="text-3xl font-bold mb-4">รายละเอียดการแจ้งซ่อม</h1>
       <table className="w-full border border-collapse">
  <tbody>
    <tr className="bg-gray-200">
      <td className="w-1/3 font-bold border border-black border-opacity-100 px-4 py-2">วันที่แจ้งซ่อม</td>
      <td className="w-2/3 border border-black border-opacity-100 px-4 py-2">
        {new Date(el?.requesDate).toDateString()}
      </td>
    </tr>
    <tr className="bg-gray-100">
      <td className="font-bold border border-black border-opacity-100 px-4 py-2">ชื่อผู้แจ้ง</td>
      <td className="border border-black border-opacity-100 px-4 py-2">{el?.user.username}</td>
    </tr>
    <tr className="bg-gray-200">
      <td className="font-bold border border-black border-opacity-100 px-4 py-2">อุปกรณ์ที่แจ้งซ่อม</td>
      <td className="border border-black border-opacity-100 px-4 py-2">{el?.equiment}</td>
    </tr>
    <tr className="bg-gray-100">
      <td className="font-bold border border-black border-opacity-100 px-4 py-2">รายละเอียด</td>
      <td className="border border-black border-opacity-100 px-4 py-2">{el?.detail}</td>
    </tr>
    <tr className="bg-gray-200">
      <td className="font-bold border border-black border-opacity-100 px-4 py-2">สถานะ</td>
      <td
        className="border border-black border-opacity-100 px-4 py-2"
        style={{
          color:
            el?.status === "ส่งซ่อม"
              ? "red"
              : el?.status === "รอตรวจสอบ"
              ? "orange"
              : el?.status === "สำเร็จ"
              ? "green"
              : "black",
        }}
      >
        {el?.status}
      </td>
    </tr>
  </tbody>
</table>

{/* Second Table */}
<h1 className="text-3xl font-bold mb-4 mt-10">รายละเอียดเพิ่มเติม</h1>
<tr className="bg-gray-100">
  <td className="w-1/3 font-bold border border-gray-200 px-4 py-2">วันที่ดำเนินการแก้ไข</td>
  <td className="w-2/3 border border-gray-200 px-4 py-2">
    {/* {new Date(el?.requesDate).toDateString()} */} -
  </td>
</tr>
<tr className="bg-gray-200">
  <td className="font-bold border border-gray-200 px-4 py-2">วันที่ซ่อมเสร็จ</td>
  <td className="border border-gray-200 px-4 py-2">-</td>
</tr>
<tr className="bg-gray-100">
  <td className="font-bold border border-gray-200 px-4 py-2">รายละเอียด</td>
  <td className="border border-gray-200 px-4 py-2">-</td>
</tr>
<tr className="bg-gray-200">
  <td className="font-bold border border-gray-200 px-4 py-2">ช่างผู้ดำเนินการ</td>
  <td className="border border-gray-200 px-4 py-2">-</td>
</tr>

<div className="modal-action">
  <form method="dialog">
    {/* if there is a button in form, it will close the modal */}
    <button className="btn">Close</button>
  </form>
</div>
</div>
</dialog>
);
}