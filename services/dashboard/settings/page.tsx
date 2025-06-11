// app/dashboard/settings/page.tsx
import { BellIcon, HomeIcon, PhoneIcon, SearchIcon, UserIcon, CogIcon, FolderIcon, CalendarIcon, ChartBarIcon, StarIcon } from '@heroicons/react/outline';

export default function SettingsPage() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      {/* Top Navigation */}
      <header className="bg-[#23486A] px-6 py-4 flex justify-between items-center border-b border-[#4C7B8B]/20">
        <div className="text-xl font-bold">Plumbliss</div>
        <div className="flex items-center space-x-6">
          <div className="relative">
            <SearchIcon className="h-5 w-5 absolute left-3 top-2.5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Home" 
              className="bg-[#3B6790]/40 rounded-lg pl-10 pr-4 py-2 text-sm w-60 focus:outline-none"
            />
          </div>
          <HomeIcon className="h-6 w-6 text-gray-300" />
          <div className="relative">
            <BellIcon className="h-6 w-6 text-gray-300" />
            <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 text-xs flex items-center justify-center">1</span>
          </div>
          <CogIcon className="h-6 w-6 text-gray-300" />
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Main Dashboard Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* User Profile */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="relative">
                <img src="https://via.placeholder.com/80" alt="Profile" className="rounded-full w-20 h-20 object-cover border-2 border-white" />
                <div className="absolute bottom-0 right-0 bg-[#EFB036] rounded-full w-6 h-6 flex items-center justify-center text-xs border-2 border-[#23486A]">✓</div>
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold">Desk planes</h1>
                <p className="text-gray-300">Plumbing Service Technician</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div>
                <p className="text-gray-300 text-sm">Name like</p>
                <div className="flex items-center">
                  <p className="font-bold text-xl">4</p>
                  <StarIcon className="h-4 w-4 text-[#EFB036] ml-1" />
                  <p className="text-gray-300 text-sm ml-2">(729) 239</p>
                </div>
              </div>
              <div className="bg-[#3B6790]/40 rounded-lg px-4 py-2">
                <p className="text-gray-300 text-sm">Daily rate</p>
                <p className="font-bold text-xl">$8,359</p>
              </div>
              <div className="font-bold text-xl">$149,915</div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex space-x-4 mb-6">
            <button className="bg-[#EFB036] px-6 py-2 rounded-lg font-medium">Contact</button>
            <button className="px-6 py-2 rounded-lg text-gray-300">Home</button>
            <button className="px-6 py-2 rounded-lg text-gray-300">Future</button>
            <button className="px-6 py-2 rounded-lg text-gray-300">Piping</button>
            <button className="px-6 py-2 rounded-lg text-gray-300 flex items-center">
              Payments
              <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Dashboard Widgets */}
          <div className="grid grid-cols-2 gap-6">
            {/* Team Members */}
            <div className="bg-[#3B6790]/20 rounded-xl p-5">
              <div className="flex items-center mb-4">
                <div className="bg-[#3B6790]/40 rounded-full p-1.5 mr-2">
                  <UserIcon className="h-4 w-4" />
                </div>
                <h2 className="font-bold">Nami toli</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img src="https://via.placeholder.com/40" alt="Team member" className="rounded-full w-10 h-10 object-cover" />
                    <div className="ml-3">
                      <p className="font-medium">Lexi Plume</p>
                      <p className="text-xs text-gray-300">Front end Angular/UI Design</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="bg-[#EFB036] rounded-full w-5 h-5 -mr-1 border border-[#23486A]"></div>
                    <div className="bg-[#4C7B8B] rounded-full w-5 h-5 border border-[#23486A] flex items-center justify-center text-xs">+1</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img src="https://via.placeholder.com/40" alt="Team member" className="rounded-full w-10 h-10 object-cover" />
                    <div className="ml-3">
                      <p className="font-medium">PipePlunker</p>
                      <p className="text-xs text-gray-300">Apprentice</p>
                    </div>
                  </div>
                  <button className="text-sm text-[#EFB036]">Team +</button>
                </div>
              </div>
            </div>
            
            {/* Compensation */}
            <div className="bg-[#3B6790]/20 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold">Compensation</h2>
                <button className="bg-[#3B6790] px-3 py-1 rounded-lg text-sm">Rate +</button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img src="https://via.placeholder.com/40" alt="Team member" className="rounded-full w-10 h-10 object-cover" />
                    <div className="ml-3">
                      <p className="font-medium">DanXeans</p>
                      <p className="text-xs text-gray-300">Hourly</p>
                    </div>
                  </div>
                  <button className="bg-[#3B6790] px-3 py-1 rounded-lg text-sm">Team +</button>
                </div>
              </div>
              
              <div className="mt-4">
                <p className="text-sm mb-2">Payment history</p>
              </div>
            </div>
            
            {/* Job Information */}
            <div className="bg-[#3B6790]/20 rounded-xl p-5">
              <div className="flex items-center mb-4">
                <h2 className="font-bold">Job Information</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start">
                  <img src="https://via.placeholder.com/40" alt="Job" className="rounded-full w-10 h-10 object-cover" />
                  <div className="ml-3">
                    <p className="font-medium">Current calls</p>
                    <p className="text-xs text-gray-300">7 jobs: Mostly single-phase formal installs/drainage</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <img src="https://via.placeholder.com/40" alt="Job" className="rounded-full w-10 h-10 object-cover" />
                  <div className="ml-3">
                    <p className="font-medium">Washi Rio</p>
                    <p className="text-xs text-gray-300">7 jobs: Project formal</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <img src="https://via.placeholder.com/40" alt="Job" className="rounded-full w-10 h-10 object-cover" />
                  <div className="ml-3">
                    <p className="font-medium">Canels</p>
                    <p className="text-xs text-gray-300">Contract billing, various utilities (very small)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <img src="https://via.placeholder.com/40" alt="Job" className="rounded-full w-10 h-10 object-cover" />
                  <div className="ml-3">
                    <p className="font-medium">Athens</p>
                    <p className="text-xs text-gray-300">Callbacking, Debugging, Denial</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Specialties */}
            <div className="bg-[#3B6790]/20 rounded-xl p-5">
              <div className="flex items-center mb-4">
                <div className="bg-[#3B6790]/40 rounded-full p-1.5 mr-2">
                  <CogIcon className="h-4 w-4" />
                </div>
                <h2 className="font-bold">Specialties</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start">
                  <img src="https://via.placeholder.com/40" alt="Specialty" className="rounded-full w-10 h-10 object-cover" />
                  <div className="ml-3">
                    <p className="font-medium">Texas</p>
                    <p className="text-xs text-gray-300">Ranks 1/3 central/rural, over achiever</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <img src="https://via.placeholder.com/40" alt="Specialty" className="rounded-full w-10 h-10 object-cover" />
                  <div className="ml-3">
                    <p className="font-medium">Rio Roxie</p>
                    <p className="text-xs text-gray-300">Onsite, master adjunct hand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Activity Log */}
          <div className="bg-white text-gray-800 rounded-xl p-5 mt-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-black">Activity Log</h2>
              <button className="bg-[#EFB036] text-white px-4 py-1.5 rounded-lg text-sm">Review</button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">Total jobs completed</span>
                </div>
                <div className="flex items-center space-x-8">
                  <span className="text-sm">14.20</span>
                  <span className="text-sm">58 yo</span>
                  <span className="text-sm font-medium text-green-500">$3.10</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <span className="text-sm">Fast job requests</span>
                </div>
                <div className="flex items-center space-x-8">
                  <span className="text-sm">17.20</span>
                  <span className="text-sm">50 yo</span>
                  <span className="text-sm">18.20</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center mr-3">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <span className="text-sm">Customer rating</span>
                </div>
                <div className="flex items-center space-x-8">
                  <span className="text-sm">12.40</span>
                  <span className="text-sm">53 yo</span>
                  <span className="text-sm">13.30</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">Last keyword used</span>
                </div>
                <div className="flex items-center space-x-8">
                  <span className="text-sm">72.30</span>
                  <span className="text-sm">53 yo</span>
                  <span className="text-sm font-medium text-green-500">$5.10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Sidebar */}
        <div className="w-64 bg-[#3B6790]/20 border-l border-[#4C7B8B]/20 p-4 overflow-y-auto">
          <div className="mb-6">
            <div className="relative">
              <SearchIcon className="h-4 w-4 absolute left-3 top-2.5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search" 
                className="bg-[#3B6790]/40 rounded-lg pl-10 pr-4 py-2 text-sm w-full focus:outline-none"
              />
              <button className="absolute right-2 top-2">
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center text-gray-300 hover:text-white">
              <HomeIcon className="h-5 w-5 mr-3" />
              <span>Home</span>
            </div>
            
            <div className="flex items-center text-gray-300 hover:text-white">
              <UserIcon className="h-5 w-5 mr-3" />
              <span>Contacts</span>
            </div>
            
            <div className="flex items-center text-gray-300 hover:text-white">
              <StarIcon className="h-5 w-5 mr-3" />
              <span>Keypoints</span>
            </div>
            
            <div className="flex items-center text-gray-300 hover:text-white">
              <ChartBarIcon className="h-5 w-5 mr-3" />
              <span>Reports</span>
            </div>
            
            <div className="flex items-center text-gray-300 hover:text-white">
              <FolderIcon className="h-5 w-5 mr-3" />
              <span>Messages</span>
            </div>
            
            <div className="flex items-center text-gray-300 hover:text-white">
              <FolderIcon className="h-5 w-5 mr-3" />
              <span>Past Jobs</span>
            </div>
            
            <div className="flex items-center text-gray-300 hover:text-white">
              <FolderIcon className="h-5 w-5 mr-3" />
              <span>Past Jobs</span>
            </div>
            
            <div className="flex items-center text-gray-300 hover:text-white">
              <FolderIcon className="h-5 w-5 mr-3" />
              <span>News</span>
            </div>
            
            <div className="flex items-center text-gray-300 hover:text-white">
              <CogIcon className="h-5 w-5 mr-3" />
              <span>Settings</span>
            </div>
            
            <div className="flex items-center text-gray-300 hover:text-white">
              <BellIcon className="h-5 w-5 mr-3" />
              <span>Amenities</span>
            </div>
            
            <div className="flex items-center text-gray-300 hover:text-white">
              <UserIcon className="h-5 w-5 mr-3" />
              <span>Client Feature</span>
            </div>
            
            <div className="flex items-center text-gray-300 hover:text-white">
              <UserIcon className="h-5 w-5 mr-3" />
              <span>User Section</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}