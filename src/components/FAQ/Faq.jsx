

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MemberFaq from "./MemberFaq";
import ClientFaq from "./ClientFaq";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Faq = () => {
  return (
    <div>
      <SectionTitle
        subHeading={
          "Interested in joining our team as a freelancer? Here's how you can get started:"
        }
        heading={"Join Our Team"}
      />
      <div className="mt-6">
        <Tabs>
          <TabList className="flex justify-center ">
            <Tab>Client FAQ</Tab>
            <Tab>Member FAQ</Tab>
          </TabList>
          <TabPanel>
            <div id="faq" className="mx-auto">
              <ClientFaq />
            </div>
          </TabPanel>
          <TabPanel>
            <div id="faq" className="mx-auto">
              <MemberFaq />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Faq;
