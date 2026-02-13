// frontend/src/data/vocab_parts/vocabularyData.ts
import { MainCategory } from '../../types';

export const vocabularyCategories: MainCategory[] = [
  {
    id: 'pos-noun',
    title: '1. Noun (คำนาม)',
    icon: '📦',
    color: 'blue',
    subCategories: [
      {
        id: 'noun-common',
        title: '1. Common Nouns (นามทั่วไป)',
        words: [
          { id: 'nc1', word: 'City', meaning: 'เมือง', example: 'Tokyo is a huge **city** with many people.' },
          { id: 'nc2', word: 'Teacher', meaning: 'ครู', example: 'A good **teacher** inspires hope.' },
          { id: 'nc3', word: 'Restaurant', meaning: 'ร้านอาหาร', example: 'We ate dinner at a nice **restaurant**.' },
          { id: 'nc4', word: 'Computer', meaning: 'คอมพิวเตอร์', example: 'My **computer** is very slow today.' },
          { id: 'nc5', word: 'Idea', meaning: 'ความคิด', example: 'That is a brilliant **idea**!' },
          { id: 'nc6', word: 'Doctor', meaning: 'หมอ', example: 'The **doctor** gave me some medicine.' },
          { id: 'nc7', word: 'Market', meaning: 'ตลาด', example: 'She buys fresh vegetables at the **market**.' },
          { id: 'nc8', word: 'Library', meaning: 'ห้องสมุด', example: 'Please be quiet in the **library**.' },
          { id: 'nc9', word: 'Bridge', meaning: 'สะพาน', example: 'They are building a new **bridge** across the river.' },
          { id: 'nc10', word: 'Village', meaning: 'หมู่บ้าน', example: 'He lives in a small **village**.' },
          { id: 'nc11', word: 'Musician', meaning: 'นักดนตรี', example: 'The **musician** played a sad song.' },
          { id: 'nc12', word: 'Passenger', meaning: 'ผู้โดยสาร', example: 'The **passenger** fell asleep on the train.' },
          { id: 'nc13', word: 'Window', meaning: 'หน้าต่าง', example: 'Please open the **window** to let fresh air in.' },
          { id: 'nc14', word: 'Garden', meaning: 'สวน', example: 'There are beautiful flowers in the **garden**.' },
          { id: 'nc15', word: 'Airport', meaning: 'สนามบิน', example: 'We arrived at the **airport** two hours early.' },
          { id: 'nc16', word: 'Hospital', meaning: 'โรงพยาบาล', example: 'He is recovering in the **hospital**.' },
          { id: 'nc17', word: 'Beach', meaning: 'ชายหาด', example: 'We walked along the sandy **beach**.' },
          { id: 'nc18', word: 'Mountain', meaning: 'ภูเขา', example: 'Climbing the **mountain** was difficult.' },
          { id: 'nc19', word: 'Forest', meaning: 'ป่า', example: 'Animals live in the **forest**.' },
          { id: 'nc20', word: 'River', meaning: 'แม่น้ำ', example: 'The **river** flows into the sea.' },
          { id: 'nc21', word: 'Street', meaning: 'ถนน', example: 'Be careful when crossing the **street**.' },
          { id: 'nc22', word: 'Hotel', meaning: 'โรงแรม', example: 'We stayed at a luxury **hotel**.' },
          { id: 'nc23', word: 'Office', meaning: 'สำนักงาน', example: 'I work in a large **office** building.' },
          { id: 'nc24', word: 'School', meaning: 'โรงเรียน', example: 'My son goes to **school** by bus.' },
          { id: 'nc25', word: 'Factory', meaning: 'โรงงาน', example: 'This **factory** produces cars.' }
        ]
      },
      {
        id: 'noun-proper',
        title: '2. Proper Nouns (นามเฉพาะ)',
        words: [
          { id: 'np1', word: 'Thailand', meaning: 'ประเทศไทย', example: '**Thailand** is famous for its food.' },
          { id: 'np2', word: 'Harry Potter', meaning: 'แฮร์รี่ พอตเตอร์', example: '**Harry Potter** is a wizard.' },
          { id: 'np3', word: 'Sunday', meaning: 'วันอาทิตย์', example: 'I usually relax on **Sunday**.' },
          { id: 'np4', word: 'Google', meaning: 'กูเกิล', example: 'Search for the answer on **Google**.' },
          { id: 'np5', word: 'Eiffel Tower', meaning: 'หอไอเฟล', example: 'The **Eiffel Tower** is in Paris.' },
          { id: 'np6', word: 'December', meaning: 'ธันวาคม', example: 'My birthday is in **December**.' },
          { id: 'np7', word: 'Tokyo', meaning: 'โตเกียว', example: '**Tokyo** is the capital of Japan.' },
          { id: 'np8', word: 'Mars', meaning: 'ดาวอังคาร', example: 'Scientists want to explore **Mars**.' },
          { id: 'np9', word: 'English', meaning: 'ภาษาอังกฤษ', example: 'She speaks **English** fluently.' },
          { id: 'np10', word: 'Samsung', meaning: 'ซัมซุง', example: 'I bought a new **Samsung** phone.' },
          { id: 'np11', word: 'Mount Everest', meaning: 'ยอดเขาเอเวอเรสต์', example: '**Mount Everest** is the highest peak.' },
          { id: 'np12', word: 'Shakespeare', meaning: 'เชกสเปียร์', example: '**Shakespeare** wrote many famous plays.' },
          { id: 'np13', word: 'Amazon', meaning: 'อเมซอน', example: 'I ordered this book from **Amazon**.' },
          { id: 'np14', word: 'London', meaning: 'ลอนดอน', example: '**London** has many red buses.' },
          { id: 'np15', word: 'Monday', meaning: 'วันจันทร์', example: 'School starts on **Monday**.' },
          { id: 'np16', word: 'January', meaning: 'มกราคม', example: '**January** is the first month of the year.' },
          { id: 'np17', word: 'Toyota', meaning: 'โตโยต้า', example: 'He drives a **Toyota** truck.' },
          { id: 'np18', word: 'Coca-Cola', meaning: 'โคคา-โคลา', example: 'I drank a cold **Coca-Cola**.' },
          { id: 'np19', word: 'Titanic', meaning: 'ไททานิก', example: 'The **Titanic** movie is very sad.' },
          { id: 'np20', word: 'Bible', meaning: 'พระคัมภีร์ไบเบิล', example: 'He reads the **Bible** every day.' },
          { id: 'np21', word: 'Christmas', meaning: 'คริสต์มาส', example: 'We exchange gifts on **Christmas**.' },
          { id: 'np22', word: 'Batman', meaning: 'แบทแมน', example: '**Batman** is a superhero.' },
          { id: 'np23', word: 'Jupiter', meaning: 'ดาวพฤหัสบดี', example: '**Jupiter** is the largest planet.' },
          { id: 'np24', word: 'Pacific Ocean', meaning: 'มหาสมุทรแปซิฟิก', example: 'The **Pacific Ocean** is very deep.' },
          { id: 'np25', word: 'Nike', meaning: 'ไนกี้', example: 'These shoes are from **Nike**.' }
        ]
      },
      {
        id: 'noun-concrete',
        title: '3. Concrete Nouns (นามรูปธรรม)',
        words: [
          { id: 'ncon1', word: 'Ice cream', meaning: 'ไอศกรีม', example: 'This chocolate **ice cream** is delicious.' },
          { id: 'ncon2', word: 'Rain', meaning: 'ฝน', example: 'The **rain** feels cold on my skin.' },
          { id: 'ncon3', word: 'Perfume', meaning: 'น้ำหอม', example: 'She loves the smell of this **perfume**.' },
          { id: 'ncon4', word: 'Music', meaning: 'ดนตรี', example: 'Loud **music** can hurt your ears.' },
          { id: 'ncon5', word: 'Mountain', meaning: 'ภูเขา', example: 'We climbed a high **mountain**.' },
          { id: 'ncon6', word: 'Pizza', meaning: 'พิซซ่า', example: 'I want to eat pepperoni **pizza**.' },
          { id: 'ncon7', word: 'Silk', meaning: 'ผ้าไหม', example: 'This scarf is made of soft **silk**.' },
          { id: 'ncon8', word: 'Coffee', meaning: 'กาแฟ', example: 'The smell of fresh **coffee** woke me up.' },
          { id: 'ncon9', word: 'Star', meaning: 'ดาว', example: 'Look at that bright **star** in the sky.' },
          { id: 'ncon10', word: 'Drum', meaning: 'กลอง', example: 'He beats the **drum** rhythmically.' },
          { id: 'ncon11', word: 'Lemon', meaning: 'มะนาว', example: 'The **lemon** tastes very sour.' },
          { id: 'ncon12', word: 'Thunder', meaning: 'เสียงฟ้าร้อง', example: 'The loud **thunder** scared the dog.' },
          { id: 'ncon13', word: 'Sunset', meaning: 'พระอาทิตย์ตก', example: 'We watched the beautiful **sunset**.' },
          { id: 'ncon14', word: 'Table', meaning: 'โต๊ะ', example: 'Put the book on the **table**.' },
          { id: 'ncon15', word: 'Chair', meaning: 'เก้าอี้', example: 'This **chair** is very comfortable.' },
          { id: 'ncon16', word: 'Phone', meaning: 'โทรศัพท์', example: 'My **phone** is ringing.' },
          { id: 'ncon17', word: 'Car', meaning: 'รถยนต์', example: 'He washed his **car** yesterday.' },
          { id: 'ncon18', word: 'House', meaning: 'บ้าน', example: 'They bought a new **house**.' },
          { id: 'ncon19', word: 'Dog', meaning: 'สุนัข', example: 'The **dog** chased the cat.' },
          { id: 'ncon20', word: 'Cat', meaning: 'แมว', example: 'The **cat** is sleeping on the sofa.' },
          { id: 'ncon21', word: 'Apple', meaning: 'แอปเปิ้ล', example: 'I ate a red **apple**.' },
          { id: 'ncon22', word: 'Ball', meaning: 'ลูกบอล', example: 'He kicked the **ball** into the goal.' },
          { id: 'ncon23', word: 'Bag', meaning: 'กระเป๋า', example: 'Her **bag** is full of books.' },
          { id: 'ncon24', word: 'Pen', meaning: 'ปากกา', example: 'Can I borrow your **pen**?' },
          { id: 'ncon25', word: 'Book', meaning: 'หนังสือ', example: 'I am reading an interesting **book**.' }
        ]
      },
      {
        id: 'noun-abstract',
        title: '4. Abstract Nouns (นามธรรม)',
        words: [
          { id: 'nabs1', word: 'Happiness', meaning: 'ความสุข', example: 'True **happiness** comes from within.' },
          { id: 'nabs2', word: 'Knowledge', meaning: 'ความรู้', example: '**Knowledge** is power.' },
          { id: 'nabs3', word: 'Friendship', meaning: 'มิตรภาพ', example: 'Their **friendship** lasted forever.' },
          { id: 'nabs4', word: 'Time', meaning: 'เวลา', example: '**Time** waits for no one.' },
          { id: 'nabs5', word: 'Culture', meaning: 'วัฒนธรรม', example: 'Thai **culture** is very unique.' },
          { id: 'nabs6', word: 'Honesty', meaning: 'ความซื่อสัตย์', example: '**Honesty** is the best policy.' },
          { id: 'nabs7', word: 'Bravery', meaning: 'ความกล้าหาญ', example: 'The firefighter showed great **bravery**.' },
          { id: 'nabs8', word: 'Childhood', meaning: 'วัยเด็ก', example: 'He had a happy **childhood**.' },
          { id: 'nabs9', word: 'Anger', meaning: 'ความโกรธ', example: 'He shouted in **anger**.' },
          { id: 'nabs10', word: 'Health', meaning: 'สุขภาพ', example: '**Health** is better than wealth.' },
          { id: 'nabs11', word: 'Opportunity', meaning: 'โอกาส', example: 'Don\'t miss this great **opportunity**.' },
          { id: 'nabs12', word: 'Confidence', meaning: 'ความมั่นใจ', example: 'She speaks with **confidence**.' },
          { id: 'nabs13', word: 'Responsibility', meaning: 'ความรับผิดชอบ', example: 'It is your **responsibility** to finish the work.' },
          { id: 'nabs14', word: 'Freedom', meaning: 'อิสรภาพ', example: 'Everyone wants **freedom**.' },
          { id: 'nabs15', word: 'Love', meaning: 'ความรัก', example: '**Love** is all around.' },
          { id: 'nabs16', word: 'Peace', meaning: 'สันติภาพ', example: 'We pray for world **peace**.' },
          { id: 'nabs17', word: 'Hope', meaning: 'ความหวัง', example: 'Never lose **hope**.' },
          { id: 'nabs18', word: 'Dream', meaning: 'ความฝัน', example: 'Follow your **dream**.' },
          { id: 'nabs19', word: 'Success', meaning: 'ความสำเร็จ', example: 'Hard work leads to **success**.' },
          { id: 'nabs20', word: 'Failure', meaning: 'ความล้มเหลว', example: '**Failure** is a part of learning.' },
          { id: 'nabs21', word: 'Luck', meaning: 'โชค', example: 'Good **luck** on your exam!' },
          { id: 'nabs22', word: 'Fear', meaning: 'ความกลัว', example: 'He overcame his **fear** of heights.' },
          { id: 'nabs23', word: 'Beauty', meaning: 'ความงาม', example: '**Beauty** is in the eye of the beholder.' },
          { id: 'nabs24', word: 'Justice', meaning: 'ความยุติธรรม', example: 'We demand **justice**.' },
          { id: 'nabs25', word: 'Wisdom', meaning: 'ปัญญา', example: 'Age brings **wisdom**.' }
        ]
      },
      {
        id: 'noun-collective',
        title: '5. Collective Nouns (สมุหนาม)',
        words: [
          { id: 'ncol1', word: 'Team', meaning: 'ทีม/คณะ', example: 'Our **team** worked hard to win.' },
          { id: 'ncol2', word: 'Family', meaning: 'ครอบครัว', example: 'My **family** loves traveling together.' },
          { id: 'ncol3', word: 'Audience', meaning: 'ผู้ชม', example: 'The **audience** clapped loudly.' },
          { id: 'ncol4', word: 'Flock', meaning: 'ฝูง (นก/แกะ)', example: 'A **flock** of birds flew over the lake.' },
          { id: 'ncol5', word: 'Staff', meaning: 'คณะพนักงาน', example: 'The hotel **staff** is very helpful.' },
          { id: 'ncol6', word: 'Band', meaning: 'วงดนตรี', example: 'The rock **band** played all night.' },
          { id: 'ncol7', word: 'Crowd', meaning: 'ฝูงชน', example: 'A large **crowd** gathered to see the star.' },
          { id: 'ncol8', word: 'Class', meaning: 'ชั้นเรียน', example: 'The whole **class** passed the exam.' },
          { id: 'ncol9', word: 'Pack', meaning: 'ฝูง (หมาป่า)', example: 'A **pack** of wolves hunted in the forest.' },
          { id: 'ncol10', word: 'Swarm', meaning: 'ฝูง (แมลง)', example: 'A **swarm** of bees attacked the bear.' },
          { id: 'ncol11', word: 'Committee', meaning: 'คณะกรรมการ', example: 'The **committee** made a decision.' },
          { id: 'ncol12', word: 'Herd', meaning: 'ฝูง (สัตว์ใหญ่)', example: 'A **herd** of elephants is crossing the road.' },
          { id: 'ncol13', word: 'Crew', meaning: 'ลูกเรือ', example: 'The cabin **crew** served lunch.' },
          { id: 'ncol14', word: 'Gang', meaning: 'แก๊ง/กลุ่ม', example: 'A **gang** of thieves stole the money.' },
          { id: 'ncol15', word: 'Choir', meaning: 'คณะประสานเสียง', example: 'The **choir** sang beautifully.' },
          { id: 'ncol16', word: 'Orchestra', meaning: 'วงออร์เคสตรา', example: 'The **orchestra** played Mozart.' },
          { id: 'ncol17', word: 'Army', meaning: 'กองทัพบก', example: 'He joined the **army**.' },
          { id: 'ncol18', word: 'Navy', meaning: 'กองทัพเรือ', example: 'The **navy** has many ships.' },
          { id: 'ncol19', word: 'Government', meaning: 'รัฐบาล', example: 'The **government** announced new laws.' },
          { id: 'ncol20', word: 'Public', meaning: 'สาธารณชน', example: 'The **public** is invited to the event.' },
          { id: 'ncol21', word: 'Jury', meaning: 'คณะลูกขุน', example: 'The **jury** found him guilty.' },
          { id: 'ncol22', word: 'School', meaning: 'ฝูง (ปลา)', example: 'A **school** of fish swam by.' },
          { id: 'ncol23', word: 'Pride', meaning: 'ฝูง (สิงโต)', example: 'A **pride** of lions is resting.' },
          { id: 'ncol24', word: 'Bundle', meaning: 'มัด/ห่อ', example: 'She carried a **bundle** of clothes.' },
          { id: 'ncol25', word: 'Bunch', meaning: 'พวง/กำ', example: 'I bought a **bunch** of bananas.' }
        ]
      },
      {
        id: 'noun-compound',
        title: '6. Compound Nouns (นามประสม)',
        words: [
          { id: 'ncom1', word: 'Toothpaste', meaning: 'ยาสีฟัน', example: 'We are out of **toothpaste**.' },
          { id: 'ncom2', word: 'Bedroom', meaning: 'ห้องนอน', example: 'My **bedroom** is painted blue.' },
          { id: 'ncom3', word: 'Swimming pool', meaning: 'สระว่ายน้ำ', example: 'They jumped into the **swimming pool**.' },
          { id: 'ncom4', word: 'Bus stop', meaning: 'ป้ายรถเมล์', example: 'Wait for me at the **bus stop**.' },
          { id: 'ncom5', word: 'Mother-in-law', meaning: 'แม่ยาย/แม่สามี', example: 'His **mother-in-law** is visiting.' },
          { id: 'ncom6', word: 'Sunrise', meaning: 'พระอาทิตย์ขึ้น', example: 'We woke up early to watch the **sunrise**.' },
          { id: 'ncom7', word: 'Blackboard', meaning: 'กระดานดำ', example: 'The teacher wrote on the **blackboard**.' },
          { id: 'ncom8', word: 'Homework', meaning: 'การบ้าน', example: 'I have a lot of **homework** to do.' },
          { id: 'ncom9', word: 'Policeman', meaning: 'ตำรวจ', example: 'The **policeman** helped the lost child.' },
          { id: 'ncom10', word: 'Weekend', meaning: 'สุดสัปดาห์', example: 'What are your plans for the **weekend**?' },
          { id: 'ncom11', word: 'Raincoat', meaning: 'เสื้อกันฝน', example: 'Wear a **raincoat** if it rains.' },
          { id: 'ncom12', word: 'Passport', meaning: 'หนังสือเดินทาง', example: 'Do not forget your **passport**.' },
          { id: 'ncom13', word: 'Keyboard', meaning: 'แป้นพิมพ์', example: 'My computer **keyboard** is broken.' },
          { id: 'ncom14', word: 'Sunflower', meaning: 'ดอกทานตะวัน', example: 'The **sunflower** follows the sun.' },
          { id: 'ncom15', word: 'Football', meaning: 'ฟุตบอล', example: 'They play **football** every Saturday.' },
          { id: 'ncom16', word: 'Pancake', meaning: 'แพนเค้ก', example: 'I love **pancake** with honey.' },
          { id: 'ncom17', word: 'Moonlight', meaning: 'แสงจันทร์', example: 'They danced in the **moonlight**.' },
          { id: 'ncom18', word: 'Firefly', meaning: 'หิ่งห้อย', example: 'Look at that glowing **firefly**.' },
          { id: 'ncom19', word: 'Butterfly', meaning: 'ผีเสื้อ', example: 'A colorful **butterfly** landed on my hand.' },
          { id: 'ncom20', word: 'Earthquake', meaning: 'แผ่นดินไหว', example: 'The **earthquake** shook the ground.' },
          { id: 'ncom21', word: 'Thunderstorm', meaning: 'พายุฝนฟ้าคะนอง', example: 'A big **thunderstorm** is coming.' },
          { id: 'ncom22', word: 'Bathroom', meaning: 'ห้องน้ำ', example: 'The **bathroom** is clean.' },
          { id: 'ncom23', word: 'Classroom', meaning: 'ห้องเรียน', example: 'The students are in the **classroom**.' },
          { id: 'ncom24', word: 'Supermarket', meaning: 'ซูเปอร์มาร์เก็ต', example: 'We buy food at the **supermarket**.' },
          { id: 'ncom25', word: 'Haircut', meaning: 'การตัดผม', example: 'I need a new **haircut**.' }
        ]
      },
      {
        id: 'noun-countable',
        title: '7. Countable Nouns (นามนับได้)',
        words: [
          { id: 'ncnt1', word: 'Bottle', meaning: 'ขวด', example: 'I bought two **bottles** of water.' },
          { id: 'ncnt2', word: 'Coin', meaning: 'เหรียญ', example: 'He found a gold **coin**.' },
          { id: 'ncnt3', word: 'Dog', meaning: 'สุนัข', example: 'There are three **dogs** in the park.' },
          { id: 'ncnt4', word: 'Idea', meaning: 'ความคิด', example: 'I have many **ideas** for the project.' },
          { id: 'ncnt5', word: 'Job', meaning: 'งาน', example: 'She applied for several **jobs**.' },
          { id: 'ncnt6', word: 'Chair', meaning: 'เก้าอี้', example: 'We need more **chairs** for the guests.' },
          { id: 'ncnt7', word: 'Apple', meaning: 'แอปเปิ้ล', example: 'An **apple** a day keeps the doctor away.' },
          { id: 'ncnt8', word: 'Student', meaning: 'นักเรียน', example: 'Every **student** has a textbook.' },
          { id: 'ncnt9', word: 'Minute', meaning: 'นาที', example: 'Please wait a **minute**.' },
          { id: 'ncnt10', word: 'Island', meaning: 'เกาะ', example: 'They live on a tropical **island**.' },
          { id: 'ncnt11', word: 'Candidate', meaning: 'ผู้สมัคร', example: 'Three **candidates** are waiting.' },
          { id: 'ncnt12', word: 'Journey', meaning: 'การเดินทาง', example: 'Life is a long **journey**.' },
          { id: 'ncnt13', word: 'Accident', meaning: 'อุบัติเหตุ', example: 'Drive carefully to avoid an **accident**.' },
          { id: 'ncnt14', word: 'Box', meaning: 'กล่อง', example: 'Put the toys in the **box**.' },
          { id: 'ncnt15', word: 'Cup', meaning: 'ถ้วย', example: 'I drank a **cup** of tea.' },
          { id: 'ncnt16', word: 'Pen', meaning: 'ปากกา', example: 'I have a red **pen**.' },
          { id: 'ncnt17', word: 'Phone', meaning: 'โทรศัพท์', example: 'Where is my **phone**?' },
          { id: 'ncnt18', word: 'Tree', meaning: 'ต้นไม้', example: 'We planted a **tree**.' },
          { id: 'ncnt19', word: 'Key', meaning: 'กุญแจ', example: 'I lost my **key**.' },
          { id: 'ncnt20', word: 'Bag', meaning: 'กระเป๋า', example: 'This **bag** is heavy.' },
          { id: 'ncnt21', word: 'Hat', meaning: 'หมวก', example: 'He wears a **hat**.' },
          { id: 'ncnt22', word: 'Ring', meaning: 'แหวน', example: 'She has a diamond **ring**.' },
          { id: 'ncnt23', word: 'Plate', meaning: 'จาน', example: 'The **plate** is empty.' },
          { id: 'ncnt24', word: 'Spoon', meaning: 'ช้อน', example: 'Use a **spoon** for soup.' },
          { id: 'ncnt25', word: 'Fork', meaning: 'ส้อม', example: 'I need a **fork**.' }
        ]
      },
      {
        id: 'noun-uncountable',
        title: '8. Uncountable Nouns (นามนับไม่ได้)',
        words: [
          { id: 'nunc1', word: 'Water', meaning: 'น้ำ', example: 'Drink plenty of **water**.' },
          { id: 'nunc2', word: 'Rice', meaning: 'ข้าว', example: 'We eat **rice** every day.' },
          { id: 'nunc3', word: 'Money', meaning: 'เงิน', example: 'He spends a lot of **money**.' },
          { id: 'nunc4', word: 'Traffic', meaning: 'การจราจร', example: 'The **traffic** is bad today.' },
          { id: 'nunc5', word: 'Advice', meaning: 'คำแนะนำ', example: 'Can you give me some **advice**?' },
          { id: 'nunc6', word: 'Bread', meaning: 'ขนมปัง', example: 'I like to eat **bread** with butter.' },
          { id: 'nunc7', word: 'Furniture', meaning: 'เฟอร์นิเจอร์', example: 'They bought new **furniture**.' },
          { id: 'nunc8', word: 'News', meaning: 'ข่าว', example: 'I heard some good **news**.' },
          { id: 'nunc9', word: 'Weather', meaning: 'สภาพอากาศ', example: 'The **weather** is nice today.' },
          { id: 'nunc10', word: 'Electricity', meaning: 'ไฟฟ้า', example: 'The **electricity** went out last night.' },
          { id: 'nunc11', word: 'Gold', meaning: 'ทอง', example: '**Gold** is a precious metal.' },
          { id: 'nunc12', word: 'Luggage', meaning: 'สัมภาระ', example: 'Do you have much **luggage**?' },
          { id: 'nunc13', word: 'Information', meaning: 'ข้อมูล', example: 'I need more **information** about this.' },
          { id: 'nunc14', word: 'Sugar', meaning: 'น้ำตาล', example: 'Don\'t add too much **sugar**.' },
          { id: 'nunc15', word: 'Salt', meaning: 'เกลือ', example: 'Pass me the **salt**, please.' },
          { id: 'nunc16', word: 'Pepper', meaning: 'พริกไทย', example: 'I like **pepper** on my eggs.' },
          { id: 'nunc17', word: 'Milk', meaning: 'นม', example: 'Drink **milk** for strong bones.' },
          { id: 'nunc18', word: 'Coffee', meaning: 'กาแฟ', example: 'I drink **coffee** in the morning.' },
          { id: 'nunc19', word: 'Tea', meaning: 'ชา', example: 'Would you like some **tea**?' },
          { id: 'nunc20', word: 'Oil', meaning: 'น้ำมัน', example: 'We need **oil** for cooking.' },
          { id: 'nunc21', word: 'Butter', meaning: 'เนย', example: 'Spread **butter** on the toast.' },
          { id: 'nunc22', word: 'Cheese', meaning: 'ชีส', example: 'Mice like **cheese**.' },
          { id: 'nunc23', word: 'Meat', meaning: 'เนื้อสัตว์', example: 'Vegetarians don\'t eat **meat**.' },
          { id: 'nunc24', word: 'Air', meaning: 'อากาศ', example: 'The **air** is fresh here.' },
          { id: 'nunc25', word: 'Dust', meaning: 'ฝุ่น', example: 'There is a lot of **dust** on the shelf.' }
        ]
      }
    ]
  },
  {
    id: 'pos-verb',
    title: '2. Verb (คำกริยา)',
    icon: '🏃',
    color: 'orange',
    subCategories: [
      {
        id: 'verb-irregular',
        title: 'Irregular Verbs (กริยา 3 ช่อง)',
        words: [
          { 
            id: 'v1', 
            word: 'Go', 
            meaning: 'ไป (Go - Went - Gone)', 
            example: 'Present: I **go** to school by bus.\nPast: She **went** to London last year.\nPerfect: He has **gone** home already.' 
          },
          { 
            id: 'v2', 
            word: 'Eat', 
            meaning: 'กิน (Eat - Ate - Eaten)', 
            example: 'Present: They **eat** lunch at noon.\nPast: We **ate** pizza yesterday.\nPerfect: I have never **eaten** sushi.' 
          },
          { 
            id: 'v3', 
            word: 'See', 
            meaning: 'เห็น (See - Saw - Seen)', 
            example: 'Present: I **see** a bird in the tree.\nPast: I **saw** him at the mall.\nPerfect: Have you **seen** my keys?' 
          },
          { 
            id: 'v4', 
            word: 'Take', 
            meaning: 'นำไป/เอา (Take - Took - Taken)', 
            example: 'Present: Please **take** this with you.\nPast: He **took** the wrong bag.\nPerfect: Someone has **taken** my seat.' 
          },
          { 
            id: 'v5', 
            word: 'Write', 
            meaning: 'เขียน (Write - Wrote - Written)', 
            example: 'Present: She **writes** in her diary daily.\nPast: He **wrote** a famous book.\nPerfect: I have **written** three emails.' 
          }
        ]
      },
      {
        id: 'verb-stative',
        title: 'Stative Verbs (แสดงสภาวะ)',
        words: [
          { 
            id: 'v6', 
            word: 'Know', 
            meaning: 'รู้/รู้จัก (Know - Knew - Known)', 
            example: 'Present: I **know** the answer.\nPast: He **knew** it was wrong.\nPerfect: We have **known** each other for years.' 
          },
          { 
            id: 'v7', 
            word: 'Understand', 
            meaning: 'เข้าใจ (Understand - Understood - Understood)', 
            example: 'Present: Do you **understand**?\nPast: I finally **understood** the math problem.\nPerfect: She has **understood** everything clearly.' 
          },
          { 
            id: 'v8', 
            word: 'Love', 
            meaning: 'รัก (Love - Loved - Loved)', 
            example: 'Present: I **love** my family.\nPast: She **loved** painting as a child.\nPerfect: He has always **loved** music.' 
          }
        ]
      },
      {
        id: 'verb-helping',
        title: 'Helping Verbs (กริยาช่วย)',
        words: [
          { 
            id: 'v9', 
            word: 'Be', 
            meaning: 'เป็น/อยู่/คือ (Is/Am/Are - Was/Were - Been)', 
            example: 'Present: She **is** a doctor.\nPast: They **were** happy.\nPerfect: I have **been** to Japan.' 
          },
          { 
            id: 'v10', 
            word: 'Have', 
            meaning: 'มี (Have/Has - Had - Had)', 
            example: 'Present: I **have** a dog.\nPast: He **had** a cold last week.\nPerfect: We have **had** enough.' 
          }
        ]
      }
    ]
  },
  {
    id: 'pos-adj',
    title: '3. Adjective (คำคุณศัพท์)',
    icon: '✨',
    color: 'pink',
    subCategories: [
      {
        id: 'adj-descriptive',
        title: 'Descriptive (บอกลักษณะ)',
        words: [
          { id: 'adj1', word: 'Beautiful', meaning: 'สวยงาม', example: 'She has a **beautiful** voice.' },
          { id: 'adj2', word: 'Expensive', meaning: 'แพง', example: 'This car is too **expensive**.' },
          { id: 'adj3', word: 'Ancient', meaning: 'โบราณ', example: 'We visited an **ancient** temple.' }
        ]
      },
      {
        id: 'adj-feeling',
        title: 'Feelings (ความรู้สึก)',
        words: [
          { id: 'adj4', word: 'Exhausted', meaning: 'เหนื่อยล้า', example: 'I felt **exhausted** after the run.' },
          { id: 'adj5', word: 'Confused', meaning: 'สับสน', example: 'The instructions were **confused**.' },
          { id: 'adj6', word: 'Anxious', meaning: 'กังวล', example: 'He is **anxious** about the test.' }
        ]
      }
    ]
  },
  {
    id: 'pos-adv',
    title: '4. Adverb (กริยาวิเศษณ์)',
    icon: '⚡',
    color: 'teal',
    subCategories: [
      {
        id: 'adv-manner',
        title: 'Manner (อาการ)',
        words: [
          { id: 'adv1', word: 'Quickly', meaning: 'อย่างรวดเร็ว', example: 'He ran **quickly** to catch the bus.' },
          { id: 'adv2', word: 'Carefully', meaning: 'อย่างระมัดระวัง', example: 'Please drive **carefully**.' },
          { id: 'adv3', word: 'Fluently', meaning: 'อย่างคล่องแคล่ว', example: 'She speaks English **fluently**.' }
        ]
      },
      {
        id: 'adv-freq',
        title: 'Frequency (ความถี่)',
        words: [
          { id: 'adv4', word: 'Always', meaning: 'เสมอ', example: 'I **always** wake up early.' },
          { id: 'adv5', word: 'Sometimes', meaning: 'บางครั้ง', example: 'We **sometimes** go out for dinner.' }
        ]
      }
    ]
  },
  {
    id: 'pos-pronoun',
    title: '5. Pronoun (คำสรรพนาม)',
    icon: '👤',
    color: 'indigo',
    subCategories: [
      {
        id: 'pro-personal',
        title: 'Personal Pronouns',
        words: [
          { id: 'pro1', word: 'They', meaning: 'พวกเขา', example: '**They** are my friends.' },
          { id: 'pro2', word: 'It', meaning: 'มัน', example: '**It** is raining.' }
        ]
      },
      {
        id: 'pro-reflexive',
        title: 'Reflexive Pronouns',
        words: [
          { id: 'pro3', word: 'Myself', meaning: 'ตัวฉันเอง', example: 'I did it by **myself**.' },
          { id: 'pro4', word: 'Themselves', meaning: 'ตัวพวกเขาเอง', example: 'They enjoyed **themselves** at the party.' }
        ]
      }
    ]
  },
  {
    id: 'pos-prep',
    title: '6. Preposition (คำบุพบท)',
    icon: '📍',
    color: 'green',
    subCategories: [
      {
        id: 'prep-place',
        title: 'Place & Time',
        words: [
          { id: 'prep1', word: 'Between', meaning: 'ระหว่าง', example: 'The shop is **between** the bank and the park.' },
          { id: 'prep2', word: 'During', meaning: 'ในระหว่าง', example: 'Please be quiet **during** the movie.' },
          { id: 'prep3', word: 'Against', meaning: 'พิง/ต่อต้าน', example: 'He leaned **against** the wall.' }
        ]
      }
    ]
  },
  {
    id: 'pos-conj',
    title: '7. Conjunction (คำสันธาน)',
    icon: '🔗',
    color: 'purple',
    subCategories: [
      {
        id: 'conj-basic',
        title: 'Connectors',
        words: [
          { id: 'conj1', word: 'Although', meaning: 'ถึงแม้ว่า', example: '**Although** it rained, we went out.' },
          { id: 'conj2', word: 'Unless', meaning: 'เว้นแต่ว่า', example: 'You won\'t pass **unless** you study.' },
          { id: 'conj3', word: 'Because', meaning: 'เพราะว่า', example: 'I stayed home **because** I was sick.' }
        ]
      }
    ]
  },
  {
    id: 'pos-interj',
    title: '8. Interjection (คำอุทาน)',
    icon: '❗',
    color: 'red',
    subCategories: [
      {
        id: 'interj-common',
        title: 'Common Exclamations',
        words: [
          { id: 'int1', word: 'Wow', meaning: 'ว้าว!', example: '**Wow**! That looks amazing.' },
          { id: 'int2', word: 'Ouch', meaning: 'โอ๊ย!', example: '**Ouch**! That hurt.' },
          { id: 'int3', word: 'Oops', meaning: 'อุ๊ย!', example: '**Oops**! I dropped it.' }
        ]
      }
    ]
  }
];