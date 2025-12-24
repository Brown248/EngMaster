import { GrammarTopic } from '../types';

export const grammarTopics: GrammarTopic[] = [
  {
    id: 'parts-of-speech',
    title: '1. Parts of Speech (ชนิดของคำ)',
    icon: '🧩',
    color: 'indigo',
    details: {
      title: 'ชนิดของคำ (Parts of Speech)',
      description: 'พื้นฐานสำคัญของไวยากรณ์ภาษาอังกฤษ แบ่งออกเป็น 9 ประเภทหลัก การเข้าใจหน้าที่ของคำแต่ละชนิดจะช่วยให้สร้างประโยคได้ถูกต้องและสละสลวย',
      subtopics: [
        {
          name: '1.1 Noun (คำนาม)',
          explanation: 'คำที่ใช้เรียกชื่อคน สัตว์ สิ่งของ สถานที่ หรือสิ่งที่เป็นนามธรรม (ความคิด ความรู้สึก)',
          usage: 'แบ่งเป็น 8 ประเภทหลัก: Common (ทั่วไป), Proper (เฉพาะเจาะจง), Concrete (รูปธรรม), Abstract (นามธรรม), Countable (นับได้), Uncountable (นับไม่ได้), Collective (สมุหนาม), Compound (นามประสม)',
          examples: [
            'The **cat** is sleeping on the **sofa**. (Common & Concrete Noun)',
            '**Thailand** is famous for its spicy **food**. (Proper Noun)',
            '**Honesty** is the best **policy**. (Abstract Noun)',
            'Our **team** won the **championship**. (Collective Noun)',
            'Can I have some **sugar** for my **coffee**? (Uncountable Noun)'
          ]
        },
        {
          name: '1.2 Pronoun (คำสรรพนาม)',
          explanation: 'คำที่ใช้แทนคำนามที่กล่าวถึงมาแล้ว หรือเป็นที่เข้าใจกัน เพื่อหลีกเลี่ยงการใช้คำเดิมซ้ำๆ',
          usage: 'หน้าที่หลัก: Subject (ประธาน - I, he), Object (กรรม - me, him), Possessive (แสดงเจ้าของ - mine, yours), Reflexive (สะท้อนตนเอง - myself), Relative (เชื่อมความ - who, which)',
          examples: [
            '**She** loves reading books in her free time. (Subject Pronoun)',
            'Please give **it** to **me**. (Object Pronoun)',
            'This beautiful house is **mine**, not **yours**. (Possessive Pronoun)',
            'He taught **himself** to play the guitar. (Reflexive Pronoun)',
            'The man **who** called you is waiting outside. (Relative Pronoun)'
          ]
        },
        {
          name: '1.3 Verb (คำกริยา)',
          explanation: 'คำที่แสดงการกระทำ (Action) หรือสถานะความเป็นอยู่ (State) ของประธานในประโยค',
          usage: 'ประเภทสำคัญ: Action Verbs (กระทำ), Stative Verbs (ความรู้สึก/สภาวะ), Linking Verbs (เชื่อมประธานกับคุณสมบัติ), Auxiliary Verbs (กริยาช่วย)',
          examples: [
            'They **play** football every evening. (Action Verb)',
            'She **looks** happy today. (Linking Verb)',
            'I **understand** the lesson clearly. (Stative Verb)',
            'We **are** watching a movie right now. (Auxiliary Verb)',
            'You **must** finish your homework by tomorrow. (Modal Verb)'
          ]
        },
        {
          name: '1.4 Adjective (คำคุณศัพท์)',
          explanation: 'คำที่ทำหน้าที่ขยายคำนามหรือคำสรรพนาม เพื่อบอกลักษณะ คุณสมบัติ หรือรายละเอียดเพิ่มเติม',
          usage: 'ตำแหน่ง: วางหน้า Noun หรือหลัง Linking Verb (be, feel, look). ลำดับการวาง: Opinion -> Size -> Age -> Shape -> Color -> Origin -> Material',
          examples: [
            'She lives in a **big** house near the river.',
            'The sky is **blue** and **clear** today.',
            'He bought a **new red sports** car.',
            'This soup tastes **delicious**.',
            'I met a **friendly old** man at the park.'
          ]
        },
        {
          name: '1.5 Adverb (คำกริยาวิเศษณ์)',
          explanation: 'คำที่ขยาย Verb, Adjective หรือ Adverb ด้วยกันเอง เพื่อบอกรายละเอียดว่าทำอย่างไร ที่ไหน เมื่อไหร่ หรือมากน้อยแค่ไหน',
          usage: 'ประเภท: Manner (อย่างไร), Time (เมื่อไหร่), Place (ที่ไหน), Frequency (บ่อยแค่ไหน), Degree (ระดับ)',
          examples: [
            'The turtle walks **slowly**. (Adverb of Manner)',
            'I will call you **later**. (Adverb of Time)',
            'He **always** drinks coffee in the morning. (Adverb of Frequency)',
            'It is **extremely** hot outside today. (Adverb of Degree)',
            'Please wait **here** for a moment. (Adverb of Place)'
          ]
        },
        {
          name: '1.6 Preposition (คำบุพบท)',
          explanation: 'คำที่ใช้เชื่อมคำนามหรือสรรพนามกับคำอื่นๆ ในประโยค เพื่อบอกความสัมพันธ์ เช่น เวลา สถานที่ หรือทิศทาง',
          usage: 'กลุ่มหลัก: Preposition of Time (at, on, in), Place (at, on, in, under), Direction (to, into, towards)',
          examples: [
            'The meeting is **on** Monday **at** 9:00 AM.',
            'There is a cat hiding **under** the bed.',
            'She travels to work **by** train.',
            'I am interested **in** learning history.',
            'He walked **through** the park to get home.'
          ]
        },
        {
          name: '1.7 Conjunction (คำสันธาน)',
          explanation: 'คำที่ใช้เชื่อมคำ วลี หรือประโยคเข้าด้วยกัน เพื่อให้ความหมายต่อเนื่องและสละสลวย',
          usage: 'ประเภท: Coordinating (FANBOYS - for, and, nor, but, or, yet, so), Subordinating (เชื่อมประโยคย่อย - because, although), Correlative (คู่ - both...and)',
          examples: [
            'I like pizza **and** pasta.',
            'She is tired **but** happy.',
            'We stayed home **because** it was raining heavily.',
            '**Although** he is rich, he lives modestly.',
            'You can have **either** tea **or** coffee.'
          ]
        },
        {
          name: '1.8 Determiner (คำนำหน้านาม)',
          explanation: 'คำที่วางอยู่หน้าคำนามเสมอ เพื่อระบุความชี้เฉพาะเจาะจง หรือบอกปริมาณ',
          usage: 'ประเภท: Articles (a, an, the), Demonstratives (this, that), Quantifiers (some, many), Possessives (my, your)',
          examples: [
            '**The** sun rises in the east.',
            '**This** book is mine, but **that** one is yours.',
            'I have **some** questions about the lesson.',
            '**Every** student must wear a uniform.',
            '**My** parents are waiting in the car.'
          ]
        },
        {
          name: '1.9 Interjection (คำอุทาน)',
          explanation: 'คำสั้นๆ ที่ใช้แสดงอารมณ์ความรู้สึกอย่างฉับพลัน มักตามด้วยเครื่องหมายตกใจ (!)',
          usage: 'ใช้แสดงความตกใจ (Surprise), เจ็บปวด (Pain), ดีใจ (Joy), หรือทักทาย (Greeting)',
          examples: [
            '**Wow!** You look amazing in that dress.',
            '**Ouch!** I bit my tongue.',
            '**Oh!** I didn\'t see you there.',
            '**Hey!** What\'s up?',
            '**Alas!** We lost the game.'
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