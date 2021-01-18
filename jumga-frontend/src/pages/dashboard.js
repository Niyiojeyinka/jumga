import { useParams } from "react-router-dom";
import OrdersPage from "./userdashboard/orderspage";
import AdminDashboard from "./admin/dashboard";
import DispatcherDashboard from "./dispatchrider/dashboard";
import MerchantDashboard from "./merchant/dashboard";
import AuthCheck from "./authcheck";

const Dashboard = () => {
  const { type } = useParams();

  if (type == "admin") {
    return (
      <AuthCheck type={type}>
        <AdminDashboard />
      </AuthCheck>
    );
  } else if (type == "merchant") {
    return (
      <AuthCheck type={type}>
        <MerchantDashboard />
      </AuthCheck>
    );
  } else if (type == "dispatcher") {
    return (
      <AuthCheck type={type}>
        <DispatcherDashboard />
      </AuthCheck>
    );
  } else {
    return (
      <AuthCheck type={type}>
        <OrdersPage />
      </AuthCheck>
    );
  }
};
export default Dashboard;
