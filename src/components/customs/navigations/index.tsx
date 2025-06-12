import MobileNav from "./_partials/mobile";
import DeskTop from "./_partials/deskTop";

const Navigation = () => {
  return (
    <div className="w-full h-[60px] bg-gradient-to-r from-red-100 to-sky-200 sticky top-0 z-50">
      <MobileNav />
      <DeskTop />
    </div>
  );
};

export default Navigation;
