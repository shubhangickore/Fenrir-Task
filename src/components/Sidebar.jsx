import { UserCircle } from "lucide-react";
export default function sidebar()
{
  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col justify-between p-6">
      
      {/* Top Section */}
      <div>
        <h1 className="text-2xl font-bold mb-10">Fenrir</h1>

        <nav className="flex flex-col space-y-4">
          <a className="hover:text-teal-400 cursor-pointer">Dashboard</a>
         <a className="hover:text-teal-400 cursor-pointer">Scans</a>
          <a className="hover:text-teal-400 cursor-pointer">Reports</a>

          <a className="hover:text-teal-400 cursor-pointer">Settings</a>
        </nav>
      </div>

      {/* Bottom Section */}
      <div>
        
        

        {/* User Info */}
        <div className="flex items-center gap-3 border-t border-gray-700 pt-4">
          <UserCircle size={36} className="text-gray-400" />
          <div className="text-sm">
            <p className="font-medium">Shubhangi</p>
            <p className="text-gray-400 text-xs">
              shubhangi@fenrir.com
            </p>
          </div>
        </div>

      </div>

    </aside>
  );
}