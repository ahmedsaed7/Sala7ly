export interface NavigationItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  route?: string;
}

export interface Specialty {
  name: string;
  role: string;
  area: string;
  avatar: string;
}

export interface Activity {
  type: string;
  status: string;
  id: number;
  task: string;
  time: string;
  payment: string;
}