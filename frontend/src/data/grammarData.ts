import { GrammarDetail, GrammarTopic } from '../types';

export const tenseData: Record<string, GrammarDetail> = {
    // --- Present Tenses ---
    "Present Simple": {
        structure: "S + V.1 (s/es)",
        concept: "ใช้กับความจริงทั่วไป (Fact), กิจวัตรประจำวัน (Routine), และตารางเวลาที่แน่นอน",
        examples: ["The sun rises in the east.", "I drink coffee every morning.", "The train leaves at 9 AM."]
    },
    "Present Continuous": {
        structure: "S + is/am/are + V.ing",
        concept: "ใช้กับเหตุการณ์ที่กำลังเกิดขึ้นขณะพูด หรือแผนการในอนาคตอันใกล้ที่แน่นอน",
        examples: ["She is sleeping right now.", "We are meeting him tonight.", "Look! It is raining."]
    },
    "Present Perfect": {
        structure: "S + has/have + V.3",
        concept: "ใช้กับเหตุการณ์ที่เกิดขึ้นในอดีตและส่งผลถึงปัจจุบัน หรือประสบการณ์ชีวิต (ไม่ระบุเวลา)",
        examples: ["I have lost my wallet.", "She has visited Japan twice.", "They have lived here for 10 years."]
    },
    "Present Perfect Continuous": {
        structure: "S + has/have + been + V.ing",
        concept: "เน้นความต่อเนื่องของการกระทำตั้งแต่อดีตจนถึงปัจจุบัน (ยังทำอยู่)",
        examples: ["It has been raining for 3 hours.", "I have been waiting for you all day."]
    },

    // --- Past Tenses ---
    "Past Simple": {
        structure: "S + V.2",
        concept: "ใช้กับเหตุการณ์ที่จบลงแล้วในอดีต (มักมีคำบอกเวลา เช่น yesterday, last year)",
        examples: ["I walked to school yesterday.", "He bought a new car last month.", "They didn't come to the party."]
    },
    "Past Continuous": {
        structure: "S + was/were + V.ing",
        concept: "ใช้กับเหตุการณ์ที่กำลังดำเนินอยู่ในอดีต ณ ช่วงเวลาหนึ่ง หรือมีเหตุการณ์อื่นเข้ามาแทรก",
        examples: ["I was eating dinner at 7 PM.", "While I was sleeping, the phone rang."]
    },
    "Past Perfect": {
        structure: "S + had + V.3",
        concept: "ใช้บอกเหตุการณ์ที่ 'เกิดก่อน' และ 'จบลง' ก่อนที่จะมีอีกเหตุการณ์ในอดีตเกิดขึ้นตามมา",
        examples: ["When I arrived, the train had left.", "She had finished work before she went out."]
    },
    "Past Perfect Continuous": {
        structure: "S + had + been + V.ing",
        concept: "เน้นความต่อเนื่องของการกระทำที่เกิดก่อนอีกเหตุการณ์หนึ่งในอดีต",
        examples: ["He had been waiting for 2 hours when she finally arrived."]
    },

    // --- Future Tenses ---
    "Future Simple": {
        structure: "S + will + V.inf",
        concept: "ใช้คาดเดาอนาคต, สัญญา, หรือตัดสินใจทันทีขณะพูด",
        examples: ["I think it will rain.", "I will help you.", "Someone is knocking. I will open the door."]
    },
    "Future Continuous": {
        structure: "S + will + be + V.ing",
        concept: "ใช้บอกเหตุการณ์ที่จะกำลังเกิดขึ้น ณ เวลาที่ระบุไว้ในอนาคต",
        examples: ["At 8 PM tomorrow, I will be watching TV.", "Don't call me at 7, I will be driving."]
    },
    "Future Perfect": {
        structure: "S + will + have + V.3",
        concept: "ใช้บอกว่าเหตุการณ์จะเสร็จสมบูรณ์ ณ เวลาหนึ่งในอนาคต",
        examples: ["By next year, I will have graduated.", "She will have finished the report by 5 PM."]
    },
    "Future Perfect Continuous": {
        structure: "S + will + have + been + V.ing",
        concept: "เน้นความต่อเนื่องของการกระทำที่จะดำเนินไปจนถึงจุดหนึ่งในอนาคต",
        examples: ["By next month, I will have been working here for 5 years."]
    },

    // --- Passive Voice ---
    "Passive Voice (Present)": {
        structure: "S + is/am/are + V.3",
        concept: "ประธานเป็นผู้ถูกกระทำ (ในปัจจุบัน)",
        examples: ["English is spoken all over the world.", "The room is cleaned every day."]
    },
    "Passive Voice (Past)": {
        structure: "S + was/were + V.3",
        concept: "ประธานเป็นผู้ถูกกระทำ (ในอดีต)",
        examples: ["This house was built in 1990.", "My phone was stolen yesterday."]
    },

    // --- Conditionals ---
    "Zero Conditional": {
        structure: "If + Pres Sim, Pres Sim",
        concept: "ใช้กับความจริงทั่วไป หรือวิทยาศาสตร์ (เป็นจริงเสมอ)",
        examples: ["If you mix red and yellow, you get orange.", "If water reaches 100 degrees, it boils."]
    },
    "First Conditional": {
        structure: "If + Pres Sim, will + V.inf",
        concept: "ใช้กับเหตุการณ์ที่มีโอกาสเกิดขึ้นสูงในอนาคต (เป็นไปได้)",
        examples: ["If it rains, I will stay home.", "If you study hard, you will pass the exam."]
    },
    "Second Conditional": {
        structure: "If + Past Sim, would + V.inf",
        concept: "ใช้สมมติเหตุการณ์ที่เป็นไปไม่ได้ในปัจจุบัน หรือจินตนาการ",
        examples: ["If I were you, I would buy that car.", "If I won the lottery, I would travel the world."]
    },
    "Third Conditional": {
        structure: "If + Past Perf, would have + V.3",
        concept: "ใช้สมมติเหตุการณ์ในอดีตที่ตรงข้ามกับความจริง (เสียดาย/อยากแก้ไข)",
        examples: ["If I had known, I would have helped you.", "If she had driven carefully, she wouldn't have crashed."]
    },

    // --- Parts of Speech ---
    "Noun (คำนาม)": {
        structure: "คน, สัตว์, สิ่งของ, สถานที่, นามธรรม",
        concept: "ทำหน้าที่เป็นประธาน (Subject) หรือกรรม (Object) ของประโยค",
        examples: ["The *cat* is cute.", "I love *Bangkok*.", "*Happiness* is important."]
    },
    "Verb (คำกริยา)": {
        structure: "Action / State",
        concept: "คำแสดงการกระทำ หรือสถานะความเป็นอยู่",
        examples: ["She *runs* fast.", "He *is* a doctor.", "They *play* football."]
    },
    "Adjective (คำคุณศัพท์)": {
        structure: "ขยาย Noun",
        concept: "วางหน้าคำนาม หรือหลัง V.to be เพื่อบอกลักษณะ",
        examples: ["A *big* house.", "The car is *red*.", "She looks *beautiful*."]
    },
    "Adverb (คำกริยาวิเศษณ์)": {
        structure: "ขยาย Verb, Adj, หรือ Adverb อื่น",
        concept: "มักลงท้ายด้วย -ly บอกว่าทำอย่างไร, ที่ไหน, เมื่อไหร่, บ่อยแค่ไหน",
        examples: ["He walks *slowly*.", "She is *very* smart.", "I *always* wake up early."]
    }
};

export const grammarCategories: GrammarTopic[] = [
    {
        title: "Present Tenses",
        icon: "☀️",
        color: "emerald",
        items: ["Present Simple", "Present Continuous", "Present Perfect", "Present Perfect Continuous"]
    },
    {
        title: "Past Tenses",
        icon: "🕰️",
        color: "amber",
        items: ["Past Simple", "Past Continuous", "Past Perfect", "Past Perfect Continuous"]
    },
    {
        title: "Future Tenses",
        icon: "🚀",
        color: "indigo",
        items: ["Future Simple", "Future Continuous", "Future Perfect", "Future Perfect Continuous"]
    },
    {
        title: "Passive Voice",
        icon: "🛡️",
        color: "blue",
        items: ["Passive Voice (Present)", "Passive Voice (Past)"]
    },
    {
        title: "If-Clauses",
        icon: "🔀",
        color: "rose",
        items: ["Zero Conditional", "First Conditional", "Second Conditional", "Third Conditional"]
    },
    {
        title: "Parts of Speech",
        icon: "🧩",
        color: "purple",
        items: ["Noun (คำนาม)", "Verb (คำกริยา)", "Adjective (คำคุณศัพท์)", "Adverb (คำกริยาวิเศษณ์)"]
    }
];