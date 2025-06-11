export default function SettingsLayout({ children }) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-bold mb-4">Settings</h1>
        <div className="bg-[#3B6790]/20 rounded-xl p-5">
          {children}
        </div>
      </div>
    );
  }