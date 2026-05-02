import Marquee from "react-fast-marquee";
import { IoSparklesSharp } from "react-icons/io5";

const marqueeData = [
  {
    id: 1,
    title:
      "📚 Fresh Arrivals: 'Atomic Habits' | Start building better habits today!",
  },
  { id: 2, title: "🔥 Hot Pick: 'Clean Code' now available for developers" },
  {
    id: 3,
    title: "🎁 Limited Offer: Buy 2 books & get 1 free (selected titles)",
  },
  {
    id: 4,
    title: "🚀 New Release: 'The Psychology of Money' just added to collection",
  },
  {
    id: 5,
    title: "🌟 Trending Now: 'Deep Work' - improve focus & productivity",
  },
  { id: 6, title: "📖 Science Spotlight: Explore new AI & Data Science books" },
  {
    id: 7,
    title: "💡 Tech Reads: Best programming books for beginners updated list",
  },
  {
    id: 8,
    title: "🎓 Student Deal: Extra discount on all academic books this week",
  },
];

const Stats = () => {
  return (
    <div className="!mt-9 md:!mt-4 !py-5 bg-(--gold) ">
      <Marquee pauseOnHover={true}>
        {marqueeData.map((marquee) => (
          <div
            key={marquee.id}
            className="flex gap-3 items-center text-[#5e2006]"
          >
            <IoSparklesSharp />
            <p className="!mr-10 font-medium text-[#5e2006]">{marquee.title}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Stats;
