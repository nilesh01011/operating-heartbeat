export const MenuItemsList = [
    {
        name: "My Dashboard",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M10 3H3V10H10V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                strokeLinejoin="round" />
            <path d="M21 3H14V10H21V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                strokeLinejoin="round" />
            <path d="M21 14H14V21H21V14Z" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 14H3V21H10V14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>,
    },
    {
        name: "My Reports",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none">
            <path
                d="M15.75 21H5.25C5.05109 21 4.86032 20.921 4.71967 20.7803C4.57902 20.6397 4.5 20.4489 4.5 20.25V6.75C4.5 6.55109 4.57902 6.36032 4.71967 6.21967C4.86032 6.07902 5.05109 6 5.25 6H12.75L16.5 9.75V20.25C16.5 20.4489 16.421 20.6397 16.2803 20.7803C16.1397 20.921 15.9489 21 15.75 21Z"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                strokeLinejoin="round" />
            <path
                d="M7.5 6V3.75C7.5 3.55109 7.57902 3.36032 7.71967 3.21967C7.86032 3.07902 8.05109 3 8.25 3H15.75L19.5 6.75V17.25C19.5 17.4489 19.421 17.6397 19.2803 17.7803C19.1397 17.921 18.9489 18 18.75 18H16.5"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                strokeLinejoin="round" />
            <path d="M8.25 14.25H12.75" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.25 17.25H12.75" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
        isFolder: true,
        items: [
            {
                name: "Sales",
                link: "/my-reports/sales",
            },
            {
                name: "Services",
                link: "/my-reports/services",
            },
            {
                name: "Customer Experience",
                link: "/my-reports/customer-experience",
            },
            {
                name: "Manufacturing",
                link: "/my-reports/manufacturing",
            },
            {
                name: "Quality",
                link: "/my-reports/quality",
            },
            {
                name: "Sourcing",
                link: "/my-reports/sourcing",
            },
            {
                name: "Finance",
                link: "/my-reports/finance",
            },
            {
                name: "Governance",
                link: "/my-reports/governance",
            },
            {
                name: "Marketing",
                link: "/my-reports/marketing",
            },
            {
                name: "Support",
                link: "/my-reports/support",
            },
            {
                name: "MPP Review",
                link: "/my-reports/mrp-review",
            },
            {
                name: "Performance Units",
                link: "/my-reports/performance-units",
            },
            {
                name: "Cost Control",
                link: "/my-reports/cost-control",
            },
        ],
    },
    {
        name: "Custom View",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="#C7C8CA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 3V21" stroke="#C7C8CA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        link: "/custom-view"
    },
    {
        name: "Chat",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 10.5H15" stroke="#C7C8CA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 13.5H15" stroke="#C7C8CA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.49258 19.7924C9.38308 20.8866 11.607 21.2558 13.7496 20.8314C15.8923 20.407 17.8075 19.2178 19.1381 17.4856C20.4687 15.7533 21.124 13.5963 20.9817 11.4167C20.8394 9.23703 19.9093 7.18351 18.3648 5.63898C16.8202 4.09445 14.7667 3.16434 12.5871 3.02206C10.4074 2.87977 8.2504 3.53503 6.51819 4.86565C4.78597 6.19628 3.59679 8.11146 3.17235 10.2541C2.74792 12.3968 3.11719 14.6207 4.21133 16.5112L3.03852 20.0127C2.99445 20.1449 2.98806 20.2867 3.02005 20.4223C3.05205 20.5578 3.12117 20.6818 3.21967 20.7803C3.31817 20.8788 3.44216 20.948 3.57774 20.9799C3.71331 21.0119 3.85512 21.0055 3.98727 20.9615L7.49258 19.7924Z" stroke="#C7C8CA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        link: "/chat"
    }
]