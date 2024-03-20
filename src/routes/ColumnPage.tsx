import GradientBtn from "../components/GradientBtn";
import col1 from "../assets/images/column-1.jpg";
import col2 from "../assets/images/column-2.jpg";
import col3 from "../assets/images/column-3.jpg";
import col4 from "../assets/images/column-4.jpg";
import col5 from "../assets/images/column-5.jpg";
import col6 from "../assets/images/column-6.jpg";
import col7 from "../assets/images/column-7.jpg";
import col8 from "../assets/images/column-8.jpg";

const news = [
  {
    key: "1",
    name: "2021.05.17   23:25",
    icon: col1,
    description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    key: "2",
    name: "2021.05.17   23:25",
    icon: col2,
    description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    key: "3",
    name: "2021.05.17   23:25",
    icon: col3,
    description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    key: "4",
    name: "2021.05.17   23:25",
    icon: col4,
    description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    key: "5",
    name: "2021.05.17   23:25",
    icon: col5,
    description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    key: "6",
    name: "2021.05.17   23:25",
    icon: col6,
    description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    key: "7",
    name: "2021.05.17   23:25",
    icon: col7,
    description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    key: "8",
    name: "2021.05.17   23:25",
    icon: col8,
    description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["魚料理", "和食", "DHA"],
  },
];

const columns = [
  {
    key: "1",
    title: "RECOMMENDED COLUMN",
    desc: "オススメ",
  },
  {
    key: "2",
    title: "RECOMMENDED DIET",
    desc: "ダイエット",
  },
  {
    key: "3",
    title: "RECOMMENDED BEAUTY",
    desc: "美容",
  },
  {
    key: "4",
    title: "RECOMMENDED HEALTH",
    desc: "健康",
  },
];

function ColumnPage() {
  return (
    <div className="flex flex-col mb-6 mt-14">
      <div className="bg-white px-[160px]">
        <div className="grid grid-cols-4 gap-2 mb-12">
          {columns.map((item) => (
            <div
              key={item.key}
              className="bg-[#2E2E2E] text-center flex flex-col justify-center items-center py-5"
            >
              <span className="inline-block text-[22px] font-normal text-[#FFCC21] leading-[27px] tracking-[0.11px]">
                {item.title}
              </span>
              <div className="w-[56px] h-[1px] bg-white my-3" />
              <span className="inline-block text-[18px] leading-[26px] tracking-[0.08px] font-light text-white">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {news.map((item) => (
            <div key={item.key}>
              <div className="w-auto h-[144px] relative">
                <img src={item.icon} className="w-full h-full" />
                <div className="bg-[#FFCC21] p-1 absolute left-0 bottom-0">
                  <span className="text-[15px] text-white leading-[18px]">
                    {item.name}
                  </span>
                </div>
              </div>
              <span className="inline-block text-[15px] leading-[22px] tracking-[0.08px] font-light text-[#414141]">
                {item.description}
              </span>
              <span className="inline-block text-[12px] leading-[22px] tracking-[0.08px] font-light text-[#FF963C]">
                {item.tags.map((t) => `#${t} `)}
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

export default ColumnPage;