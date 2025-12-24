import { GrammarTopic } from '../types';

export const grammarTopics: GrammarTopic[] = [
  {
    id: 'parts-of-speech',
    title: '1. Parts of Speech',
    icon: '🧩',
    color: 'indigo',
    details: {
      title: 'ชนิดของคำ (Parts of Speech)',
      description: 'พื้นฐานที่สุดของไวยากรณ์ คือการรู้หน้าที่ของคำแต่ละชนิดในประโยค',
      subtopics: [
        {
          name: '1.1 Noun (คำนาม)',
          usage: 'ใช้เรียกชื่อคน สัตว์ สิ่งของ สถานที่ หรือความคิด (Abstract Noun) สามารถทำหน้าที่เป็น ประธาน (Subject) หรือ กรรม (Object) ของประโยค',
          examples: [
            '**Common Noun (นามทั่วไป):** The **dog** barked loudly.',
            '**Proper Noun (นามเฉพาะ):** I live in **Bangkok**.',
            '**Abstract Noun (นามธรรม):** **Love** is all around us.',
            '**Countable Noun (นามนับได้):** She has three **books**.',
            '**Uncountable Noun (นามนับไม่ได้):** Please give me some **water**.'
          ]
        },
        {
          name: '1.2 Pronoun (คำสรรพนาม)',
          usage: 'ใช้แทนคำนามที่กล่าวไปแล้ว เพื่อหลีกเลี่ยงการพูดซ้ำซาก',
          examples: [
            '**Subject Pronoun (ประธาน):** **She** is my teacher.',
            '**Object Pronoun (กรรม):** Please tell **him** the truth.',
            '**Possessive Pronoun (แสดงความเป็นเจ้าของ):** This car is **mine**.',
            '**Reflexive Pronoun (สะท้อนตัวเอง):** He hurt **himself**.',
            '**Relative Pronoun (เชื่อมประโยค):** The man **who** called is here.'
          ]
        },
        {
          name: '1.3 Verb (คำกริยา)',
          usage: 'แสดงการกระทำ (Action) หรือสถานะความเป็นอยู่ (State) ของประธาน',
          examples: [
            '**Action Verb:** They **run** in the park every morning.',
            '**Stative Verb:** I **know** the answer.',
            '**Linking Verb:** She **seems** happy today.',
            '**Transitive Verb (ต้องการกรรม):** He **bought** a car.',
            '**Auxiliary Verb (กริยาช่วย):** We **are** going home.'
          ]
        },
        {
          name: '1.4 Adjective (คำคุณศัพท์)',
          usage: 'ขยายคำนาม (Noun) หรือคำสรรพนาม (Pronoun) เพื่อบอกลักษณะ สี ขนาด หรือจำนวน',
          examples: [
            'She lives in a **big** house.',
            'I saw a **beautiful** flower.',
            '**This** book is mine (Demonstrative).',
            'I have **many** friends (Quantitative).',
            'He is **taller** than me (Comparative).'
          ]
        },
        {
          name: '1.5 Adverb (คำกริยาวิเศษณ์)',
          usage: 'ขยายคำกริยา (Verb), คำคุณศัพท์ (Adjective), หรือคำกริยาวิเศษณ์ด้วยกันเอง (Adverb) เพื่อบอกว่าทำอย่างไร ที่ไหน หรือเมื่อไหร่',
          examples: [
            'He speaks **slowly** (Manner).',
            'She arrived **yesterday** (Time).',
            'They live **nearby** (Place).',
            'It is **very** hot (Degree).',
            'I **always** wake up early (Frequency).'
          ]
        },
        {
          name: '1.6 Preposition (คำบุพบท)',
          usage: 'เชื่อมคำนามกับส่วนอื่นของประโยค เพื่อระบุตำแหน่ง เวลา หรือทิศทาง',
          examples: [
            'The cat is **on** the sofa.',
            'We will meet **at** 5 PM.',
            'She walked **into** the room.',
            'I am waiting **for** you.',
            'The book is **under** the table.'
          ]
        },
        {
          name: '1.7 Conjunction (คำสันธาน)',
          usage: 'เชื่อมคำ วลี หรือประโยคเข้าด้วยกัน',
          examples: [
            'I like tea **and** coffee.',
            'He is poor **but** happy.',
            'I stayed home **because** it rained.',
            'You can go **or** stay.',
            '**Although** it was late, we continued working.'
          ]
        },
        {
          name: '1.8 Interjection (คำอุทาน)',
          usage: 'คำที่เปล่งออกมาเพื่อแสดงอารมณ์ความรู้สึกอย่างฉับพลัน',
          examples: [
            '**Wow!** That is amazing.',
            '**Ouch!** You stepped on my foot.',
            '**Hey!** Where are you going?',
            '**Oh no!** I forgot my wallet.',
            '**Well**, let\'s get started.'
          ]
        }
      ]
    }
  },
  {
    id: 'tenses',
    title: '2. 12 Tenses (ละเอียด)',
    icon: '⏳',
    color: 'orange',
    details: {
      title: 'เจาะลึก 12 Tenses',
      description: 'คู่มือ 12 Tenses ฉบับละเอียด พร้อมตัวอย่างสถานการณ์จริง และแบบทดสอบท้ายบท',
      subtopics: [
        // --- Present Tenses ---
        {
          name: '2.1 Present Simple Tense',
          structure: 'Subject + V1 (s/es)',
          usage: 'ใช้กับความจริงตามธรรมชาติ (Facts), กิจวัตรประจำวัน (Habits), ตารางเวลาที่แน่นอน (Timetables) และความรู้สึกนึกคิด (Feelings). กริยาเติม s/es เมื่อประธานเป็นเอกพจน์ (He, She, It).',
          examples: [
            '**Fact:** The sun **rises** in the east and **sets** in the west.',
            '**Habit:** I usually **drink** coffee before I **start** work.',
            '**Timetable:** The train to Chiang Mai **leaves** at 9:00 PM tonight.',
            '**State/Feeling:** She **loves** cats but she **hates** dogs.',
            '**General Truth:** Water **boils** at 100 degrees Celsius.',
            '**Negative:** He **does not (doesn\'t) play** football.',
            '**Question:** **Do** you **speak** English?'
          ]
        },
        {
          name: '2.2 Present Continuous Tense',
          structure: 'Subject + is/am/are + V-ing',
          usage: 'ใช้กับเหตุการณ์ที่กำลังเกิดขึ้นขณะพูด (Now), เหตุการณ์ที่เกิดขึ้นชั่วคราว (Temporary), หรือแผนการในอนาคตที่แน่นอน (Future Plan).',
          examples: [
            '**Happening Now:** Please be quiet, the baby **is sleeping**.',
            '**Temporary:** I usually drive to work, but this week I **am taking** the bus.',
            '**Future Plan:** We **are flying** to Japan next Friday.',
            '**Trend:** The climate **is changing** rapidly.',
            '**Annoyance (with always):** You **are always coming** late!',
            '**Action:** Look! It **is raining** heavily outside.',
            '**Question:** **Are** you **listening** to me?'
          ]
        },
        {
          name: '2.3 Present Perfect Tense',
          structure: 'Subject + has/have + V3',
          usage: 'ใช้เล่าประสบการณ์ในอดีต (ไม่ระบุเวลา), เหตุการณ์ที่เพิ่งจบลง (Just/Already), หรือสิ่งที่เริ่มในอดีตและส่งผลถึงปัจจุบัน (For/Since).',
          examples: [
            '**Experience:** I **have been** to Singapore three times.',
            '**Just finished:** She **has just finished** her homework.',
            '**Result:** I **have lost** my keys. (So I cannot enter the house now).',
            '**Since/For:** We **have known** each other since 2010.',
            '**News:** The police **have arrested** two suspects.',
            '**Question:** **Have** you **ever eaten** frogs?',
            '**Negative:** I **have never seen** that movie.'
          ]
        },
        {
          name: '2.4 Present Perfect Continuous Tense',
          structure: 'Subject + has/have + been + V-ing',
          usage: 'คล้าย Present Perfect แต่เน้นความ "ต่อเนื่อง" ของการกระทำที่เริ่มในอดีตและดำเนินมาจนถึงปัจจุบัน (และอาจทำต่อไป).',
          examples: [
            '**Duration:** I **have been waiting** for you for 2 hours! (I am still waiting).',
            '**Recent Activity:** You look tired. **Have** you **been running**?',
            '**Continuous Action:** It **has been raining** all day.',
            '**Since:** She **has been teaching** at this school since she graduated.',
            '**Explanation:** My hands are dirty because I **have been fixing** the car.',
            '**Repeated:** He **has been calling** you all morning.'
          ]
        },
        // --- Past Tenses ---
        {
          name: '2.5 Past Simple Tense',
          structure: 'Subject + V2',
          usage: 'ใช้กับเหตุการณ์ที่เกิดขึ้นและจบลงแล้วในอดีต โดยระบุเวลาชัดเจน (Yesterday, Last year, ...ago, In 1999).',
          examples: [
            '**Completed Action:** I **visited** my grandmother yesterday.',
            '**Series of Actions:** He **woke** up, **washed** his face, and **left** the house.',
            '**Past Fact:** Einstein **was** a great scientist.',
            '**Time specific:** We **bought** this house in 2015.',
            '**Negative:** I **did not (didn\'t) go** to the party last night.',
            '**Question:** **Did** you **see** Tom yesterday?',
            '**Duration in Past:** She **lived** in London for 5 years (but now she lives elsewhere).'
          ]
        },
        {
          name: '2.6 Past Continuous Tense',
          structure: 'Subject + was/were + V-ing',
          usage: 'ใช้เล่าเหตุการณ์ที่ "กำลัง" ดำเนินอยู่ในอดีต ณ เวลาที่ระบุ หรือใช้คู่กับ Past Simple เมื่อมีเหตุการณ์แทรก.',
          examples: [
            '**Specific Time in Past:** At 8 PM last night, I **was watching** TV.',
            '**Interrupted Action:** I **was sleeping** when the phone rang.',
            '**Parallel Actions:** While I **was cooking**, my husband **was washing** the car.',
            '**Background Story:** The birds **were singing** and the sun **was shining**.',
            '**Question:** What **were** you **doing** at this time yesterday?',
            '**Negative:** They **were not (weren\'t) listening** to the teacher.'
          ]
        },
        {
          name: '2.7 Past Perfect Tense',
          structure: 'Subject + had + V3',
          usage: 'ใช้คู่กับ Past Simple เพื่อบอกว่าเหตุการณ์หนึ่งจบลง "ก่อน" อีกเหตุการณ์หนึ่งในอดีต (อดีตซ้อนอดีต).',
          examples: [
            '**Before another action:** When I arrived at the station, the train **had left**.',
            '**Reason:** He failed the exam because he **had not studied**.',
            '**Experience in Past:** She told me she **had never been** to Paris before.',
            '**By the time:** By the time the police arrived, the thief **had escaped**.',
            '**Realization:** I realized that I **had forgotten** my wallet.',
            '**Reported Speech:** He said that he **had bought** a new car.'
          ]
        },
        {
          name: '2.8 Past Perfect Continuous Tense',
          structure: 'Subject + had + been + V-ing',
          usage: 'เน้นช่วงเวลาของการกระทำที่เกิดขึ้น "ต่อเนื่อง" ในอดีต ก่อนที่จะมีอีกเหตุการณ์หนึ่งเกิด.',
          examples: [
            '**Duration before Past:** I **had been waiting** for 30 minutes when the bus finally came.',
            '**Cause of feeling:** She was tired because she **had been working** hard all day.',
            '**Ongoing before change:** They **had been living** there for 10 years before they moved.',
            '**Continuous Action:** The road was wet because it **had been raining**.',
            '**Emphasis:** He **had been trying** to call her for hours.',
            '**Negative:** We **had not been eating** anything for 24 hours.'
          ]
        },
        // --- Future Tenses ---
        {
          name: '2.9 Future Simple Tense',
          structure: 'Subject + will + V1',
          usage: 'ใช้คาดเดาอนาคต (Prediction), สัญญา (Promise), เสนอตัว (Offer), หรือตัดสินใจทำทันทีขณะพูด (Decision).',
          examples: [
            '**Decision:** It\'s hot in here. I **will open** the window.',
            '**Prediction:** I think it **will rain** tomorrow.',
            '**Promise:** I **will love** you forever.',
            '**Offer:** That bag looks heavy. I **will help** you.',
            '**Future Fact:** He **will be** 25 next month.',
            '**Negative:** I **won\'t tell** anyone your secret.',
            '**Question:** **Will** you **marry** me?'
          ]
        },
        {
          name: '2.10 Future Continuous Tense',
          structure: 'Subject + will + be + V-ing',
          usage: 'ใช้บอกว่าจะ "กำลัง" ทำอะไรอยู่ในช่วงเวลาที่ระบุในอนาคต.',
          examples: [
            '**Specific Future Time:** At this time tomorrow, I **will be lying** on the beach.',
            '**Polite Inquiry:** **Will** you **be using** the computer later?',
            '**Future Plan/Routine:** I **will be seeing** John tomorrow at the office.',
            '**Interrupted Future:** When you arrive, I **will be waiting** for you at the station.',
            '**Duration in Future:** We **will be working** all day tomorrow.',
            '**Negative:** She **won\'t be joining** us for dinner.'
          ]
        },
        {
          name: '2.11 Future Perfect Tense',
          structure: 'Subject + will + have + V3',
          usage: 'ใช้บอกว่าเหตุการณ์จะ "เสร็จสมบูรณ์" ก่อนเวลาที่กำหนดในอนาคต (มักมีคำว่า By...).',
          examples: [
            '**Completion:** By next year, I **will have finished** my degree.',
            '**Before time:** The train **will have left** by the time we get there.',
            '**Duration up to Future:** Next month, we **will have been** married for 10 years.',
            '**Assumption:** He **will have heard** the news by now.',
            '**Goal:** I **will have saved** 100,000 baht by December.',
            '**Question:** **Will** you **have completed** the report by Friday?'
          ]
        },
        {
          name: '2.12 Future Perfect Continuous Tense',
          structure: 'Subject + will + have + been + V-ing',
          usage: 'เน้นความ "ต่อเนื่อง" ของการกระทำที่จะดำเนินไปจนถึงจุดหนึ่งในอนาคต.',
          examples: [
            '**Duration until Future:** By 5 PM, I **will have been driving** for 6 hours.',
            '**Ongoing Action:** Next year, she **will have been working** here for 20 years.',
            '**Cause in Future:** He will be tired because he **will have been playing** football all afternoon.',
            '**Long-term:** By the time you arrive, we **will have been waiting** for ages.',
            '**Negative:** I **won\'t have been sleeping** much before the exam.'
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
      description: 'รูปแบบประโยคที่เน้นผู้กระทำ (Active) หรือผู้ถูกกระทำ (Passive)',
      subtopics: [
        {
          name: 'Active Voice',
          structure: 'Subject (ผู้ทำ) + Verb + Object (ผู้ถูกทำ)',
          usage: 'ประโยคทั่วไปที่ประธานเป็นผู้กระทำกริยา เน้นที่ตัวผู้ทำ',
          examples: [
            'The teacher **teaches** the students.',
            'John **ate** the cake.',
            'Somebody **stole** my car.',
            'She **is writing** a letter.',
            'They **will build** a house.'
          ]
        },
        {
          name: 'Passive Voice',
          structure: 'Subject (ผู้ถูกทำ) + Verb to be + Verb ช่อง 3 (+ by ผู้ทำ)',
          usage: 'ประธานเป็นผู้ถูกกระทำ ใช้เมื่อต้องการเน้นที่การกระทำ หรือไม่รู้ว่าใครเป็นคนทำ',
          examples: [
            'The students **are taught** by the teacher.',
            'The cake **was eaten** by John.',
            'My car **was stolen** (ไม่รู้ว่าใครขโมย).',
            'A letter **is being written**.',
            'A house **will be built**.'
          ]
        }
      ]
    }
  },
  {
    id: 'mood',
    title: '4. Mood',
    icon: '🎭',
    color: 'purple',
    details: {
      title: 'Mood (เจตนาของประโยค)',
      subtopics: [
        {
          name: 'Indicative Mood (บอกเล่าข้อเท็จจริง)',
          usage: 'ใช้พูดถึงความจริง หรือถามคำถามทั่วไป เป็นรูปประโยคที่ใช้บ่อยที่สุด',
          examples: [
            'The earth **revolves** around the sun.',
            'She **likes** reading.',
            '**Are** you happy?',
            'It **rained** yesterday.',
            'We **will go** soon.'
          ]
        },
        {
          name: 'Imperative Mood (คำสั่ง/ขอร้อง)',
          usage: 'ใช้สั่ง ขอร้อง หรือแนะนำ มักละประธาน (You) ไว้',
          examples: [
            '**Open** the door.',
            '**Please be** quiet.',
            '**Do not touch** the glass.',
            '**Turn** left at the corner.',
            '**Have** a nice day.'
          ]
        },
        {
          name: 'Subjunctive Mood (สมมติ/ปรารถนา)',
          usage: 'ใช้กับเหตุการณ์สมมติที่ไม่เป็นจริง หรือคำแนะนำที่สำคัญ (มักใช้รูป verb ที่แปลกไปจากปกติ)',
          examples: [
            'I wish I **were** a bird.',
            'If I **were** you, I would accept.',
            'It is essential that he **be** here on time.',
            'I suggest that she **wait**.',
            'God **save** the King.'
          ]
        }
      ]
    }
  },
  {
    id: 'sentence-structure',
    title: '5. Sentence Structure',
    icon: '🏗️',
    color: 'teal',
    details: {
      title: 'โครงสร้างประโยค',
      subtopics: [
        {
          name: 'Simple Sentence (ประโยคความเดียว)',
          structure: '1 Independent Clause',
          usage: 'มีประธานและกริยาหลักชุดเดียว ใจความสมบูรณ์',
          examples: [
            'The dog **barked**.',
            'She **drinks** coffee every morning.',
            'John and Mary **went** to the movies.',
            'I **am** happy.',
            'The sun **shines** brightly.'
          ]
        },
        {
          name: 'Compound Sentence (ประโยคความรวม)',
          structure: 'Independent Clause + Conjunction (FANBOYS) + Independent Clause',
          usage: 'ประโยคความเดียว 2 ประโยคเชื่อมกันด้วย and, but, or, so, etc.',
          examples: [
            'I like tea, **but** she likes coffee.',
            'It was raining, **so** we stayed home.',
            'He studied hard, **yet** he failed.',
            'Will you go, **or** will you stay?',
            'I wanted to buy it, **but** I had no money.'
          ]
        },
        {
          name: 'Complex Sentence (ประโยคความซ้อน)',
          structure: 'Independent Clause + Dependent Clause',
          usage: 'มีประโยคหลักและประโยคย่อยเชื่อมกันด้วย because, although, if, when, etc.',
          examples: [
            'I missed the bus **because** I woke up late.',
            '**Although** he is rich, he is unhappy.',
            'If it rains, **we will cancel the trip**.',
            'The man **who called** is my uncle.',
            'I will wait **until you arrive**.'
          ]
        }
      ]
    }
  },
  {
    id: 'clauses',
    title: '6. Clauses',
    icon: '🔗',
    color: 'rose',
    details: {
      title: 'อนุประโยค (Clauses)',
      description: 'กลุ่มคำที่มีประธานและกริยา แต่อาจจะไม่ใช่ประโยคที่สมบูรณ์',
      subtopics: [
        {
          name: 'Independent Clause (อิสระ)',
          usage: 'ประโยคที่สมบูรณ์ในตัวเอง มีความหมายครบถ้วน',
          examples: [
            '**She runs fast.**',
            '**I love pizza.**',
            '**He is a doctor.**',
            '**They played football.**',
            '**The sky is blue.**'
          ]
        },
        {
          name: 'Dependent Clause (ไม่อิสระ)',
          usage: 'ประโยคที่ไม่สมบูรณ์ ต้องเกาะกับประโยคหลัก ทำหน้าที่ขยายความ',
          examples: [
            'I know **that he is lying** (Noun Clause).',
            'The book **which I bought** is good (Adjective Clause).',
            '**Because it rained**, we didn\'t go (Adverb Clause).',
            'She asked **where I lived**.',
            'I will leave **when you arrive**.'
          ]
        }
      ]
    }
  },
  {
    id: 'conditionals',
    title: '7. Conditionals',
    icon: '🤔',
    color: 'amber',
    details: {
      title: 'If-Clauses (ประโยคเงื่อนไข)',
      subtopics: [
        {
          name: 'Zero Conditional (ความจริงเสมอ)',
          structure: 'If + Present Simple, Present Simple',
          usage: 'ใช้กับกฎธรรมชาติ หรือความจริงทั่วไป',
          examples: [
            'If you heat ice, it **melts**.',
            'If I drink coffee, I **get** headache.',
            'Plants **die** if they don\'t get water.',
            'If you mix red and blue, you **get** purple.',
            'The machine **starts** if you press this button.'
          ]
        },
        {
          name: 'First Conditional (เป็นไปได้ในอนาคต)',
          structure: 'If + Present Simple, Future Simple (will)',
          usage: 'ใช้กับเหตุการณ์ที่น่าจะเกิดขึ้นจริงในอนาคต',
          examples: [
            'If it rains, I **will stay** home.',
            'If you study hard, you **will pass**.',
            'She **will be** angry if you are late.',
            'If I see him, I **will tell** him.',
            'We **will go** to the park if it is sunny.'
          ]
        },
        {
          name: 'Second Conditional (สมมติในปัจจุบัน)',
          structure: 'If + Past Simple, Would + Verb ช่อง 1',
          usage: 'ใช้กับเรื่องสมมติที่ไม่จริงในปัจจุบัน หรือเป็นไปได้ยาก',
          examples: [
            'If I won the lottery, I **would buy** a house.',
            'If I **were** you, I would apologize.',
            'She **would travel** if she had money.',
            'If he knew the answer, he **would tell** us.',
            'They **would come** if they were free.'
          ]
        },
        {
          name: 'Third Conditional (เสียดายในอดีต)',
          structure: 'If + Past Perfect, Would have + Verb ช่อง 3',
          usage: 'ใช้พูดถึงอดีตที่แก้ไขไม่ได้แล้ว (รู้งี้...)',
          examples: [
            'If I had studied, I **would have passed**.',
            'If she had driven carefully, she **would not have crashed**.',
            'I **would have called** you if I had known.',
            'If we had left earlier, we **would not have missed** the bus.',
            'He **would have been** happy if he had seen you.'
          ]
        }
      ]
    }
  },
  {
    id: 'modals',
    title: '8. Modal Verbs',
    icon: '🛠️',
    color: 'cyan',
    details: {
      title: 'กริยาช่วยพิเศษ',
      description: 'กริยาที่ช่วยบอกความหมายเพิ่มเติม เช่น ความสามารถ, หน้าที่, ความเป็นไปได้',
      subtopics: [
        {
          name: 'Ability (ความสามารถ)',
          usage: 'Can (ปัจจุบัน), Could (อดีต)',
          examples: [
            'I **can** swim.',
            'She **could** play piano when she was five.',
            'He **cannot** speak Japanese.',
            '**Can** you drive?',
            'They **could** run very fast.'
          ]
        },
        {
          name: 'Obligation (หน้าที่/ข้อบังคับ)',
          usage: 'Must (ต้อง - กฎ/ความรู้สึก), Have to (ต้อง - สถานการณ์บังคับ)',
          examples: [
            'You **must** wear a seatbelt.',
            'I **have to** go to work now.',
            'Students **must not** cheat.',
            'She **has to** finish this by Friday.',
            'We **had to** wait for an hour.'
          ]
        },
        {
          name: 'Advice (คำแนะนำ)',
          usage: 'Should / Ought to (ควรจะ)',
          examples: [
            'You **should** see a doctor.',
            'He **should not** eat so much.',
            'We **ought to** apologize.',
            '**Should** I buy this?',
            'They **should** study more.'
          ]
        },
        {
          name: 'Possibility (ความเป็นไปได้)',
          usage: 'May, Might, Could (อาจจะ)',
          examples: [
            'It **might** rain today.',
            'She **may** come to the party.',
            'This **could** be the right answer.',
            'He **might not** know.',
            'They **may** have left already.'
          ]
        }
      ]
    }
  },
  {
    id: 'gerund-infinitive',
    title: '9. Gerund & Infinitive',
    icon: '🔄',
    color: 'emerald',
    details: {
      title: 'V-ing และ to V1',
      subtopics: [
        {
          name: 'Gerund (Verb เติม ing)',
          usage: 'ทำหน้าที่เป็นคำนาม แปลว่า "การ..." ใช้หลังคำกริยาบางคำ (Enjoy, Mind, Avoid)',
          examples: [
            'I enjoy **reading**.',
            '**Swimming** is good for health.',
            'She avoided **answering** my question.',
            'Would you mind **opening** the window?',
            'He is good at **drawing**.'
          ]
        },
        {
          name: 'Infinitive (to + Verb ช่อง 1)',
          usage: 'ใช้บอกวัตถุประสงค์ หรือตามหลังคำกริยาบางคำ (Want, Hope, Decide)',
          examples: [
            'I want **to learn** English.',
            'She decided **to go** home.',
            'We hope **to see** you again.',
            'He went to the shop **to buy** milk.',
            'It is important **to sleep** well.'
          ]
        }
      ]
    }
  },
  {
    id: 'reported-speech',
    title: '10. Reported Speech',
    icon: '📢',
    color: 'indigo',
    details: {
      title: 'การนำคำพูดมาเล่าต่อ',
      subtopics: [
        {
          name: 'Direct Speech (พูดตรง)',
          usage: 'ยกคำพูดเขามาทั้งประโยค อยู่ในเครื่องหมายคำพูด',
          examples: [
            'He said, "I **am** happy."',
            'She said, "I **will** call you."',
            'Tom asked, "Where **are** you?"',
            '"Stop!" he shouted.',
            'Mary said, "I **love** this song."'
          ]
        },
        {
          name: 'Indirect Speech (เล่าต่อ)',
          usage: 'เล่าว่าเขาพูดอะไร ต้องเปลี่ยน Tense ให้เป็นอดีตมากขึ้น และเปลี่ยนสรรพนาม',
          examples: [
            'He said that he **was** happy.',
            'She said that she **would** call me.',
            'Tom asked where I **was**.',
            'He shouted at me to stop.',
            'Mary said that she **loved** that song.'
          ]
        }
      ]
    }
  },
  {
    id: 'question-forms',
    title: '11. Question Forms',
    icon: '❓',
    color: 'purple',
    details: {
      title: 'รูปแบบประโยคคำถาม',
      subtopics: [
        {
          name: 'Yes/No Questions',
          usage: 'คำถามที่ต้องการคำตอบว่า ใช่ หรือ ไม่ใช่',
          examples: [
            '**Do** you like pizza?',
            '**Is** she your sister?',
            '**Can** you help me?',
            '**Have** you finished?',
            '**Will** they come?'
          ]
        },
        {
          name: 'Wh-Questions',
          usage: 'ถามเพื่อต้องการรายละเอียด (Who, What, Where, When, Why, How)',
          examples: [
            '**Where** are you going?',
            '**What** is your name?',
            '**Why** did you do that?',
            '**How** much is this?',
            '**Who** is that man?'
          ]
        },
        {
          name: 'Tag Questions',
          usage: 'ประโยคบอกเล่า + ส่วนคำถามสั้นๆ ท้ายประโยค (ถามย้ำความมั่นใจ)',
          examples: [
            'You are a student, **aren’t you**?',
            'She isn’t here, **is she**?',
            'He can swim, **can’t he**?',
            'They lived in London, **didn’t they**?',
            'It’s hot today, **isn’t it**?'
          ]
        }
      ]
    }
  },
  {
    id: 'comparison',
    title: '12. Comparison',
    icon: '⚖️',
    color: 'orange',
    details: {
      title: 'การเปรียบเทียบ',
      subtopics: [
        {
          name: 'Positive Degree (ขั้นเท่า)',
          usage: 'ใช้ as ... as เพื่อบอกว่าสองสิ่งเท่ากัน',
          examples: [
            'She is **as tall as** her mother.',
            'This box is **as heavy as** that one.',
            'He runs **as fast as** a tiger.',
            'English is not **as hard as** math.',
            'You are **as smart as** your brother.'
          ]
        },
        {
          name: 'Comparative Degree (ขั้นกว่า)',
          usage: 'เติม -er than (คำพยางค์เดียว) หรือ more ... than (คำหลายพยางค์)',
          examples: [
            'This car is **faster than** that one.',
            'She is **more beautiful than** a flower.',
            'Today is **hotter than** yesterday.',
            'This book is **more interesting than** the movie.',
            'He is **older than** me.'
          ]
        },
        {
          name: 'Superlative Degree (ขั้นสุด)',
          usage: 'เติม the ... -est (คำพยางค์เดียว) หรือ the most ... (คำหลายพยางค์)',
          examples: [
            'She is **the best** student in class.',
            'This is **the most expensive** watch.',
            'Everest is **the highest** mountain.',
            'He is **the smartest** person I know.',
            'It was **the happiest** day of my life.'
          ]
        }
      ]
    }
  },
  {
    id: 'articles',
    title: '13. Articles',
    icon: '🅰️',
    color: 'teal',
    details: {
      title: 'คำนำหน้านาม (a, an, the)',
      subtopics: [
        {
          name: 'Indefinite Articles (a, an)',
          usage: 'ใช้นำหน้านามนับได้เอกพจน์ ที่ไม่เจาะจง (an ใช้หน้าเสียงสระ a, e, i, o, u)',
          examples: [
            'I saw **a** dog in the park.',
            'She wants to eat **an** apple.',
            'He is **a** doctor.',
            'Wait for **an** hour.',
            'Do you have **a** pen?'
          ]
        },
        {
          name: 'Definite Article (the)',
          usage: 'ใช้นำหน้านามที่เจาะจง ผู้พูดและผู้ฟังเข้าใจตรงกันว่าอันไหน',
          examples: [
            '**The** sun is hot.',
            'Close **the** door, please.',
            'I bought a book. **The** book is good.',
            'She plays **the** piano well.',
            '**The** sky is blue.'
          ]
        },
        {
          name: 'Zero Article (ไม่ใส่)',
          usage: 'ไม่ใส่หน้าคำนามพหูพจน์กล่าวลอยๆ, นามนับไม่ได้, ชื่อประเทศ, หรือมื้ออาหาร',
          examples: [
            '**Cats** are cute.',
            'I drink **water**.',
            'She lives in **Thailand**.',
            'He plays **football**.',
            'I had **breakfast** at 8 AM.'
          ]
        }
      ]
    }
  },
  {
    id: 'subject-verb',
    title: '14. S-V Agreement',
    icon: '🤝',
    color: 'blue',
    details: {
      title: 'ความสอดคล้องของประธานและกริยา',
      description: 'ประธานและกริยาต้องเข้ากันได้ (เอกพจน์คู่เอกพจน์ พหูพจน์คู่พหูพจน์)',
      subtopics: [
        {
          name: 'Basic Rule',
          usage: 'ประธานเอกพจน์ (He, She, It, A cat) กริยาต้องเติม s/es',
          examples: [
            'He **walks** to school.',
            'The dog **barks** loudly.',
            'She **likes** pizza.',
            'It **rains** a lot here.',
            'My brother **plays** games.'
          ]
        },
        {
          name: 'Plural Subject',
          usage: 'ประธานพหูพจน์ (They, We, Cats) กริยาไม่ต้องเติม s',
          examples: [
            'They **walk** to school.',
            'Dogs **bark** loudly.',
            'We **like** pizza.',
            'My brothers **play** games.',
            'The students **study** hard.'
          ]
        },
        {
          name: 'Special Cases',
          usage: 'คำว่า Everyone, Someone, Nobody นับเป็นเอกพจน์เสมอ',
          examples: [
            '**Everyone is** ready.',
            '**Somebody has** stolen my bag.',
            '**No one knows** the answer.',
            '**Each** of the students **has** a book.',
            '**Neither** of them **is** correct.'
          ]
        }
      ]
    }
  },
  {
    id: 'word-formation',
    title: '15. Word Formation',
    icon: '🔤',
    color: 'rose',
    details: {
      title: 'การสร้างคำใหม่',
      subtopics: [
        {
          name: 'Prefix (คำนำหน้า)',
          usage: 'เติมหน้าคำรากศัพท์เพื่อเปลี่ยนความหมาย (เช่น ปฏิเสธ)',
          examples: [
            'Happy → **Un**happy (ไม่มีความสุข)',
            'Agree → **Dis**agree (ไม่เห็นด้วย)',
            'Possible → **Im**possible (เป็นไปไม่ได้)',
            'Write → **Re**write (เขียนใหม่)',
            'Legal → **Il**legal (ผิดกฎหมาย)'
          ]
        },
        {
          name: 'Suffix (คำลงท้าย)',
          usage: 'เติมท้ายคำรากศัพท์เพื่อเปลี่ยนหน้าที่ของคำ (Part of speech)',
          examples: [
            'Happy (Adj) → Happi**ness** (Noun)',
            'Teach (Verb) → Teach**er** (Noun)',
            'Beauty (Noun) → Beauti**ful** (Adj)',
            'Quick (Adj) → Quick**ly** (Adv)',
            'Act (Verb) → Act**ion** (Noun)'
          ]
        }
      ]
    }
  },
  {
    id: 'common-errors',
    title: '16. Common Errors',
    icon: '❌',
    color: 'amber',
    details: {
      title: 'ข้อผิดพลาดที่พบบ่อย',
      subtopics: [
        {
          name: 'Verb Patterns',
          usage: 'การใช้ Verb ผิดรูปแบบ',
          examples: [
            '❌ I am agree → ✅ I **agree**',
            '❌ She is go → ✅ She **goes**',
            '❌ He don’t know → ✅ He **doesn’t** know',
            '❌ I look forward to see you → ✅ I look forward to **seeing** you',
            '❌ I am boring (ฉันน่าเบื่อ) → ✅ I am **bored** (ฉันรู้สึกเบื่อ)'
          ]
        },
        {
          name: 'Prepositions',
          usage: 'การใช้บุพบทผิด',
          examples: [
            '❌ I am good in English → ✅ I am good **at** English',
            '❌ Married with John → ✅ Married **to** John',
            '❌ Listen me → ✅ Listen **to** me',
            '❌ Waiting you → ✅ Waiting **for** you',
            '❌ Discuss about politics → ✅ **Discuss** politics'
          ]
        }
      ]
    }
  },
  {
    id: 'punctuation',
    title: '17. Punctuation',
    icon: '🖊️',
    color: 'indigo',
    details: {
      title: 'เครื่องหมายวรรคตอน',
      subtopics: [
        {
          name: 'Common Marks',
          usage: 'เครื่องหมายที่ใช้บ่อยในประโยค',
          examples: [
            '**Full stop (.):** ใช้จบประโยคบอกเล่า เช่น I am happy**.**',
            '**Comma (,):** ใช้คั่นคำหรือประโยค เช่น I like apples**,** bananas**,** and oranges.',
            '**Question mark (?):** ใช้จบประโยคคำถาม เช่น Are you ok**?**',
            '**Exclamation mark (!):** ใช้แสดงอารมณ์ตกใจ เช่น Watch out**!**',
            '**Quotation marks (" "):** ใช้ยกคำพูด เช่น He said**,** **"**Hello**"**.'
          ]
        }
      ]
    }
  },
  {
    id: 'style',
    title: '18. Style & Register',
    icon: '👔',
    color: 'purple',
    details: {
      title: 'ระดับภาษา (ทางการ vs ไม่ทางการ)',
      subtopics: [
        {
          name: 'Formal Language',
          usage: 'ภาษาทางการ ใช้ในการเขียนธุรกิจ การสมัครงาน หรือคุยกับผู้ใหญ่',
          examples: [
            'I **would like to inquire** about...',
            'We **apologize** for the inconvenience.',
            '**Consequently**, we must leave.',
            'Please **inform** us immediately.',
            '**However**, it is expensive.'
          ]
        },
        {
          name: 'Informal Language',
          usage: 'ภาษากันเอง ใช้คุยกับเพื่อน ครอบครัว หรือแชท',
          examples: [
            'I **want to ask** about...',
            '**Sorry** for the trouble.',
            '**So**, we gotta go.',
            'Please **let us know** ASAP.',
            '**But**, it\'s pricey.'
          ]
        }
      ]
    }
  },
  {
    id: 'idioms',
    title: '19. Idiomatic Grammar',
    icon: '💬',
    color: 'cyan',
    details: {
      title: 'สำนวนทางไวยากรณ์',
      subtopics: [
        {
          name: 'Make vs Do',
          usage: 'Make (สร้างขึ้นมาใหม่), Do (ทำกิจกรรม/หน้าที่)',
          examples: [
            '**Make** a cake.',
            '**Do** homework.',
            '**Make** a decision.',
            '**Do** the dishes.',
            '**Make** a mistake.'
          ]
        },
        {
          name: 'Say vs Tell',
          usage: 'Tell ต้องมีกรรม (คนฟัง) ตามหลังเสมอ, Say พูดลอยๆ ได้',
          examples: [
            'He **said** hello.',
            'He **told me** a story.',
            'She **said** that she was tired.',
            'Please **tell him** to come.',
            'Don\'t **tell a lie**.'
          ]
        }
      ]
    }
  },
  {
    id: 'advanced',
    title: '20. Advanced Structures',
    icon: '🚀',
    color: 'slate',
    details: {
      title: 'โครงสร้างประโยคขั้นสูง',
      subtopics: [
        {
          name: 'Inversion (การกลับประโยค)',
          usage: 'นำคำปฏิเสธขึ้นต้นประโยค แล้วสลับกริยาช่วยมาไว้หน้าประธาน เพื่อเน้นความ',
          examples: [
            '**Never have I** seen such a thing. (ปกติ: I have never seen...)',
            '**Rarely do we** go there.',
            '**Not only did he** win, but he also broke the record.',
            '**Little did she** know about the surprise.',
            '**Had I** known, I would have helped.'
          ]
        },
        {
          name: 'Cleft Sentences (ประโยคแยก)',
          usage: 'โครงสร้าง It was... that... เพื่อเน้นย้ำส่วนใดส่วนหนึ่งของประโยค',
          examples: [
            '**It was John who** broke the window. (เน้นว่า จอห์น นะที่เป็นคนทำ)',
            '**What I need is** a holiday.',
            '**It was yesterday that** I saw him.',
            '**All I want is** you.',
            '**The person who** called was Mary.'
          ]
        }
      ]
    }
  }
];