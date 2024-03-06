import axios from "axios";
import { useState } from "react";

export default function NewTodoForm() {
  
  const [input, setInput] = useState({
    detail: "",
    requesDate: "",
    equiment: "",
    location: "",
    status: "ส่งซ่อม",
  });

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      const output = { ...input, requesDate: new Date(input.requesDate) };
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:8889/todos", output, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("คุณได้ทำการแจ้งซ่อมเรีบยร้อบแล้ว");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form
      className="flex flex-col w-full max-w-md mx-auto p-4 space-y-4 bg-gray-100 rounded-lg shadow-lg"
      onSubmit={hdlSubmit}
      style={{ marginTop: "90px" }}
    >
      <h2 className="text-2xl font-bold text-center">แบบฟอร์มแจ้งซ่อม</h2>
      <div>
        <label className="block">
          <span className="text-gray-700">วันที่แจ้งซ่อม</span>
          <input
            type="datetime-local"
            name="requesDate"
            value={input.requesDate}
            onChange={hdlChange}
            className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </label>
      </div>
      <div>
        <label className="block">
          <span className="text-gray-700">อุปกรณ์</span>
          <input
            type="text"
            placeholder="อุปกรณ์ที่แจ้งซ่อม"
            name="equiment"
            value={input.equiment}
            onChange={hdlChange}
            className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </label>
      </div>
      <div>
        <label className="block">
          <span className="text-gray-700">รายละเอียด</span>
          <input
            type="text"
            placeholder="รายละเอียด"
            name="detail"
            value={input.detail}
            onChange={hdlChange}
            className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </label>
      </div>
      <div>
        <label className="block">
          <span className="text-gray-700">สถานที่</span>
          <input
            type="text"
            placeholder="สถานที่แจ้ง"
            name="location"
            value={input.location}
            onChange={hdlChange}
            className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </label>
      </div>
      <button
        type="submit"
        className="inline-block w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-700"
      >
        แจ้งซ่อม
      </button>
    </form>
  );
}