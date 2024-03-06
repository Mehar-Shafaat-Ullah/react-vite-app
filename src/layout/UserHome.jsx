import axios from "axios";
import { useEffect, useState } from "react";
import { MdFileOpen } from "react-icons/md";
import Modalshow from "../components/Modalshow";
import { MdOutlineCancelPresentation } from "react-icons/md";

export default function UserHome() {
  const [todos, setTodos] = useState([]);
  const [showIdx, setShowdx] = useState(-1);
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 10; // จำนวน todos ต่อหน้า

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8889/todos", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTodos(response.data.todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchData();
  }, []);

  const openModal = (id) => {
    const idx = todos.findIndex((el) => el.id === id);
    setShowdx(idx);
    document.getElementById("my_modal_5").showModal();
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:8889/todos/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTodos(todos.filter((todo) => todo.id !== id));
      alert("ลบรายการเรียบร้อยแล้ว");
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  // Logic for displaying todos
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const renderTodos = currentTodos.map((el) => (
    <tr key={el.id}>
      <td className="border px-4 py-2">{new Date(el.requesDate).toLocaleDateString()}</td>
      <td className="border px-4 py-2">{el.equiment}</td>
      <td className="border px-4 py-2">{el.detail}</td>
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
      <td className="border px-4 py-2 cursor-pointer">
        <MdFileOpen
          className="size-6 text-blue-400 hover:text-blue-600"
          onClick={() => openModal(el.id)}
        />
      </td>
      <td className="border px-4 py-2 cursor-pointer">
        <MdOutlineCancelPresentation
          className="size-6 text-red-400 hover:text-red-600"
          onClick={() => handleDelete(el.id)}
        />
      </td>
    </tr>
  ));

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => (
    <li
      key={number}
      onClick={() => setCurrentPage(number)}
      className={`${
        currentPage === number
          ? "bg-blue-500 text-white hover:bg-blue-600"
          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
      } border border-gray-300 px-4 py-2 cursor-pointer rounded-md`}
    >
      {number}
    </li>
  ));

  return (
    <>
      <div className="flex flex-col items-center gap-8 mt-20 mx-4">
        <Modalshow el={todos[showIdx]} />
        <div className="text-xl font-semibold mt-20">รายการแจ้งซ่อมของคุณ</div>
        <div className="w-full overflow-x-auto">
          <table className="table-auto border-collapse w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-4 py-2">วันที่แจ้ง</th>
                <th className="border px-4 py-2">อุปกรณ์</th>
                <th className="border px-4 py-2">รายละเอียด</th>
                <th className="border px-4 py-2">สถานะการซ่อม</th>
                <th className="border px-4 py-2">รายละเอียด</th>
                <th className="border px-4 py-2">ยกเลิกรายการ</th>
              </tr>
            </thead>
            <tbody>
              {renderTodos}
            </tbody>
          </table>
          <ul id="page-numbers" className="flex gap-2 mt-4">
            {renderPageNumbers}
          </ul>
        </div>
      </div>
    </>
  );
}