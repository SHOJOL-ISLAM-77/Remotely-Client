import "react-tabs/style/react-tabs.css";
import MemberFaq from "./MemberFaq";
import ClientFaq from "./ClientFaq";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { getUser } from "../../API/User/User";

const Faq = () => {
  const [dbUser, setDbUser] = useState({});
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(async () => {
      const res = await getUser(user?.email);
      await setDbUser(res);
    }, 1000);
  }, [user]);
  
  return (
    <div className="container mx-auto" id="faq">
      {user && (
        <>
          <SectionTitle
            subHeading={
              "Interested in joining our team as a freelancer? Here's how you can get started:"
            }
            heading={"Join Our Team"}
          />

          <div className="text-2xl  text-black text-center py-5">
            {dbUser?.role === "freelancer" && <h1>Are you a Freelancer?</h1>}
            {dbUser?.role === "buyer" && <h1>Do you need a Freelancer?</h1>}
          </div>

          <div className="mt-6">
            {dbUser?.role === "freelancer" && <MemberFaq />}
            {dbUser?.role === "buyer" && <ClientFaq />}
          </div>
        </>
      )}
    </div>
  );
};

export default Faq;
