import "./Profile.scss";
import { useState } from "react";
import AccDetails from "../../components/AccDetails/AccDetails";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
import AllMessages from "../../components/AllMessages/AllMessages";

function Profile() {
  const [tab, setTab] = useState(1);

  return (
    <section className="profile_container">
      <div className="profile_content">
        <div className="left">
          <ProfileDetails setTab={setTab} />
        </div>
        <div className="right">
          <div className="tabs_content">
            <p className={tab == 1 ? "active" : ""} onClick={() => setTab(1)}>
              All Messages
            </p>
            <p className={tab == 2 ? "active" : ""} onClick={() => setTab(2)}>
              Account Details
            </p>
          </div>
          {tab == 2 ? <AccDetails /> : <AllMessages />}
        </div>
      </div>
    </section>
  );
}

export default Profile;
