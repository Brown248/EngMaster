import { GrammarDetail, GrammarTopic } from '../types';

// ใช้ Record<string, GrammarDetail> เพื่อระบุว่า key เป็น string และ value เป็น GrammarDetail
export const tenseData: Record<string, GrammarDetail> = {
    "Present Simple": {
        structure: "S + V.1 (s/es)",
        concept: "ใช้กับข้อเท็จจริง (Fact), กิจวัตร (Routine), และความจริงทั่วไป",
        examples: ["I eat rice every day.", "The sun rises in the east.", "She works at a bank."]
    },
    "Present Continuous": {
        structure: "S + is/am/are + V.ing",
        concept: "ใช้กับเหตุการณ์ที่กำลังเกิดขึ้นขณะพูด หรือ แผนการในอนาคตอันใกล้",
        examples: ["I am studying English now.", "Look! It is raining.", "We are meeting him tomorrow."]
    },
    "Present Perfect": {
        structure: "S + has/have + V.3",
        concept: "ใช้กับเหตุการณ์ที่เกิดขึ้นในอดีตและส่งผลถึงปัจจุบัน หรือเพิ่งจบลง",
        examples: ["I have lost my keys.", "She has lived here for 10 years.", "Have you ever been to Japan?"]
    },
    "Present Perfect Continuous": {
        structure: "S + has/have + been + V.ing",
        concept: "เน้นความต่อเนื่องของเหตุการณ์ตั้งแต่อดีตจนถึงปัจจุบัน",
        examples: ["It has been raining for 3 hours.", "I have been waiting for you all morning."]
    },
    "Past Simple": {
        structure: "S + V.2",
        concept: "ใช้กับเหตุการณ์ที่จบลงแล้วในอดีต (มีระบุเวลาชัดเจน)",
        examples: ["I went to the cinema yesterday.", "We lived in London in 2010.", "He didn't buy the car."]
    },
    "Past Continuous": {
        structure: "S + was/were + V.ing",
        concept: "ใช้กับเหตุการณ์ที่กำลังดำเนินอยู่ในอดีต ณ เวลาใดเวลาหนึ่ง",
        examples: ["I was sleeping at 10 PM last night.", "While I was cooking, the phone rang."]
    },
    "Past Perfect": {
        structure: "S + had + V.3",
        concept: "ใช้คู่กับ Past Simple เพื่อบอกว่าเหตุการณ์หนึ่งเกิดก่อน (Past Perf) อีกเหตุการณ์หนึ่ง (Past Sim)",
        examples: ["When I arrived, the train had left.", "She had finished her work before she went out."]
    },
    "Past Perfect Continuous": {
        structure: "S + had + been + V.ing",
        concept: "คล้าย Past Perfect แต่เน้นความต่อเนื่องของการกระทำที่เกิดก่อน",
        examples: ["He had been drinking milk out of the carton when Mom walked into the kitchen."]
    },
    "Future Simple": {
        structure: "S + will + V.inf",
        concept: "ใช้คาดเดาอนาคต, สัญญา, หรือตัดสินใจทันทีขณะพูด",
        examples: ["I will call you later.", "It will rain tomorrow.", "I think he will win."]
    },
    "Future Continuous": {
        structure: "S + will + be + V.ing",
        concept: "ใช้บอกเหตุการณ์ที่จะกำลังเกิดขึ้น ณ เวลาหนึ่งในอนาคต",
        examples: ["At 8 PM tomorrow, I will be eating dinner.", "Don't call me at 9, I will be sleeping."]
    },
    "Future Perfect": {
        structure: "S + will + have + V.3",
        concept: "ใช้บอกว่าเหตุการณ์จะเสร็จสมบูรณ์ ณ เวลาหนึ่งในอนาคต",
        examples: ["By next year, I will have graduated.", "She will have finished the report by 5 PM."]
    },
    "Future Perfect Continuous": {
        structure: "S + will + have + been + V.ing",
        concept: "เน้นความต่อเนื่องของการกระทำที่จะดำเนินไปจนถึงจุดหนึ่งในอนาคต",
        examples: ["By next month, I will have been working here for 2 years."]
    }
};

export const tenseGroups: GrammarTopic[] = [
    {
        title: "Present",
        icon: "☀️",
        color: "emerald",
        items: ["Present Simple", "Present Continuous", "Present Perfect", "Present Perfect Continuous"]
    },
    {
        title: "Past",
        icon: "🕰️",
        color: "amber",
        items: ["Past Simple", "Past Continuous", "Past Perfect", "Past Perfect Continuous"]
    },
    {
        title: "Future",
        icon: "🚀",
        color: "indigo",
        items: ["Future Simple", "Future Continuous", "Future Perfect", "Future Perfect Continuous"]
    }
];