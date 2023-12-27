

import { useState, useEffect } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const MemberFaq = () => {
const [faqData, setFaqData] = useState([]);

useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch('./memberfaq.json');
        const data = await response.json();
        setFaqData(data);
      } catch (error) {
        console.error('Error fetching FAQ data:', error);
      }
    };
    fetchData();
  }, []);

  const [openItemId, setOpenItemId] = useState(null);

  const handleToggle = (id) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="mx-auto">
     <SectionTitle
       heading="Are you a Freelancer?"
     >
     </SectionTitle>
      <div className="mx-auto"> 
        {faqData.map((item) => (
          <div key={item.id} className="mb-4"> 
            <div
              className="flex justify-between items-center bg-gray-200 py-2 px-4 cursor-pointer"
              onClick={() => handleToggle(item.id)}
            >
              <p className="font-semibold">{item.question}</p>
              <span
                className={`${
                  openItemId === item.id ? 'transform rotate-180' : ''
                } transition-transform duration-300 text-xl`}
              >
                &#9660;
              </span>
            </div>
            {openItemId === item.id && (
              <div className="bg-gray-100 py-2 px-4">
                <p className="text-gray-700">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberFaq;
