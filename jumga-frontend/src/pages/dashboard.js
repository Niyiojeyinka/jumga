import { useParams } from "react-router-dom";
const Dashboard = () => {
  const { type } = useParams();
  return <>{type} Dashboard</>;
};
export default Dashboard;
