import "./App.css";
import Price from "./compontent/price";

function App() {
  var data = [
    {
      product: "free",

      Price: 10,
      users: "5 User",
      userEnabler: true,
      storage: "5Gbstorage",
      storageEnabler: true,
      publicprojects: "Unlimited Public Projects",
      publicProjectsEnabler: true,
      communityAccess: "Community Access",
      comunityAccessEnabler: false,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: false,
      reports: "Monthly Status Reports",
      reportsEnabler: false,
    },
    {
      product: "plus",

      Price: 1400,
      users: "single User",
      userEnabler: true,
      storage: "5Gbstorage",
      storageEnabler: true,
      publicprojects: "Unlimited Public Projects",
      publicProjectsEnabler: true,
      communityAccess: "Community Access",
      comunityAccessEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: false,
      reports: "Monthly Status Reports",
      reportsEnabler: false,
    },
    {
      product: "plus",

      Price: 2500,
      users: "AllUser",
      userEnabler: true,
      storage: "5Gbstorage",
      storageEnabler: true,
      publicprojects: "Unlimited Public Projects",
      publicProjectsEnabler: true,
      communityAccess: "Community Access",
      comunityAccessEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: true,
      reports: "Monthly Status Reports",
      reportsEnabler: true,
    },
  ];

  //props

  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          <Price type={data[0]} />
          <Price type={data[1]} />
          <Price type={data[2]} />
          {/* {/* <Price type={data[0]}/> */}
        </div>
      </div>
    </section>
  );
}

export default App;
