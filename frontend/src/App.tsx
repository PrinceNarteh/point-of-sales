import "./App.css";
import SideBar from "./components/sidebar";
import Header from "./components/header";
import Footer from "./components/footer";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <SideBar />
      <Dashboard />
      <Footer />
      {/* Control Sidebar */}
      <aside className="control-sidebar control-sidebar-dark">
        {/* Control sidebar content goes here */}
      </aside>
      {/* /.control-sidebar */}
    </div>
  );
}

export default App;
