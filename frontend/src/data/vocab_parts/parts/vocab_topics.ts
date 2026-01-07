import { VocabWord } from '../../../types';

export const vocab_topics: VocabWord[] = [
  // Food & Drink
  { id: 1, word: "Appetizer", meaning: "อาหารเรียกน้ำย่อย", partOfSpeech: "n.", example: "Order an appetizer.", category: "General", topic: "Food & Drink", level: "Intermediate" },
  { id: 2, word: "Beverage", meaning: "เครื่องดื่ม", partOfSpeech: "n.", example: "Hot beverages.", category: "General", topic: "Food & Drink", level: "Intermediate" },
  { id: 3, word: "Cuisine", meaning: "อาหารประจำชาติ", partOfSpeech: "n.", example: "Thai cuisine.", category: "General", topic: "Food & Drink", level: "Advanced" },
  { id: 4, word: "Dessert", meaning: "ของหวาน", partOfSpeech: "n.", example: "Chocolate cake for dessert.", category: "General", topic: "Food & Drink", level: "Beginner" },
  { id: 5, word: "Ingredient", meaning: "ส่วนผสม", partOfSpeech: "n.", example: "Fresh ingredients.", category: "General", topic: "Food & Drink", level: "Intermediate" },
  
  // Animals
  { id: 6, word: "Mammal", meaning: "สัตว์เลี้ยงลูกด้วยนม", partOfSpeech: "n.", example: "Whales are mammals.", category: "General", topic: "Animals", level: "Intermediate" },
  { id: 7, word: "Predator", meaning: "นักล่า", partOfSpeech: "n.", example: "Lions are predators.", category: "General", topic: "Animals", level: "Advanced" },
  { id: 8, word: "Reptile", meaning: "สัตว์เลื้อยคลาน", partOfSpeech: "n.", example: "Snakes are reptiles.", category: "General", topic: "Animals", level: "Intermediate" },
  
  // Technology
  { id: 9, word: "Algorithm", meaning: "อัลกอริทึม", partOfSpeech: "n.", example: "Search algorithm.", category: "General", topic: "Technology", level: "Advanced" },
  { id: 10, word: "Database", meaning: "ฐานข้อมูล", partOfSpeech: "n.", example: "Update the database.", category: "General", topic: "Technology", level: "Intermediate" },
  
  // Business
  { id: 11, word: "Entrepreneur", meaning: "ผู้ประกอบการ", partOfSpeech: "n.", example: "Successful entrepreneur.", category: "Business", topic: "Business", level: "Advanced" },
  { id: 12, word: "Investment", meaning: "การลงทุน", partOfSpeech: "n.", example: "High return investment.", category: "Business", topic: "Business", level: "Intermediate" },
  
  // (เพิ่มคำศัพท์อื่นๆ ตามต้องการ โดยต้องมี id, word, meaning เป็นหลัก ส่วนอื่นๆ optional ได้)
];