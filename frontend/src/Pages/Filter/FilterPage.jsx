import React, { useState } from "react";
import img1 from "../../assets/logo1.png";
import { MdOutlineStar } from "react-icons/md";

function FilterPage() {
  const languageData = [
    {
      id: 1,
      title: "QUIZ - Java Interview Questions",
      category: "java",
      description: "Prepare for Java interviews.",
      image: img1,
    },
    {
      id: 2,
      title: "QUIZ - React Interview Questions",
      category: "react",
      description: "Boost your React skills.",
      image: img1,
    },
    {
      id: 3,
      title: "QUIZ - Python Interview Questions",
      category: "python",
      description: "Excel in Python interviews.",
      image: img1,
    },
    {
      id: 4,
      title: "QUIZ - JavaScript Interview Questions",
      category: "javascript",
      description: "Master JavaScript topics.",
      image: img1,
    },
    {
      id: 5,
      title: "QUIZ - HTML Interview Questions",
      category: "html",
      description: "Ace your HTML basics.",
      image: img1,
    },
  ];

  const [items, setItems] = useState(languageData);
  const [activeCategory, setActiveCategory] = useState("all"); 

  const filterItems = (categoryItems) => {
    setActiveCategory(categoryItems); 
    if (categoryItems === "all") {
      setItems(languageData);
    } else {
      const updateItems = languageData.filter(
        (currentItem) => currentItem.category === categoryItems
      );
      setItems(updateItems);
    }
  };

  return (
    <div className="p-5 bg-[#14192D]">
      <div className="flex flex-col space-y-4 m-10">
        <div className="flex flex-wrap gap-4">
          {[
            { label: "All", category: "all" },
            { label: "Python", category: "python" },
            { label: "JavaScript", category: "javascript" },
            { label: "React", category: "react" },
            { label: "HTML", category: "html" },
            { label: "Java", category: "java" },
          ].map((button) => (
            <button
              key={button.category}
              type="button"
              className={`btn rounded-full px-4 py-2 text-white ${
                activeCategory === button.category
                  ? "bg-[#525FE0]"
                  : "bg-[#7F83A4]"
              }`}
              onClick={() => filterItems(button.category)}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#E8E8E8] rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover mb-4 rounded-xl"
            />
            <p className="text-gray-500 text-[13px] font-semibold mb-1 flex justify-between items-center">
              <span>{item.title}</span>
              <div className="flex text-[#F0C209]">
                {Array.from({ length: 4 }, (_, i) => (
                  <MdOutlineStar key={i} className="w-4 h-4" />
                ))}
                <MdOutlineStar className="text-[#ADADAC] w-4 h-4" />
              </div>
            </p>
            <p className="text-[25px] font-bold mb-1">Interview Questions</p>
            <p className="text-[15px] font-normal mb-2">
              Publish by LEGION <span className="text-[10px]">5 Month </span>
            </p>
            <button className="w-full bg-[#525FE0] text-white py-2 rounded-lg text-center font-semibold hover:bg-[#4048b3] transition-colors">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterPage;
