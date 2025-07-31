import { BorderCard } from "../common/border-card";

const Homepage = () => {
  return (
    <div className="space-y-4 md:flex md:space-y-0 md:gap-4">
      <div className="">
        left
        <BorderCard>helo</BorderCard>
      </div>
      <div>right</div>
    </div>
  );
};

export default Homepage;
