import React, { useState, useEffect } from 'react';
import './styles.css';

const Section = ({ title, children, id, bg = 'dark' }) => (
  <section id={id} className={`content-section ${bg}`}>
    <div className="container">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">{children}</div>
    </div>
  </section>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo">أم كلثوم</div>
        <div className="nav-links">
          <a href="#biography">السيرة</a>
          <a href="#art">الفن</a>
          <a href="#national">الوطن</a>
          <a href="#legacy">الإرث</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-text">
          <h1>كوكب الشرق</h1>
          <p>سيدة الغناء العربي.. صوت مصر الذي لم يغب قط</p>
          <div className="golden-line"></div>
        </div>
      </header>

      {/* Introduction */}
      <Section title="النشأة: من طماي الزهايرة إلى سماء العالمية" id="biography">
        <div className="rich-text">
          <p className="lead">
            في قرية طماي الزهايرة، وُلدت "فاطمة إبراهيم البلتاجي" في ظروف متواضعة، لكنها كانت تحمل في حنجرتها كنزاً سيغير وجه الموسيقى العربية للأبد.
          </p>
          <div className="grid-2">
            <div className="card">
              <h3>البدايات (1898 - 1920)</h3>
              <p>
                بدأت الطفلة فاطمة رحلتها في الإنشاد مع والدها الشيخ إبراهيم، مرتديةً زي "صبي" لتتمكن من الغناء في الأفراح والموالد. كانت هذه المرحلة هي حجر الأساس لمخارج حروفها السليمة وتمكنها من المقامات الموسيقية المعقدة.
              </p>
            </div>
            <div className="card">
              <h3>الانتقال للقاهرة (1923)</h3>
              <p>
                نقطة التحول الكبرى كانت لقاءها بالشيخ أبو العلا محمد والشاعر أحمد رامي. غلعت ثياب المنشدة وارتدت ثوب الفنانة العصرية، لتبدأ مسيرة اكتساح المسارح في العاصمة التي لا تنام.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Deep Content Section 1: The Artistry */}
      <Section title="الثالوث المقدس: قمة الهرم الغنائي" id="art" bg="light">
        <div className="timeline">
          <div className="timeline-item">
            <h4>ثورة القصبجي ورياض السنباطي</h4>
            <p>
              لم يكن غناء أم كلثوم مجرد طرب، بل كان مشروعاً موسيقياً. محمد القصبجي منحها الحداثة، بينما كان رياض السنباطي هو "رفيق الدرب" الذي طوع القصائد الجاهلية والمناجاة الروحية لصوتها. عبقريته في تلحين "الأطلال" تُعد حتى اليوم ذروة الموسيقى العربية الكلاسيكية.
            </p>
          </div>
          <div className="timeline-item">
            <h4>مدرسة أحمد رامي وبيرم التونسي</h4>
            <p>
              بين فصحى رامي التي صاغت مشاعر الحب العذري، وعامية بيرم التي لامست وجدان الشعب المصري البسيط، شكّلت أم كلثوم جبهة لغوية فريدة، جعلت من الفلاح في حقله والملك في قصره يرددون نفس الكلمات.
            </p>
          </div>
          <div className="timeline-item">
            <h4>لقاء السحاب: عبد الوهاب وأم كلثوم</h4>
            <p>
              بعد عقود من التنافس، تم اللقاء "بإيعاز سياسي" في أغنية (إنت عمري) عام 1964. كان هذا اللقاء بمثابة زلزال فني غيّر مفاهيم التلحين، حيث دخل الجيتار الكهربائي والأدوات الحديثة في فرقة الست.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 3: National Role */}
      <Section title="المجاهدة بصوتها: دور المحاربة" id="national">
        <div className="national-grid">
          <div className="national-content">
            <h3>المجهود الحربي</h3>
            <p>
              بعد نكسة 1967، لم تكتفِ "الست" بالحزن، بل جابت عواصم العالم (باريس، تونس، الكويت، المغرب) في رحلات تاريخية لجمع التبرعات لإعادة بناء الجيش المصري. كانت تُعامل معاملة "رئيس دولة"، حيث كانت تُستقبل بالسجاد الأحمر والمراسم الرسمية، مؤكدة أن الفن سلاح لا يقل قوة عن الرصاص.
            </p>
            <div className="quote">
              "أنا لا أغني لمصر، أنا أحمل مصر في صوتي للعالم."
            </div>
          </div>
          <div className="sidebar-info">
            <div className="info-box">
              <h4>أوسمة ونياشين</h4>
              <ul>
                <li>قلادة النيل العظمى (أعلى وسام مصري)</li>
                <li>وسام الاستحقاق السوري</li>
                <li>وسام الكفاءة الفكرية من ملك المغرب</li>
                <li>وسام الأرز اللبناني</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 4: Iconography */}
      <Section title="أسرار الأيقونة: المنديل والنظارة" id="legacy" bg="light">
        <div className="icon-cards">
          <div className="icon-card">
            <div className="icon-placeholder">🕶️</div>
            <h3>النظارة السوداء</h3>
            <p>لم تكن مجرد موضة، بل لمرض جحوظ العينين الناتج عن خلل في الغدة الدرقية، ومع الوقت تحولت لرمز للغموض والهيبة.</p>
          </div>
          <div className="icon-card">
            <div className="icon-placeholder">🧣</div>
            <h3>المنديل</h3>
            <p>كانت تمسك به للتغلب على توتر الوقوف أمام الجمهور، وكان يُصنع من أفخر أنواع الحرير ليتماشى مع فساتينها الأسطورية.</p>
          </div>
          <div className="icon-card">
            <div className="icon-placeholder">🎙️</div>
            <h3>الوقوف خلف الميكروفون</h3>
            <p>سر ابتعادها عن الميكروفون بمسافة مترين كان قوة حنجرتها الجبارة التي كانت قادرة على تحطيم الميكروفونات الحساسة في ذلك الوقت.</p>
          </div>
        </div>
      </Section>

      {/* The End Section */}
      <Section title="الرحيل والبقاء">
        <div className="final-word">
          <p>
            في 3 فبراير 1975، توقفت نبضات "كوكب الشرق"، وخرج الملايين في جنازة وصفت بأنها الأكبر في تاريخ الشرق الأوسط بعد جنازة جمال عبد الناصر. رحلت فاطمة البلتاجي، وبقيت "أم كلثوم" ظاهرة كونية، حيث لا تزال إذاعات مخصصة في كافة أنحاء العالم تبث صوتها في تمام العاشرة مساءً، وكأن الزمن قد توقف إجلالاً لهذا الصوت.
          </p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-content">
          <p>تم تطوير هذه الموسوعة تخليداً لذكرى كوكب الشرق</p>
          <div className="footer-links">
            <span>&copy; 2024 جميع الحقوق محفوظة لمحبي التراث العربي</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
