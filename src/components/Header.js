import React from 'react'

function Header() {
    return (
        <div className="min-h-[42px] bg-[#D5E0F7] px-[24px] py-[15px] pb-[10px] flex items-center justify-between">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="134" height="30" viewBox="0 0 134 30" fill="none">
                    <path d="M131.36 15.2083H125.339V12.9793H130.323C130.663 12.9793 130.927 12.7162 130.927 12.3756V12.0815H125.88C124.75 12.0815 123.76 11.1528 123.76 9.96091V5.34816C123.76 4.2182 124.689 3.22754 125.88 3.22754H133.481V13.0877C133.481 14.2176 132.552 15.2083 131.36 15.2083ZM126.917 9.83708H130.927V5.472H126.917C126.577 5.472 126.314 5.73514 126.314 6.07568V9.2334C126.314 9.57394 126.577 9.83708 126.917 9.83708Z" fill="#061E4A" />
                    <path d="M112.457 3.22754H119.995C121.125 3.22754 122.116 4.17176 122.116 5.34816V12.0815H119.562V6.07568C119.562 5.73514 119.299 5.472 118.958 5.472H115.011V12.0815H112.457V3.22754Z" fill="#061E4A" />
                    <path d="M108.148 3.22774H110.702V12.0817H108.148V3.22774ZM108.148 0.0390625H110.702V2.299H108.148V0.0390625Z" fill="#061E4A" />
                    <path d="M107.138 3.22775V5.47221H103.81V12.0817H101.256V5.47221H97.9277V3.22775H101.256V1.23096H103.81V3.22775H107.138Z" fill="#061E4A" />
                    <path d="M94.8066 3.22754C95.983 3.22754 96.9272 4.17176 96.9272 5.34816V12.0815H89.4663C88.2899 12.0815 87.3457 11.1218 87.3457 9.96091V8.75355C87.3457 7.57714 88.3054 6.63292 89.4663 6.63292H94.3732V5.95185C94.3732 5.62679 94.141 5.3946 93.8159 5.3946H87.8875V3.22754H94.8066ZM90.4415 9.96091H94.3732V8.67615H90.4415C90.1319 8.67615 89.8997 8.90834 89.8997 9.21792V9.41915C89.8997 9.74421 90.1319 9.96091 90.4415 9.96091Z" fill="#061E4A" />
                    <path d="M81.5484 3.22754H86.7338V5.472H82.5855C82.2449 5.472 81.9818 5.73514 81.9818 6.07568V12.0815H79.4277V5.34816C79.4277 4.2182 80.3565 3.22754 81.5484 3.22754Z" fill="#061E4A" />
                    <path d="M68.0566 9.96091V5.34816C68.0566 4.17176 69.0009 3.22754 70.1773 3.22754H75.6723C76.8487 3.22754 77.7929 4.18724 77.7929 5.34816V6.50909C77.7929 7.6855 76.8487 8.62972 75.6723 8.62972H70.6107V9.31079C70.6107 9.65133 70.8738 9.91447 71.2144 9.91447H77.406V12.0815H70.1773C69.0009 12.0815 68.0566 11.1218 68.0566 9.96091ZM74.7126 5.34816H71.137C70.8274 5.34816 70.6107 5.56487 70.6107 5.87445V6.66388H74.7126C75.0377 6.66388 75.2389 6.44718 75.2389 6.1376V5.87445C75.2389 5.56487 75.0377 5.34816 74.7126 5.34816Z" fill="#061E4A" />
                    <path d="M64.4126 3.22754C65.5425 3.22754 66.5332 4.17176 66.5332 5.34816V9.96091C66.5332 11.0909 65.6044 12.0815 64.4126 12.0815H59.3664V15.2083H56.7969V3.22754H64.4126ZM63.9791 9.2334V6.07568C63.9791 5.73514 63.716 5.472 63.3755 5.472H59.3664V9.83708H63.3755C63.716 9.83708 63.9791 9.57394 63.9791 9.2334Z" fill="#061E4A" />
                    <path d="M52.6781 1.24609C53.9319 1.24609 55.0464 2.28319 55.0464 3.5989V9.72859C55.0464 10.9824 53.9939 12.0814 52.6781 12.0814H46.9973C45.7435 12.0814 44.6445 11.0443 44.6445 9.72859V3.5989C44.6445 2.3451 45.6816 1.24609 46.9973 1.24609H52.6781ZM52.384 9.10943V4.21807C52.384 3.84657 52.0745 3.53699 51.703 3.53699H47.9725C47.6165 3.53699 47.3069 3.84657 47.3069 4.21807V9.10943C47.3069 9.48093 47.6165 9.79051 47.9725 9.79051H51.703C52.0745 9.79051 52.384 9.48093 52.384 9.10943Z" fill="#061E4A" />
                    <path d="M133.368 19.776V22.2053H129.811V29.3592H127.081V22.2053H123.523V19.776H127.081V17.6147H129.811V19.776H133.368Z" fill="#E31837" />
                    <path d="M119.993 19.688C121.244 19.688 122.249 20.7194 122.249 22.0045V29.3599H114.314C113.063 29.3599 112.059 28.3116 112.059 27.0434V25.7245C112.059 24.4394 113.079 23.408 114.314 23.408H119.532V22.664C119.532 22.3089 119.285 22.0552 118.94 22.0552H112.635V19.688H119.993ZM115.351 27.0434H119.532V25.6399H115.351C115.022 25.6399 114.775 25.8936 114.775 26.2318V26.4516C114.775 26.8067 115.022 27.0434 115.351 27.0434Z" fill="#E31837" />
                    <path d="M100.248 27.0434V22.0045C100.248 20.7194 101.27 19.688 102.543 19.688H108.489C109.762 19.688 110.784 20.7363 110.784 22.0045V23.2727C110.784 24.5578 109.762 25.5892 108.489 25.5892H103.012V26.3332C103.012 26.7052 103.296 26.9927 103.665 26.9927H110.365V29.3599H102.543C101.27 29.3599 100.248 28.3116 100.248 27.0434ZM107.45 22.0045H103.581C103.246 22.0045 103.012 22.2412 103.012 22.5794V23.4418H107.45C107.802 23.4418 108.02 23.2051 108.02 22.8669V22.5794C108.02 22.2412 107.802 22.0045 107.45 22.0045Z" fill="#E31837" />
                    <path d="M91.1992 16.5781V19.815H96.6596C97.8656 19.815 98.971 20.8328 98.971 22.1009V27.073C98.971 28.2744 97.9326 29.3589 96.6596 29.3589H88.4355V16.5781H91.1992ZM96.2074 26.2888V22.8851C96.2074 22.518 95.9059 22.2344 95.5541 22.2344H91.1992V26.9396H95.5541C95.9059 26.9396 96.2074 26.6559 96.2074 26.2888Z" fill="#E31837" />
                    <path d="M87.1611 19.776V22.2053H83.6037V29.3592H80.8737V22.2053H77.3164V19.776H80.8737V17.6147H83.6037V19.776H87.1611Z" fill="#E31837" />
                    <path d="M70.3978 19.688H76.0366V22.1398H71.5256C71.1553 22.1398 70.8691 22.4272 70.8691 22.7992V29.3599H68.0918V22.0045C68.0918 20.7702 69.1017 19.688 70.3978 19.688Z" fill="#E31837" />
                    <path d="M64.5263 19.688C65.7986 19.688 66.8198 20.7194 66.8198 22.0045V29.3599H58.7506C57.4782 29.3599 56.457 28.3116 56.457 27.0434V25.7245C56.457 24.4394 57.495 23.408 58.7506 23.408H64.0575V22.664C64.0575 22.3089 63.8064 22.0552 63.4548 22.0552H57.043V19.688H64.5263ZM59.8053 27.0434H64.0575V25.6399H59.8053C59.4704 25.6399 59.2193 25.8936 59.2193 26.2318V26.4516C59.2193 26.8067 59.4704 27.0434 59.8053 27.0434Z" fill="#E31837" />
                    <path d="M44.6445 27.0434V22.0045C44.6445 20.7194 45.6663 19.688 46.9392 19.688H52.8853C54.1583 19.688 55.18 20.7363 55.18 22.0045V23.2727C55.18 24.5578 54.1583 25.5892 52.8853 25.5892H47.4082V26.3332C47.4082 26.7052 47.693 26.9927 48.0614 26.9927H54.7613V29.3599H46.9392C45.6663 29.3599 44.6445 28.3116 44.6445 27.0434ZM51.8469 22.0045H47.9777C47.6427 22.0045 47.4082 22.2412 47.4082 22.5794V23.4418H51.8469C52.1986 23.4418 52.4163 23.2051 52.4163 22.8669V22.5794C52.4163 22.2412 52.1986 22.0045 51.8469 22.0045Z" fill="#E31837" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M23.8836 15.0307C23.8836 15.0308 23.8836 15.0309 22.8023 14.8347C21.721 14.6385 21.721 14.6385 21.721 14.6384L21.75 14.4785C21.7689 14.3743 21.7967 14.2215 21.832 14.0273C21.9027 13.6388 22.0036 13.0844 22.1247 12.4207C22.367 11.0935 22.69 9.32903 23.013 7.58036C23.336 5.83232 23.6594 4.09774 23.9023 2.83139C24.0235 2.19943 24.1257 1.67848 24.1981 1.32964C24.2335 1.15932 24.265 1.01404 24.2897 0.915078C24.29 0.913875 24.2903 0.912412 24.2907 0.910704C24.2979 0.881542 24.3227 0.78097 24.3617 0.686365C24.3619 0.685795 24.3622 0.685127 24.3625 0.684364C24.3716 0.662123 24.4136 0.559529 24.4947 0.449036C24.5272 0.404672 24.6502 0.23825 24.8796 0.120296C24.9971 0.0682953 25.2787 0.00341654 25.44 0C25.6118 0.0226196 25.9184 0.137765 26.0483 0.222794C26.3124 0.423588 26.4016 0.679071 26.4224 0.739023C26.4552 0.833883 26.4678 0.912577 26.4729 0.94911C26.4837 1.02617 26.484 1.08841 26.484 1.11106C26.484 1.10322 26.4846 1.11237 26.4865 1.14539C26.4887 1.18349 26.4927 1.25337 26.4999 1.36563C26.5115 1.54785 26.5287 1.80436 26.5509 2.1269C26.5953 2.77154 26.6592 3.67433 26.7372 4.76201C26.893 6.93708 27.1048 9.84813 27.3283 12.9046C27.5202 15.5275 27.7207 18.2572 27.902 20.7202L28.9329 15.0521C29.0415 14.455 29.6136 14.0589 30.2108 14.1675C30.8079 14.2761 31.2039 14.8483 31.0953 15.4454L28.7142 28.5366C28.5909 29.215 28.0014 29.5611 27.4827 29.5572C26.9432 29.5531 26.3206 29.1596 26.2658 28.418C26.0777 25.872 25.5835 19.1787 25.1363 13.065C25.0486 11.8659 24.9627 10.689 24.8813 9.57006C24.6623 10.7613 24.4551 11.8937 24.2869 12.8154C24.1659 13.4785 24.065 14.0324 23.9945 14.4206C23.9592 14.6146 23.9314 14.7672 23.9125 14.8713L23.8836 15.0307ZM26.4282 1.42416C26.4282 1.42441 26.4272 1.42823 26.4253 1.43482C26.4273 1.4272 26.4282 1.4239 26.4282 1.42416ZM24.2878 1.16747C24.2861 1.13914 24.2861 1.11902 24.2861 1.11108C24.2861 1.12301 24.2867 1.14188 24.2878 1.16747ZM22.6061 15.916C22.0089 15.8077 21.6126 15.2357 21.721 14.6385L22.8023 14.8347L23.8836 15.0309C23.7752 15.628 23.2033 16.0243 22.6061 15.916Z" fill="#E31837" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.7832 13.7358H22.8053C23.4122 13.7358 23.9043 14.2279 23.9043 14.8348C23.9043 15.4417 23.4122 15.9337 22.8053 15.9337H19.7832V13.7358Z" fill="#E31837" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M37.8218 9.91667C37.3697 12.5151 36.9732 14.8192 36.8855 15.3291C36.7673 16.0168 36.1688 16.3465 35.6687 16.3465L30.015 16.3466C29.408 16.3466 28.916 15.8545 28.916 15.2476C28.916 14.6407 29.408 14.1487 30.015 14.1487L34.8585 14.1486C35.1005 12.7441 35.5858 9.93452 36.0538 7.26326C36.3521 5.56073 36.6437 3.91195 36.861 2.71844C36.9694 2.12288 37.0603 1.6352 37.1246 1.30975C37.1559 1.15116 37.184 1.01517 37.2061 0.922266C37.2063 0.921264 37.2066 0.919955 37.207 0.91836C37.213 0.892601 37.2366 0.792076 37.2749 0.696955C37.2751 0.696396 37.2754 0.695685 37.2757 0.694826C37.2842 0.673532 37.3287 0.561695 37.4174 0.443268L37.4177 0.442856C37.4517 0.397431 37.5975 0.202716 37.8743 0.086981C38.0138 0.0393594 38.3334 0.00240791 38.5076 0.0219272C38.6739 0.0678822 38.9506 0.215984 39.0595 0.307615C39.266 0.505561 39.334 0.726515 39.3502 0.77917L39.3503 0.779474C39.3761 0.863411 39.3862 0.932509 39.3905 0.966042C39.3994 1.03595 39.3997 1.09237 39.3997 1.11405C39.3997 1.10668 39.4003 1.11662 39.4023 1.15041C39.4046 1.19098 39.409 1.26593 39.4167 1.38655C39.4291 1.57977 39.4474 1.85179 39.471 2.19342C39.5181 2.87626 39.5858 3.83167 39.6681 4.97896C39.8327 7.27326 40.0553 10.3316 40.2874 13.5039C40.5658 17.3095 40.8579 21.2786 41.0798 24.2883L41.4166 23.3811C41.6278 22.8121 42.2603 22.522 42.8293 22.7333C43.3983 22.9445 43.6883 23.577 43.4771 24.146L41.6046 29.1899C41.3847 29.7823 40.8117 30.045 40.3132 29.9933C39.7987 29.9399 39.2632 29.5344 39.2133 28.8598C39.0617 26.809 38.5596 20.0097 38.0953 13.6643C38.0015 12.3823 37.9093 11.1188 37.8218 9.91667ZM39.3494 1.41106C39.3494 1.41136 39.3483 1.41565 39.3462 1.42301C39.3483 1.41444 39.3494 1.41076 39.3494 1.41106ZM37.2035 1.17084C37.2018 1.14248 37.2018 1.12217 37.2018 1.11405C37.2018 1.12598 37.2024 1.145 37.2035 1.17084Z" fill="#E31837" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.6077 29.3955C16.1976 29.3955 19.9185 25.6746 19.9185 21.0847C19.9185 16.4948 16.1976 12.7739 11.6077 12.7739C7.01774 12.7739 3.29688 16.4948 3.29688 21.0847C3.29688 25.6746 7.01774 29.3955 11.6077 29.3955ZM11.605 25.9621C14.2983 25.9621 16.4816 23.7788 16.4816 21.0855C16.4816 18.3922 14.2983 16.2089 11.605 16.2089C8.91178 16.2089 6.72846 18.3922 6.72846 21.0855C6.72846 23.7788 8.91178 25.9621 11.605 25.9621Z" fill="#061E4A" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.4115 10.9896C6.70133 10.9896 2.78783 14.4005 2.00639 18.8871C1.95873 19.1607 1.72637 19.3685 1.44864 19.3685H0C0.585261 13.5824 5.47101 9.06641 11.4115 9.06641C16.1097 9.06641 20.1482 11.8911 21.9213 15.9348H19.7784C18.1534 12.9868 15.0157 10.9896 11.4115 10.9896Z" fill="#E31837" />
                </svg>
            </span>

            <div className="flex items-center gap-6">
                <div className="bg-white rounded-[10px] py-[8px] px-[12px] flex items-center justify-between">
                    <input type="text" placeholder="Search" className="rounded-[10px] outline-none border-none" />

                    <div className="flex items-center gap-[16px]">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
                                <path d="M12 15.625C13.5913 15.625 15.1174 15.0982 16.2426 14.1605C17.3679 13.2229 18 11.9511 18 10.625V9.375M12 15.625C10.4087 15.625 8.88258 15.0982 7.75736 14.1605C6.63214 13.2229 6 11.9511 6 10.625V9.375M12 15.625V18.75M8.25 18.75H15.75M12 13.125C11.2044 13.125 10.4413 12.8616 9.87868 12.3928C9.31607 11.9239 9 11.288 9 10.625V3.75C9 3.08696 9.31607 2.45107 9.87868 1.98223C10.4413 1.51339 11.2044 1.25 12 1.25C12.7956 1.25 13.5587 1.51339 14.1213 1.98223C14.6839 2.45107 15 3.08696 15 3.75V10.625C15 11.288 14.6839 11.9239 14.1213 12.3928C13.5587 12.8616 12.7956 13.125 12 13.125Z" stroke="#1F3660" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M8.75 15C12.2018 15 15 12.2018 15 8.75C15 5.29822 12.2018 2.5 8.75 2.5C5.29822 2.5 2.5 5.29822 2.5 8.75C2.5 12.2018 5.29822 15 8.75 15Z" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13.168 13.1689L17.4984 17.4994" stroke="#1F3660" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </div>
                </div>
                <span className='bg-white rounded-[10px] p-[9px] relative'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M14.8565 17.082C16.7197 16.8614 18.5504 16.4217 20.3105 15.772C18.8199 14.1208 17.9962 11.9745 17.9995 9.75V9C17.9995 7.4087 17.3674 5.88258 16.2421 4.75736C15.1169 3.63214 13.5908 3 11.9995 3C10.4082 3 8.88208 3.63214 7.75686 4.75736C6.63164 5.88258 5.9995 7.4087 5.9995 9V9.75C6.00252 11.9746 5.17849 14.121 3.6875 15.772C5.4205 16.412 7.2475 16.857 9.1425 17.082M14.8565 17.082C12.9585 17.3071 11.0405 17.3071 9.1425 17.082M14.8565 17.082C15.0006 17.5319 15.0364 18.0094 14.9611 18.4757C14.8857 18.942 14.7013 19.384 14.4229 19.7656C14.1444 20.1472 13.7798 20.4576 13.3587 20.6716C12.9376 20.8856 12.4719 20.9972 11.9995 20.9972C11.5271 20.9972 11.0614 20.8856 10.6403 20.6716C10.2192 20.4576 9.85457 20.1472 9.57612 19.7656C9.29767 19.384 9.11326 18.942 9.03791 18.4757C8.96256 18.0094 8.9984 17.5319 9.1425 17.082" stroke="#1F3660" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <small className='absolute -right-1 -top-1 w-[17px] h-[17px] rounded-full text-[10px] text-white bg-[#F56262] flex items-center justify-center'>12</small>
                </span>
                <span className='bg-white rounded-[10px] p-[9px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M17.9825 18.7247C17.2838 17.7996 16.3798 17.0493 15.3417 16.5331C14.3036 16.0168 13.1599 15.7487 12.0005 15.7497C10.8411 15.7487 9.69739 16.0168 8.65932 16.5331C7.62125 17.0493 6.71724 17.7996 6.0185 18.7247M17.9825 18.7247C19.346 17.5119 20.3076 15.9133 20.7417 14.1408C21.1758 12.3683 21.0608 10.5058 20.412 8.80018C19.7632 7.09457 18.6112 5.62648 17.1089 4.5906C15.6066 3.55472 13.8248 3 12 3C10.1752 3 8.39343 3.55472 6.89111 4.5906C5.38878 5.62648 4.23683 7.09457 3.58804 8.80018C2.93924 10.5058 2.82425 12.3683 3.25832 14.1408C3.69239 15.9133 4.655 17.5119 6.0185 18.7247M17.9825 18.7247C16.3365 20.1929 14.2061 21.0028 12.0005 20.9997C9.79453 21.0031 7.66474 20.1931 6.0185 18.7247M15.0005 9.74971C15.0005 10.5454 14.6844 11.3084 14.1218 11.871C13.5592 12.4336 12.7962 12.7497 12.0005 12.7497C11.2049 12.7497 10.4418 12.4336 9.87918 11.871C9.31657 11.3084 9.0005 10.5454 9.0005 9.74971C9.0005 8.95406 9.31657 8.19099 9.87918 7.62838C10.4418 7.06578 11.2049 6.74971 12.0005 6.74971C12.7962 6.74971 13.5592 7.06578 14.1218 7.62838C14.6844 8.19099 15.0005 8.95406 15.0005 9.74971Z" stroke="#1F3660" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </div>
        </div>
    )
}

export default Header