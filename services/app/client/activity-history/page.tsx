// File: src/app/client/activity-history/page.tsx
"use client"; // Make sure this is at the very top

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getActivityById } from '@/lib/api/activities';
import { Activity } from '@/Pages/ClientDashboardPage/types';

const ActivityHistory = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activity, setActivity] = useState<Activity | null>(null);

  // Retrieve the activity ID from query parameters
  const activityId = searchParams.get('id');

  useEffect(() => {
    if (!activityId) {
      router.push('/client/dashboard'); // Redirect if no ID is provided
      return;
    }

    // Fetch the activity details using the ID
    const fetchActivity = async () => {
      try {
        const fetchedActivity = await getActivityById(activityId);
        setActivity(fetchedActivity);
      } catch (error) {
        console.error('Failed to fetch activity:', error);
        router.push('/client/dashboard'); // Redirect on error
      }
    };

    fetchActivity();
  }, [activityId, router]);

  if (!activity) {
    return <div className="p-6 text-[#F5EEDC]">Loading activity details...</div>;
  }

  return (
    <div className="bg-[#3B6790] rounded-xl p-6">
      <h2 className="text-4xl font-semibold mb-4 text-[#EFB036]">Activity Details</h2>
      <div className="space-y-4 text-[#F5EEDC]">
        <div className="flex items-center space-x-3">
          <span className="font-medium">{activity.task}</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Time: {activity.time}</span>
          <span className="text-[#EFB036] font-medium">Payment: {activity.payment}</span>
        </div>
        {activity.status && (
          <div className="flex items-center space-x-4">
            <span>Status: {activity.status}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityHistory;