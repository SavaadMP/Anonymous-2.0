import "./Profile.scss";
import AccDetails from "../../components/AccDetails/AccDetails";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";

function Profile() {
  return (
    <section className="profile_container">
      <div className="profile_content">
        <div className="left">
          <ProfileDetails />
        </div>
        <div className="right">
          <div className="tabs_content">
            <p className="">All Messages</p>
            <p className="active">Account Details</p>
          </div>
          <AccDetails />
        </div>
      </div>
    </section>
  );
}

export default Profile;
