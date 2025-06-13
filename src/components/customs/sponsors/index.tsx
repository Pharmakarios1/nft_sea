import { BitcoinIcon, Gpu } from "lucide-react";
import { BiTag } from "react-icons/bi";
import { FaMeta } from "react-icons/fa6";
import { GiMetalBoot, GiZebraShield } from "react-icons/gi";
import { SiBinance, SiCypress, SiTradingview } from "react-icons/si";
import Marquee from "react-fast-marquee";

const Sponsors = () => {
  const sponsors = [
    {
      icon: <BiTag className="text-slate-900 font-bold text-xl" />,
      name: "Bitget",
    },
    {
      icon: <BitcoinIcon className="text-orange-400" />,
      name: "Bitcoin",
    },
    {
      icon: <FaMeta className="text-blue-500" />,
      name: "Meta",
    },
    {
      icon: <Gpu className="text-green-500" />,
      name: "GPT",
    },
    {
      icon: <SiCypress className="text-cyan-500" />,
      name: "Cyprex",
    },
    {
      icon: <GiZebraShield className="text-indigo-600" />,
      name: "Shield",
    },
    {
      icon: <SiBinance className="text-yellow-500" />,
      name: "Binance",
    },
    {
      icon: "",
      name: "CoinBase",
    },
    {
      icon: <SiTradingview className="text-24" />,
      name: "Tradingview",
    },
    {
      icon: <GiMetalBoot className="text-24" />,
      name: "Metaboot",
    },
  ];
  return (
    <Marquee autoFill pauseOnHover speed={30} className="w-full">
      <div className="w-full h-[60px] flex items-center justify-between gap-10 px-4 scroll">
        {sponsors.map((sponsor) => {
          return (
            <div
              key={sponsor.name}
              className="flex items-center justify-center "
            >
              {sponsor.icon}
              <p className="bg-gradient-to-r from-red-300 to-sky-400 bg-clip-text text-transparent font-semibold">
                {sponsor.name}
              </p>
            </div>
          );
        })}
      </div>
    </Marquee>
  );
};

export default Sponsors;
