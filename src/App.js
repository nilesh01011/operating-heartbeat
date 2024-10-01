import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SalesReports from "./pages/sales/SalesReports";

function App() {
  return (
    <div className="relative w-full flex">
      <Sidebar />

      <div className='w-full h-full ml-[200px] flex flex-col'>
        <Header />
        <SalesReports />
      </div>
    </div>
  )
}

export default App;
