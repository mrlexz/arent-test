import GradientBtn from "../components/GradientBtn";
import MyRe1 from "../assets/images/MyRecommend-1.jpg";
import MyRe2 from "../assets/images/MyRecommend-2.jpg";
import MyRe3 from "../assets/images/MyRecommend-3.jpg";
import LineChart from "../components/LineChart";

const diaries = [
  {
    key: "1",
    date: "2021.05.17",
    time: "23:25",
    title: "私の日記の記録が一部表示されます。",
    desc: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    key: "2",
    date: "2021.05.17",
    time: "23:25",
    title: "私の日記の記録が一部表示されます。",
    desc: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    key: "3",
    date: "2021.05.17",
    time: "23:25",
    title: "私の日記の記録が一部表示されます。",
    desc: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    key: "4",
    date: "2021.05.17",
    time: "23:25",
    title: "私の日記の記録が一部表示されます。",
    desc: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    key: "5",
    date: "2021.05.17",
    time: "23:25",
    title: "私の日記の記録が一部表示されます。",
    desc: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    key: "6",
    date: "2021.05.17",
    time: "23:25",
    title: "私の日記の記録が一部表示されます。",
    desc: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    key: "7",
    date: "2021.05.17",
    time: "23:25",
    title: "私の日記の記録が一部表示されます。",
    desc: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    key: "8",
    date: "2021.05.17",
    time: "23:25",
    title: "私の日記の記録が一部表示されます。",
    desc: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
];

const columns = [
  {
    key: "1",
    title: "BODY RECORD",
    desc: "自分のカラダの記録",
    icon: MyRe1,
  },
  {
    key: "2",
    title: "MY EXERCISE",
    desc: "自分の運動の記録",
    icon: MyRe2,
  },
  {
    key: "3",
    title: "MY DIARY",
    desc: "自分の日記",
    icon: MyRe3,
  },
];

function MyRecord() {
  return (
    <div className="flex flex-col mb-6 mt-14">
      <div className="bg-white px-[160px]">
        <div className="grid grid-cols-3 place-items-center gap-2 mb-12">
          {columns.map((item) => (
            <div
              key={item.key}
              className={`max-w-[288px] h-[288px] border-[24px] border-[#FFCC21] text-center flex flex-col justify-center items-center overflow-hidden relative`}
            >
              <img
                src={item.icon}
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col justify-center items-center gap-3">
                <span className="inline-block text-[25px] font-normal text-[#FFCC21] leading-[30px] tracking-[0.13px]">
                  {item.title}
                </span>
                <div className=" bg-[#FF963C] w-[80%]">
                  <span className="inline-block text-[14px] leading-[20px] font-light text-white">
                    {item.desc}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="py-4 px-6 bg-[#414141] my-10">
          <div className="flex mb-2">
            <span className="inline-block font-normal text-[15px] leading-[18px] text-white tracking-[0.15px] max-w-[96px]">
              BODY RECORD
            </span>
            <span className="inline-block font-normal text-[22px] leading-[27px] text-white tracking-[0.11px]">
              2021.05.21
            </span>
          </div>
          <div className="">
            <LineChart />
          </div>
          <div className="mt-4 flex gap-4">
            <div className="bg-white w-fit px-5 rounded-3xl">
              <span className="font-light text-[15px] leading-[22px] text-[#FFCC21] tracking-[0.08px]">
                日
              </span>
            </div>
            <div className="bg-white w-fit px-5 rounded-3xl">
              <span className="font-light text-[15px] leading-[22px] text-[#FFCC21] tracking-[0.08px]">
                週
              </span>
            </div>
            <div className="bg-white w-fit px-5 rounded-3xl">
              <span className="font-light text-[15px] leading-[22px] text-[#FFCC21] tracking-[0.08px]">
                月
              </span>
            </div>
            <div className="bg-[#FFCC21] w-fit px-5 rounded-3xl">
              <span className="font-light text-[15px] leading-[22px] text-white tracking-[0.08px]">
                年
              </span>
            </div>
          </div>
        </div>
        <div className="py-4 px-6 bg-[#414141] my-10">
          <div className="flex mb-2">
            <span className="inline-block font-normal text-[15px] leading-[18px] text-white tracking-[0.15px] max-w-[96px]">
              MY EXERCISE
            </span>
            <span className="inline-block font-normal text-[22px] leading-[27px] text-white tracking-[0.11px]">
              2021.05.21
            </span>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-2">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={`${index}`}
                className="flex justify-between border-b-[1px] border-b-[#777777] py-1"
              >
                <div className="flex justify-start">
                  <div className="text-white">&#x2022;</div>
                  <div className="flex flex-col ml-2">
                    <span className="inline-block text-[15px] leading-[22px] tracking-[0.08px] font-light text-white">
                      家事全般（立位・軽い
                    </span>
                    <span className="inline-block text-[15px] leading-[18px] tracking-[0.08px] font-normal text-[#FFCC21]">
                      26kcal
                    </span>
                  </div>
                </div>
                <div>
                  <span className="inline-block text-[18px] leading-[22px] tracking-[0.09px] font-normal text-[#FFCC21]">
                    10 min
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <span className="inline-block font-normal text-[22px] leading-[27px] text-[#414141] tracking-[0.11px] mb-2">
          MY DIARY
        </span>
        <div className="grid grid-cols-4 gap-2">
          {diaries.map((item) => (
            <div
              key={item.key}
              className="border-2 border-[#707070] p-4 flex flex-col"
            >
              <span className="inline-block text-[18px] leading-[22px] tracking-[0.09px] font-normal text-[#414141]">
                {item.date}
              </span>
              <span className="inline-block text-[18px] leading-[22px] tracking-[0.09px] font-normal text-[#414141]">
                {item.time}
              </span>
              <span className="inline-block text-[12px] leading-[17px] tracking-[0.06px] font-light text-[#414141] mt-2">
                {item.title}
              </span>
              <span className="inline-block text-[12px] leading-[17px] tracking-[0.06px] font-light text-[#414141]">
                {item.desc}
              </span>
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

export default MyRecord;
