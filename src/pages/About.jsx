import styles from "../styles/About.module.css";
import { skills, stats } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`${styles.aboutGrid} reveal`}>
        {/* Left: Bio */}
        <div>
          <p className="section-label">Tentang Saya</p>
          <h2 className="section-title">Siapa Saya?</h2>

          <div className={styles.aboutText}>
            <p>
              Saya adalah seorang Full Stack Developer dengan pengalaman 4+ tahun
              membangun aplikasi web yang scalable dan performant. Saya percaya bahwa
              kode yang baik adalah kode yang mudah dibaca, dipelihara, dan teruji.
            </p>
            <p>
              Selain coding, saya senang berbagi ilmu lewat tulisan dan open source.
              Selalu up-to-date dengan teknologi terbaru dan best practices industri.
            </p>
          </div>

          <div className={styles.skillsWrap}>
            {skills.map((skill) => (
              <span key={skill} className={styles.skillPill}>{skill}</span>
            ))}
          </div>
        </div>

        {/* Right: Stats */}
        <div>
          <div className={styles.statsRow}>
            {stats.map(({ number, description }) => (
              <div className={styles.statCard} key={description}>
                <div className={styles.statNum}>{number}</div>
                <div className={styles.statDesc}>{description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
