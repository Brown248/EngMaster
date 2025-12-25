// src/data/grammarData.ts
import { GrammarTopic } from '../types';

export const grammarTopics: GrammarTopic[] = [
  {
    id: 'parts-of-speech',
    title: '1. Parts of Speech (ชนิดของคำ)',
    icon: '🧩',
    color: 'indigo',
    details: {
      title: 'ชนิดของคำ (Parts of Speech)',
      description: 'พื้นฐานสำคัญของภาษาอังกฤษ เจาะลึกครบทั้ง 9 ชนิด',
      subtopics: [
        {
          name: 'Noun (คำนาม)',
          usage: 'ใช้เรียกชื่อคน สัตว์ สิ่งของ สถานที่ (มี 8 ประเภทหลัก)',
          structure: 'Common, Proper, Concrete, Abstract, Countable, Uncountable, Collective, Compound',
          examples: [
            '**Common:** I saw a **dog**.',
            '**Proper:** She lives in **Bangkok**.',
            '**Abstract:** **Love** is all around.',
            '**Collective:** The **team** won the match.',
            '**Compound:** I need some **toothpaste**.'
          ]
        },
        {
          name: 'Pronoun (สรรพนาม)',
          usage: 'ใช้แทนคำนาม (มี 9 ประเภท)',
          structure: 'Subject, Object, Possessive, Reflexive, Demonstrative, Relative, Interrogative, Indefinite, Reciprocal',
          examples: [
            '**Subject:** **She** loves cats.',
            '**Reflexive:** She taught **herself** English.',
            '**Relative:** The man **who** called is here.',
            '**Indefinite:** **Someone** is knocking.',
            '**Reciprocal:** They help **each other**.'
          ]
        },
        {
          name: 'Verb (กริยา)',
          usage: 'แสดงการกระทำหรือสภาวะ',
          structure: 'Action, Stative, Linking, Transitive, Intransitive, Auxiliary, Modal',
          examples: [
            '**Action:** She **runs** fast.',
            '**Stative:** I **know** him.',
            '**Linking:** He **seems** tired.',
            '**Transitive:** I **eat** an apple. (ต้องการกรรม)',
            '**Modal:** You **must** go.'
          ]
        },
        {
          name: 'Adjective (คุณศัพท์)',
          usage: 'ขยายคำนาม บอกลักษณะ หรือเปรียบเทียบ',
          structure: 'Descriptive, Quantitative, Demonstrative, Possessive, Comparative, Superlative',
          examples: [
            '**Descriptive:** A **beautiful** house.',
            '**Order:** A **beautiful small old wooden** house.',
            '**Comparative:** This car is **bigger** than that one.',
            '**Superlative:** She is the **smartest** student.',
            '**Possessive:** **My** car is red.'
          ]
        },
        {
          name: 'Adverb (วิเศษณ์)',
          usage: 'ขยายกริยา คุณศัพท์ หรือวิเศษณ์ด้วยกันเอง',
          structure: 'Manner, Time, Frequency, Place, Degree',
          examples: [
            '**Manner:** He speaks **clearly**.',
            '**Frequency:** I **often** go there.',
            '**Degree:** It is **very** hot.',
            '**Time:** Do it **now**.',
            '**Place:** Come **here**.'
          ]
        },
        {
          name: 'Preposition (บุพบท)',
          usage: 'เชื่อมคำเพื่อบอกตำแหน่ง เวลา หรือความสัมพันธ์',
          structure: 'Place, Time, Movement, Cause',
          examples: [
            '**Place:** The keys are **under** the table.',
            '**Time:** See you **at** 5 PM.',
            '**Movement:** Walk **into** the room.',
            '**Cause:** I stayed home **because of** the rain.'
          ]
        },
        {
          name: 'Conjunction (สันธาน)',
          usage: 'เชื่อมคำ วลี หรือประโยค',
          structure: 'Coordinating (FANBOYS), Subordinating, Correlative',
          examples: [
            '**Coordinating:** I like coffee **and** tea.',
            '**Subordinating:** I stayed home **because** it rained.',
            '**Correlative:** **Both** Tom **and** Jerry are here.'
          ]
        },
        {
          name: 'Determiner (คำนำหน้านาม)',
          usage: 'วางหน้าคำนามเพื่อระบุความชี้เฉพาะ',
          structure: 'Articles, Demonstratives, Quantifiers, Possessives',
          examples: [
            '**Article:** I have **an** apple.',
            '**Quantifier:** I need **some** help.',
            '**Demonstrative:** **This** book is mine.',
            '**Possessive:** **My** cat is cute.'
          ]
        },
        {
          name: 'Interjection (คำอุทาน)',
          usage: 'แสดงอารมณ์ความรู้สึก',
          structure: 'Exclamation marks (!)',
          examples: [
            '**Wow!** Amazing!',
            '**Oh!** I forgot my keys.',
            '**Hey!** Come here.'
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
        { name: 'Present Simple', structure: 'S + V1 (s/es)', usage: 'ความจริง, กิจวัตร', examples: ['She **eats** rice.', 'The sun **rises** in the east.', 'He **does not** like spicy food.', 'Water **boils** at 100°C.', 'I **usually** wake up at 6 AM.'] },
        { name: 'Present Continuous', structure: 'S + is/am/are + V-ing', usage: 'กำลังทำอยู่', examples: ['I **am studying** now.', 'It **is raining**.', 'She **is reading** a book.', 'They **are playing** football.', 'We **are having** dinner.'] },
        { name: 'Present Perfect', structure: 'S + has/have + V3', usage: 'เพิ่งจบ, ประสบการณ์', examples: ['I **have finished** my work.', 'She **has gone** to Japan.', 'We **have lived** here for 10 years.', 'He **has lost** his keys.', '**Have** you **seen** this movie?'] },
        { name: 'Present Perfect Continuous', structure: 'S + has/have + been + V-ing', usage: 'ทำต่อเนื่องตั้งแต่อดีตถึงปัจจุบัน', examples: ['I **have been waiting** for 2 hours.', 'It **has been raining** all day.', 'She **has been working** here since 2010.', 'They **have been playing** games.', 'He **has been sleeping** lately.'] },
        // Past
        { name: 'Past Simple', structure: 'S + V2', usage: 'จบแล้วในอดีต', examples: ['I **went** to school yesterday.', 'She **bought** a new car.', 'We **watched** a movie last night.', 'He **did not** come.', '**Did** you **see** him?'] },
        { name: 'Past Continuous', structure: 'S + was/were + V-ing', usage: 'กำลังทำในอดีต', examples: ['I **was sleeping** at 9 PM.', 'They **were playing** when it rained.', 'She **was cooking** dinner.', 'We **were watching** TV.', 'He **was reading** a book.'] },
        { name: 'Past Perfect', structure: 'S + had + V3', usage: 'เกิดก่อนอีกเหตุการณ์ในอดีต', examples: ['When I arrived, the train **had left**.', 'She **had finished** work before she went out.', 'I realized I **had lost** my wallet.', 'He **had never been** there before.', 'They **had eaten** already.'] },
        { name: 'Past Perfect Continuous', structure: 'S + had + been + V-ing', usage: 'ทำต่อเนื่องในอดีตก่อนเกิดอีกเหตุการณ์', examples: ['He **had been driving** for 5 hours.', 'It **had been raining** before we arrived.', 'They **had been waiting** long.', 'She **had been crying**.', 'I **had been working** hard.'] },
        // Future
        { name: 'Future Simple', structure: 'S + will + V1', usage: 'อนาคตทั่วไป, ตัดสินใจทันที', examples: ['I **will help** you.', 'It **will rain** tomorrow.', 'She **will call** you later.', 'We **will visit** Japan.', 'I **promise** I **will** go.'] },
        { name: 'Future Continuous', structure: 'S + will + be + V-ing', usage: 'กำลังจะทำในอนาคต', examples: ['At 8 PM, I **will be watching** TV.', 'She **will be working** tomorrow.', 'We **will be flying** to London.', 'They **will be sleeping**.', '**Will** you **be using** the car?'] },
        { name: 'Future Perfect', structure: 'S + will + have + V3', usage: 'จะเสร็จสมบูรณ์ในอนาคต', examples: ['I **will have finished** by tomorrow.', 'She **will have left** by then.', 'We **will have arrived** by 6 PM.', 'He **will have done** it.', 'They **will have eaten**.'] },
        { name: 'Future Perfect Continuous', structure: 'S + will + have + been + V-ing', usage: 'จะทำต่อเนื่องถึงจุดหนึ่งในอนาคต', examples: ['By next year, I **will have been working** here for 10 years.', 'She **will have been sleeping** for 8 hours.', 'We **will have been driving** all day.', 'They **will have been waiting**.', 'He **will have been studying**.'] }
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
      description: 'เรียนรู้รูปประโยคประธานกระทำและประธานถูกกระทำ',
      subtopics: [
        { name: 'Active Voice', usage: 'ประธานทำเอง', structure: 'S + V + O', examples: ['I **eat** rice.', 'She **writes** a letter.'] },
        { name: 'Passive Voice', usage: 'ประธานถูกกระทำ', structure: 'Be + V3', examples: ['Rice **is eaten** by me.', 'A letter **was written** by her.'] }
      ]
    }
  }
];