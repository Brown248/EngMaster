import { GrammarTopic } from '../types';

export const grammarTopics: GrammarTopic[] = [
  {
    id: 'parts-of-speech',
    title: '1. Parts of Speech (ชนิดของคำ)',
    icon: '🧩',
    color: 'indigo',
    details: {
      title: 'ชนิดของคำ (Parts of Speech)',
      description: 'พื้นฐานสำคัญของไวยากรณ์ แบ่งออกเป็น 9 ประเภทหลัก',
      subtopics: [
        {
          name: '1.1 Noun (คำนาม)',
          usage: 'ใช้เรียกชื่อคน สัตว์ สิ่งของ สถานที่ หรือความคิด แบ่งเป็น 8 ประเภทหลัก',
          examples: [
            '**Common Noun (นามทั่วไป):** dog, city, car',
            '**Proper Noun (นามเฉพาะ):** Bangkok, John, Toyota',
            '**Concrete Noun (นามรูปธรรม):** table, water, noise (สัมผัสได้)',
            '**Abstract Noun (นามธรรม):** love, happiness, idea (จับต้องไม่ได้)',
            '**Countable Noun (นับได้):** books, pens, apples',
            '**Uncountable Noun (นับไม่ได้):** water, rice, information',
            '**Collective Noun (สมุหนาม):** team, family, group',
            '**Compound Noun (นามประสม):** toothpaste, bedroom, swimming pool',
            'Example: **The team** won the match.'
          ]
        },
        {
          name: '1.2 Pronoun (คำสรรพนาม)',
          usage: 'ใช้แทนคำนามเพื่อไม่ให้พูดซ้ำ แบ่งเป็น 9 ประเภท',
          examples: [
            '**Subject:** I, he, she, we, they (เป็นประธาน)',
            '**Object:** me, him, her, us, them (เป็นกรรม)',
            '**Possessive:** my/mine, your/yours (แสดงเจ้าของ)',
            '**Reflexive:** myself, yourself (สะท้อนเข้าตัว)',
            '**Demonstrative:** this, that, these, those (ชี้เฉพาะ)',
            '**Relative:** who, which, that (เชื่อมประโยค)',
            '**Interrogative:** who, what, where (คำถาม)',
            '**Indefinite:** someone, anyone, nothing (ไม่เจาะจง)',
            '**Reciprocal:** each other, one another (ซึ่งกันและกัน)',
            'Example: She taught **herself** English.'
          ]
        },
        {
          name: '1.3 Verb (คำกริยา)',
          usage: 'แสดงการกระทำหรือสถานะ แบ่งตามหน้าที่และประเภท',
          examples: [
            '**Action Verb:** run, eat, play (แสดงการกระทำ)',
            '**Stative Verb:** know, love, believe (แสดงความรู้สึก/สถานะ)',
            '**Linking Verb:** be, seem, look (เชื่อมประธานกับคุณสมบัติ)',
            '**Transitive:** eat (needs object) - I eat **an apple**.',
            '**Intransitive:** sleep, smile (no object needed)',
            '**Auxiliary (กริยาช่วย):** do, have, be (ช่วยสร้าง Tense/ประโยค)',
            '**Modal Verb:** can, must, should (บอกความสามารถ/หน้าที่)',
            'Example: She **has been studying** all night.'
          ]
        },
        {
          name: '1.4 Adjective (คำคุณศัพท์)',
          usage: 'ขยายคำนามหรือสรรพนาม บอกลักษณะ ปริมาณ หรือลำดับ',
          examples: [
            '**Descriptive:** big, red, beautiful',
            '**Quantitative:** many, few, three',
            '**Demonstrative:** this, that',
            '**Possessive:** my, your, his',
            '**Interrogative:** which, whose',
            '**Comparative:** bigger, more expensive',
            '**Superlative:** biggest, most expensive',
            '**Order of adjectives:** Opinion -> Size -> Age -> Shape -> Color -> Origin -> Material',
            'Example: a **beautiful small old wooden** house'
          ]
        },
        {
          name: '1.5 Adverb (คำกริยาวิเศษณ์)',
          usage: 'ขยาย Verb, Adjective หรือ Adverb ด้วยกันเอง เพื่อบอกรายละเอียดเพิ่มเติม',
          examples: [
            '**Manner (อย่างไร):** quickly, happily, well',
            '**Time (เมื่อไหร่):** now, yesterday, soon',
            '**Frequency (บ่อยแค่ไหน):** often, always, never',
            '**Place (ที่ไหน):** here, there, everywhere',
            '**Degree (ระดับ):** very, too, quite, extremely',
            'Example: He speaks **very clearly**.'
          ]
        },
        {
          name: '1.6 Preposition (คำบุพบท)',
          usage: 'เชื่อมคำนามกับส่วนอื่นของประโยค เพื่อบอกความสัมพันธ์',
          examples: [
            '**Place:** in, on, at, under, behind',
            '**Time:** before, after, during, since',
            '**Movement:** to, into, towards, through',
            '**Cause/Other:** because of, by, with',
            'Example: The keys are **under** the table.'
          ]
        },
        {
          name: '1.7 Conjunction (คำสันธาน)',
          usage: 'เชื่อมคำ วลี หรือประโยคเข้าด้วยกัน',
          examples: [
            '**Coordinating (FANBOYS):** for, and, nor, but, or, yet, so',
            '**Subordinating:** because, although, if, when (เชื่อมประโยคย่อย)',
            '**Correlative:** both...and, either...or, neither...nor',
            'Example: I stayed home **because** it rained.'
          ]
        },
        {
          name: '1.8 Determiner (คำนำหน้านาม)',
          usage: 'วางหน้าคำนามเพื่อกำหนดขอบเขตหรือระบุความชัดเจน',
          examples: [
            '**Articles:** a, an, the',
            '**Demonstratives:** this, that, these, those',
            '**Quantifiers:** some, any, many, much, a lot of',
            '**Possessives:** my, your, his, her',
            'Example: I need **some** help.'
          ]
        },
        {
          name: '1.9 Interjection (คำอุทาน)',
          usage: 'คำที่แสดงอารมณ์ความรู้สึก มักมีเครื่องหมาย !',
          examples: [
            '**Shock/Surprise:** Wow!, Oh!',
            '**Pain:** Ouch!',
            '**Greeting:** Hey!, Hi!',
            '**Hesitation:** Umm, Well...',
            'Example: **Wow!** Amazing!'
          ]
        }
      ]
    }
  },
  {
    id: 'tenses',
    title: '2. 12 Tenses (ฉบับสมบูรณ์)',
    icon: '⏳',
    color: 'orange',
    details: {
      title: 'เจาะลึก 12 Tenses',
      description: 'คู่มือ 12 Tenses ฉบับละเอียด พร้อมโครงสร้าง ตัวอย่าง 5 ประโยค และแบบทดสอบ',
      subtopics: [
        // --- Present Tenses ---
        {
          name: '2.1 Present Simple Tense',
          structure: 'Subject + V1 (s/es)',
          usage: 'ใช้กับความจริง (Fact), กิจวัตร (Habit), ตารางเวลา (Schedule) และสภาพทั่วไป',
          examples: [
            'The sun **rises** in the east. (ความจริงตามธรรมชาติ)',
            'She **drinks** coffee every morning. (กิจวัตร)',
            'The train **leaves** at 9 PM. (ตารางเวลา)',
            'Water **boils** at 100 degrees Celsius. (วิทยาศาสตร์)',
            'He **works** in a bank. (สภาพทั่วไป)'
          ]
        },
        {
          name: '2.2 Present Continuous Tense',
          structure: 'Subject + is/am/are + V-ing',
          usage: 'เหตุการณ์ที่กำลังเกิด (Now), อนาคตอันใกล้ (Future Plan), หรือเหตุการณ์ชั่วคราว',
          examples: [
            'I **am eating** lunch right now. (กำลังทำ)',
            'Look! It **is raining** outside. (เหตุการณ์ตรงหน้า)',
            'She **is meeting** her boss tomorrow. (นัดหมาย)',
            'They **are building** a new house this month. (ช่วงนี้กำลังทำ)',
            'You **are always coming** late! (บ่นเรื่องที่เกิดบ่อยๆ)'
          ]
        },
        {
          name: '2.3 Present Perfect Tense',
          structure: 'Subject + has/have + V3',
          usage: 'เล่าประสบการณ์, สิ่งที่เพิ่งจบ, หรือเริ่มในอดีตส่งผลถึงปัจจุบัน',
          examples: [
            'I **have visited** Japan twice. (ประสบการณ์)',
            'She **has lost** her keys. (ผลคือตอนนี้เข้าห้องไม่ได้)',
            'We **have known** him for 10 years. (รู้จักตั้งแต่อดีตถึงปัจจุบัน)',
            'He **has just finished** his work. (เพิ่งจบหมาดๆ)',
            '**Have** you **ever eaten** sushi? (เคยไหม?)'
          ]
        },
        {
          name: '2.4 Present Perfect Continuous Tense',
          structure: 'Subject + has/have + been + V-ing',
          usage: 'เน้นความ "ต่อเนื่อง" ของการกระทำตั้งแต่อดีตจนถึงปัจจุบัน',
          examples: [
            'I **have been waiting** for 2 hours. (รอมาตลอดและยังรออยู่)',
            'It **has been raining** all day. (ตกไม่หยุด)',
            'She **has been teaching** here since 2010. (สอนต่อเนื่อง)',
            'My hands are dirty because I **have been fixing** the car.',
            'How long **have** you **been learning** English?'
          ]
        },
        // --- Past Tenses ---
        {
          name: '2.5 Past Simple Tense',
          structure: 'Subject + V2',
          usage: 'จบแล้วในอดีต มีเวลาบอกชัดเจน (yesterday, last year, ago)',
          examples: [
            'I **went** to the cinema yesterday.',
            'He **bought** a new car last week.',
            'They **did not (didn\'t) come** to the party.',
            'Einstein **was** a great scientist.',
            'When **did** you **arrive**?'
          ]
        },
        {
          name: '2.6 Past Continuous Tense',
          structure: 'Subject + was/were + V-ing',
          usage: 'กำลังทำในอดีต ณ เวลาหนึ่ง หรือถูกขัดจังหวะด้วย Past Simple',
          examples: [
            'At 8 PM last night, I **was watching** TV.',
            'I **was sleeping** when the phone rang.',
            'While she **was cooking**, he **was reading**.',
            'It **was raining** heavily all night.',
            'What **were** you **doing** at this time yesterday?'
          ]
        },
        {
          name: '2.7 Past Perfect Tense',
          structure: 'Subject + had + V3',
          usage: 'เกิดก่อนอีกเหตุการณ์หนึ่งในอดีต (อดีตซ้อนอดีต)',
          examples: [
            'When I arrived, the train **had left**. (รถไฟออกไปก่อน)',
            'She was hungry because she **had not eaten** anything.',
            'He told me that he **had finished** the job.',
            'I realized I **had forgotten** my wallet.',
            'By the time police came, the thief **had escaped**.'
          ]
        },
        {
          name: '2.8 Past Perfect Continuous Tense',
          structure: 'Subject + had + been + V-ing',
          usage: 'เน้นช่วงเวลาที่ทำต่อเนื่องในอดีต ก่อนจะมีอีกเหตุการณ์เกิด',
          examples: [
            'I **had been waiting** for 30 mins when the bus came.',
            'Her eyes were red because she **had been crying**.',
            'They **had been playing** football for 2 hours before it rained.',
            'He **had been working** there for 10 years before he quit.',
            'The road was wet because it **had been raining**.'
          ]
        },
        // --- Future Tenses ---
        {
          name: '2.9 Future Simple Tense',
          structure: 'Subject + will + V1',
          usage: 'คาดเดา, สัญญา, ตัดสินใจเดี๋ยวนั้น, หรือข้อเท็จจริงในอนาคต',
          examples: [
            'I think it **will rain** tomorrow.',
            'I promise I **will help** you.',
            'Wait! I **will open** the door for you.',
            'She **will be** 20 next month.',
            '**Will** you **marry** me?'
          ]
        },
        {
          name: '2.10 Future Continuous Tense',
          structure: 'Subject + will + be + V-ing',
          usage: 'จะกำลังทำอยู่ในเวลาที่ระบุในอนาคต',
          examples: [
            'At 9 AM tomorrow, I **will be taking** an exam.',
            'Don\'t call me at 8. I **will be having** dinner.',
            'This time next week, we **will be flying** to Japan.',
            '**Will** you **be using** the car tomorrow?',
            'She **won\'t be working** next Monday.'
          ]
        },
        {
          name: '2.11 Future Perfect Tense',
          structure: 'Subject + will + have + V3',
          usage: 'จะเสร็จสมบูรณ์ก่อนเวลาที่กำหนดในอนาคต (By...)',
          examples: [
            'By next year, I **will have finished** my degree.',
            'The train **will have left** by the time we arrive.',
            'I **will have saved** enough money by December.',
            'She **will have written** the report by 5 PM.',
            '**Will** you **have completed** it by tomorrow?'
          ]
        },
        {
          name: '2.12 Future Perfect Continuous Tense',
          structure: 'Subject + will + have + been + V-ing',
          usage: 'เน้นความต่อเนื่องที่จะดำเนินไปจนถึงจุดหนึ่งในอนาคต',
          examples: [
            'By 2025, I **will have been living** here for 10 years.',
            'Next month, they **will have been married** for 20 years.',
            'By 6 PM, I **will have been driving** for 5 hours.',
            'She **will have been working** all day by the time you see her.',
            'How long **will** you **have been studying** English?'
          ]
        }
      ]
    }
  },
  {
    id: 'voice',
    title: '3. Voice',
    icon: '🗣️',
    color: 'blue',
    details: {
      title: 'Active & Passive Voice',
      subtopics: [
        {
          name: 'Active Voice',
          usage: 'ประธานเป็นผู้กระทำ',
          examples: ['I eat rice.', 'She writes a letter.']
        },
        {
          name: 'Passive Voice',
          structure: 'Be + V3',
          usage: 'ประธานเป็นผู้ถูกกระทำ',
          examples: ['Rice is eaten by me.', 'A letter is written by her.']
        }
      ]
    }
  }
];