import { FaPlus } from 'react-icons/fa';
import music1 from '../assets/music4.jpg';



const tags = ['Accoustic', 'Piano Jazz', 'Jazz', 'Indie Pop'];
const playedSongs = [
  { name: 'Mellow Vibes', desc: 'Smooth jazz beats', time: '1:42' },
  { name: 'Indie Flow', desc: 'Indie pop rhythms', time: '2:58' },
  { name: 'Acoustic Days', desc: 'Relaxed guitar tunes', time: '0:47' },
  { name: 'Evening Chill', desc: 'Piano melodies', time: '3:14' }
];
const nowPlaying = {
  name: 'Now Playing: Sunrise Jazz',
  desc: 'Calm morning vibe with jazz fusion'
};

export default function RightSidebar() {
  return (
    <div className="w-80 h-full bg-sky-100/70 backdrop-blur-md border-l border-white/30 text-sky-900 p-4 flex flex-col justify-between shadow-md">
      <div className="space-y-4">
        {/* Tags */}
        <div>
          <h2 className="text-lg font-semibold text-left">Tags</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/50 border border-white/30 rounded-full text-sm hover:bg-white/70 transition">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <hr className="border-white/20 my-2" />

        {/* Played */}
        <div className="flex justify-between items-center">
          <h2 className="text-md font-semibold">Played</h2>
          <button className="text-xs text-blue-500 hover:underline">See All</button>
        </div>

        {/* Played Songs */}
        <div className="grid gap-3">
          {playedSongs.map((song, index) => (
            <div
              key={index}
              className="flex items-center bg-white/50 border border-white/30 rounded p-2 hover:bg-white/70 transition"
            >
              <div className="w-12 h-12 bg-white/30 rounded mr-3">
                <img src={music1} alt="" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm">{song.name}</div>
                <div className="text-xs text-sky-700">{song.desc}</div>
              </div>
              <div className="text-xs text-sky-600 ml-2">{song.time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Now Playing */}
      <div className="mt-4 bg-white/50 border border-white/30 rounded-lg p-4 flex items-center hover:bg-white/70 transition">
        <div className="w-16 h-16 bg-white/30 rounded mr-4">
          <img src={music1} alt="" />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-lg">{nowPlaying.name}</div>
          <div className="text-sm text-sky-700">{nowPlaying.desc}</div>
        </div>
        <FaPlus className="text-xl text-sky-700 cursor-pointer ml-2" />
      </div>
    </div>
  );
}
