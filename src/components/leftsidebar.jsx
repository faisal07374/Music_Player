import {
  FaApple, FaHome, FaCompass, FaMusic,
  FaPodcast, FaBroadcastTower, FaUserCircle
} from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

const menuItems = [
  { name: 'Home', icon: <FaHome />, new: false },
  { name: 'Discover', icon: <FaCompass />, new: true },
  { name: 'Browse', icon: <FaMusic />, new: false },
  { name: 'Podcast', icon: <FaPodcast />, new: false },
  { name: 'Radio', icon: <FaBroadcastTower />, new: true }
];

const libraryItems = [
  { name: 'Albums', new: false },
  { name: 'Songs', new: true },
  { name: 'Artists', new: false }
];

export default function LeftSidebar() {
  return (
    <div className="w-64 h-full bg-sky-100/70 backdrop-blur-md border-r border-white/30 text-sky-900 p-4 flex flex-col justify-between shadow-md">
      <div>
        {/* Header */}
        <div className="flex items-center space-x-2 mb-6">
          <FaApple className="text-3xl" />
          <span className="text-xl font-bold">Music</span>
        </div>

        {/* Search */}
        <div className="flex items-center bg-white/50 rounded p-2 mb-6 border border-white/30">
          <FiSearch className="text-sky-500 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-full placeholder-sky-500 text-sky-900"
          />
        </div>

        {/* Menu */}
        <div className="mb-6">
          <div className="text-sm font-semibold text-sky-600 mb-2">
            Menu ({menuItems.length})
          </div>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name} className="flex items-center justify-between hover:bg-white/40 px-2 py-1 rounded-md transition">
                <div className="flex items-center space-x-2">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
                {item.new && (
                  <span className="text-xs bg-green-400 text-white px-2 py-0.5 rounded-full">
                    New
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Library */}
        <div>
          <div className="text-sm font-semibold text-sky-600 mb-2">
            Library ({libraryItems.length})
          </div>
          <ul className="space-y-2">
            {libraryItems.map((item) => (
              <li key={item.name} className="flex items-center justify-between hover:bg-white/40 px-2 py-1 rounded-md transition">
                <span>{item.name}</span>
                {item.new && (
                  <span className="text-xs bg-green-400 text-white px-2 py-0.5 rounded-full">
                    New
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Profile */}
      <div className="pt-4 border-t border-white/20 flex items-center space-x-3">
        <FaUserCircle className="text-3xl" />
        <div>
          <div className="font-semibold">Alex Doe</div>
          <div className="text-xs text-sky-600">Music Enthusiast</div>
        </div>
      </div>
    </div>
  );
}
