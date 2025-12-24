import { GrammarTopic } from '../types';

export const grammarTopics: GrammarTopic[] = [
  {
    id: 'parts-of-speech',
    title: '1. Parts of Speech (ชนิดของคำ)',
    icon: '🧩',
    color: 'indigo',
    details: {
      title: 'ชนิดของคำ (Parts of Speech)',
      description: 'โครงสร้างพื้นฐานที่สุดของภาษาอังกฤษ แบ่งออกเป็น 9 ประเภท ซึ่งแต่ละประเภทมีหน้าที่และตำแหน่งในประโยคที่แตกต่างกัน',
      subtopics: [
        {
          name: '1.1 Noun (คำนาม)',
          usage: 'ใช้สำหรับเรียกชื่อคน (People), สัตว์ (Animals), สิ่งของ (Things), สถานที่ (Places), หรือแนวคิด/ความรู้สึก (Ideas) ทำหน้าที่เป็นประธาน (Subject) หรือกรรม (Object) ของประโยค',
          structure: 'Types: Common, Proper, Concrete, Abstract, Collective, Compound, Countable, Uncountable',
          examples: [
            '**Common Noun:** The **teacher** is writing on the board.',
            '**Proper Noun:** I want to visit **Japan** next year.',
            '**Abstract Noun:** **Honesty** is the best policy.',
            '**Collective Noun:** The **team** is practicing hard.',
            '**Compound Noun:** Don\'t forget to buy some **toothpaste**.'
          ]
        },
        {
          name: '1.2 Pronoun (คำสรรพนาม)',
          usage: 'ใช้แทนคำนามที่ได้กล่าวถึงไปแล้ว หรือเป็นที่เข้าใจกันระหว่างผู้พูดและผู้ฟัง เพื่อหลีกเลี่ยงการใช้คำเดิมซ้ำๆ (Repetition)',
          structure: 'Types: Subject, Object, Possessive, Reflexive, Demonstrative, Relative, Interrogative',
          examples: [
            '**Subject Pronoun:** **She** is the smartest student in the class.',
            '**Object Pronoun:** My father drove **us** to school.',
            '**Possessive Pronoun:** That blue car is **mine**.',
            '**Reflexive Pronoun:** He hurt **himself** while playing football.',
            '**Indefinite Pronoun:** **Someone** is knocking at the door.'
          ]
        },
        {
          name: '1.3 Verb (คำกริยา)',
          usage: 'คำที่แสดงการกระทำ (Action) หรือสถานะความเป็นอยู่ (State of being) เป็นหัวใจสำคัญของประโยคที่บอกว่าประธานทำอะไรหรือเป็นอย่างไร',
          structure: 'Types: Action, Stative, Linking, Auxiliary (Helping), Modal',
          examples: [
            '**Action Verb:** They **run** in the park every morning.',
            '**Stative Verb:** I **believe** in your potential.',
            '**Linking Verb:** She **looks** tired today.',
            '**Auxiliary Verb:** We **have** finished our homework.',
            '**Modal Verb:** You **should** see a doctor.'
          ]
        },
        {
          name: '1.4 Adjective (คำคุณศัพท์)',
          usage: 'ทำหน้าที่ขยายคำนาม (Noun) หรือคำสรรพนาม (Pronoun) เพื่อบอกรายละเอียดเพิ่มเติม เช่น ลักษณะ, สี, ขนาด, จำนวน หรือความรู้สึก',
          structure: 'Types: Descriptive, Quantitative, Demonstrative, Possessive, Comparative, Superlative',
          examples: [
            '**Descriptive:** It was a **beautiful** sunset.',
            '**Quantitative:** I have **three** brothers.',
            '**Demonstrative:** **That** house belongs to my uncle.',
            '**Comparative:** This exam is **harder** than the last one.',
            '**Superlative:** He is the **tallest** boy in the room.'
          ]
        },
        {
          name: '1.5 Adverb (คำกริยาวิเศษณ์)',
          usage: 'ทำหน้าที่ขยายคำกริยา (Verb), คำคุณศัพท์ (Adjective), หรือคำกริยาวิเศษณ์ด้วยกันเอง (Adverb) เพื่อบอกว่าทำอย่างไร (How), ที่ไหน (Where), เมื่อไหร่ (When), หรือมากน้อยแค่ไหน (Degree)',
          structure: 'Types: Manner, Place, Time, Frequency, Degree',
          examples: [
            '**Manner:** He speaks English **fluently**.',
            '**Place:** The kids are playing **outside**.',
            '**Time:** I will call you **tomorrow**.',
            '**Frequency:** She **always** drinks coffee in the morning.',
            '**Degree:** The weather is **extremely** hot.'
          ]
        },
        {
          name: '1.6 Preposition (คำบุพบท)',
          usage: 'คำที่ใช้วางหน้าคำนามหรือสรรพนาม เพื่อแสดงความสัมพันธ์ระหว่างคำนั้นกับส่วนอื่นๆ ในประโยค เช่น บอกตำแหน่ง, เวลา, หรือทิศทาง',
          structure: 'Types: Place (in, on, at), Time (before, after), Direction (to, into), Agent (by)',
          examples: [
            '**Place:** The keys are **on** the table.',
            '**Time:** We usually eat dinner **at** 7 PM.',
            '**Direction:** He walked **into** the room.',
            '**Agent:** This book was written **by** J.K. Rowling.',
            '**Other:** I am interested **in** history.'
          ]
        },
        {
          name: '1.7 Conjunction (คำสันธาน)',
          usage: 'ทำหน้าที่เชื่อมคำ (Words), วลี (Phrases), หรือประโยค (Clauses) เข้าด้วยกัน เพื่อให้ความหมายต่อเนื่อง ลื่นไหล หรือแสดงความสัมพันธ์ของเหตุการณ์',
          structure: 'Types: Coordinating (FANBOYS), Subordinating, Correlative',
          examples: [
            '**Coordinating:** I like coffee, **but** my sister likes tea.',
            '**Subordinating:** We stayed home **because** it was raining.',
            '**Correlative:** **Both** Tom **and** Jerry are cartoons.',
            '**Coordinating:** Would you like pizza **or** pasta?',
            '**Subordinating:** Call me **if** you need help.'
          ]
        },
        {
          name: '1.8 Determiner (คำนำหน้านาม)',
          usage: 'วางอยู่หน้าคำนามเสมอ เพื่อกำหนดขอบเขต ระบุความเจาะจง หรือบอกปริมาณของคำนามนั้นๆ',
          structure: 'Types: Articles (a/an/the), Demonstratives, Quantifiers, Possessives',
          examples: [
            '**Definite Article:** **The** sun rises in the east.',
            '**Indefinite Article:** I saw **an** elephant at the zoo.',
            '**Possessive:** **My** car is parked outside.',
            '**Quantifier:** Do you have **any** questions?',
            '**Demonstrative:** **Those** shoes are very expensive.'
          ]
        },
        {
          name: '1.9 Interjection (คำอุทาน)',
          usage: 'คำสั้นๆ ที่เปล่งออกมาเพื่อแสดงอารมณ์ความรู้สึกอย่างฉับพลัน เช่น ตกใจ, ดีใจ, เสียใจ, หรือเจ็บปวด มักไม่มีความสัมพันธ์ทางไวยากรณ์กับส่วนอื่นของประโยค',
          structure: 'Common Emotions: Surprise, Pain, Joy, Greeting, Disappointment',
          examples: [
            '**Surprise:** **Wow!** That performance was amazing.',
            '**Pain:** **Ouch!** You stepped on my foot.',
            '**Greeting:** **Hey!** Long time no see.',
            '**Realization:** **Oh!** I forgot to lock the door.',
            '**Dismay:** **Oh no!** It started raining again.'
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
        {
          name: '2.1 Present Simple Tense',
          structure: 'Subject + V1 (s/es)',
          usage: 'ใช้กับความจริง (Fact), กิจวัตร (Habit), ตารางเวลา (Schedule) และสภาพทั่วไป',
          examples: [
            'The sun **rises** in the east.',
            'She **drinks** coffee every morning.',
            'The train **leaves** at 9 PM.',
            'Water **boils** at 100 degrees Celsius.',
            'He **works** in a bank.'
          ]
        },
        {
          name: '2.2 Present Continuous Tense',
          structure: 'Subject + is/am/are + V-ing',
          usage: 'เหตุการณ์ที่กำลังเกิด (Now), อนาคตอันใกล้ (Future Plan), หรือเหตุการณ์ชั่วคราว',
          examples: [
            'I **am eating** lunch right now.',
            'Look! It **is raining** outside.',
            'She **is meeting** her boss tomorrow.',
            'They **are building** a new house.',
            'You **are always coming** late!'
          ]
        },
        // ... (Keep other tenses as needed or expand them later) ...
        {
            name: '2.3 Present Perfect Tense',
            structure: 'Subject + has/have + V3',
            usage: 'เล่าประสบการณ์, สิ่งที่เพิ่งจบ, หรือเริ่มในอดีตส่งผลถึงปัจจุบัน',
            examples: [
              'I **have visited** Japan twice.',
              'She **has lost** her keys.',
              'We **have known** him for 10 years.',
              'He **has just finished** his work.',
              '**Have** you **ever eaten** sushi?'
            ]
        },
        {
            name: '2.4 Present Perfect Continuous Tense',
            structure: 'Subject + has/have + been + V-ing',
            usage: 'เน้นความ "ต่อเนื่อง" ของการกระทำตั้งแต่อดีตจนถึงปัจจุบัน',
            examples: [
              'I **have been waiting** for 2 hours.',
              'It **has been raining** all day.',
              'She **has been teaching** here since 2010.',
              'My hands are dirty because I **have been fixing** the car.',
              'How long **have** you **been learning** English?'
            ]
        },
        // Past Tenses
        {
            name: '2.5 Past Simple Tense',
            structure: 'Subject + V2',
            usage: 'จบแล้วในอดีต มีเวลาบอกชัดเจน (yesterday, last year, ago)',
            examples: [
              'I **went** to the cinema yesterday.',
              'He **bought** a new car last week.',
              'They **did not** come to the party.',
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
              'When I arrived, the train **had left**.',
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
        // Future Tenses
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
          usage: 'ประธานเป็นผู้กระทำกริยาโดยตรง (เน้นผู้กระทำ)',
          structure: 'Subject + Verb + Object',
          examples: [
            'I **eat** rice.',
            'She **writes** a letter.',
            'The hunter **killed** the lion.',
            'They **are painting** the house.',
            'Someone **stole** my car.'
          ]
        },
        {
          name: 'Passive Voice',
          usage: 'ประธานเป็นผู้ถูกกระทำ (เน้นสิ่งที่ถูกกระทำ หรือไม่ทราบผู้กระทำ)',
          structure: 'Subject + Be + V3 (+ by Agent)',
          examples: [
            'Rice **is eaten** by me.',
            'A letter **is written** by her.',
            'The lion **was killed** by the hunter.',
            'The house **is being painted**.',
            'My car **was stolen**.'
          ]
        }
      ]
    }
  }
];