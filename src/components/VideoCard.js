const VideoCard = ({item}) => {
    const {snippet,statistics} = item;
    const {thumbnails, title, channelTitle} = snippet;
  return (
    <div className="bg-black text-white p-4 rounded shadow-lg ">
    <img
      className="w-full object-cover rounded mb-4 h-48"
      src={thumbnails.high.url}
      alt="Video Thumbnail"
    />
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    <p className="text-sm text-gray-400 mb-4">{channelTitle} • 2 days ago</p>
    </div>
  )
}

export default VideoCard;