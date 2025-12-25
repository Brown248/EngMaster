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
      description: 'พื้นฐานสำคัญของภาษาอังกฤษ แบ่งเป็น 9 ชนิด เลือกเรียนรู้ทีละเรื่องได้เลย',
      subtopics: [
        {
          name: 'Noun (คำนาม)',
          usage: 'ใช้เรียกชื่อคน สัตว์ สิ่งของ สถานที่ หรือความคิด',
          structure: 'Common, Proper, Countable, Uncountable',
          examples: [
            '**Common:** The **cat** is sleeping.',
            '**Proper:** I live in **Bangkok**.',
            '**Abstract:** **Love** is beautiful.'
          ]
        },
        {
          name: 'Pronoun (คำสรรพนาม)',
          usage: 'ใช้แทนคำนามเพื่อไม่ให้พูดซ้ำ',
          structure: 'Subject (I, He), Object (me, him), Possessive (my, mine)',
          examples: [
            '**She** loves **her** dog.',
            'This book is **mine**.',
            'They helper **themselves**.'
          ]
        },
        {
          name: 'Verb (คำกริยา)',
          usage: 'แสดงการกระทำ (Action) หรือสถานะ (State)',
          structure: 'Main Verb, Helper Verb, Modal Verb',
          examples: [
            'She **runs** fast.',
            'He **is** a teacher.',
            'You **should** go now.'
          ]
        },
        {
          name: 'Adjective (คำคุณศัพท์)',
          usage: 'ขยายคำนามเพื่อบอกลักษณะ หรือเปรียบเทียบ (Comparison)',
          structure: 'Adjective -> Comparative (-er/more) -> Superlative (-est/the most)',
          explanation: `
            1. **General:** บอกลักษณะทั่วไป เช่น big, small, good
            2. **Comparative (ขั้นกว่า):** เปรียบเทียบ 2 สิ่ง มักมี 'than' ต่อท้าย
               - คำสั้น: เติม -er (tall -> taller)
               - คำยาว: ใช้ more นำหน้า (beautiful -> more beautiful)
            3. **Superlative (ขั้นสุด):** เปรียบเทียบ 3 สิ่งขึ้นไป มักมี 'the' นำหน้า
               - คำสั้น: เติม -est (tall -> the tallest)
               - คำยาว: ใช้ the most นำหน้า (beautiful -> the most beautiful)
          `,
          examples: [
            '**General:** A **fast** car.',
            '**Comparative:** This car is **faster than** that one. (สังเกต -er + than)',
            '**Superlative:** It is the **fastest** car in the world. (สังเกต the + -est)',
            '**Long Word:** This puzzle is **more difficult than** the last one.',
            '**Irregular:** good -> **better** -> **the best**'
          ]
        },
        {
          name: 'Adverb (คำกริยาวิเศษณ์)',
          usage: 'ขยายกริยา คุณศัพท์ หรือกริยาวิเศษณ์ด้วยกันเอง (บอกว่าทำอย่างไร/ที่ไหน/เมื่อไหร่)',
          structure: 'Manner (-ly), Time, Place, Frequency',
          examples: [
            'He walks **slowly**.',
            'She **always** drinks coffee.',
            'It is **very** hot.'
          ]
        },
        {
          name: 'Preposition (คำบุพบท)',
          usage: 'เชื่อมคำนามกับส่วนอื่น เพื่อบอกตำแหน่ง เวลา หรือทิศทาง',
          structure: 'in, on, at, under, between, before, after',
          examples: [
            'The book is **on** the table.',
            'We meet **at** 10 AM.',
            'He walked **into** the room.'
          ]
        },
        {
          name: 'Conjunction (คำสันธาน)',
          usage: 'เชื่อมคำ วลี หรือประโยคเข้าด้วยกัน',
          structure: 'FANBOYS (for, and, nor, but, or, yet, so), Because, Although',
          examples: [
            'I like tea **and** coffee.',
            'He is poor **but** happy.',
            'I stayed home **because** it rained.'
          ]
        },
        {
          name: 'Determiner (คำนำหน้านาม)',
          usage: 'วางหน้าคำนามเพื่อระบุความเจาะจงหรือจำนวน',
          structure: 'a, an, the, this, that, some, any, my, your',
          examples: [
            'I saw **an** elephant.',
            '**The** sun is hot.',
            'Do you have **any** money?'
          ]
        },
        {
          name: 'Interjection (คำอุทาน)',
          usage: 'แสดงอารมณ์ความรู้สึกฉับพลัน',
          structure: 'Oh!, Wow!, Ouch!, Hey!',
          examples: [
            '**Wow!** That is amazing.',
            '**Ouch!** You stepped on my foot.',
            '**Hey!** Look at this.'
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
        // Present Tenses
        {
          name: 'Present Simple',
          structure: 'S + V1 (s/es)',
          usage: 'ความจริง, กิจวัตร',
          examples: ['She **eats** rice.', 'The sun **rises** in the east.']
        },
        {
          name: 'Present Continuous',
          structure: 'S + is/am/are + V-ing',
          usage: 'กำลังทำอยู่',
          examples: ['I **am studying** now.', 'It **is raining**.']
        },
        {
          name: 'Present Perfect',
          structure: 'S + has/have + V3',
          usage: 'เพิ่งจบ, ประสบการณ์, ส่งผลถึงปัจจุบัน',
          examples: ['I **have finished** my work.', 'She **has gone** to Japan.']
        },
        {
          name: 'Present Perfect Continuous',
          structure: 'S + has/have + been + V-ing',
          usage: 'ทำต่อเนื่องตั้งแต่อดีตจนถึงปัจจุบัน',
          examples: ['I **have been waiting** for 2 hours.']
        },
        // Past Tenses
        {
          name: 'Past Simple',
          structure: 'S + V2',
          usage: 'จบแล้วในอดีต',
          examples: ['I **went** to school yesterday.']
        },
        {
          name: 'Past Continuous',
          structure: 'S + was/were + V-ing',
          usage: 'กำลังทำในอดีต',
          examples: ['I **was sleeping** at 9 PM last night.']
        },
        {
          name: 'Past Perfect',
          structure: 'S + had + V3',
          usage: 'เกิดก่อนอีกเหตุการณ์ในอดีต',
          examples: ['When I arrived, the train **had left**.']
        },
        {
          name: 'Past Perfect Continuous',
          structure: 'S + had + been + V-ing',
          usage: 'ทำต่อเนื่องในอดีตก่อนเกิดอีกเหตุการณ์',
          examples: ['He **had been driving** for 5 hours before he stopped.']
        },
        // Future Tenses
        {
          name: 'Future Simple',
          structure: 'S + will + V1',
          usage: 'อนาคตทั่วไป, การตัดสินใจทันที',
          examples: ['I **will help** you.']
        },
        {
          name: 'Future Continuous',
          structure: 'S + will + be + V-ing',
          usage: 'กำลังจะทำในอนาคต',
          examples: ['At 8 PM tomorrow, I **will be watching** TV.']
        },
        {
          name: 'Future Perfect',
          structure: 'S + will + have + V3',
          usage: 'จะเสร็จสมบูรณ์ในอนาคต',
          examples: ['I **will have finished** by tomorrow.']
        },
        {
          name: 'Future Perfect Continuous',
          structure: 'S + will + have + been + V-ing',
          usage: 'จะทำต่อเนื่องไปจนถึงจุดหนึ่งในอนาคต',
          examples: ['By next year, I **will have been working** here for 10 years.']
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
      description: 'เรียนรู้รูปประโยคประธานกระทำ (Active) และประธานถูกกระทำ (Passive)',
      subtopics: [
        {
          name: 'Active Voice',
          usage: 'ประธานเป็นผู้กระทำกริยา (เน้นคนทำ)',
          structure: 'Subject + Verb + Object',
          examples: [
            'I **eat** rice.',
            'The hunter **killed** the lion.'
          ]
        },
        {
          name: 'Passive Voice',
          usage: 'ประธานเป็นผู้ถูกกระทำ (เน้นสิ่งที่ถูกทำ)',
          structure: 'Subject + Be + V3 (+ by Agent)',
          examples: [
            'Rice **is eaten** by me.',
            'The lion **was killed** by the hunter.',
            'The house **is being built**.'
          ]
        }
      ]
    }
  }
];