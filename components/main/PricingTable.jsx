import { currentUser } from "@clerk/nextjs";

import ToggleTable2 from "../sub/PricingTableToggler";
const PricingTable = async () => {
  const user = await currentUser();

  return (
    <div className="py-24 lg:py-32">
      <div className="space-y-3 mb-12 text-center p-2" id="pricing-section2">
        <ToggleTable2 userd={user ? true : false} />
      </div>
    </div>
  );
};

export default PricingTable;
