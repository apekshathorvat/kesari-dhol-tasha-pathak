import React from 'react';
import { X, FileText, Image, Phone, Play, Globe, Video, CheckCircle, Upload } from 'lucide-react';
import { PATHAK_CONFIG } from '../config/pathakConfig';

interface EditGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EditGuideModal: React.FC<EditGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200 border-2 border-orange-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-orange-100 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden border border-orange-200 p-0.5">
              <img
                src={PATHAK_CONFIG.logoPath}
                alt="केसरी लोगो"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold font-display text-[#8B2500]">
                वेबसाइट संपादन व प्रकाशन मार्गदर्शक
              </h3>
              <p className="text-xs text-orange-600 font-bold">
                केसरी ढोल ताशा पथक, इचलकरंजी
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors"
            aria-label="बंद करा"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Steps Content */}
        <div className="space-y-6 text-sm text-stone-700">
          
          {/* Guide Item 1: Running the website */}
          <div className="bg-orange-50/60 p-4 sm:p-5 rounded-xl border border-orange-200">
            <div className="flex items-center gap-2 font-bold text-[#8B2500] mb-2">
              <Play className="w-4 h-4 text-orange-600" />
              <span>१. वेबसाइट आपल्या संगणकावर कशी चालवावी? (Run Website)</span>
            </div>
            <p className="text-xs text-stone-600 mb-2">
              टर्मिनल किंवा कमांड प्रॉम्प्टमध्ये खालील कमांड्स टाईप करा:
            </p>
            <div className="bg-stone-900 text-stone-200 p-3 rounded-lg font-mono text-xs space-y-1">
              <div className="text-stone-400"># १. सर्व पॅकेजेस इन्स्टॉल करा:</div>
              <div className="text-orange-400">npm install</div>
              <div className="text-stone-400 mt-2"># २. डेव्हलपमेंट सर्व्हर सुरू करा:</div>
              <div className="text-green-400">npm run dev</div>
            </div>
            <p className="text-[11px] text-stone-500 mt-2">
              कमांड दिल्यावर ब्राऊझरमध्ये <code className="text-orange-700 font-bold">http://localhost:3000</code> उघडा.
            </p>
          </div>

          {/* Guide Item 2: Adding New Photos */}
          <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200 shadow-xs">
            <div className="flex items-center gap-2 font-bold text-[#8B2500] mb-2">
              <Image className="w-4 h-4 text-orange-600" />
              <span>२. स्वतःचे खरे फोटो कसे जोडावेत? (Add Photos)</span>
            </div>
            <ol className="text-xs space-y-2 text-stone-700 list-decimal pl-4">
              <li>
                तुमचे फोटो 📂 <code className="bg-stone-100 px-1.5 py-0.5 rounded text-orange-700 font-mono font-bold">/public/images/</code> फोल्डरमध्ये सेव्ह करा (उदा. <code className="text-stone-900 font-mono">ganpati1.jpg</code>).
              </li>
              <li>
                📂 <code className="bg-stone-100 px-1.5 py-0.5 rounded text-orange-700 font-mono font-bold">/src/config/pathakConfig.ts</code> फाईल उघडा.
              </li>
              <li>
                <code className="text-stone-900 font-mono">gallery</code> या लिस्टमध्ये त्या फोटोची नोंद करा:
                <pre className="bg-stone-900 text-stone-200 p-2.5 rounded-lg font-mono text-[11px] mt-1.5 overflow-x-auto">
{`{
  id: "gal-real-1",
  title: "बाप्पाच्या आगमनातील वादन",
  category: "aagman",
  categoryLabel: "बाप्पा आगमन",
  caption: "इचलकरंजीतील बाप्पाच्या स्वागताचा क्षण",
  dateOrYear: "गणेशोत्सव २०२५",
  imageUrl: "/images/ganpati1.jpg" // 👈 तुमच्या फोटोचा पाथ
}`}
                </pre>
              </li>
            </ol>
          </div>

          {/* Guide Item 3: Adding MP4 videos & YouTube Links */}
          <div className="bg-orange-50/40 p-4 sm:p-5 rounded-xl border border-orange-200">
            <div className="flex items-center gap-2 font-bold text-[#8B2500] mb-2">
              <Video className="w-4 h-4 text-orange-600" />
              <span>३. व्हिडिओ कसे जोडावेत? (MP4 आणि YouTube Links)</span>
            </div>
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-white rounded-lg border border-orange-100">
                <span className="font-bold text-orange-700 block mb-1">
                  🔴 YouTube व्हिडिओ जोडण्यासाठी:
                </span>
                <p className="text-stone-600 mb-1">
                  YouTube लिंकमधील 11-अक्षरी व्हिडिओ आयडी (उदा. <code>youtube.com/watch?v=<b>dQw4w9WgXcQ</b></code>) घ्या व <code className="font-mono">pathakConfig.ts</code> मध्ये टाका:
                </p>
                <code className="block bg-stone-900 text-stone-200 p-2 rounded text-[11px] font-mono">
                  type: "youtube", youtubeId: "dQw4w9WgXcQ"
                </code>
              </div>

              <div className="p-3 bg-white rounded-lg border border-orange-100">
                <span className="font-bold text-[#8B2500] block mb-1">
                  📁 स्थानिक MP4 व्हिडिओ फाईल जोडण्यासाठी:
                </span>
                <p className="text-stone-600 mb-1">
                  तुमची <code>.mp4</code> व्हिडिओ फाईल 📂 <code>/public/videos/</code> फोल्डरमध्ये ठेवा आणि <code className="font-mono">pathakConfig.ts</code> मध्ये लिहा:
                </p>
                <code className="block bg-stone-900 text-stone-200 p-2 rounded text-[11px] font-mono">
                  type: "mp4", videoUrl: "/videos/vadan2025.mp4"
                </code>
              </div>
            </div>
          </div>

          {/* Guide Item 4: Changing Contact Details */}
          <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200 shadow-xs">
            <div className="flex items-center gap-2 font-bold text-[#8B2500] mb-2">
              <Phone className="w-4 h-4 text-orange-600" />
              <span>४. संपर्क माहिती कशी बदलावी? (Contact Details)</span>
            </div>
            <p className="text-xs text-stone-600 mb-2">
              📂 <code className="bg-stone-100 px-1.5 py-0.5 rounded text-orange-700 font-mono font-bold">src/config/pathakConfig.ts</code> मधील <code className="font-mono">contact</code> विभाग पहा:
            </p>
            <ul className="text-xs space-y-1 text-stone-700 pl-4 list-disc">
              <li>
                <strong>फोन नंबर:</strong> <code className="text-orange-700 font-mono">phone: "+91 98XXX XXXXX"</code> च्या जागी खरा नंबर लिहा.
              </li>
              <li>
                <strong>WhatsApp:</strong> <code className="text-orange-700 font-mono">phoneRaw: "919822012345"</code> (देश कोड ९१ सह).
              </li>
              <li>
                <strong>इन्स्टाग्राम:</strong> <code className="text-orange-700 font-mono">instagramUrl</code> आणि <code className="text-orange-700 font-mono">instagramHandle</code>.
              </li>
              <li>
                <strong>पत्ता:</strong> <code className="text-orange-700 font-mono">location: "इचलकरंजी, जि. कोल्हापूर, महाराष्ट्र"</code>.
              </li>
            </ul>
          </div>

          {/* Guide Item 5: Publishing Online */}
          <div className="bg-stone-50 p-4 sm:p-5 rounded-xl border border-stone-200">
            <div className="flex items-center gap-2 font-bold text-[#8B2500] mb-2">
              <Globe className="w-4 h-4 text-orange-600" />
              <span>५. वेबसाइट इंटरनेटवर विनामूल्य पब्लिश कशी करावी? (Publish Online)</span>
            </div>
            <p className="text-xs text-stone-600 mb-2">
              उत्पादनासाठी (Production) तयार करण्यासाठी कमांड द्या:
            </p>
            <div className="bg-stone-900 text-stone-200 p-2.5 rounded-lg font-mono text-xs mb-2">
              npm run build
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              याने 📂 <code className="bg-stone-200 px-1 rounded text-stone-900 font-bold font-mono">/dist</code> फोल्डर तयार होईल. हे फोल्डर तुम्ही <strong>Vercel, Netlify, GitHub Pages, किंवा Firebase Hosting</strong> वर मोफत ड्रॅग-अँड-ड्रॉप करून तुमची वेबसाइट जगभरात लाइव्ह करू शकता!
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-orange-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-orange-600 hover:bg-[#8B2500] text-white font-bold text-xs rounded-xl shadow-sm transition-colors"
          >
            समजले, धन्यवाद!
          </button>
        </div>

      </div>
    </div>
  );
};
