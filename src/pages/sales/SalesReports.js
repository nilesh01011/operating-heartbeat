import React, { useState } from 'react'

function SalesReports() {

    const [active, setActive] = useState(0);

    const menuItems = [{ name: "Overview - Tractor" }, { name: "Overview - FM" }, { name: "Industry Wise" }, { name: "Model Wise" }, { name: "Zone Wise" }, { name: "Customer Parameters" }];

    return (
        <div className="relative w-full flex flex-col">

            <div className="w-full flex items-center justify-between px-[24px] mb-[5px]">
                <h1 className="text-[24px] text-[#262626] font-bold">Sales</h1>
                <p className="text-[12px] text-[#7F8082]">Last updated on: <strong>6pm IST, 5 June2024</strong></p>
            </div>

            <div className='w-full h-full flex flex-col'>
                {/* tabs */}
                <div className="w-full flex items-center mb-[10px] px-[8px]"
                    style={{ boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.10)" }}
                >
                    {
                        menuItems.map((ele, i) => (
                            <button key={i} className={`p-[8px_16px] text-center border-b-2 font-[400] ${active === i ? " border-[#061E4A] text-black" : "border-[#d5e0f7] text-[#4D4E4F]"}`} onClick={() => setActive(i)}>{ele.name}</button>
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
                            src="https://mde-analytics.sg.qlikcloud.com/single/?appid=d481aad3-7752-49f1-933f-ebbb3b5375fc&sheet=yJbdca&theme=horizon&opt=ctxmenu"
                            style={{ border: "none", width: "100%", height: "100%" }}
                        />
                    }

                    {
                        active === 1 &&
                        <iframe
                            title="Qlik Sense Dashboard"
                            src="https://mde-analytics.sg.qlikcloud.com/single/?appid=d481aad3-7752-49f1-933f-ebbb3b5375fc&sheet=32cf5973-5714-40b4-baba-e37e16db90ad&theme=horizon&opt=ctxmenu"
                            style={{ border: "none", width: "100%", height: "100%" }}
                        />
                    }

                    {
                        active === 2 &&
                        <iframe
                            title="Qlik Sense Dashboard"
                            src="https://mde-analytics.sg.qlikcloud.com/single/?appid=d481aad3-7752-49f1-933f-ebbb3b5375fc&sheet=kJwdhq&theme=horizon&opt=ctxmenu"
                            style={{ border: "none", width: "100%", height: "100%" }}
                        />
                    }

                    {
                        active === 3 &&
                        <iframe
                            title="Qlik Sense Dashboard"
                            src="https://mde-analytics.sg.qlikcloud.com/single/?appid=d481aad3-7752-49f1-933f-ebbb3b5375fc&sheet=79fbee91-b639-4382-9471-be87ace75e07&theme=horizon&opt=ctxmenu"
                            style={{ border: "none", width: "100%", height: "100%" }}
                        />
                    }

                    {
                        active === 4 &&
                        <iframe
                            title="Qlik Sense Dashboard"
                            src="https://mde-analytics.sg.qlikcloud.com/single/?appid=d481aad3-7752-49f1-933f-ebbb3b5375fc&sheet=3e94f6a4-12d6-4a13-a58c-189473cefcf4&theme=horizon&opt=ctxmenu"
                            style={{ border: "none", width: "100%", height: "100%" }}
                        />
                    }

                    {
                        active === 5 &&
                        <iframe
                            title="Qlik Sense Dashboard"
                            src="https://mde-analytics.sg.qlikcloud.com/single/?appid=d481aad3-7752-49f1-933f-ebbb3b5375fc&sheet=31fce96f-1d5a-4e1e-8300-cddf759a34da&theme=horizon&opt=ctxmenu"
                            style={{ border: "none", width: "100%", height: "100%" }}
                        />
                    }
                </div>
            </div>
        </div>
    );
}

export default SalesReports