// frontend/src/data/vocab_parts/parts/vocab_parts_of_speech.ts
import { MainCategory } from '../../../types';

export const vocabPartsOfSpeech: MainCategory[] = [
  {
    id: 'pos-noun',
    title: '1. Noun (คำนาม)',
    icon: '📦',
    color: 'blue',
    subCategories: [
      {
        id: 'noun-people',
        title: 'People & Jobs (คนและอาชีพ)',
        words: [
          { id: 'n1', word: 'Teacher', meaning: 'ครู', example: 'The **teacher** is kind.' },
          { id: 'n2', word: 'Student', meaning: 'นักเรียน', example: 'I am a **student**.' },
          { id: 'n3', word: 'Doctor', meaning: 'หมอ', example: 'The **doctor** helps sick people.' },
          { id: 'n4', word: 'Family', meaning: 'ครอบครัว', example: 'I love my **family**.' },
          { id: 'n5', word: 'Friend', meaning: 'เพื่อน', example: 'He is my best **friend**.' },
          { id: 'n6', word: 'Man', meaning: 'ผู้ชาย', example: 'That **man** is tall.' },
          { id: 'n7', word: 'Woman', meaning: 'ผู้หญิง', example: 'The **woman** is smiling.' },
          { id: 'n8', word: 'Child', meaning: 'เด็ก', example: 'The **child** is playing.' }
        ]
      },
      {
        id: 'noun-places',
        title: 'Places (สถานที่)',
        words: [
          { id: 'n9', word: 'School', meaning: 'โรงเรียน', example: 'We go to **school**.' },
          { id: 'n10', word: 'Home', meaning: 'บ้าน', example: 'I want to go **home**.' },
          { id: 'n11', word: 'City', meaning: 'เมือง', example: 'Bangkok is a big **city**.' },
          { id: 'n12', word: 'Country', meaning: 'ประเทศ', example: 'Thailand is my **country**.' },
          { id: 'n13', word: 'Room', meaning: 'ห้อง', example: 'This **room** is clean.' }
        ]
      },
      {
        id: 'noun-things',
        title: 'Things (สิ่งของ)',
        words: [
          { id: 'n14', word: 'Book', meaning: 'หนังสือ', example: 'Read a **book**.' },
          { id: 'n15', word: 'Car', meaning: 'รถยนต์', example: 'My **car** is red.' },
          { id: 'n16', word: 'Table', meaning: 'โต๊ะ', example: 'Put it on the **table**.' },
          { id: 'n17', word: 'Water', meaning: 'น้ำ', example: 'Drink some **water**.' },
          { id: 'n18', word: 'Money', meaning: 'เงิน', example: 'I need some **money**.' },
          { id: 'n19', word: 'Phone', meaning: 'โทรศัพท์', example: 'Where is my **phone**?' }
        ]
      }
    ]
  },
  {
    id: 'pos-verb',
    title: '2. Verb (คำกริยา)',
    icon: '🏃',
    color: 'orange',
    subCategories: [
      {
        id: 'verb-action',
        title: 'Action Verbs (การกระทำ)',
        words: [
          { id: 'v1', word: 'Eat', meaning: 'กิน', example: 'I **eat** rice.' },
          { id: 'v2', word: 'Sleep', meaning: 'นอน', example: 'I **sleep** early.' },
          { id: 'v3', word: 'Walk', meaning: 'เดิน', example: 'She **walks** to school.' },
          { id: 'v4', word: 'Run', meaning: 'วิ่ง', example: 'He **runs** fast.' },
          { id: 'v5', word: 'Go', meaning: 'ไป', example: 'Let\'s **go** now.' },
          { id: 'v6', word: 'Come', meaning: 'มา', example: 'Please **come** here.' },
          { id: 'v7', word: 'Speak', meaning: 'พูด', example: 'Can you **speak** English?' },
          { id: 'v8', word: 'Listen', meaning: 'ฟัง', example: 'Please **listen** to me.' }
        ]
      },
      {
        id: 'verb-stative',
        title: 'Stative Verbs (ความรู้สึก/ความคิด)',
        words: [
          { id: 'v9', word: 'Love', meaning: 'รัก', example: 'I **love** you.' },
          { id: 'v10', word: 'Like', meaning: 'ชอบ', example: 'I **like** coffee.' },
          { id: 'v11', word: 'Know', meaning: 'รู้/รู้จัก', example: 'I **know** him.' },
          { id: 'v12', word: 'Think', meaning: 'คิด', example: 'I **think** so.' },
          { id: 'v13', word: 'Want', meaning: 'ต้องการ', example: 'I **want** water.' },
          { id: 'v14', word: 'Understand', meaning: 'เข้าใจ', example: 'Do you **understand**?' }
        ]
      },
      {
        id: 'verb-helping',
        title: 'Helping Verbs (กริยาช่วย)',
        words: [
          { id: 'v15', word: 'Be (is/am/are)', meaning: 'เป็น/อยู่/คือ', example: 'She **is** happy.' },
          { id: 'v16', word: 'Have', meaning: 'มี', example: 'I **have** a pen.' },
          { id: 'v17', word: 'Do', meaning: 'ทำ', example: 'I **do** my homework.' },
          { id: 'v18', word: 'Can', meaning: 'สามารถ', example: 'I **can** swim.' },
          { id: 'v19', word: 'Will', meaning: 'จะ', example: 'I **will** go tomorrow.' }
        ]
      }
    ]
  },
  {
    id: 'pos-adj',
    title: '3. Adjective (คำคุณศัพท์)',
    icon: '✨',
    color: 'pink',
    subCategories: [
      {
        id: 'adj-common',
        title: 'Common Adjectives (ทั่วไป)',
        words: [
          { id: 'adj1', word: 'Good', meaning: 'ดี', example: 'Very **good**!' },
          { id: 'adj2', word: 'Bad', meaning: 'แย่', example: 'It is a **bad** day.' },
          { id: 'adj3', word: 'Big', meaning: 'ใหญ่', example: 'A **big** house.' },
          { id: 'adj4', word: 'Small', meaning: 'เล็ก', example: 'A **small** cat.' },
          { id: 'adj5', word: 'New', meaning: 'ใหม่', example: 'A **new** car.' },
          { id: 'adj6', word: 'Old', meaning: 'เก่า/แก่', example: 'An **old** book.' }
        ]
      },
      {
        id: 'adj-feeling',
        title: 'Feelings (ความรู้สึก)',
        words: [
          { id: 'adj7', word: 'Happy', meaning: 'มีความสุข', example: 'I am **happy**.' },
          { id: 'adj8', word: 'Sad', meaning: 'เศร้า', example: 'Why are you **sad**?' },
          { id: 'adj9', word: 'Tired', meaning: 'เหนื่อย', example: 'I am very **tired**.' },
          { id: 'adj10', word: 'Hungry', meaning: 'หิว', example: 'Are you **hungry**?' },
          { id: 'adj11', word: 'Hot', meaning: 'ร้อน', example: 'It is **hot** today.' },
          { id: 'adj12', word: 'Cold', meaning: 'หนาว/เย็น', example: 'The water is **cold**.' }
        ]
      },
      {
        id: 'adj-colors',
        title: 'Colors (สี)',
        words: [
          { id: 'adj13', word: 'Red', meaning: 'สีแดง', example: 'A **red** apple.' },
          { id: 'adj14', word: 'Blue', meaning: 'สีฟ้า/น้ำเงิน', example: 'The sky is **blue**.' },
          { id: 'adj15', word: 'Green', meaning: 'สีเขียว', example: 'The grass is **green**.' },
          { id: 'adj16', word: 'Black', meaning: 'สีดำ', example: 'A **black** cat.' },
          { id: 'adj17', word: 'White', meaning: 'สีขาว', example: 'A **white** shirt.' }
        ]
      }
    ]
  },
  {
    id: 'pos-adv',
    title: '4. Adverb (กริยาวิเศษณ์)',
    icon: '⚡',
    color: 'teal',
    subCategories: [
      {
        id: 'adv-time',
        title: 'Time & Frequency (เวลาและความถี่)',
        words: [
          { id: 'adv1', word: 'Now', meaning: 'ตอนนี้', example: 'Do it **now**.' },
          { id: 'adv2', word: 'Today', meaning: 'วันนี้', example: 'How are you **today**?' },
          { id: 'adv3', word: 'Always', meaning: 'เสมอ', example: 'I **always** sleep early.' },
          { id: 'adv4', word: 'Never', meaning: 'ไม่เคย', example: 'I **never** eat spicy food.' },
          { id: 'adv5', word: 'Sometimes', meaning: 'บางครั้ง', example: 'I **sometimes** walk to work.' }
        ]
      },
      {
        id: 'adv-manner',
        title: 'Manner (อาการ)',
        words: [
          { id: 'adv6', word: 'Well', meaning: 'ดี', example: 'You did **well**.' },
          { id: 'adv7', word: 'Fast', meaning: 'เร็ว', example: 'He runs **fast**.' },
          { id: 'adv8', word: 'Slowly', meaning: 'อย่างช้าๆ', example: 'Please speak **slowly**.' },
          { id: 'adv9', word: 'Really', meaning: 'จริงๆ/มาก', example: 'I **really** like it.' },
          { id: 'adv10', word: 'Very', meaning: 'มาก', example: 'Thank you **very** much.' }
        ]
      }
    ]
  },
  {
    id: 'pos-pronoun',
    title: '5. Pronoun (คำสรรพนาม)',
    icon: '👤',
    color: 'indigo',
    subCategories: [
      {
        id: 'pronoun-subject',
        title: 'Subject Pronouns (ประธาน)',
        words: [
          { id: 'pro1', word: 'I', meaning: 'ฉัน', example: '**I** am happy.' },
          { id: 'pro2', word: 'You', meaning: 'คุณ', example: '**You** are nice.' },
          { id: 'pro3', word: 'He', meaning: 'เขา (ผู้ชาย)', example: '**He** is my brother.' },
          { id: 'pro4', word: 'She', meaning: 'เธอ (ผู้หญิง)', example: '**She** is a doctor.' },
          { id: 'pro5', word: 'It', meaning: 'มัน', example: '**It** is a cat.' },
          { id: 'pro6', word: 'We', meaning: 'พวกเรา', example: '**We** are friends.' },
          { id: 'pro7', word: 'They', meaning: 'พวกเขา', example: '**They** are coming.' }
        ]
      },
      {
        id: 'pronoun-object',
        title: 'Object Pronouns (กรรม)',
        words: [
          { id: 'pro8', word: 'Me', meaning: 'ฉัน (กรรม)', example: 'Give it to **me**.' },
          { id: 'pro9', word: 'Him', meaning: 'เขา (กรรม)', example: 'I saw **him**.' },
          { id: 'pro10', word: 'Her', meaning: 'เธอ (กรรม)', example: 'I like **her**.' },
          { id: 'pro11', word: 'Them', meaning: 'พวกเขา (กรรม)', example: 'Talk to **them**.' }
        ]
      }
    ]
  },
  {
    id: 'pos-prep',
    title: '6. Preposition (คำบุพบท)',
    icon: '📍',
    color: 'green',
    subCategories: [
      {
        id: 'prep-place',
        title: 'Place (สถานที่)',
        words: [
          { id: 'prep1', word: 'In', meaning: 'ใน', example: 'It is **in** the box.' },
          { id: 'prep2', word: 'On', meaning: 'บน', example: 'It is **on** the table.' },
          { id: 'prep3', word: 'At', meaning: 'ที่', example: 'See you **at** school.' },
          { id: 'prep4', word: 'To', meaning: 'ไปยัง/ถึง', example: 'Go **to** the door.' },
          { id: 'prep5', word: 'From', meaning: 'จาก', example: 'I come **from** Thailand.' }
        ]
      },
      {
        id: 'prep-other',
        title: 'Other (อื่นๆ)',
        words: [
          { id: 'prep6', word: 'With', meaning: 'กับ/ด้วย', example: 'Come **with** me.' },
          { id: 'prep7', word: 'For', meaning: 'สำหรับ', example: 'This is **for** you.' },
          { id: 'prep8', word: 'Of', meaning: 'ของ', example: 'A cup **of** coffee.' },
          { id: 'prep9', word: 'About', meaning: 'เกี่ยวกับ', example: 'Tell me **about** it.' }
        ]
      }
    ]
  },
  {
    id: 'pos-conj',
    title: '7. Conjunction (คำสันธาน)',
    icon: '🔗',
    color: 'purple',
    subCategories: [
      {
        id: 'conj-basic',
        title: 'Basic Conjunctions',
        words: [
          { id: 'conj1', word: 'And', meaning: 'และ', example: 'You **and** me.' },
          { id: 'conj2', word: 'But', meaning: 'แต่', example: 'I like tea, **but** I don\'t like coffee.' },
          { id: 'conj3', word: 'Or', meaning: 'หรือ', example: 'Tea **or** coffee?' },
          { id: 'conj4', word: 'So', meaning: 'ดังนั้น', example: 'It rained, **so** I stayed home.' },
          { id: 'conj5', word: 'Because', meaning: 'เพราะว่า', example: 'I smile **because** I am happy.' },
          { id: 'conj6', word: 'If', meaning: 'ถ้า', example: '**If** you go, I go.' }
        ]
      }
    ]
  },
  {
    id: 'pos-interj',
    title: '8. Interjection (คำอุทาน)',
    icon: '❗',
    color: 'red',
    subCategories: [
      {
        id: 'interj-common',
        title: 'Common Interjections',
        words: [
          { id: 'int1', word: 'Oh', meaning: 'อ้อ/โอ้', example: '**Oh**, I see.' },
          { id: 'int2', word: 'Wow', meaning: 'ว้าว (ประหลาดใจ)', example: '**Wow**! That is beautiful.' },
          { id: 'int3', word: 'Ouch', meaning: 'โอ๊ย (เจ็บ)', example: '**Ouch**! It hurts.' },
          { id: 'int4', word: 'Oops', meaning: 'อุ๊ย (ทำผิดพลาด)', example: '**Oops**, sorry.' },
          { id: 'int5', word: 'Hey', meaning: 'เฮ้ (ทักทาย/เรียก)', example: '**Hey**, look at this.' }
        ]
      }
    ]
  }
];