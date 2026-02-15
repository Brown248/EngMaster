import { MainCategory } from '../../../types';

export const othersCategories: MainCategory[] = [
  // --- 5. PRONOUN (คำสรรพนาม) ---
  {
    id: 'pos-pronoun',
    title: '5. Pronoun (คำสรรพนาม)',
    icon: '👤',
    color: 'indigo',
    subCategories: [
      {
        id: 'pro-subject',
        title: '1. Subject Pronouns (ประธาน)',
        words: [
          { id: 'pro1', word: 'I', meaning: 'ฉัน', example: '**I** am a student.\nฉันเป็นนักเรียน' },
          { id: 'pro2', word: 'You', meaning: 'คุณ', example: '**You** look happy today.\nวันนี้คุณดูมีความสุขนะ' },
          { id: 'pro3', word: 'He', meaning: 'เขา (ผู้ชาย)', example: '**He** plays football very well.\nเขาเล่นฟุตบอลเก่งมาก' },
          { id: 'pro4', word: 'She', meaning: 'เธอ (ผู้หญิง)', example: '**She** is reading a book.\nเธอกำลังอ่านหนังสือ' },
          { id: 'pro5', word: 'It', meaning: 'มัน (สัตว์/สิ่งของ)', example: '**It** is raining outside.\nข้างนอกฝนกำลังตก' },
          { id: 'pro6', word: 'We', meaning: 'พวกเรา', example: '**We** are going to the cinema.\nพวกเรากำลังจะไปโรงหนัง' },
          { id: 'pro7', word: 'They', meaning: 'พวกเขา/พวกมัน', example: '**They** live in London.\nพวกเขาอาศัยอยู่ในลอนดอน' }
        ]
      },
      {
        id: 'pro-object',
        title: '2. Object Pronouns (กรรม)',
        words: [
          { id: 'pro8', word: 'Me', meaning: 'ฉัน (กรรม)', example: 'She gave the book to **me**.\nเธอให้หนังสือเล่มนั้นกับฉัน' },
          { id: 'pro9', word: 'You', meaning: 'คุณ (กรรม)', example: 'I will call **you** later.\nฉันจะโทรหาคุณทีหลัง' },
          { id: 'pro10', word: 'Him', meaning: 'เขา (กรรม)', example: 'I saw **him** at the park.\nฉันเจอเขาที่สวนสาธารณะ' },
          { id: 'pro11', word: 'Her', meaning: 'เธอ (กรรม)', example: 'Please tell **her** the truth.\nบอกความจริงกับเธอเถอะ' },
          { id: 'pro12', word: 'It', meaning: 'มัน (กรรม)', example: 'I don\'t like **it**.\nฉันไม่ชอบมันเลย' },
          { id: 'pro13', word: 'Us', meaning: 'พวกเรา (กรรม)', example: 'They invited **us** to the party.\nพวกเขาชวนพวกเราไปงานปาร์ตี้' },
          { id: 'pro14', word: 'Them', meaning: 'พวกเขา (กรรม)', example: 'I don\'t know **them**.\nฉันไม่รู้จักพวกเขา' }
        ]
      },
      {
        id: 'pro-possessive',
        title: '3. Possessive Pronouns (แสดงความเป็นเจ้าของ)',
        words: [
          { id: 'pro15', word: 'Mine', meaning: 'ของฉัน', example: 'This phone is **mine**.\nโทรศัพท์เครื่องนี้เป็นของฉัน' },
          { id: 'pro16', word: 'Yours', meaning: 'ของคุณ', example: 'Is this seat **yours**?\nที่นั่งนี้ของคุณหรือเปล่า?' },
          { id: 'pro17', word: 'His', meaning: 'ของเขา', example: 'That car is **his**.\nรถคันนั้นเป็นของเขา' },
          { id: 'pro18', word: 'Hers', meaning: 'ของเธอ', example: 'The choice is **hers**.\nการตัดสินใจเป็นของเธอ' },
          { id: 'pro19', word: 'Ours', meaning: 'ของพวกเรา', example: 'The world is **ours**.\nโลกใบนี้เป็นของพวกเรา' },
          { id: 'pro20', word: 'Theirs', meaning: 'ของพวกเขา', example: 'That house is **theirs**.\nบ้านหลังนั้นเป็นของพวกเขา' }
        ]
      },
      {
        id: 'pro-reflexive',
        title: '4. Reflexive Pronouns (สะท้อนตัวเอง)',
        words: [
          { id: 'pro21', word: 'Myself', meaning: 'ตัวฉันเอง', example: 'I hurt **myself**.\nฉันทำตัวเองเจ็บ' },
          { id: 'pro22', word: 'Yourself', meaning: 'ตัวคุณเอง', example: 'Make **yourself** at home.\nทำตัวตามสบายเหมือนอยู่บ้านนะ' },
          { id: 'pro23', word: 'Himself', meaning: 'ตัวเขาเอง', example: 'He looks at **himself** in the mirror.\nเขาส่องกระจกดูตัวเอง' },
          { id: 'pro24', word: 'Herself', meaning: 'ตัวเธอเอง', example: 'She bought **herself** a gift.\nเธอซื้อของขวัญให้ตัวเอง' },
          { id: 'pro25', word: 'Itself', meaning: 'ตัวมันเอง', example: 'The cat washes **itself**.\nแมวกำลังทำความสะอาดตัวเอง' },
          { id: 'pro26', word: 'Ourselves', meaning: 'ตัวพวกเราเอง', example: 'We built this house **ourselves**.\nพวกเราสร้างบ้านหลังนี้ด้วยตัวเอง' },
          { id: 'pro27', word: 'Themselves', meaning: 'ตัวพวกเขาเอง', example: 'They enjoyed **themselves**.\nพวกเขาสนุกกันมาก (ด้วยตัวพวกเขาเอง)' }
        ]
      },
      {
        id: 'pro-indefinite',
        title: '5. Indefinite Pronouns (ไม่เจาะจง)',
        words: [
          { id: 'pro28', word: 'Someone', meaning: 'บางคน', example: '**Someone** is knocking at the door.\nมีใครบางคนเคาะประตู' },
          { id: 'pro29', word: 'Anyone', meaning: 'ใครก็ได้', example: 'Can **anyone** answer this?\nมีใครตอบข้อนี้ได้บ้าง?' },
          { id: 'pro30', word: 'Everyone', meaning: 'ทุกคน', example: '**Everyone** loves pizza.\nทุกคนชอบกินพิซซ่า' },
          { id: 'pro31', word: 'No one', meaning: 'ไม่มีใคร', example: '**No one** knows the answer.\nไม่มีใครรู้คำตอบ' },
          { id: 'pro32', word: 'Something', meaning: 'บางสิ่ง', example: 'I have **something** for you.\nฉันมีบางอย่างจะให้คุณ' },
          { id: 'pro33', word: 'Anything', meaning: 'อะไรก็ได้', example: 'Do you need **anything** else?\nคุณต้องการอะไรอีกไหม?' },
          { id: 'pro34', word: 'Everything', meaning: 'ทุกสิ่ง', example: '**Everything** is ready.\nทุกอย่างพร้อมแล้ว' },
          { id: 'pro35', word: 'Nothing', meaning: 'ไม่มีอะไร', example: 'There is **nothing** in the box.\nไม่มีอะไรในกล่องเลย' },
          { id: 'pro36', word: 'Each', meaning: 'แต่ละคน', example: '**Each** of you must try.\nพวกคุณแต่ละคนต้องพยายาม' },
          { id: 'pro37', word: 'Another', meaning: 'อีกคน/อีกอัน', example: 'That one is bad; show me **another**.\nอันนั้นมันแย่ ขอดูอีกอันสิ' },
          { id: 'pro38', word: 'Both', meaning: 'ทั้งคู่', example: '**Both** are correct.\nถูกทั้งคู่เลย' },
          { id: 'pro39', word: 'Few', meaning: 'จำนวนน้อย', example: '**Few** attend the meeting.\nมีคนเข้าร่วมประชุมน้อยมาก' },
          { id: 'pro40', word: 'Many', meaning: 'จำนวนมาก', example: '**Many** agree with me.\nหลายคนเห็นด้วยกับฉัน' }
        ]
      },
      {
        id: 'pro-relative',
        title: '6. Relative Pronouns (เชื่อมประโยค)',
        words: [
          { id: 'pro41', word: 'Who', meaning: 'ผู้ซึ่ง (คน)', example: 'The man **who** called is my dad.\nผู้ชายคนที่โทรมาคือพ่อฉันเอง' },
          { id: 'pro42', word: 'Whom', meaning: 'ผู้ซึ่ง (กรรม)', example: 'The girl **whom** I met is nice.\nผู้หญิงคนที่ฉันเจอนิสัยดีนะ' },
          { id: 'pro43', word: 'Whose', meaning: 'ผู้ซึ่งเป็นเจ้าของ', example: 'The boy **whose** bike was stolen.\nเด็กผู้ชายคนที่จักรยานถูกขโมย' },
          { id: 'pro44', word: 'Which', meaning: 'ที่ซึ่ง (สัตว์/สิ่งของ)', example: 'The car **which** I bought is red.\nรถคันที่ฉันซื้อมาเป็นสีแดง' },
          { id: 'pro45', word: 'That', meaning: 'ที่ (คน/สัตว์/สิ่งของ)', example: 'The book **that** you gave me.\nหนังสือเล่มที่คุณให้ฉันมา' }
        ]
      }
    ]
  },

  // --- 6. PREPOSITION (คำบุพบท) ---
  {
    id: 'pos-prep',
    title: '6. Preposition (คำบุพบท)',
    icon: '📍',
    color: 'green',
    subCategories: [
      {
        id: 'prep-place',
        title: '1. Prepositions of Place (สถานที่)',
        words: [
          { id: 'prep1', word: 'In', meaning: 'ใน', example: 'The cat is **in** the box.\nแมวอยู่ในกล่อง' },
          { id: 'prep2', word: 'On', meaning: 'บน', example: 'The book is **on** the table.\nหนังสือวางอยู่บนโต๊ะ' },
          { id: 'prep3', word: 'At', meaning: 'ที่', example: 'Meet me **at** the bus stop.\nเจอกันที่ป้ายรถเมล์นะ' },
          { id: 'prep4', word: 'Under', meaning: 'ใต้', example: 'The shoes are **under** the bed.\nรองเท้าอยู่ใต้เตียง' },
          { id: 'prep5', word: 'Over', meaning: 'เหนือ/ข้าม', example: 'The bird flew **over** the tree.\nนกบินข้ามต้นไม้ไป' },
          { id: 'prep6', word: 'Above', meaning: 'เหนือ (สูงกว่า)', example: 'The light is **above** my head.\nหลอดไฟอยู่เหนือศีรษะฉัน' },
          { id: 'prep7', word: 'Below', meaning: 'ต่ำกว่า', example: 'See the text **below**.\nดูข้อความด้านล่าง' },
          { id: 'prep8', word: 'Between', meaning: 'ระหว่าง (สองสิ่ง)', example: 'I sat **between** Tom and John.\nฉันนั่งระหว่างทอมกับจอห์น' },
          { id: 'prep9', word: 'Among', meaning: 'ท่ามกลาง (หลายสิ่ง)', example: 'He is happy **among** his friends.\nเขามีความสุขเมื่ออยู่ท่ามกลางเพื่อนฝูง' },
          { id: 'prep10', word: 'Behind', meaning: 'ข้างหลัง', example: 'The garden is **behind** the house.\nสวนอยู่หลังบ้าน' },
          { id: 'prep11', word: 'In front of', meaning: 'ข้างหน้า', example: 'Wait **in front of** the cinema.\nรออยู่หน้าโรงหนังนะ' },
          { id: 'prep12', word: 'Next to', meaning: 'ถัดจาก', example: 'She sits **next to** me.\nเธอนั่งถัดจากฉัน' },
          { id: 'prep13', word: 'Near', meaning: 'ใกล้', example: 'Is there a bank **near** here?\nแถวนี้มีธนาคารไหม?' },
          { id: 'prep14', word: 'Beside', meaning: 'ข้างๆ', example: 'Come sit **beside** me.\nมานั่งข้างๆ ฉันสิ' },
          { id: 'prep15', word: 'Inside', meaning: 'ข้างใน', example: 'Go **inside** the house.\nเข้าไปในบ้านกัน' },
          { id: 'prep16', word: 'Outside', meaning: 'ข้างนอก', example: 'The dog is **outside**.\nหมาอยู่ข้างนอก' }
        ]
      },
      {
        id: 'prep-time',
        title: '2. Prepositions of Time (เวลา)',
        words: [
          { id: 'prep17', word: 'At', meaning: 'เมื่อ (เวลาเจาะจง)', example: 'I wake up **at** 6 AM.\nฉันตื่นนอนตอน 6 โมงเช้า' },
          { id: 'prep18', word: 'On', meaning: 'ใน (วัน/วันที่)', example: 'See you **on** Monday.\nเจอกันวันจันทร์' },
          { id: 'prep19', word: 'In', meaning: 'ใน (เดือน/ปี/ฤดู)', example: 'My birthday is **in** July.\nวันเกิดฉันอยู่ในเดือนกรกฎาคม' },
          { id: 'prep20', word: 'During', meaning: 'ระหว่าง (ช่วงเวลา)', example: 'Don\'t talk **during** the movie.\nอย่าคุยกันระหว่างดูหนัง' },
          { id: 'prep21', word: 'Since', meaning: 'ตั้งแต่', example: 'I have worked here **since** 2010.\nฉันทำงานที่นี่มาตั้งแต่ปี 2010' },
          { id: 'prep22', word: 'For', meaning: 'เป็นเวลา', example: 'I waited **for** two hours.\nฉันรอมาเป็นเวลาสองชั่วโมงแล้ว' },
          { id: 'prep23', word: 'Before', meaning: 'ก่อน', example: 'Wash your hands **before** eating.\nล้างมือก่อนกินข้าว' },
          { id: 'prep24', word: 'After', meaning: 'หลัง', example: 'We can play **after** school.\nเราเล่นกันหลังเลิกเรียนได้' },
          { id: 'prep25', word: 'Until', meaning: 'จนกระทั่ง', example: 'Wait here **until** I come back.\nรอตรงนี้จนกว่าฉันจะกลับมา' },
          { id: 'prep26', word: 'By', meaning: 'ภายใน (เวลา)', example: 'Finish this **by** 5 PM.\nทำให้เสร็จภายใน 5 โมงเย็นนะ' },
          { id: 'prep27', word: 'From', meaning: 'จาก (เวลาเริ่มต้น)', example: 'The shop is open **from** 9 to 5.\nร้านเปิดตั้งแต่ 9 โมงถึง 5 โมง' }
        ]
      },
      {
        id: 'prep-movement',
        title: '3. Prepositions of Movement (การเคลื่อนไหว)',
        words: [
          { id: 'prep28', word: 'To', meaning: 'ไปยัง/ถึง', example: 'I am going **to** school.\nฉันกำลังไปโรงเรียน' },
          { id: 'prep29', word: 'Into', meaning: 'เข้าไปใน', example: 'He jumped **into** the water.\nเขากระโดดลงไปในน้ำ' },
          { id: 'prep30', word: 'Out of', meaning: 'ออกจาก', example: 'Get **out of** the car.\nลงมาจากรถซะ' },
          { id: 'prep31', word: 'Through', meaning: 'ทะลุ/ผ่าน', example: 'The train goes **through** the tunnel.\nรถไฟวิ่งลอดผ่านอุโมงค์' },
          { id: 'prep32', word: 'Across', meaning: 'ข้าม', example: 'Be careful when walking **across** the road.\nระวังตอนเดินข้ามถนนนะ' },
          { id: 'prep33', word: 'Along', meaning: 'ไปตาม (ทางยาว)', example: 'We walked **along** the beach.\nพวกเราเดินไปตามชายหาด' },
          { id: 'prep34', word: 'Towards', meaning: 'ไปทาง/มุ่งสู่', example: 'He ran **towards** me.\nเขาวิ่งตรงมาหาฉัน' },
          { id: 'prep35', word: 'Past', meaning: 'ผ่าน', example: 'Go **past** the post office.\nเดินผ่านที่ทำการไปรษณีย์ไป' },
          { id: 'prep36', word: 'Up', meaning: 'ขึ้น', example: 'Climb **up** the ladder.\nปีนบันไดขึ้นไป' },
          { id: 'prep37', word: 'Down', meaning: 'ลง', example: 'Walk **down** the stairs.\nเดินลงบันไดมา' }
        ]
      },
      {
        id: 'prep-other',
        title: '4. Other Prepositions (อื่นๆ)',
        words: [
          { id: 'prep38', word: 'With', meaning: 'กับ/ด้วย', example: 'I go **with** my friends.\nฉันไปกับเพื่อนๆ' },
          { id: 'prep39', word: 'Without', meaning: 'ปราศจาก', example: 'I cannot live **without** water.\nฉันอยู่ไม่ได้ถ้าขาดน้ำ' },
          { id: 'prep40', word: 'By', meaning: 'โดย', example: 'I go to work **by** bus.\nฉันไปทำงานโดยรถเมล์' },
          { id: 'prep41', word: 'About', meaning: 'เกี่ยวกับ', example: 'Tell me **about** yourself.\nเล่าเรื่องเกี่ยวกับตัวคุณให้ฟังหน่อย' },
          { id: 'prep42', word: 'Of', meaning: 'ของ', example: 'A cup **of** coffee.\nกาแฟหนึ่งถ้วย' },
          { id: 'prep43', word: 'Like', meaning: 'เหมือน', example: 'He looks **like** his father.\nเขาหน้าเหมือนพ่อ' },
          { id: 'prep44', word: 'As', meaning: 'ในฐานะ', example: 'He works **as** a teacher.\nเขาทำงานเป็นครู' },
          { id: 'prep45', word: 'Against', meaning: 'ต่อต้าน/พิง', example: 'He leaned **against** the wall.\nเขายืนพิงกำแพง' }
        ]
      }
    ]
  },

  // --- 7. CONJUNCTION (คำสันธาน) ---
  {
    id: 'pos-conj',
    title: '7. Conjunction (คำสันธาน)',
    icon: '🔗',
    color: 'purple',
    subCategories: [
      {
        id: 'conj-coordinating',
        title: '1. Coordinating (เชื่อมประโยคเท่ากัน)',
        words: [
          { id: 'conj1', word: 'For', meaning: 'เพราะว่า (ทางการ)', example: 'I slept, **for** I was tired.\nฉันนอนหลับ เพราะว่าฉันเหนื่อย' },
          { id: 'conj2', word: 'And', meaning: 'และ', example: 'I like tea **and** coffee.\nฉันชอบทั้งชาและกาแฟ' },
          { id: 'conj3', word: 'Nor', meaning: 'และไม่', example: 'I don\'t like it, **nor** does he.\nฉันไม่ชอบมัน และเขาก็ไม่ชอบเหมือนกัน' },
          { id: 'conj4', word: 'But', meaning: 'แต่', example: 'It is old **but** good.\nมันเก่าแล้วแต่ยังดีอยู่' },
          { id: 'conj5', word: 'Or', meaning: 'หรือ', example: 'Tea **or** coffee?\nรับชาหรือกาแฟดี?' },
          { id: 'conj6', word: 'Yet', meaning: 'แต่ทว่า', example: 'He is rich, **yet** unhappy.\nเขารวย แต่ทว่าไม่มีความสุข' },
          { id: 'conj7', word: 'So', meaning: 'ดังนั้น', example: 'It rained, **so** I stayed home.\nฝนตก ดังนั้นฉันเลยอยู่บ้าน' }
        ]
      },
      {
        id: 'conj-subordinating',
        title: '2. Subordinating (เชื่อมประโยคย่อย)',
        words: [
          { id: 'conj8', word: 'Because', meaning: 'เพราะว่า', example: 'I stayed home **because** I was sick.\nฉันอยู่บ้านเพราะฉันป่วย' },
          { id: 'conj9', word: 'Although', meaning: 'ถึงแม้ว่า', example: '**Although** it rained, we went out.\nถึงแม้ว่าฝนจะตก เราก็ยังออกไปข้างนอก' },
          { id: 'conj10', word: 'If', meaning: 'ถ้า', example: '**If** you study, you will pass.\nถ้าคุณตั้งใจเรียน คุณก็จะสอบผ่าน' },
          { id: 'conj11', word: 'Unless', meaning: 'เว้นแต่ว่า', example: 'You will fail **unless** you work hard.\nคุณจะสอบตก เว้นแต่ว่าคุณจะขยัน' },
          { id: 'conj12', word: 'When', meaning: 'เมื่อ', example: 'Call me **when** you arrive.\nโทรหาฉันเมื่อคุณมาถึงนะ' },
          { id: 'conj13', word: 'While', meaning: 'ในขณะที่', example: 'He slept **while** I cooked.\nเขานอนหลับในขณะที่ฉันทำอาหาร' },
          { id: 'conj14', word: 'Since', meaning: 'เนื่องจาก/ตั้งแต่', example: '**Since** you are here, let\'s start.\nในเมื่อคุณอยู่ที่นี่แล้ว เรามาเริ่มกันเถอะ' },
          { id: 'conj15', word: 'After', meaning: 'หลังจากที่', example: '**After** I ate, I went to bed.\nหลังจากกินข้าวเสร็จ ฉันก็เข้านอน' },
          { id: 'conj16', word: 'Before', meaning: 'ก่อนที่', example: 'Think **before** you speak.\nคิดก่อนพูด' },
          { id: 'conj17', word: 'Until', meaning: 'จนกระทั่ง', example: 'Wait **until** the rain stops.\nรอจนกระทั่งฝนหยุดตก' },
          { id: 'conj18', word: 'As', meaning: 'ในขณะที่/เพราะ', example: 'He came **as** I was leaving.\nเขามาถึงในขณะที่ฉันกำลังจะออกไป' },
          { id: 'conj19', word: 'Where', meaning: 'ที่ซึ่ง', example: 'Stay **where** you are.\nอยู่ตรงที่คุณอยู่นั่นแหละ' },
          { id: 'conj20', word: 'Whereas', meaning: 'ในทางกลับกัน', example: 'He is rich, **whereas** I am poor.\nเขารวย ในทางกลับกันฉันจน' },
          { id: 'conj21', word: 'Even though', meaning: 'ถึงแม้ว่า', example: '**Even though** he is old, he is strong.\nถึงแม้ว่าเขาจะแก่ แต่เขาก็แข็งแรง' }
        ]
      },
      {
        id: 'conj-correlative',
        title: '3. Correlative (คำเชื่อมคู่)',
        words: [
          { id: 'conj22', word: 'Either...or', meaning: 'ไม่...ก็...', example: 'You can **either** stay **or** go.\nคุณจะอยู่หรือจะไปก็ได้ (เลือกอย่างใดอย่างหนึ่ง)' },
          { id: 'conj23', word: 'Neither...nor', meaning: 'ไม่ทั้ง...และ...', example: 'He likes **neither** tea **nor** coffee.\nเขาไม่ชอบทั้งชาและกาแฟ' },
          { id: 'conj24', word: 'Both...and', meaning: 'ทั้ง...และ...', example: 'She is **both** smart **and** beautiful.\nเธอทั้งฉลาดและสวย' },
          { id: 'conj25', word: 'Not only...but also', meaning: 'ไม่เพียงแต่...แต่ยัง...', example: 'He speaks **not only** English **but also** Thai.\nเขาพูดได้ไม่เพียงแค่ภาษาอังกฤษ แต่ยังพูดไทยได้ด้วย' }
        ]
      }
    ]
  },

  // --- 8. INTERJECTION (คำอุทาน) ---
  {
    id: 'pos-interj',
    title: '8. Interjection (คำอุทาน)',
    icon: '❗',
    color: 'red',
    subCategories: [
      {
        id: 'interj-emotion',
        title: '1. Emotion & Reaction (อารมณ์)',
        words: [
          { id: 'int1', word: 'Wow', meaning: 'ว้าว! (ประหลาดใจ)', example: '**Wow**! That looks amazing.\nว้าว! นั่นดูมหัศจรรย์มาก' },
          { id: 'int2', word: 'Oh', meaning: 'อ้อ/โอ้ (เข้าใจ/ตกใจ)', example: '**Oh**, I see.\nอ้อ ฉันเข้าใจละ' },
          { id: 'int3', word: 'Ouch', meaning: 'โอ๊ย! (เจ็บ)', example: '**Ouch**! That hurt.\nโอ๊ย! เจ็บนะ' },
          { id: 'int4', word: 'Oops', meaning: 'อุ๊ย! (ทำผิด)', example: '**Oops**! I dropped it.\nอุ๊ย! ฉันทำมันตก' },
          { id: 'int5', word: 'Alas', meaning: 'อนิจจา (เสียใจ)', example: '**Alas**, he is gone.\nอนิจจา เขาจากไปเสียแล้ว' },
          { id: 'int6', word: 'Hurray', meaning: 'เย้! (ดีใจ)', example: '**Hurray**! We won.\nเย้! พวกเราชนะแล้ว' },
          { id: 'int7', word: 'Yuck', meaning: 'แหวะ! (รังเกียจ)', example: '**Yuck**! That tastes bad.\nแหวะ! รสชาติแย่มาก' },
          { id: 'int8', word: 'Eww', meaning: 'อี๋! (ขยะแขยง)', example: '**Eww**, a bug!\nอี๋! แมลง!' },
          { id: 'int9', word: 'Phew', meaning: 'เฮ้อ (โล่งอก)', example: '**Phew**, that was close.\nเฮ้อ เกือบไปแล้ว' },
          { id: 'int10', word: 'Aha', meaning: 'อ๋อ! (นึกออก)', example: '**Aha**! I found it.\nอ๋อ! ฉันเจอมันแล้ว' }
        ]
      },
      {
        id: 'interj-social',
        title: '2. Social & Greeting (ทักทาย)',
        words: [
          { id: 'int11', word: 'Hello', meaning: 'สวัสดี', example: '**Hello**, how are you?\nสวัสดี คุณสบายดีไหม?' },
          { id: 'int12', word: 'Hi', meaning: 'หวัดดี', example: '**Hi** there!\nหวัดดีจ้า!' },
          { id: 'int13', word: 'Hey', meaning: 'เฮ้ (เรียก/ทัก)', example: '**Hey**, look at this.\nเฮ้ ดูนี่สิ' },
          { id: 'int14', word: 'Bye', meaning: 'บ๊ายบาย', example: '**Bye**, see you later.\nบ๊ายบาย แล้วเจอกันนะ' },
          { id: 'int15', word: 'Shh', meaning: 'ชู่! (ให้เงียบ)', example: '**Shh**, the baby is sleeping.\nชู่! เด็กทารกกำลังหลับ' },
          { id: 'int16', word: 'Hmm', meaning: 'อืม... (ใช้คิด)', example: '**Hmm**, let me think.\nอืม... ขอฉันคิดแป๊บนะ' },
          { id: 'int17', word: 'Well', meaning: 'เอ่อ... (เกริ่น)', example: '**Well**, I\'m not sure.\nเอ่อ... ฉันก็ไม่แน่ใจนะ' },
          { id: 'int18', word: 'Bravo', meaning: 'ไชโย/เยี่ยม (ชมเชย)', example: '**Bravo**! Great performance.\nเยี่ยมมาก! การแสดงยอดเยี่ยมสุดๆ' },
          { id: 'int19', word: 'Welcome', meaning: 'ยินดีต้อนรับ', example: '**Welcome** to our home.\nยินดีต้อนรับสู่บ้านของเรา' },
          { id: 'int20', word: 'Cheers', meaning: 'ชนแก้ว/ขอบคุณ', example: '**Cheers** to our success!\nชนแก้วเพื่อความสำเร็จของเรา!' }
        ]
      }
    ]
  }
];