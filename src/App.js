import React, { useState, useEffect } from 'react';
import './styles.css';

const Navigation = ({ activeTab, setActiveTab }) => (
  <nav className="ios-nav">
    <div className="nav-blur"></div>
    <div className="nav-items">
      <button onClick={() => setActiveTab('bio')} className={activeTab === 'bio' ? 'active' : ''}>
        <span className="icon">◈</span> <span className="label">السيرة</span>
      </button>
      <button onClick={() => setActiveTab('art')} className={activeTab === 'art' ? 'active' : ''}>
        <span className="icon">♫</span> <span className="label">الفن</span>
      </button>
      <button onClick={() => setActiveTab('nation')} className={activeTab === 'nation' ? 'active' : ''}>
        <span className="icon">⚓</span> <span className="label">الوطن</span>
      </button>
      <button onClick={() => setActiveTab('legacy')} className={activeTab === 'legacy' ? 'active' : ''}>
        <span className="icon">⚜</span> <span className="label">الإرث</span>
      </button>
    </div>
  </nav>
);

const SectionHero = () => (
  <header className="hero-ios">
    <div className="hero-content">
      <div className="badge">الذكرى الخالدة</div>
      <h1>أم كُلثوم</h1>
      <p className="subtitle">صوتُ مِصر الذي لا يغيب، وهيبةُ الشرق التي لم تزل.</p>
      <div className="scroll-indicator">تأمل في التفاصيل</div>
    </div>
  </header>
);

const BioSection = () => (
  <div className="depth-content">
    <div className="glass-card main-card">
      <div className="card-header">
        <span className="chapter">الفصل الأول</span>
        <h2>الجذور والنشأة (1898 - 1923)</h2>
      </div>
      <p>في قلب الريف المصري، وتحديداً في "طماي الزهايرة"، ولدت فاطمة إبراهيم البلتاجي. لم تكن مجرد طفلة ريفية، بل كانت "معجزة" تتشكل بين الحقول. بدأت مسيرتها في عالم الإنشاد الديني، حيث كان والدها يلبسها زي الصبيان لتنشد معه التواشيح، خشيةً من نظرة المجتمع لغناء الفتيات آنذاك. صرخة صوتها الأولى لم تكن مجرد نغم، بل كانت إعلاناً عن بزوغ فجر جديد للموسيقى العربية.</p>
      
      <div className="deep-insight">
        <h3>فلسفة التكوين</h3>
        <p>تلقنت أصول اللغة ومخارج الحروف من القرآن الكريم، مما منح صوتها "فخامة اللفظ" التي ميزتها عن غيرها. لم تتعلم الغناء في معاهد، بل تعلمته من صمت الليل وصمود الفلاحين، فجاء صوتها محملاً بتراب مصر وعظمة نيلها.</p>
      </div>

      <div className="grid-details">
        <div className="info-box">
          <h3>محطة القاهرة</h3>
          <p>في عام 1923، اتخذت القرار المصيري بالانتقال للعاصمة. هناك، التقت بالشيخ أبو العلا محمد، الذي صقل موهبتها الفطرية وحولها من منشدة ريفية إلى مطربة تليق بمسارح القاهرة الكبرى.</p>
        </div>
        <div className="info-box">
          <h3>معركة الهوية</h3>
          <p>واجهت الست في بدايتها تيارات فنية متباينة، لكنها اختارت "الرقي" مساراً، فرفضت الابتذال وأصرت على غناء القصائد الفصحى، مما رفع الذوق العام للأمة بأكملها.</p>
        </div>
      </div>
    </div>
  </div>
);

