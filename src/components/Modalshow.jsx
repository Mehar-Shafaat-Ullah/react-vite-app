import React from "react";

export default function Modalshow(props) {
  const { el } = props;

  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
      <div className="modal-box">
       <h1 className="text-3xl font-bold mb-4">Details of repair notification</h1>
       <table className="w-full border border-collapse">
  <tbody>
    <tr className="bg-gray-200">
      <td className="w-1/3 font-bold border border-black border-opacity-100 px-4 py-2">Repair notification date</td>
      <td className="w-2/3 border border-black border-opacity-100 px-4 py-2">
        {new Date(el?.requesDate).toDateString()}
      </td>
    </tr>
    <tr className="bg-gray-100">
      <td className="font-bold border border-black border-opacity-100 px-4 py-2">Name of informant</td>
      <td className="border border-black border-opacity-100 px-4 py-2">{el?.user.username}</td>
    </tr>
    <tr className="bg-gray-200">
      <td className="font-bold border border-black border-opacity-100 px-4 py-2">
Equipment reported for repair</td>
      <td className="border border-black border-opacity-100 px-4 py-2">{el?.equiment}</td>
    </tr>
    <tr className="bg-gray-100">
      <td className="font-bold border border-black border-opacity-100 px-4 py-2">details</td>
      <td className="border border-black border-opacity-100 px-4 py-2">{el?.detail}</td>
    </tr>
    <tr className="bg-gray-200">
      <td className="font-bold border border-black border-opacity-100 px-4 py-2">status</td>
      <td
        className="border border-black border-opacity-100 px-4 py-2"
        style={{
          color:
            el?.status === "Send for repair"
              ? "red"
              : el?.status === "รCheck"
              ? "orange"
              : el?.status === "succeed"
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
<h1 className="text-3xl font-bold mb-4 mt-10">More details</h1>
<tr className="bg-gray-100">
  <td className="w-1/3 font-bold border border-gray-200 px-4 py-2">Corrective action date</td>
  <td className="w-2/3 border border-gray-200 px-4 py-2">
    {/* {new Date(el?.requesDate).toDateString()} */} -
  </td>
</tr>
<tr className="bg-gray-200">
  <td className="font-bold border border-gray-200 px-4 py-2"Date of repair completion</td>
  <td className="border border-gray-200 px-4 py-2">-</td>
</tr>
<tr className="bg-gray-100">
  <td className="font-bold border border-gray-200 px-4 py-2">details</td>
  <td className="border border-gray-200 px-4 py-2">-</td>
</tr>
<tr className="bg-gray-200">
  <td className="font-bold border border-gray-200 px-4 py-2">Operator</td>
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
