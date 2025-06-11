import Link from "@/components/ui/Link/Link";
import { Pages } from "@/lib/config/constants";
import { ActivityIcon } from "lucide-react";
import { Activity } from "../types";

interface ActivityLogSectionProps {
  activities: Activity[];
}

export const ActivityLogSection = ({ activities }: ActivityLogSectionProps) => {
  return (
    <div className="bg-[#3B6790] rounded-xl p-6">
      <h2 className="text-4xl font-semibold mb-4">Activity Log</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <Link
            href={`/client/${Pages.ACTIVITYHISTORY}?id=${activity.id}`}
            key={index}
            className="flex items-center justify-between p-3 hover:bg-[#23486A] rounded-lg transition-colors cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <ActivityIcon size={20} className="text-[#EFB036]" />
              <span>{activity.task}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-[#F5EEDC]">{activity.time}</span>
              <span className="text-[#EFB036] font-medium">{activity.payment}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};