const ArtSection = () => (
  <div className="depth-content">
    <div className="glass-card neon-card">
      <div className="card-header">
        <span className="chapter">الفصل الثاني</span>
        <h2>العصر الذهبي: هندسة الصوت</h2>
      </div>
      <p>أم كلثوم لم تكن تغني، كانت "تبني" معماراً صوتياً. تميزت حنجرتها بما يسميه علماء الصوت "الرنين الثابت"، وهي قدرة نادرة على الحفاظ على قوة النغمة وصفائها مهما طال زمن الأداء.</p>
      
      <div className="timeline-horizontal">
        <div className="time-node">
          <span className="year">1930s</span>
          <h3>البناء الموسيقي</h3>
          <p>التعاون مع القصبجي أفرز روائع مثل "رق الحبيب"، حيث أدخلت الآلات الغربية بذكاء شرقي.</p>
        </div>
        <div className="time-node">
          <span className="year">1940s-50s</span>
          <h3>السنباطية</h3>
          <p>عصر "رياض السنباطي" والقصائد الطويلة مثل "الأطلال"، التي تعتبر قمة الهرم الغنائي العربي.</p>
        </div>
        <div className="time-node">
          <span className="year">1964</span>
          <h3>عصر الوهابيات</h3>
          <p>"لقاء السحاب" في أغنية (إنت عمري) الذي كسر الجمود وحقق أرقام مبيعات خيالية.</p>
        </div>
      </div>

      <div className="tech-specs">
        <h3>أسرار الميكروفون</h3>
        <ul>
          <li>كانت أم كلثوم تبتعد عن الميكروفون بمسافة تصل لمترين عندما تطلق صرخات صوتية قوية لتفادي تشويه الصوت.</li>
          <li>المنديل الشهير لم يكن زينة، بل وسيلة لامتصاص عرق اليدين وللتحكم في القلق، حيث كانت "تهتز" هيبةً من الجمهور في كل مرة.</li>
          <li>نظارتها السوداء كانت لإخفاء جحوظ عينيها الناتج عن نشاط الغدة الدرقية، لكنها تحولت لأيقونة موضة عالمية.</li>
        </ul>
      </div>
    </div>
  </div>
);

const NationalSection = () => (
  <div className="depth-content">
    <div className="glass-card patriot-card">
      <div className="card-header">
        <span className="chapter">الفصل الثالث</span>
        <h2>الدولة داخل الفنان: المجهود الحربي</h2>
      </div>
      <p>بعد نكسة يونيو 1967، تحولت أم كلثوم إلى "وزيرة خارجية شعبية". أعلنت أنها لن تغني في مصر إلا بعد زوال العدوان، وخصصت كل دخل حفلاتها لإعادة بناء الجيش المصري.</p>
      
      <div className="global-tour">
        <h3>قطار الكرامة</h3>
        <p>طافت باريس، الكويت، تونس، السودان، ولبنان. في "الأوليمبيا" بباريس، وقف الجمهور الفرنسي مبهوراً بهيبة المرأة التي وصفتها الصحافة الفرنسية بأنها "صوت لا يشيخ وشخصية لا تنكسر".</p>
      </div>

      <blockquote className="ios-quote">
        "إن أم كلثوم هي المتحدث الرسمي باسم الوجدان العربي.. صوتها كان يجمع العرب حين تفرقهم السياسة."
      </blockquote>

      <div className="chips-title">أوسمة وتكريمات:</div>
      <div className="country-chip-container">
        <span className="chip">وسام الاستحقاق السوري</span>
        <span className="chip">وسام الرافدين العراقي</span>
        <span className="chip">جائزة الدولة التقديرية (مصر)</span>
        <span className="chip">وسام شرف من فرنسا</span>
      </div>
    </div>
  </div>
);

const LegacySection = () => (
  <div className="depth-content">
    <div className="glass-card legacy-card">
      <div className="card-header">
        <span className="chapter">الفصل الأخير</span>
        <h2>الرحيل والهيبة الأبدية</h2>
      </div>
      <p>في 3 فبراير 1975، بكى العالم العربي كما لم يبكِ من قبل. جنازتها لم تكن وداعاً لمطربة، بل كانت وداعاً لحقبة كاملة من تاريخ مصر القومي والفني. خرج أربعة ملايين مصري يسيرون خلف نعشها في مشهد مهيب لم يتكرر.</p>
      
      <div className="future-legacy">
        <h3>لماذا بقيت أم كلثوم؟</h3>
        <p>السر يكمن في "الكمال". كانت تتدرب على الأغنية لأشهر، تتدخل في الكلمة وفي اللحن وتختار العازفين بدقة متناهية. إرثها اليوم يُدرس في كبرى الجامعات العالمية كنموذج للسيطرة الصوتية والكاريزما القوية.</p>
      </div>

      <div className="modern-stats">
        <div className="stat">
          <span className="number">280+</span>
          <span className="label">عمل فني</span>
        </div>
        <div className="stat">
          <span className="number">100 سنة</span>
          <span className="label">من التأثير</span>
        </div>
        <div className="stat">
          <span className="number">∞</span>
          <span className="label">خلود</span>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('bio');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`ios-26-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="status-bar">
        <span>Webly 7G</span>
        <span>{new Date().toLocaleTimeString('ar-EG', {hour: '2-digit', minute:'2-digit'})}</span>
        <span>100% 🔋</span>
      </div>

      <SectionHero />

      <main className="scroll-area">
        {activeTab === 'bio' && <BioSection />}
        {activeTab === 'art' && <ArtSection />}
        {activeTab === 'nation' && <NationalSection />}
        {activeTab === 'legacy' && <LegacySection />}
        
        <div className="bottom-spacing" />
      </main>

      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
