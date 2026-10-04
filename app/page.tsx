const statCards = [
  { label: 'Brain Score', value: '87%', tone: 'cyan' },
  { label: 'Current Level', value: 'Chaos Mage', tone: 'pink' },
  { label: 'Streak', value: '12 days', tone: 'purple' },
  { label: 'Meme IQ', value: '99th pct', tone: 'green' },
];

const challengeModes = [
  {
    title: 'Meme Master',
    desc: 'Recognize obscure internet legends and viral chaos in under 10 seconds.',
    tag: 'Hot take',
    accent: 'cyan',
  },
  {
    title: 'Reflex Rush',
    desc: 'Tap through insane reaction tasks made for true internet-speed minds.',
    tag: 'Fast mode',
    accent: 'pink',
  },
  {
    title: 'Memory Vault',
    desc: 'Save the sequence of cursed clips, famous memes, and chaotic references.',
    tag: 'High focus',
    accent: 'purple',
  },
  {
    title: 'Pattern Panic',
    desc: 'Decode the meme cycle before the algorithm turns your brain into soup.',
    tag: 'Logic',
    accent: 'green',
  },
];

const leaders = [
  { name: 'SkibidiSam', score: '98.7%', badge: 'Legend' },
  { name: 'DankDynamo', score: '96.2%', badge: 'Pro' },
  { name: 'MemeMancer', score: '94.8%', badge: 'Prime' },
  { name: 'You', score: '87.0%', badge: 'Fresh' },
];

const perks = [
  'Daily challenge streaks',
  'Live leaderboard glow-ups',
  'Mood-based brain status meter',
  'Shareable scorecards with your crew',
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">B</span>
          <span>Brainrot Checker</span>
        </div>

        <nav className="nav">
          <a href="#modes">Modes</a>
          <a href="#leaderboard">Leaderboard</a>
          <a href="#about">About</a>
        </nav>

        <button className="primary-btn">Play now</button>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">Internet culture meets cognitive chaos</div>
          <h1>Is your brain cooked or still in beta?</h1>
          <p>
            Test your meme IQ, reaction speed, memory, and pattern recognition in a game built for
            weirdos, legends, and total internet gremlins.
          </p>

          <div className="cta-row">
            <button className="primary-btn large">Start the test</button>
            <button className="secondary-btn">View leaderboard</button>
          </div>

          <div className="stats-grid">
            {statCards.map((card) => (
              <div key={card.label} className={`stat-card ${card.tone}`}>
                <span>{card.label}</span>
                <strong>{card.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="score-panel">
            <div className="brain-ring">
              <div className="brain-ring-inner">
                <span>Brain Status</span>
                <strong>87%</strong>
                <em>Mostly functional</em>
              </div>
            </div>

            <div className="mini-cards">
              <div className="mini-card">
                <label>Reflex</label>
                <strong>98</strong>
              </div>
              <div className="mini-card highlight">
                <label>Chaos</label>
                <strong>7.4</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="modes" className="section-block">
        <div className="section-heading">
          <span className="eyebrow">Challenge modes</span>
          <h2>Train your brain like a meme legend.</h2>
        </div>

        <div className="card-grid">
          {challengeModes.map((mode) => (
            <article key={mode.title} className={`mode-card ${mode.accent}`}>
              <span className="pill">{mode.tag}</span>
              <h3>{mode.title}</h3>
              <p>{mode.desc}</p>
              <button>Play now</button>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section-block split-layout">
        <div className="info-panel">
          <span className="eyebrow">Why this exists</span>
          <h2>Fun is the feature.</h2>
          <p>
            Brainrot Checker turns internet culture, quick logic, and dumb-but-addictive mini-games
            into a playful challenge that feels more like a dopamine rush than a test.
          </p>

          <ul className="perk-list">
            {perks.map((perk) => (
              <li key={perk}>{perk}</li>
            ))}
          </ul>
        </div>

        <div className="daily-card">
          <span className="eyebrow">Today&apos;s challenge</span>
          <h3>“Name the meme before the timer hits zero.”</h3>
          <div className="timer-box">
            <span>Time left</span>
            <strong>00:24</strong>
          </div>
          <button className="primary-btn large">Start challenge</button>
        </div>
      </section>

      <section id="leaderboard" className="section-block">
        <div className="section-heading compact">
          <span className="eyebrow">Leaderboard</span>
          <h2>Top chaos runners this week</h2>
        </div>

        <div className="leaderboard-list">
          {leaders.map((person, index) => (
            <div key={person.name} className="leader-row">
              <div className="rank">#{index + 1}</div>
              <div className="player-meta">
                <strong>{person.name}</strong>
                <span>{person.badge}</span>
              </div>
              <div className="score-tag">{person.score}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div>
          <span className="eyebrow">Ready to test your chaos level?</span>
          <h2>Find out how cooked your brain really is.</h2>
        </div>
        <button className="primary-btn large">Check my brain</button>
      </section>
    </main>
  );
}
