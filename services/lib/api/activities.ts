// File: src/lib/api/activities.ts
import { Activity } from '@/Pages/ClientDashboardPage/types';

export const getActivityById = async (id: string): Promise<Activity> => {
  // Replace this with your actual API call
  const activities: Activity[] = [
    {
      task: 'Plumbing repair completed', time: '2 hours ago', payment: '$120.00',
      type: '',
      status: 'done',
      id: 1
    },
    {
      task: 'New appointment scheduled', time: 'Yesterday', payment: 'Pending',
      type: '',
      status: '',
      id: 2
    },
    {
      task: 'Technician feedback submitted', time: '3 days ago', payment: 'N/A',
      type: '',
      status: '',
      id: 3
    },
    {
      task: 'Payment processed', time: 'Last week', payment: '$85.50',
      type: '',
      status: '',
      id: 4
    },
  ];

  const activity = activities.find((a) => a.id.toString() === id);
  if (!activity) {
    throw new Error('Activity not found');
  }

  return activity;
};