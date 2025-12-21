import { SlangItem } from '../types';

export const slangs: SlangItem[] = [
  // --- สุดฮิต & ตัวมารดา (Top Tier) ---
  { word: "Rizz", meaning: "เสน่ห์ดึงดูด, สกิลการจีบสาว/หนุ่ม (Charisma)", emoji: "😏", color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" },
  { word: "Gyatt", meaning: "โอ้โห! (ใช้อุทานเมื่อเห็นคนหุ่นดี/มีสะโพก)", emoji: "🍑", color: "text-red-500", bg: "bg-red-50", border: "border-red-100" },
  { word: "Ate / Ate that", meaning: "ทำถึง, ทำได้ดีมาก, ปังไม่ไหว", emoji: "🍽️", color: "text-pink-600", bg: "bg-pink-50", border: "border-pink-100" },
  { word: "Delulu", meaning: "เพ้อเจ้อ, มโน (มาจาก Delusional)", emoji: "🦄", color: "text-fuchsia-500", bg: "bg-fuchsia-50", border: "border-fuchsia-100" },
  { word: "It's giving...", meaning: "ให้อารมณ์แบบ..., ฟีลเหมือน...", emoji: "✨", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100" },

  // --- การกระทำ & สถานการณ์ (Actions & Situations) ---
  { word: "Ghost", meaning: "เท, หายเงียบ, เลิกคุยดื้อๆ", emoji: "👻", color: "text-slate-500", bg: "bg-slate-100", border: "border-slate-200" },
  { word: "Gatekeep", meaning: "กั๊ก, หวงของ, ไม่ยอมบอกพิกัด", emoji: "🚪", color: "text-stone-600", bg: "bg-stone-50", border: "border-stone-100" },
  { word: "Side Eye", meaning: "มองแรง, มองเหยียด, สงสัย", emoji: "😒", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
  { word: "Touch Grass", meaning: "ออกไปโลกภายนอกบ้าง (เลิกหมกมุ่นโซเชียล)", emoji: "🌱", color: "text-green-600", bg: "bg-green-50", border: "border-green-100" },
  { word: "Gaslight", meaning: "ปั่นหัวให้คิดว่าตัวเองผิด", emoji: "🔥", color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-100" },

  // --- ลักษณะนิสัย & ตัวตน (Personality & Identity) ---
  { word: "Pick me", meaning: "เรียกร้องความสนใจ, อยากให้ผู้ชาย/คนอื่นเลือก", emoji: "🙋‍♀️", color: "text-rose-500", bg: "bg-rose-50", border: "border-rose-100" },
  { word: "Simp", meaning: "คนคลั่งรัก, ยอมทำทุกอย่างเพื่อคนที่ชอบ", emoji: "🥺", color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-100" },
  { word: "Main Character", meaning: "ตัวเอก, ทำตัวเด่น, มั่นใจในตัวเอง", emoji: "🎬", color: "text-yellow-600", bg: "bg-yellow-50", border: "border-yellow-100" },
  { word: "NPC", meaning: "คนธรรมดา, ทำตัวเหมือนหุ่นยนต์/ตามสคริปต์", emoji: "🤖", color: "text-gray-500", bg: "bg-gray-50", border: "border-gray-100" },
  { word: "Green Flag", meaning: "สัญญาณดี, คนนิสัยดี, น่าคบหา", emoji: "✅", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
  { word: "Red Flag", meaning: "สัญญาณอันตราย, คนนิสัยไม่ดี, หนีไป!", emoji: "🚩", color: "text-red-600", bg: "bg-red-50", border: "border-red-100" },
  { word: "Beige Flag", meaning: "แปลกๆ หน่อยแต่รับได้ (ไม่ดีไม่ร้าย)", emoji: "🟫", color: "text-amber-800", bg: "bg-amber-50", border: "border-amber-100" },

  // --- คำอุทาน & รีแอคชั่น (Exclamations & Reactions) ---
  { word: "Slay", meaning: "ทำได้ปังมาก, ฆ่าเรียบ!", emoji: "💅", color: "text-pink-600", bg: "bg-pink-50", border: "border-pink-100" },
  { word: "Bet", meaning: "เอาดิ, จัดไป, ตกลง (Yes/OK)", emoji: "🤝", color: "text-cyan-600", bg: "bg-cyan-50", border: "border-cyan-100" },
  { word: "Cap / No Cap", meaning: "โกหก / พูดจริงนะ (ไม่โม้)", emoji: "🧢", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
  { word: "Sus", meaning: "น่าสงสัย, มีพิรุธ (Suspicious)", emoji: "🧐", color: "text-red-500", bg: "bg-red-50", border: "border-red-100" },
  { word: "Sheesh", meaning: "ว้าว! (ชื่นชมแบบตกใจ/ไม่อยากจะเชื่อ)", emoji: "🥶", color: "text-sky-500", bg: "bg-sky-50", border: "border-sky-100" },

  // --- ความสัมพันธ์ (Relationships) ---
  { word: "Situationship", meaning: "ความสัมพันธ์ที่ไม่ชัดเจน (มากกว่าเพื่อนแต่ไม่ใช่แฟน)", emoji: "🤷", color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100" },
  { word: "Ick", meaning: "จุดที่ทำให้หมดอารมณ์/เลิกชอบทันที", emoji: "🤢", color: "text-lime-600", bg: "bg-lime-50", border: "border-lime-100" },
  { word: "Hard Launch", meaning: "เปิดตัวแฟนแบบจัดเต็ม (ลงรูปคู่ชัดๆ)", emoji: "🚀", color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-100" },
  { word: "Soft Launch", meaning: "เปิดตัวแฟนแบบอ้อมๆ (ลงรูปมือ, รูปหลัง)", emoji: "☁️", color: "text-teal-500", bg: "bg-teal-50", border: "border-teal-100" },
  { word: "Friendzone", meaning: "เป็นได้แค่เพื่อน", emoji: "💔", color: "text-slate-400", bg: "bg-slate-50", border: "border-slate-200" },

  // --- อินเทอร์เน็ต & โซเชียล (Internet & Social) ---
  { word: "Tea", meaning: "เรื่องซุบซิบ, ข่าววงใน (Gossip)", emoji: "☕", color: "text-amber-700", bg: "bg-amber-50", border: "border-amber-100" },
  { word: "Clout", meaning: "ชื่อเสียง, อิทธิพลในโซเชียล", emoji: "📈", color: "text-blue-700", bg: "bg-blue-50", border: "border-blue-100" },
  { word: "Cringe", meaning: "น่าอายแทน, ขนลุก (เพราะแป้ก)", emoji: "😬", color: "text-yellow-600", bg: "bg-yellow-50", border: "border-yellow-100" },
  { word: "Ratio", meaning: "ยอดตอบกลับเยอะกว่ายอดไลค์ (แปลว่าทัวร์ลง/คนไม่เห็นด้วย)", emoji: "📉", color: "text-rose-700", bg: "bg-rose-50", border: "border-rose-100" },
  { word: "Rent Free", meaning: "คิดถึงตลอด, วนเวียนในหัว (อยู่ฟรีไม่จ่ายค่าเช่า)", emoji: "🧠", color: "text-indigo-500", bg: "bg-indigo-50", border: "border-indigo-100" },

  // --- ไลฟ์สไตล์ & ความรู้สึก (Lifestyle & Vibes) ---
  { word: "Vibe Check", meaning: "เช็คบรรยากาศ / เช็คอารมณ์ตอนนี้", emoji: "〰️", color: "text-purple-500", bg: "bg-purple-50", border: "border-purple-100" },
  { word: "Slay", meaning: "ทำได้ดีมาก, สวยสับ", emoji: "💅", color: "text-pink-500", bg: "bg-pink-50", border: "border-pink-100" },
  { word: "Era", meaning: "ช่วงชีวิตหนึ่ง (เช่น Villain Era, Healing Era)", emoji: "⏳", color: "text-cyan-600", bg: "bg-cyan-50", border: "border-cyan-100" },
  { word: "Mog", meaning: "ดูดีกว่า, ข่มรัศมีคนอื่น (หล่อ/สวยกว่ามาก)", emoji: "😎", color: "text-zinc-600", bg: "bg-zinc-50", border: "border-zinc-100" },
  { word: "Glow up", meaning: "ดูดีขึ้นมาก (พัฒนาการความสวย/หล่อ)", emoji: "✨", color: "text-yellow-500", bg: "bg-yellow-50", border: "border-yellow-100" },

  // --- อื่นๆ (Misc) ---
  { word: "Facts", meaning: "จริงที่สุด, เห็นด้วยล้านเปอร์เซ็นต์", emoji: "💯", color: "text-green-600", bg: "bg-green-50", border: "border-green-100" },
  { word: "Valid", meaning: "ฟังขึ้น, มีเหตุผล, ยอมรับได้", emoji: "✅", color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-100" },
  { word: "Mid", meaning: "งั้นๆ, เฉยๆ, คุณภาพกลางๆ", emoji: "😐", color: "text-gray-400", bg: "bg-gray-50", border: "border-gray-200" },
  { word: "High-key", meaning: "ชัดเจน, เปิดเผย, จริงจัง (ตรงข้าม Low-key)", emoji: "📢", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
  { word: "Low-key", meaning: "แอบๆ, เงียบๆ, ไม่เปิดเผย", emoji: "🤫", color: "text-slate-500", bg: "bg-slate-50", border: "border-slate-100" },
  { word: "Periodt", meaning: "จบนะ, ตามนั้น (ห้ามเถียงต่อ)", emoji: "🛑", color: "text-red-700", bg: "bg-red-50", border: "border-red-100" },
  { word: "Yeet", meaning: "ขว้างแรงๆ / แสดงความดีใจสุดขีด", emoji: "🚀", color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-100" },
  { word: "Savage", meaning: "เถื่อน, โหด, แรง (แต่เจ๋ง)", emoji: "😈", color: "text-neutral-600", bg: "bg-neutral-50", border: "border-neutral-100" },
  { word: "Stan", meaning: "แฟนคลับตัวยง (สนับสนุนเต็มที่)", emoji: "🤩", color: "text-fuchsia-600", bg: "bg-fuchsia-50", border: "border-fuchsia-100" },
  { word: "Shook", meaning: "อึ้ง, ตกใจแรง", emoji: "😳", color: "text-violet-500", bg: "bg-violet-50", border: "border-violet-100" },
  { word: "Salty", meaning: "ขมขื่น, อิจฉา, งอน", emoji: "🧂", color: "text-blue-400", bg: "bg-blue-50", border: "border-blue-100" },
  { word: "Extra", meaning: "เยอะสิ่ง, เล่นใหญ่, เว่อร์วัง", emoji: "🎭", color: "text-purple-500", bg: "bg-purple-50", border: "border-purple-100" },
  { word: "Gucci", meaning: "ดี, เยี่ยม, สบายมาก", emoji: "👜", color: "text-green-700", bg: "bg-green-50", border: "border-green-100" },
  { word: "Basic", meaning: "ธรรมดาๆ, พื้นๆ, ตามกระแส", emoji: "🙄", color: "text-stone-500", bg: "bg-stone-50", border: "border-stone-100" }
];