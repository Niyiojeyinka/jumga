import DashboardTemplate from "./template";
import CheckPayment from "./checkpayment";
import AuthCheck from "../authcheck";
import WithdrawalPage from "../payments/withdrawalpage";
const Dashboard = (props) => {
  return (
    <AuthCheck>
      <CheckPayment>
        <DashboardTemplate>
          <div className="text-center">Withdrawal Settings</div>
          <br></br>

          <WithdrawalPage />
        </DashboardTemplate>
      </CheckPayment>
    </AuthCheck>
  );
};

export default Dashboard;
