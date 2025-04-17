import {
  FaBackward,
  FaForward,
  FaPlay,
  FaStepBackward,
  FaStepForward,
  FaRandom,
  FaRedo,
  FaVolumeUp,
  FaHeart,
  FaWaveSquare,
} from 'react-icons/fa';

import music1 from '../assets/music4.jpg';
import music2 from '../assets/music2.png';



const playlist = [
  { title: 'Skyline', artist: 'Lana Rhoads', time: '3:21', album: 'Night Flow', playing: false },
  { title: 'Deep Dive', artist: 'Jonny Keys', time: '4:10', album: 'Ocean Mood', playing: true },
  { title: 'Sunlight', artist: 'Echo Waves', time: '2:45', album: 'Daylight', playing: false },
  { title: 'Slow Drift', artist: 'Moon Dust', time: '3:58', album: 'Evening Vibes', playing: false },
  { title: 'New Heights', artist: 'Peak Sounds', time: '3:33', album: 'Above', playing: false },
];

export default function MainContent() {
  return (
    <div className="flex-1 p-6 bg-sky-50/60 backdrop-blur-md border-x border-white/30 min-h-screen flex flex-col text-sky-900">
      {/* Top Controls */}
      <div className="flex justify-start space-x-4 mb-4">
        <button className="bg-white/50 px-3 py-1 rounded hover:bg-white/70 text-sky-800"><FaBackward /></button>
        <button className="bg-white/50 px-3 py-1 rounded hover:bg-white/70 text-sky-800"><FaForward /></button>
      </div>

      {/* Trending Header */}
      <div className="mb-6">
        <p className="text-sm text-sky-600">What's hot</p>
        <h2 className="text-2xl font-bold">Trending</h2>
      </div>

      {/* Trending Card */}
      <div className="bg-white/60 border border-white/30 rounded-lg p-6 flex items-center justify-between mb-10 shadow-lg backdrop-blur-md">
        {/* Left Side */}
        <div className="flex-1">
          {/* Header Labels */}
          <div className="flex justify-between text-sm text-sky-700 font-medium mb-2">
            <span>Artist</span>
            <span>Monthly Listener</span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
            Top ALL Over the World
          </h3>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="bg-white text-black border border-black hover:bg-red-600 hover:text-white hover:border-red-600 transition-all px-6 py-2 rounded shadow-sm font-semibold">
              <FaPlay className="inline-block mr-2" />
              Play
            </button>
            <button className="bg-white text-black border border-black hover:bg-red-600 hover:text-white hover:border-red-600 transition-all px-6 py-2 rounded shadow-sm font-semibold">
              Follow
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-28 h-28 bg-gray-200 rounded-lg ml-6 flex items-center justify-center">
          {/* <span className="text-xs text-gray-500">Image</span> */}
          <img src={music2} alt="" />
        </div>
      </div>

      {/* Playlist Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Playlist</h2>
        <button className="text-sm text-blue-500 hover:underline">See All</button>
      </div>

      {/* Playlist Table Header */}
      <div className="grid grid-cols-5 text-sky-700 text-sm pb-2 border-b border-white/30">
        <span>#</span>
        <span>Title</span>
        <span>Artist</span>
        <span>Time</span>
        <span>Album</span>
      </div>

      {/* Playlist Rows */}
      <div className="divide-y divide-white/30 text-sky-800">
        {playlist.map((song, index) => (
          <div key={index} className="grid grid-cols-5 py-3 text-sm items-center">
            <span>{song.playing ? <FaWaveSquare className="text-green-400 animate-pulse" /> : index + 1}</span>
            <span>{song.title}</span>
            <span>{song.artist}</span>
            <span>{song.time}</span>
            <span>{song.album}</span>
          </div>
        ))}
      </div>

      {/* Media Player */}
      <div className="mt-10 bg-white/60 border border-white/30 rounded-lg p-4 flex items-center justify-between shadow">
        {/* Song Info */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-white/30 rounded">
            <img src={music1} alt="" />
          </div>
          <div>
            <div className="text-sm font-semibold">Deep Dive</div>
            <div className="text-xs text-sky-600">Jonny Keys</div>
          </div>
          <FaHeart className="text-red-400 cursor-pointer ml-2" />
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center w-1/3">
          <div className="flex space-x-4 mb-2 text-sky-700">
            <FaRandom className="cursor-pointer" />
            <FaStepBackward className="cursor-pointer" />
            <FaPlay className="cursor-pointer bg-white text-black rounded-full p-2" size={30} />
            <FaStepForward className="cursor-pointer" />
            <FaRedo className="cursor-pointer" />
          </div>
          <div className="flex items-center space-x-2 text-xs text-sky-600 w-full">
            <span>0:00</span>
            <div className="w-full h-1 bg-white/40 rounded overflow-hidden">
              <div className="h-full bg-green-400 w-1/3"></div>
            </div>
            <span>4:10</span>
          </div>
        </div>

        {/* Volume */}
        <div className="flex items-center space-x-2 text-sky-700">
          <FaVolumeUp />
          <div className="w-20 h-1 bg-white/40 rounded overflow-hidden">
            <div className="h-full bg-blue-400 w-2/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
