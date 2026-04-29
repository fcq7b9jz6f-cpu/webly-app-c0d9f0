import React, { useState, useEffect } from 'react';
import './styles.css';

const sections = [
  {
    id: 'origin',
    title: 'الجذور والنشأة',
    icon: '🌱',
    content: 'في قرية طماي الزهايرة، ولدت الأسطورة. بدأت كطفلة تنشد في الموالد بزي بدوي، حيث اكتشف والدها الشيخ إبراهيم البلتاجي قوة صوتها الفطرية التي كانت تهز جدران المساجد والبيوت الريفية. لم تكن مجرد موهبة، بل كانت ظاهرة صوتية نادرة تتشكل في أحضان الريف المصري.'
  },
  {
    id: 'golden',
    title: 'العصر الذهبي',
    icon: '🎭',
    content: 'انتقلت للقاهرة لتبدأ رحلة الصعود. من مسارح عماد الدين إلى قمة الهرم الغنائي. شكلت مع أحمد رامي ومحمد القصبجي مدرسة فنية جديدة غيرت وجه الموسيقى العربية. غنت القصيدة الفصحى والزجل العامي بقدرة مذهلة على التعبير، مما جعلها "شخصية العام" في كل زمان.'
  },
  {
    id: 'national',
    title: 'الدور الوطني',
    icon: '🇪🇬',
    content: 'لم تكن صوتاً فحسب، بل كانت جيشاً كاملاً. بعد نكسة 1967، طافت العالم لجمع التبرعات للمجهود الحربي. من باريس إلى الكويت، كانت أم كلثوم رمزاً للصمود المصري، حيث استُقبلت كملكة ورئيسة دولة، مؤكدة أن الفن هو السلاح الأقوى في وقت المحن.'
  },
  {
    id: 'legacy',
    title: 'الإرث الخالد',
    icon: '✨',
    content: 'رحلت الست جسداً وبقيت صوتاً لا يغيب. ما زالت حفلاتها التي تُبث في منتصف الليل طقساً مقدساً للملايين. أصبحت نظارتها السوداء ومنديلها الحريري أيقونات عالمية تدرس في تاريخ الموضة والفهم العميق للكاريزما الفنية.'
  }
];

const stats = [
  { label: 'أغنية', value: '300+' },
  { label: 'سنة غناء', value: '50+' },
  { label: 'حضور جنازة', value: '4M+' },
  { label: 'جوائز دولية', value: '15' }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('origin');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="ios-container">
      {/* Dynamic Header UI for iOS 26 */}
      <header className={`ios-header ${scrolled ? 'glass' : ''}`}>
        <div className="status-bar">
          <span className="time">9:41</span>
          <div className="status-icons">
            <span className="signal">📶</span>
            <span className="battery">🔋</span>
          </div>
        </div>
        <nav className="nav-main">
          <h1>كوكب الشرق</h1>
          <div className="profile-badge">UK</div>
        </nav>
      </header>

      <main className="ios-content">
        {/* Dynamic Hero Section */}
        <section className="hero-card">
          <div className="hero-overlay">
            <span className="badge">Featured</span>
            <h2>أسطورة الغناء العربي</h2>
            <p>رحلة في حياة السيدة التي وحدت العرب بصوتها</p>
            <button className="ios-btn-primary">استمع الآن</button>
          </div>
        </section>

        {/* Dynamic Stats Grid */}
        <section className="stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Content Tabs - iOS 26 Style */}
        <section className="content-explorer">
          <div className="ios-tabs">
            {sections.map(s => (
              <button 
                key={s.id}
                className={activeTab === s.id ? 'active' : ''}
                onClick={() => setActiveTab(s.id)}
              >
                {s.icon}
              </button>
            ))}
          </div>
          
          <div className="ios-detail-card">
            <h2>{sections.find(s => s.id === activeTab).title}</h2>
            <p>{sections.find(s => s.id === activeTab).content}</p>
          </div>
        </section>

        {/* Long Text Body - Detailed Biography */}
        <section className="bio-extensive">
          <div className="ios-card">
            <h3>التفاصيل الموسيقية والتقنية</h3>
            <p>
              تعتبر أم كلثوم صاحبة "صوت كونترالتو" قوي، وهو أغلظ صوت نسائي، لكنها كانت تتنقل بين الطبقات بمهارة "السوبرانو". 
              تميزت بطول النفس الاستثنائي الذي كان يسمح لها بإعادة الكوبليه الواحد لأكثر من عشرين مرة بتلوينات مقامية مختلفة دون كلل. 
              تعاملت مع عمالقة التلحين مثل رياض السنباطي الذي قدم لها "الأطلال" والتي تعتبر "تاج الأغنية العربية"، 
              وبليغ حمدي الذي نقلها إلى روح العصر بـ "حب إيه" و "ألف ليلة وليلة".
            </p>
            <p>
              علاقتها بالجمهور لم تكن علاقة مطربة بمستمعين، بل كانت علاقة وجدانية. كانت تقرأ وجوه الحاضرين في مسرح قصر النيل، 
              وتعدل في أدائها بناءً على "السلطنة" التي تراها في عيونهم. 
            </p>
          </div>
        </section>
      </main>

      {/* iOS 26 Tab Bar */}
      <footer className="ios-tab-bar">
        <div className="tab-item active">🏠<span>الرئيسية</span></div>
        <div className="tab-item">🎵<span>الأغاني</span></div>
        <div className="tab-item">📸<span>المعرض</span></div>
        <div className="tab-item">🔎<span>بحث</span></div>
      </footer>
    </div>
  );
}
