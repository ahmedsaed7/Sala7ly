export const QuickStatsWidget = () => (
    <div className="bg-[#3B6790] rounded-xl p-6 mt-6">
      <h3 className="font-medium mb-4">Quick Stats</h3>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-[#4C7B8B]">Completed Jobs</span>
          <span className="font-medium">24</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#4C7B8B]">Pending Requests</span>
          <span className="font-medium">5</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#4C7B8B]">Earnings</span>
          <span className="text-[#EFB036] font-medium">$1,240</span>
        </div>
      </div>
    </div>
  );