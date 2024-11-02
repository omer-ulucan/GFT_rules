import Discipline from "./discipline";
import MatchRules from "./matchrules";
import Navbar from "./navbar";
import Rules from "./rules";
import { useState } from "react";
import gaziLogo from '../assets/gazi_logo.png';
import gftLogo from '../assets/gft_logo.png';

function App() {
  const rules = [
    "Gazi Futbol Topluluğunun amacı sadece futbol oynamak veya halı saha maçı yapmak değildir. Topluluğun asıl amacı futbolu bir aracı olarak kullanıp futbolseverleri bir araya getirerek, bu iletişim ağı çerçevesinde onların çeşitli sosyal faaliyetlerle keyifli zaman geçirmesini sağlamaktır.",
    "Etkinlikler ve maçlar esnasında hiçbir şekilde takım taraftarlığı kötüye kullanılıp bu taraftarlık yüzünden farklı takım tutan oyunculara karşıt düşünceler içine girilmemelidir. Topluluk ve etkinlikler sadece ve sadece futbol sevgisini barındırıp içinde başka bir düşünce veya fikir barındırmaz.",
    "Futbol Topluluğunun etkinliklerine katılmak için Öğrenci Bilgi Sistemi'nden topluluğa üye olmanız zorunludur. Etkinliklere başvurmadan önce üye olup, üyelik başvuru işlemi tamamlandıktan sonra etkinlik sorumlusuna veya yönetim ekibine durumu bildirerek etkinliklere katılabilirsiniz.",
    "Topluluğun maçlarına veya etkinliklerine katılımınız zorunlu değildir. Topluluğu gerek futbol gerekse başka konularda sadece sohbet etmek ve insanlarla sosyalleşmek amacıyla kullanabilirsiniz."
  ];

  const discipline1 = [
    "a) Düzene karşı gelmek, takım ruhunu ve oyununu zedeleyecek etik ve ahlak dışı hareketlerde bulunmak.",
    "b) Etkinliği beraber sürdürdüğü kişilerle tartışıp onlara saygısızlık yapmak.",
    "c) Herhangi bir fiziksel, sözlü veya psikolojik şiddet, taciz ya da ayrımcı davranışlarda bulunmak.",
    "d) Topluluğun iç ve dış çevresinde, üniversitenin ve topluluğun itibarını zedeleyici eylem ve söylemlerde bulunmak.",
    "e) Topluluğa ait malzemeleri veya üniversitenin sağladığı tesisleri bilinçli olarak kötüye kullanmak veya zarar vermek.",
    "Topluluk tarafından düzenlenen halı saha maçlarında organizasyonun sorunsuz işlemesi için maç saatinden en geç 10 dakika öncesine kadar tüm oyuncuların saha kenarında bulunmaları gerekmektedir. Geç kalma durumlarında geç gelen kişinin -eğer uygun bir gerekçesi yoksa- topluluğun etkinliklerine katılma hakkı ilkinde 2 hafta, ikincisinde 1 ay, üçüncüsünde ise kalıcı olarak alınır."
  ];

  const discipline2 = [
    "a) Rakibinize karşı saygılı olmak.",
    "b) Düzenlenen maçların nihai amacının eğlenmek olduğunu kesinlikle unutmamak.",
    "c) Maç esnasında kasti olarak sayılabilecek riskli hamlelerden kaçınmak.",
    "d) Maç esnasında rakip ve takım arkadaşı oyuncuları koruyup, sakatlık ve benzeri bir durum yaşanmaması adına rekabetçi ancak adil bir oynanış sunmak.",
    "e) Maç devam ederken karşı tarafa karşı hırslanma ve benzeri durumlarda özdenetim sağlayıp gerginlik çıkmasını önlemek.",
    "f) Olası sakatlıkları en aza indirmek adına maç öncesi ısınma ile maç bitiminde soğuma hareketleri yapmak. Bu madde bir kural değil fakat bir tavsiyedir.",
    "g) Takım arkadaşlarınız topla ne kadar iyi veya kötü olursa olsun, bencilce davranışlar sergileyip futbol topu ayağına geldiği gibi kaleye gol atmak adına takım arkadaşlarını görmezden gelmek yerine paslaşmaya ve takım oyununa önem göstermek.",
    "h) Hakemsiz maçlarda, maç sırasında kendisine müdahale yapılan oyuncu durumun 'faul' olduğunu belirtiyorsa onun isteğine saygı duyup topu teslim etmek.",
    "i) Bir yukarıdaki maddede bahsedilen 'kendisine müdahale yapılan oyuncu' olup, bu kuralı hor kullanmamak.",
    "j) Hakemli maçlarda, hakemin kararına haddi aşacak şekilde şiddetli itiraz etmemek ve hakemin kararına saygı duymak.",
    "k) Hem karşı tarafın hem de takım arkadaşlarının moralini bozacak, maçın akışını ve huzurunu zedeleyecek davranışlardan kaçınmak.",
    "l) Maç içerisindeki diğer oyuncuların parasına ve zamanına saygısızlık yapmamak adına maç esnasında pes etmemek, sahadan çıkmamak, yorgunluk harici oturmamak veya yatmamak."
  ];

  const [currentContent, setCurrentContent] = useState(<Rules rules={rules} />);
  const [activeSection, setActiveSection] = useState('info');

  return (
    <div className="items-center bg-gray-900 transition-all duration-500 min-h-screen">
      <Navbar
        info="Genel Bilgiler"
        rules="Disiplin Kuralları"
        inMatch="Maç İçi Kurallar"
        onInfoClick={() => {
          setCurrentContent(<Rules rules={rules} />);
          setActiveSection('info');
        }}
        onRulesClick={() => {
          setCurrentContent(<Discipline rules={discipline1} />);
          setActiveSection('rules');
        }}
        onInMatchClick={() => {
          setCurrentContent(<MatchRules rules={discipline2} />);
          setActiveSection('inMatch');
        }}
        leftImageSrc={gaziLogo}
        rightImageSrc={gftLogo}
        activeSection={activeSection}
      />

      <section
        id="content"
        className="flex flex-col items-center justify-center text-white"
      >
        {currentContent}
      </section>
    </div>
  );
}

export default App;
