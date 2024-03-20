import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import image1 from "../assets/images/d01.jpg";
import graph from "../assets/icons/main_graph.svg";
import GradientBtn from "../components/GradientBtn";
import IconKnife from "../assets/icons/icon_knife.svg";
import IconCup from "../assets/icons/icon_cup.svg";
import mor1 from "../assets/images/m01.jpg";
import mor2 from "../assets/images/m02.jpg";
import mor3 from "../assets/images/m03.jpg";
import lun1 from "../assets/images/l01.jpg";
import lun2 from "../assets/images/l02.jpg";
import lun3 from "../assets/images/l03.jpg";
import din1 from "../assets/images/d01.jpg";
import din2 from "../assets/images/l02.jpg";
import din3 from "../assets/images/l03.jpg";
import snk1 from "../assets/images/s01.jpg";
import { useState } from "react";
import LineChart from "../components/LineChart";

const foods = [
  {
    key: "1",
    name: "05.21.Morning",
    icon: mor1,
    category: "morning",
  },
  {
    key: "2",
    name: "05.21.Lunch",
    icon: lun1,
    category: "lunch",
  },
  {
    key: "3",
    name: "05.21.Dinner",
    icon: din1,
    category: "dinner",
  },
  {
    key: "4",
    name: "05.21.Snack",
    icon: snk1,
    category: "snack",
  },
  {
    key: "5",
    name: "05.20.Morning",
    icon: mor2,
    category: "morning",
  },
  {
    key: "6",
    name: "05.20.Lunch",
    icon: lun2,
    category: "lunch",
  },
  {
    key: "7",
    name: "05.20.Dinner",
    icon: din2,
    category: "dinner",
  },
  {
    key: "8",
    name: "05.21.Snack",
    icon: snk1,
    category: "snack",
  },
];

function TopPage() {
  const [currentFood, setCurrentFood] = useState<
    "morning" | "lunch" | "dinner" | "snack" | null
  >(null);

  const onSelectFood = (category: "morning" | "lunch" | "dinner" | "snack") => {
    if (currentFood === category) {
      setCurrentFood(null);
      return;
    }
    setCurrentFood(category);
  };

  return (
    <div className="flex flex-col mb-6">
      <div className="w-full h-[312px] flex bg-[#2E2E2E]">
        <div className="w-[40%] overflow-hidden relative">
          <img className="w-full h-full object-cover" src={image1} />
          <div className="absolute w-[181px] h-[181px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <CircularProgressbarWithChildren
              value={75}
              strokeWidth={2}
              styles={buildStyles({
                textColor: "white",
                pathColor: "white",
                trailColor: "transparent",
              })}
            >
              <div className="flex justify-center items-center gap-1">
                <span className="text-lg text-white">20/03</span>
                <span className="text-2xl text-white">75%</span>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
        <div className="w-[60%] py-4 px-12">
          <LineChart />
        </div>
      </div>
      <div className="bg-white px-[160px] flex justify-center items-center gap-10 py-6">
        <GradientBtn
          containerClassName={`w-[116px] h-[134px] clip-btn flex justify-center items-center cursor-pointer ${
            currentFood === "morning" ? "opacity-50" : ""
          }`}
          onClick={() => {
            onSelectFood("morning");
          }}
        >
          <div className="flex flex-col justify-center items-center">
            <img src={IconKnife} width="56" height="56" />
            <span className="text-white text-xl font-normal">Morning</span>
          </div>
        </GradientBtn>
        <GradientBtn
          containerClassName={`w-[116px] h-[134px] clip-btn flex justify-center items-center cursor-pointer ${
            currentFood === "lunch" ? "opacity-50" : ""
          }`}
          onClick={() => {
            onSelectFood("lunch");
          }}
        >
          <div className="flex flex-col justify-center items-center">
            <img src={IconKnife} width="56" height="56" />
            <span className="text-white text-xl font-normal">Lunch</span>
          </div>
        </GradientBtn>
        <GradientBtn
          containerClassName={`w-[116px] h-[134px] clip-btn flex justify-center items-center cursor-pointer ${
            currentFood === "dinner" ? "opacity-50" : ""
          }`}
          onClick={() => {
            onSelectFood("dinner");
          }}
        >
          <div className="flex flex-col justify-center items-center">
            <img src={IconKnife} width="56" height="56" />
            <span className="text-white text-xl font-normal">Dinner</span>
          </div>
        </GradientBtn>
        <GradientBtn
          containerClassName={`w-[116px] h-[134px] clip-btn flex justify-center items-center cursor-pointer ${
            currentFood === "snack" ? "opacity-50" : ""
          }`}
          onClick={() => {
            onSelectFood("snack");
          }}
        >
          <div className="flex flex-col justify-center items-center">
            <img src={IconCup} width="56" height="56" />
            <span className="text-white text-xl font-normal">Snack</span>
          </div>
        </GradientBtn>
      </div>
      <div className="bg-white px-[160px]">
        <div className="grid grid-cols-4 gap-2">
          {foods
            .filter((item) =>
              currentFood != null ? item.category === currentFood : true
            )
            .map((item) => (
              <div key={item.key} className="w-auto h-[234px] relative">
                <img src={item.icon} className="w-full h-full" />
                <div className="bg-[#FFCC21] p-1 absolute left-0 bottom-0">
                  <span className="text-[15px] text-white leading-[18px]">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center items-center m-6 ">
          <GradientBtn containerClassName="py-3.5 px-[68px] rounded">
            <span className="text-white text-xl font-normal ">
              記録をもっと見る
            </span>
          </GradientBtn>
        </div>
      </div>
    </div>
  );
}

export default TopPage;
