import useAuth from '../hooks/useAuth';

export default function Homesystem() {
  const {user, } = useAuth()

    return (
<div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">ระบบแจ้งซ่อมอุปกรณ์ IT</h1>
      <div>
        <p>ยินดีต้อนรับ</p>
        {user?.id ? user.username : 'ผู้เยี่ยมชม'}
      </div>
      <p className="mb-5">อยู่ในระหว่างขั้นพัฒา</p>
      <p className="mb-5">รูปภาพใช้ประกอบเท่านั้น</p>
    </div>
  </div>
</div>
   );
 }
 