import { BitcoinIcon, Gpu } from "lucide-react";

import { BiTag } from "react-icons/bi";
import { FaMeta } from "react-icons/fa6";
import { GiZebraShield } from "react-icons/gi";
import { SiBinance, SiCypress, SiTradingview } from "react-icons/si";

const Sponsors = () => {
  return (
    <div className="w-full h-[40px] flex items-center justify-between  px-4 overflow-x-hidden">
      <span className="flex items-center gap-2 text-sm font-semibold">
        <BiTag className="text-slate-900 font-bold text-2xl" /> <p>Bitget</p>
      </span>
      <span className="flex items-center gap-2 text-sm font-semibold">
        <BitcoinIcon className="text-orange-400" /> <p>Bitcoin</p>
      </span>
      <span className="flex items-center gap-2 text-sm font-semibold">
        <FaMeta className="text-blue-500" /> <p>Meta</p>
      </span>
      <span className="flex items-center gap-2 text-sm font-semibold">
        <Gpu className="text-green-500" /> <p>GPT-4</p>
      </span>
      <span className="flex items-center gap-2 text-sm font-semibold">
        <SiCypress className="text-cyan-500" /> <p>Cyprex</p>
      </span>
      <span className="flex items-center gap-2 text-sm font-semibold">
        <GiZebraShield className="text-indigo-600" /> <p>Shield</p>
      </span>
      <span className="flex items-center gap-2 text-sm font-semibold">
        <p className="text-slate-950">CoinBase</p>
      </span>
      <span className="flex items-center gap-2 text-sm font-semibold">
        <SiBinance className="text-yellow-500" /> <p>Binance</p>
      </span>
      <span className="flex items-center gap-2 text-sm font-semibold">
        <SiTradingview className="text-24" /> <p>TradingView</p>
      </span>
    </div>
  );
};

export default Sponsors;
