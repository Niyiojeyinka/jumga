import DashboardTemplate from "./template";
import CheckPayment from "./checkpayment";
import AuthCheck from "../authcheck";

const Dashboard = (props) => {
  return (
    <AuthCheck>
      <CheckPayment>
        <DashboardTemplate>
          <div>welcome to merchant dashboard</div>
        </DashboardTemplate>
      </CheckPayment>
    </AuthCheck>
  );
};

export default Dashboard;
