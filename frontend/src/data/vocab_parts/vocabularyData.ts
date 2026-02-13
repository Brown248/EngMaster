// frontend/src/data/vocab_parts/vocabularyData.ts
import { MainCategory } from '../../types';

export const vocabularyCategories: MainCategory[] = [
  {
    id: 'pos-noun',
    title: '1. Noun (คำนาม)',
    icon: '📦',
    color: 'blue',
    subCategories: [
      {
        id: 'noun-common',
        title: '1. Common Nouns (สามานยนาม)',
        words: [
          { id: 'nc1', word: 'Strategy', meaning: 'กลยุทธ์', example: 'We need to develop a new marketing **strategy** for the product.' },
          { id: 'nc2', word: 'Environment', meaning: 'สิ่งแวดล้อม', example: 'We must protect the **environment** for future generations.' },
          { id: 'nc3', word: 'Industry', meaning: 'อุตสาหกรรม', example: 'The technology **industry** is growing rapidly every year.' },
          { id: 'nc4', word: 'Candidate', meaning: 'ผู้สมัคร', example: 'The best **candidate** was chosen for the job.' },
          { id: 'nc5', word: 'Device', meaning: 'อุปกรณ์', example: 'Electronic **devices** like phones are essential today.' }
        ]
      },
      {
        id: 'noun-proper',
        title: '2. Proper Nouns (วิสามานยนาม)',
        words: [
          { id: 'np1', word: 'Amazon', meaning: 'บริษัทอเมซอน/แม่น้ำอเมซอน', example: '**Amazon** is one of the largest companies in the world.' },
          { id: 'np2', word: 'Switzerland', meaning: 'ประเทศสวิตเซอร์แลนด์', example: 'He goes skiing in **Switzerland** every winter.' },
          { id: 'np3', word: 'Monday', meaning: 'วันจันทร์', example: 'Most people start work on **Monday** morning.' },
          { id: 'np4', word: 'Jupiter', meaning: 'ดาวพฤหัสบดี', example: '**Jupiter** is the largest planet in our solar system.' },
          { id: 'np5', word: 'Shakespeare', meaning: 'เชกสเปียร์', example: '**Shakespeare** is famous for writing Romeo and Juliet.' }
        ]
      },
      {
        id: 'noun-concrete',
        title: '3. Concrete Nouns (นามธรรมสัมผัสได้)',
        words: [
          { id: 'ncon1', word: 'Fragrance', meaning: 'กลิ่นหอม', example: 'The **fragrance** of fresh flowers filled the room.' },
          { id: 'ncon2', word: 'Texture', meaning: 'พื้นผิว/เนื้อสัมผัส', example: 'Silk has a very smooth and soft **texture**.' },
          { id: 'ncon3', word: 'Vehicle', meaning: 'ยานพาหนะ', example: 'Please park your **vehicle** in the designated area.' },
          { id: 'ncon4', word: 'Document', meaning: 'เอกสาร', example: 'Please sign this **document** before you leave.' },
          { id: 'ncon5', word: 'Ingredient', meaning: 'ส่วนผสม', example: 'Fresh herbs are a key **ingredient** in this dish.' }
        ]
      },
      {
        id: 'noun-abstract',
        title: '4. Abstract Nouns (นามธรรม/แนวคิด)',
        words: [
          { id: 'nabs1', word: 'Innovation', meaning: 'นวัตกรรม', example: '**Innovation** drives the success of modern companies.' },
          { id: 'nabs2', word: 'Perspective', meaning: 'มุมมอง', example: 'Traveling gives you a new **perspective** on life.' },
          { id: 'nabs3', word: 'Confidence', meaning: 'ความมั่นใจ', example: 'She spoke with great **confidence** during the presentation.' },
          { id: 'nabs4', word: 'Integrity', meaning: 'ความซื่อสัตย์', example: 'A leader must have **integrity** and honesty.' },
          { id: 'nabs5', word: 'Potential', meaning: 'ศักยภาพ', example: 'You have the **potential** to achieve great things.' }
        ]
      },
      {
        id: 'noun-collective',
        title: '5. Collective Nouns (สมุหนาม)',
        words: [
          { id: 'ncol1', word: 'Committee', meaning: 'คณะกรรมการ', example: 'The **committee** meets every Tuesday to discuss issues.' },
          { id: 'ncol2', word: 'Orchestra', meaning: 'วงออร์เคสตรา', example: 'The **orchestra** played a beautiful symphony.' },
          { id: 'ncol3', word: 'Staff', meaning: 'พนักงาน/คณะทำงาน', example: 'The hotel **staff** is very friendly and helpful.' },
          { id: 'ncol4', word: 'Audience', meaning: 'ผู้ชม', example: 'The **audience** applauded loudly after the performance.' },
          { id: 'ncol5', word: 'Crowd', meaning: 'ฝูงชน', example: 'A large **crowd** gathered to see the concert.' }
        ]
      },
      {
        id: 'noun-compound',
        title: '6. Compound Nouns (นามประสม)',
        words: [
          { id: 'ncom1', word: 'Masterpiece', meaning: 'ผลงานชิ้นเอก', example: 'The painting is considered a **masterpiece** of art.' },
          { id: 'ncom2', word: 'Breakthrough', meaning: 'การค้นพบครั้งยิ่งใหญ่', example: 'Scientists have made a major **breakthrough** in medicine.' },
          { id: 'ncom3', word: 'Headquarters', meaning: 'สำนักงานใหญ่', example: 'The company **headquarters** is located in New York.' },
          { id: 'ncom4', word: 'Trademark', meaning: 'เครื่องหมายการค้า', example: 'The logo is a registered **trademark** of the brand.' },
          { id: 'ncom5', word: 'Framework', meaning: 'กรอบความคิด/โครงสร้าง', example: 'This plan provides a **framework** for future growth.' }
        ]
      },
      {
        id: 'noun-countable',
        title: '7. Countable Nouns (นามนับได้)',
        words: [
          { id: 'ncnt1', word: 'Opportunity', meaning: 'โอกาส', example: 'This job is a great **opportunity** for your career.' },
          { id: 'ncnt2', word: 'Suggestion', meaning: 'ข้อเสนอแนะ', example: 'Do you have any **suggestions** for improvement?' },
          { id: 'ncnt3', word: 'Challenge', meaning: 'ความท้าทาย', example: 'He enjoys facing a difficult **challenge**.' },
          { id: 'ncnt4', word: 'Customer', meaning: 'ลูกค้า', example: 'We must provide excellent service to every **customer**.' },
          { id: 'ncnt5', word: 'Decision', meaning: 'การตัดสินใจ', example: 'Making the right **decision** can be hard.' }
        ]
      },
      {
        id: 'noun-uncountable',
        title: '8. Uncountable Nouns (นามนับไม่ได้)',
        words: [
          { id: 'nunc1', word: 'Knowledge', meaning: 'ความรู้', example: '**Knowledge** is the key to success.' },
          { id: 'nunc2', word: 'Feedback', meaning: 'ผลตอบรับ', example: 'We appreciate your positive **feedback**.' },
          { id: 'nunc3', word: 'Access', meaning: 'การเข้าถึง', example: 'Do you have internet **access** here?' },
          { id: 'nunc4', word: 'Progress', meaning: 'ความก้าวหน้า', example: 'We are making good **progress** on the project.' },
          { id: 'nunc5', word: 'Research', meaning: 'การวิจัย', example: 'Scientific **research** takes a lot of time and money.' }
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
        id: 'verb-irregular',
        title: 'Irregular Verbs (กริยา 3 ช่อง)',
        words: [
          { 
            id: 'v1', 
            word: 'Begin', 
            meaning: 'เริ่มต้น (Begin - Began - Begun)', 
            example: 'Present: The meeting **begins** at 9 AM sharply.\nPast: It **began** to rain heavily an hour ago.\nPerfect: The show has already **begun**.' 
          },
          { 
            id: 'v2', 
            word: 'Choose', 
            meaning: 'เลือก (Choose - Chose - Chosen)', 
            example: 'Present: I usually **choose** healthy food for lunch.\nPast: She **chose** the red dress for the party.\nPerfect: We have **chosen** the best candidate for the job.' 
          },
          { 
            id: 'v3', 
            word: 'Drive', 
            meaning: 'ขับรถ (Drive - Drove - Driven)', 
            example: 'Present: He **drives** carefully in the city.\nPast: We **drove** all the way to the beach yesterday.\nPerfect: I have never **driven** a truck before.' 
          },
          { 
            id: 'v4', 
            word: 'Write', 
            meaning: 'เขียน (Write - Wrote - Written)', 
            example: 'Present: She **writes** in her journal every night.\nPast: JK Rowling **wrote** the Harry Potter series.\nPerfect: I have **written** three reports today.' 
          },
          { 
            id: 'v5', 
            word: 'Speak', 
            meaning: 'พูด (Speak - Spoke - Spoken)', 
            example: 'Present: They **speak** three languages fluently.\nPast: The CEO **spoke** to the employees last week.\nPerfect: I have never **spoken** to him personally.' 
          },
          { 
            id: 'v6', 
            word: 'Take', 
            meaning: 'นำไป/ใช้เวลา (Take - Took - Taken)', 
            example: 'Present: It **takes** about 30 minutes to get there.\nPast: He **took** a taxi to the airport this morning.\nPerfect: Someone has **taken** my umbrella.' 
          },
          { 
            id: 'v7', 
            word: 'Fly', 
            meaning: 'บิน (Fly - Flew - Flown)', 
            example: 'Present: Birds **fly** south during the winter.\nPast: We **flew** to Japan last holiday.\nPerfect: She has **flown** in a helicopter twice.' 
          },
          { 
            id: 'v8', 
            word: 'Grow', 
            meaning: 'เติบโต (Grow - Grew - Grown)', 
            example: 'Present: This plant **grows** very fast.\nPast: He **grew** up in a small town.\nPerfect: The company has **grown** significantly this year.' 
          }
        ]
      },
      {
        id: 'verb-stative',
        title: 'Stative Verbs (ความรู้สึก - ผันปกติ)',
        words: [
          { 
            id: 'v9', 
            word: 'Believe', 
            meaning: 'เชื่อ (Believe - Believed - Believed)', 
            example: 'Present: I **believe** that honesty is important.\nPast: People once **believed** the earth was flat.\nPerfect: He has always **believed** in his dreams.' 
          },
          { 
            id: 'v10', 
            word: 'Understand', 
            meaning: 'เข้าใจ (Understand - Understood - Understood)', 
            example: 'Present: Do you **understand** the instructions?\nPast: I **understood** everything he explained.\nPerfect: I have never **understood** why she left.' 
          },
          { 
            id: 'v11', 
            word: 'Prefer', 
            meaning: 'ชอบมากกว่า (Prefer - Preferred - Preferred)', 
            example: 'Present: I **prefer** tea over coffee.\nPast: As a child, I **preferred** playing outside.\nPerfect: She has always **preferred** quiet places.' 
          },
           { 
            id: 'v12', 
            word: 'Belong', 
            meaning: 'เป็นของ (Belong - Belonged - Belonged)', 
            example: 'Present: This book **belongs** to me.\nPast: The house **belonged** to my grandfather.\nPerfect: That painting has **belonged** to the museum for years.' 
          }
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
        title: 'Descriptive Adjectives',
        words: [
          { id: 'adj1', word: 'Efficient', meaning: 'มีประสิทธิภาพ', example: 'This new software is highly **efficient** and fast.' },
          { id: 'adj2', word: 'Sustainable', meaning: 'ยั่งยืน', example: 'We focus on **sustainable** energy sources like solar power.' },
          { id: 'adj3', word: 'Complex', meaning: 'ซับซ้อน', example: 'The human brain is a very **complex** organ.' },
          { id: 'adj4', word: 'Essential', meaning: 'จำเป็นอย่างยิ่ง', example: 'Water is **essential** for all living things.' },
          { id: 'adj5', word: 'Innovative', meaning: 'ที่เป็นนวัตกรรมใหม่', example: 'They came up with an **innovative** solution to the problem.' }
        ]
      },
      {
        id: 'adj-feeling',
        title: 'Feelings & Emotions',
        words: [
          { id: 'adj6', word: 'Anxious', meaning: 'วิตกกังวล', example: 'She felt **anxious** before the job interview.' },
          { id: 'adj7', word: 'Relieved', meaning: 'โล่งอก', example: 'I was **relieved** to hear the good news.' },
          { id: 'adj8', word: 'Grateful', meaning: 'ซาบซึ้งใจ/ขอบคุณ', example: 'I am **grateful** for your help and support.' },
          { id: 'adj9', word: 'Optimistic', meaning: 'มองโลกในแง่ดี', example: 'He remains **optimistic** about the future.' },
          { id: 'adj10', word: 'Frustrated', meaning: 'หงุดหงิด/ท้อแท้', example: 'She became **frustrated** with the slow internet.' }
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
        id: 'adv-manner',
        title: 'Adverbs of Manner',
        words: [
          { id: 'adv1', word: 'Fluently', meaning: 'อย่างคล่องแคล่ว', example: 'She speaks three languages **fluently**.' },
          { id: 'adv2', word: 'Accurately', meaning: 'อย่างแม่นยำ', example: 'The data was analyzed **accurately**.' },
          { id: 'adv3', word: 'Eventually', meaning: 'ในท้ายที่สุด', example: 'He worked hard and **eventually** succeeded.' },
          { id: 'adv4', word: 'Frequently', meaning: 'บ่อยครั้ง', example: 'They **frequently** travel to Europe for business.' },
          { id: 'adv5', word: 'Suddenly', meaning: 'ทันทีทันใด', example: '**Suddenly**, the lights went out during the storm.' }
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
        id: 'pronoun-types',
        title: 'Various Pronouns',
        words: [
          { id: 'pro1', word: 'Ourselves', meaning: 'พวกเราเอง (Reflexive)', example: 'We built this entire house **ourselves**.' },
          { id: 'pro2', word: 'Neither', meaning: 'ไม่ทั้งสอง (Negative)', example: '**Neither** of the answers is correct.' },
          { id: 'pro3', word: 'Someone', meaning: 'ใครบางคน (Indefinite)', example: '**Someone** left their phone on the table.' },
          { id: 'pro4', word: 'Which', meaning: 'อันไหน/สิ่งไหน (Relative)', example: 'This is the car **which** I bought last year.' },
          { id: 'pro5', word: 'Mine', meaning: 'ของฉัน (Possessive)', example: 'That book is not yours, it is **mine**.' }
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
        id: 'prep-common',
        title: 'Advanced Prepositions',
        words: [
          { id: 'prep1', word: 'Despite', meaning: 'ทั้งๆ ที่', example: 'He smiled **despite** the pain.' },
          { id: 'prep2', word: 'Throughout', meaning: 'โดยตลอด/ทั่วทั้ง', example: 'It rained **throughout** the night.' },
          { id: 'prep3', word: 'Regarding', meaning: 'เกี่ยวกับ', example: 'I am writing **regarding** your recent application.' },
          { id: 'prep4', word: 'Beyond', meaning: 'เหนือกว่า/เกินกว่า', example: 'The view was beautiful **beyond** description.' },
          { id: 'prep5', word: 'Within', meaning: 'ภายใน', example: 'Please finish the task **within** two hours.' }
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
        id: 'conj-complex',
        title: 'Complex Conjunctions',
        words: [
          { id: 'conj1', word: 'Although', meaning: 'ถึงแม้ว่า', example: '**Although** it was raining, we went for a walk.' },
          { id: 'conj2', word: 'Whereas', meaning: 'ในขณะที่ (เปรียบเทียบ)', example: 'He loves sports, **whereas** she prefers reading.' },
          { id: 'conj3', word: 'Unless', meaning: 'เว้นแต่ว่า', example: 'You will fail **unless** you study harder.' },
          { id: 'conj4', word: 'Furthermore', meaning: 'ยิ่งไปกว่านั้น', example: 'The house is beautiful. **Furthermore**, it is in a great location.' },
          { id: 'conj5', word: 'Therefore', meaning: 'ดังนั้น', example: 'She studied hard; **therefore**, she passed the exam.' }
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
          { id: 'int1', word: 'Alas', meaning: 'อนิจจา (เศร้า/เสียดาย)', example: '**Alas**, we arrived too late to save it.' },
          { id: 'int2', word: 'Bravo', meaning: 'ไชโย/ทำได้ดีมาก', example: '**Bravo**! That was a magnificent performance.' },
          { id: 'int3', word: 'Ouch', meaning: 'โอ๊ย (เจ็บ)', example: '**Ouch**! I just stubbed my toe.' },
          { id: 'int4', word: 'Whoops', meaning: 'อุ๊ย (ทำผิดพลาด)', example: '**Whoops**, I dropped the glass.' },
          { id: 'int5', word: 'Wow', meaning: 'ว้าว (ประทับใจ)', example: '**Wow**, this view is incredible!' }
        ]
      }
    ]
  }
];