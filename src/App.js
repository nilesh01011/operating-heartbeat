import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { useState } from "react";

function App() {

  const [active, setActive] = useState(0);

  const menuItems = [{ name: "Overview - Tractor" }, { name: "Overview - FM" }, { name: "Industry Wise" }, { name: "Model Wise" }, { name: "Zone Wise" }, { name: "Customer Parameters" }];

  return (
    <div className="relative w-full flex bg-[#d5e0f7]">

      <Sidebar />

      <div className='w-full h-full ml-[160px] flex flex-col'>
        {/* headers */}
        <Header />

        <div className="w-full flex items-center justify-between px-[24px] mb-[5px]">
          <h1 className="text-[24px] text-[#262626] font-bold">Sales</h1>
          <p className="text-[12px] text-[#7F8082]">Last updated on: <strong>6pm IST, 5 June2024</strong></p>
        </div>

        {/* tabs */}
        <div className="w-full flex items-center mb-[10px] shadow-md px-[8px]">
          {
            menuItems.map((ele, i) => (
              <button key={i} className={`p-[8px_16px] text-center border-b border-b-1 ${active === i ? "font-[500] border-[#061E4A]" : "border-[#d5e0f7] font-[400]"}`} onClick={() => setActive(i)}>{ele.name}</button>
            ))
          }
        </div>

        {/* iframe */}
        <div className="h-screen">

          {
            active === 0 &&
            <iframe
              title="Qlik Sense Dashboard"
              // src="http://localhost:4848/single/?appid=C%3A%5CUsers%5CAdmin%5CDocuments%5CQlik%5CSense%5CApps%5CNew%20Hospital%20Dashboard.qvf&sheet=yJbdca&theme=horizon&opt=ctxmenu"
              src="https://mde-analytics.sg.qlikcloud.com/single/?appid=ab6b9a4e-6156-4369-a900-b5f57af8310f&sheet=yJbdca&theme=horizon&opt=ctxmenu,currsel"
              style={{ border: "none", width: "100%", height: "100%" }}
            />
          }

          {
            active === 1 &&
            <iframe
              title="Qlik Sense Dashboard"
              // src="http://localhost:4848/single/?appid=C%3A%5CUsers%5CAdmin%5CDocuments%5CQlik%5CSense%5CApps%5CNew%20Hospital%20Dashboard.qvf&sheet=mAENry&theme=horizon&opt=ctxmenu"
              src="https://mde-analytics.sg.qlikcloud.com/single/?appid=ab6b9a4e-6156-4369-a900-b5f57af8310f&sheet=mAENry&theme=horizon&opt=ctxmenu"
              style={{ border: "none", width: "100%", height: "100%" }}
            />
          }
        </div>
      </div>
    </div>
  );
}

export default App;
