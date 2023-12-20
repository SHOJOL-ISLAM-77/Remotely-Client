


import { useState } from 'react';

const Pricing = () => {
  const [userType, setUserType] = useState('client');
  const [modalOpen, setModalOpen] = useState(null);

  const handleToggle = () => {
    setUserType((prevType) => (prevType === 'client' ? 'freelancer' : 'client'));
  };
 const openModal = (index) => {
    setModalOpen(index);
  };

  const closeModal = () => {
    setModalOpen(null);
  };

  // JSON data for pricing cards
  const pricingData = {
    freelancer: [
      {
        title: 'Hourly Rate Package',
        howItWorks: 'Freelancers charge clients based on the number of hours worked.',
        advantages: [
          'Provides flexibility for projects with varying workloads.',
          'Transparent billing based on actual hours spent on the project.',
        ],
        considerations: [
          'Clearly define the hourly rate.',
          'Use time-tracking tools to monitor and report hours worked.',
        ],
        pricingOption: {
          title: 'Basic',
          hourlyRate: '$19.99',
          features: ['500 GB Storage', '2 Users Allowed', 'Send up to 3 GB'],
        },
      },
      {
        title: "Per-Project Package",
        howItWorks: "Freelancers quote a fixed price for the entire project.",
        advantages: [
          "Clients know the total cost upfront, promoting transparency.",
          "Freelancers can potentially earn more for efficient and quick project completion."
        ],
        considerations: [
          "Thoroughly assess project scope before providing a quote.",
          "Include a clear breakdown of what is included in the quoted price."
        ],
        pricingOption: {
            title: 'Basic',
            hourlyRate: '$19.99',
            features: ['500 GB Storage', '2 Users Allowed', 'Send up to 3 GB'],
        },
      },
      {
          title: "Monthly Retainer Package",
          howItWorks: "Clients pay a fixed amount on a monthly basis for a set number of hours or a predefined scope of work.",
          advantages: [
            "Provides a stable income for freelancers.",
            "Clients have a dedicated amount of the freelancer's time each month."
          ],
          considerations: [
            "Clearly define the scope of work covered by the retainer.",
            "Discuss how unused hours or additional work beyond the retainer will be billed."
          ],
          pricingOption: {
            title: 'Basic',
            hourlyRate: '$19.99',
            features: ['500 GB Storage', '2 Users Allowed', 'Send up to 3 GB'],
        },
        
      }
      
      
    ],
    client: [
      {
        title: 'Hourly Rate Package',
        howItWorks: 'Service providers charge clients based on the number of hours worked.',
        advantages: [
          'Offers flexibility for projects with varying workloads.',
          'Transparent billing based on actual hours spent on the project.',
        ],
        considerations: [
          'Clearly define the hourly rate.',
          'Use time-tracking tools to monitor and report hours worked.',
        ],
        pricingOption: {
          title: 'Basic',
          hourlyRate: '$19.99',
          features: ['500 GB Storage', '2 Users Allowed', 'Send up to 3 GB'],
        },
      },
      {
        title: 'Hourly Rate Package',
        howItWorks: 'Service providers charge clients based on the number of hours worked.',
        advantages: [
          'Offers flexibility for projects with varying workloads.',
          'Transparent billing based on actual hours spent on the project.',
        ],
        considerations: [
          'Clearly define the hourly rate.',
          'Use time-tracking tools to monitor and report hours worked.',
        ],
        pricingOption: {
          title: 'Basic',
          hourlyRate: '$19.99',
          features: ['500 GB Storage', '2 Users Allowed', 'Send up to 3 GB'],
        },
      },
      {
        title: 'Hourly Rate Package',
        howItWorks: 'Service providers charge clients based on the number of hours worked.',
        advantages: [
          'Offers flexibility for projects with varying workloads.',
          'Transparent billing based on actual hours spent on the project.',
        ],
        considerations: [
          'Clearly define the hourly rate.',
          'Use time-tracking tools to monitor and report hours worked.',
        ],
        pricingOption: {
          title: 'Basic',
          hourlyRate: '$19.99',
          features: ['500 GB Storage', '2 Users Allowed', 'Send up to 3 GB'],
        },
      },
    ],
  };

  const selectedData = pricingData[userType];

  return (
    <div className="text-gray-900 font-work-sans h-screen bg-no-repeat bg-left-bottom sm:bg-svg-bottom">
      {/* Other components... */}

      {/* Toggle Button */}
      {/* <div className="flex flex-row justify-center my-4 text-sm tracking-tight font-medium text-gray-700">
        <button
          onClick={handleToggle}
          className={`mx-3 focus:outline-none ${
            userType === 'client' ? 'text-black bg-primary px-4 py-2 rounded' : 'text-gray-700'
          }`}
        >
          Client
          

    <input type="checkbox" className="toggle toggle-success" checked />
        </button>
        <button
          onClick={handleToggle}
          className={`mx-3 focus:outline-none ${
            userType === 'freelancer' ? 'text-black' : 'text-gray-700'
          }`}
        >
          Freelancer
        </button>
      </div> */}
<div className="flex flex-row justify-center my-4 text-sm tracking-tight font-medium text-gray-700">
        <button
          onClick={handleToggle}
          className={`mx-3 focus:outline-none  flex items-center gap-2 ${
            userType === 'client' ? 'text-white  font-cinzel py-2 rounded' : 'text-gray-700'
          }`}
        >
          Client
          <input type="checkbox" className="toggle toggle-success" checked={userType === 'client'} readOnly />
        </button>
        <button
          onClick={handleToggle}
          className={`mx-3 focus:outline-none flex items-center gap-2 ${
            userType === 'freelancer' ? 'text-white font-cinzel py-2 rounded' : 'text-gray-700'
          }`} 
        >
          Freelancer 
          <input type="checkbox" className="toggle toggle-success" checked={userType === 'freelancer'} readOnly />
        </button>
      </div>
      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 "> 
        {selectedData.map((card, index) => ( 
          <div
            key={index}
            className=" text-white w-full border rounded-lg text-center p-5 mx-auto md:mx-0 my-2 md:my-6 bg-gradient-to-r from-blue-600 via-blue-800 to-blue-600 font-medium z-10 shadow-lg"
          >
            <div className="">{card.title}</div>
            <div className="font-bold text-6xl">{card.pricingOption.hourlyRate}</div>
            <hr />
            {card.pricingOption.features.map((feature, i) => (
              <div key={i} className="text-sm my-3">
                {feature}
              </div>
            ))}
            <hr />
            <a href="#" target="_blank">
              <div className="bg-gradient-base border border-blue-600 hover:bg-white text-white hover:text-blue-600 font-bold uppercase text-xs mt-5 py-2 px-4 rounded cursor-pointer">
               Subscribe
              </div>
            </a>
          </div>
          
        ))}
      </div>

      {/* Other components... */}
    </div>
  );
};

export default Pricing;
