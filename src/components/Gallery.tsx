import React, { useState, useEffect } from 'react';
import { Camera, Video, X, Maximize2, Play, Film, Youtube, Info } from 'lucide-react';
import { PATHAK_CONFIG, GalleryItem, VideoItem } from '../config/pathakConfig';

interface GalleryProps {
  onOpenGuide: () => void;
  activeTab?: 'photos' | 'videos';
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenGuide, activeTab: initialTab = 'photos' }) => {
  // Only two options as requested: 'photos' (फोटो) and 'videos' (व्हिडिओ)
  const [currentTab, setCurrentTab] = useState<'photos' | 'videos'>(initialTab);
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  // Sync with prop if it changes
  useEffect(() => {
    if (initialTab) {
      setCurrentTab(initialTab);
    }
  }, [initialTab]);

  // Listen to hash changes (e.g. #gallery-videos from hero buttons)
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#gallery-videos') {
        setCurrentTab('videos');
      } else if (window.location.hash === '#gallery' || window.location.hash === '#gallery-photos') {
        setCurrentTab('photos');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-orange-600 mb-2 tracking-wider">
            <span>केसरी आठवणी व महानाद</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#8B2500]">इचलकरंजी</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#8B2500] tracking-tight mb-3">
            गॅलरी
          </h2>

          <p className="text-base sm:text-lg text-stone-600">
            केसरी ढोल ताशा पथक, इचलकरंजी - वादन, सराव आणि मिरवणुकांचे क्षणचित्रे
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-[#8B2500] mx-auto rounded-full mt-4" />
        </div>

        {/* ONLY TWO OPTIONS: फोटो (Photos) | व्हिडिओ (Videos) */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-white rounded-2xl border-2 border-orange-200 shadow-sm gap-2">
            
            {/* Option 1: फोटो (Photos) */}
            <button
              onClick={() => setCurrentTab('photos')}
              type="button"
              className={`flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-xl text-sm sm:text-base font-bold transition-all ${
                currentTab === 'photos'
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-500/20 scale-102'
                  : 'text-stone-700 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              <Camera className="w-5 h-5" />
              <span>फोटो (Photos)</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                currentTab === 'photos' ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-600'
              }`}>
                {PATHAK_CONFIG.gallery.length}
              </span>
            </button>

            {/* Option 2: व्हिडिओ (Videos) */}
            <button
              onClick={() => setCurrentTab('videos')}
              type="button"
              className={`flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-xl text-sm sm:text-base font-bold transition-all ${
                currentTab === 'videos'
                  ? 'bg-[#8B2500] text-white shadow-md shadow-[#8B2500]/25 scale-102'
                  : 'text-stone-700 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              <Video className="w-5 h-5" />
              <span>व्हिडिओ (Videos)</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                currentTab === 'videos' ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-600'
              }`}>
                {PATHAK_CONFIG.videos.length}
              </span>
            </button>

          </div>
        </div>

        {/* ===================== VIEW 1: PHOTOS GRID ===================== */}
        {currentTab === 'photos' && (
          <div className="animate-in fade-in duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PATHAK_CONFIG.gallery.map((item) => {
                const hasRealImage = Boolean(item.imageUrl);

                return (
                  <div
                    key={item.id}
                    className="group relative bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-orange-400 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Photo Container */}
                    <div
                      className="relative aspect-[4/3] bg-gradient-to-br from-stone-900 via-stone-850 to-stone-950 overflow-hidden cursor-pointer"
                      onClick={() => setActivePhoto(item)}
                    >
                      {hasRealImage ? (
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full p-6 flex flex-col justify-between items-center text-center relative select-none">
                          <div className="absolute inset-0 bg-gradient-to-t from-orange-950/70 via-stone-900/40 to-transparent pointer-events-none" />
                          
                          <div className="w-full flex justify-between items-center z-10">
                            <span className="text-[11px] font-bold text-orange-300 bg-stone-900/80 px-2.5 py-0.5 rounded border border-orange-500/30">
                              केसरी पथक
                            </span>
                            <span className="text-[11px] text-stone-300">
                              {item.dateOrYear}
                            </span>
                          </div>

                          <div className="my-auto z-10 flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-orange-600/25 border border-orange-400/40 flex items-center justify-center text-orange-400 mb-2 group-hover:scale-110 transition-transform">
                              <Camera className="w-7 h-7" />
                            </div>
                            <h4 className="font-display font-bold text-white text-base">
                              {item.title}
                            </h4>
                            <span className="text-[11px] text-orange-300 mt-1">
                              इचलकरंजी
                            </span>
                          </div>

                          <div className="w-full z-10 flex justify-between items-center text-[10px] text-stone-400 pt-2 border-t border-white/10">
                            <span>छायाचित्र</span>
                            <span className="text-orange-400 font-semibold flex items-center gap-1">
                              <Maximize2 className="w-3 h-3" />
                              <span>मोठा पाहा</span>
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-4 py-2 bg-white/95 text-stone-900 font-bold text-xs rounded-xl shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <Maximize2 className="w-4 h-4 text-orange-600" />
                          <span>विस्तृत पाहा</span>
                        </span>
                      </div>
                    </div>

                    {/* Card Text Info */}
                    <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                          <span className="font-bold text-orange-600">{item.categoryLabel}</span>
                          <span className="font-mono text-stone-500">{item.dateOrYear}</span>
                        </div>

                        <h4 className="font-bold text-base text-stone-900 group-hover:text-orange-600 transition-colors">
                          {item.title}
                        </h4>

                        <p className="text-xs text-stone-600 mt-1.5 line-clamp-2 leading-relaxed">
                          {item.caption}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                        <span className="text-stone-400">
                          {hasRealImage ? 'खरा फोटो' : 'छायाचित्र'}
                        </span>
                        <button
                          type="button"
                          onClick={() => setActivePhoto(item)}
                          className="text-[#8B2500] hover:text-orange-600 font-bold"
                        >
                          मोठा पाहा →
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Photo guide link */}
            <div className="mt-10 p-5 bg-white rounded-2xl border border-orange-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-orange-100/70 rounded-xl text-orange-700 shrink-0">
                  <Info className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-stone-900 text-sm">
                    गॅलरीमध्ये नवीन फोटो कसे जोडावेत?
                  </h5>
                  <p className="text-xs text-stone-600 mt-0.5">
                    फोटो <code>/public/images/</code> फोल्डरमध्ये सेव्ह करा आणि <code>src/config/pathakConfig.ts</code> मधील <code>gallery</code> लिस्टमध्ये नोंद करा.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onOpenGuide}
                className="px-4 py-2 bg-orange-600 hover:bg-[#8B2500] text-white text-xs font-bold rounded-lg shrink-0 transition-colors"
              >
                मार्गदर्शक पहा
              </button>
            </div>
          </div>
        )}

        {/* ===================== VIEW 2: VIDEOS GRID ===================== */}
        {currentTab === 'videos' && (
          <div className="animate-in fade-in duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {PATHAK_CONFIG.videos.map((video) => {
                const isYoutube = video.type === 'youtube' && Boolean(video.youtubeId);

                return (
                  <div
                    key={video.id}
                    className="group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-orange-400 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Video Screen Box */}
                    <div
                      className="relative aspect-video bg-stone-900 cursor-pointer overflow-hidden flex items-center justify-center"
                      onClick={() => setActiveVideo(video)}
                    >
                      {isYoutube && video.youtubeId ? (
                        <img
                          src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                          alt={video.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-85 group-hover:opacity-100"
                        />
                      ) : video.thumbnailUrl ? (
                        <>
                          <img
                            src={video.thumbnailUrl}
                            alt={video.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                          />
                          <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10 pointer-events-none">
                            <span className="text-[11px] font-bold text-orange-200 bg-stone-900/80 px-2.5 py-0.5 rounded border border-orange-500/30 flex items-center gap-1">
                              <Film className="w-3 h-3 text-orange-400" />
                              <span>{video.categoryLabel}</span>
                            </span>
                            {video.duration && (
                              <span className="text-[11px] font-bold text-white bg-black/75 px-2 py-0.5 rounded font-mono shadow-xs">
                                {video.duration}
                              </span>
                            )}
                          </div>
                        </>
                      ) : (
                        <div className="w-full h-full p-6 flex flex-col justify-between items-center text-center relative select-none bg-gradient-to-br from-stone-900 via-stone-850 to-stone-950">
                          <div className="absolute inset-0 bg-gradient-to-t from-orange-950/70 to-transparent pointer-events-none" />
                          
                          <div className="w-full flex justify-between items-center z-10">
                            <span className="text-[11px] font-bold text-orange-300 bg-stone-900/80 px-2.5 py-0.5 rounded border border-orange-500/30">
                              {video.categoryLabel}
                            </span>
                            {video.duration && (
                              <span className="text-[11px] text-stone-300 bg-black/60 px-2 py-0.5 rounded font-mono">
                                {video.duration}
                              </span>
                            )}
                          </div>

                          <div className="my-auto z-10 flex flex-col items-center">
                            <span className="text-white font-display font-bold text-base max-w-xs">
                              {video.title}
                            </span>
                            <span className="text-xs text-orange-400 mt-1">
                              इचलकरंजी
                            </span>
                          </div>

                          <div className="w-full z-10 flex justify-between items-center text-[10px] text-stone-400 pt-2 border-t border-white/10">
                            <span>{video.type === 'youtube' ? 'YouTube' : 'स्थानिक MP4'}</span>
                            <span className="text-orange-400 font-semibold">प्ले करण्यासाठी क्लिक करा</span>
                          </div>
                        </div>
                      )}

                      {/* Play Button Icon */}
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-orange-600 group-hover:bg-[#8B2500] text-white flex items-center justify-center shadow-xl group-hover:scale-110 active:scale-95 transition-all">
                          <Play className="w-7 h-7 fill-current ml-1" />
                        </div>
                      </div>

                      {/* Video Type Badge */}
                      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 z-10">
                        {video.type === 'youtube' ? (
                          <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 shadow-xs">
                            <Youtube className="w-3 h-3 fill-current" />
                            <span>YouTube</span>
                          </span>
                        ) : (
                          <span className="bg-stone-900 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 shadow-xs border border-white/20">
                            <Video className="w-3 h-3" />
                            <span>स्थानिक MP4</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Video Description */}
                    <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-white">
                      <div>
                        <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                          <span className="font-bold text-orange-600">{video.categoryLabel}</span>
                          {video.duration && (
                            <span className="font-mono text-stone-600">कालावधी: {video.duration}</span>
                          )}
                        </div>

                        <h3 className="font-bold text-lg text-stone-900 group-hover:text-[#8B2500] transition-colors mb-2">
                          {video.title}
                        </h3>

                        <p className="text-sm text-stone-600 leading-relaxed">
                          {video.description}
                        </p>
                      </div>

                      <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setActiveVideo(video)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8B2500] hover:text-orange-600"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>व्हिडिओ पहा</span>
                        </button>
                        <span className="text-[11px] text-stone-400">
                          {video.type === 'youtube' ? 'YouTube लिंक' : 'MP4 फाईल'}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Video guide link */}
            <div className="mt-10 p-5 bg-white rounded-2xl border border-orange-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-orange-100/70 rounded-xl text-orange-700 shrink-0">
                  <Info className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-stone-900 text-sm">
                    नवीन व्हिडिओ (MP4 किंवा YouTube) कसे जोडावेत?
                  </h5>
                  <p className="text-xs text-stone-600 mt-0.5">
                    MP4 फाईल <code>/public/videos/</code> मध्ये ठेवा किंवा YouTube आयडी <code>src/config/pathakConfig.ts</code> मधील <code>videos</code> लिस्टमध्ये टाका.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onOpenGuide}
                className="px-4 py-2 bg-[#8B2500] hover:bg-orange-600 text-white text-xs font-bold rounded-lg shrink-0 transition-colors"
              >
                व्हिडिओ मार्गदर्शक पहा
              </button>
            </div>
          </div>
        )}

      </div>

      {/* ===================== LIGHTBOX MODAL (PHOTO) ===================== */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
              aria-label="बंद करा"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] bg-stone-950 flex items-center justify-center relative overflow-hidden">
              {activePhoto.imageUrl ? (
                <img
                  src={activePhoto.imageUrl}
                  alt={activePhoto.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center p-8 text-white flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-orange-600 flex items-center justify-center mb-3">
                    <Camera className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold">
                    {activePhoto.title}
                  </h3>
                  <span className="text-sm text-orange-300 mt-1">
                    केसरी ढोल ताशा पथक, इचलकरंजी
                  </span>
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 mb-1">
                <span>केसरी ढोल ताशा पथक, इचलकरंजी</span>
                <span aria-hidden="true">·</span>
                <span>{activePhoto.dateOrYear}</span>
              </div>
              <h3 className="text-xl font-bold text-[#8B2500] mb-2 font-display">
                {activePhoto.title}
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed mb-4">
                {activePhoto.caption}
              </p>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-semibold">
                  कालावधी: {activePhoto.dateOrYear}
                </span>
                <button
                  onClick={() => setActivePhoto(null)}
                  className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold rounded-lg transition-colors"
                >
                  बंद करा
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================== VIDEO PLAYER MODAL ===================== */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative bg-stone-950 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 border border-stone-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 bg-stone-900 border-b border-stone-800 text-white">
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-bold font-display truncate max-w-md">
                  {activeVideo.title}
                </span>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
                aria-label="व्हिडिओ बंद करा"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video w-full bg-black flex items-center justify-center relative">
              {activeVideo.type === 'youtube' && activeVideo.youtubeId ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : activeVideo.type === 'mp4' && activeVideo.videoUrl ? (
                <video
                  className="w-full h-full"
                  controls
                  autoPlay
                  playsInline
                  controlsList="nodownload"
                  poster={activeVideo.thumbnailUrl}
                >
                  <source src={activeVideo.videoUrl} type="video/mp4" />
                  <source src="/assets/aistudio/WhatsApp_Video_2026-10-28_at_10.01.06_PM_3e31449c.mp4" type="video/mp4" />
                  <p className="text-white text-center p-4">
                    आपला ब्राऊझर HTML5 व्हिडिओ प्ले करण्यास समर्थ नाही.
                  </p>
                </video>
              ) : (
                <div className="p-8 text-center text-white">
                  <Video className="w-12 h-12 text-orange-500 mx-auto mb-3" />
                  <p className="text-base font-bold">व्हिडिओ स्त्रोत उपलब्ध नाही</p>
                </div>
              )}
            </div>

            <div className="p-4 bg-stone-900 text-stone-300 flex items-center justify-between text-xs">
              <span>{activeVideo.description}</span>
              <button
                onClick={() => setActiveVideo(null)}
                className="px-3.5 py-1.5 bg-stone-800 hover:bg-stone-700 text-white font-bold rounded-lg transition-colors"
              >
                बंद करा
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
