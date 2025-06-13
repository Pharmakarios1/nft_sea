import CustomCard from "./_partials/card";
import CustomCardItem from "./_partials/cardItem";
import { BsCollectionFill } from "react-icons/bs";
import { MdHighQuality } from "react-icons/md";
import { GrResources } from "react-icons/gr";
import { TbBuildingCommunity } from "react-icons/tb";

const WhyChooseUs = () => {
  return (
    <div>
      <section className="w-[95%] md:w-[90%] mx-auto">
        <div className="container py-12 md:py-24">
          <h2 className="text-xl md:text-4xl text-center font-bold mb-8">
            Why{" "}
            <span className="bg-gradient-to-r from-indigo-700 to-pink-500 bg-clip-text text-transparent">
              Choose Us?
            </span>
          </h2>
          <CustomCard className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-2  ">
            <CustomCardItem
              title="Huge collection"
              description="Explore our vast library of resources."
              icon={<BsCollectionFill className="text-4xl  text-pink-500/65" />}
            />
            <CustomCardItem
              title="High Quality"
              description="We prioritize quality in every project, ensuring top-notch results."
              icon={<MdHighQuality className="text-4xl  text-indigo-400/65"/>}
            />
            <CustomCardItem
              title="Top Resources"
              description="Access a curated selection of the best tools and materials."
              icon={<GrResources className="text-4xl  text-slate-600/65"/>}
            />
            <CustomCardItem
              title="Big Community"
              description="Join a thriving community of like-minded individuals."
              icon={<TbBuildingCommunity className="text-4xl  text-emerald-800/65"/>}
            />
          </CustomCard>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
