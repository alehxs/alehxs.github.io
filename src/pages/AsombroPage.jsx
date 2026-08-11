import { useState, useEffect, useCallback } from 'react';
import ExternalLink from '../components/ExternalLink';
import './AsombroPage.css';

const FALLBACK_QUOTE = {
  content: 'The first principle is that you must not fool yourself — and you are the easiest person to fool.',
  author: 'Richard Feynman',
};

function getDayLabel() {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function Skeleton({ sizes }) {
  return (
    <div className="word-skeleton">
      {sizes.map((s, i) => (
        <div key={i} className={`sk sk--${s}`} />
      ))}
    </div>
  );
}

export default function AsombroPage() {
  const [word, setWord]               = useState(null);
  const [wordLoading, setWordLoading] = useState(true);
  const [wordError, setWordError]     = useState(false);

  const [quote, setQuote]               = useState(null);
  const [quoteLoading, setQuoteLoading] = useState(true);
  const [quoteError, setQuoteError]     = useState(false);

  const [event, setEvent]               = useState(null);
  const [eventLoading, setEventLoading] = useState(true);
  const [eventError, setEventError]     = useState(false);

  const [copyState, setCopyState] = useState('idle'); // 'idle' | 'copied' | 'error'
  const handleCopy = useCallback(() => {
    if (!word) return;
    if (!navigator.clipboard) {
      setCopyState('error');
      return;
    }
    navigator.clipboard.writeText(word.word)
      .then(() => setCopyState('copied'))
      .catch(() => setCopyState('error'));
  }, [word]);
  useEffect(() => {
    if (copyState === 'idle') return;
    const id = setTimeout(() => setCopyState('idle'), 2000);
    return () => clearTimeout(id);
  }, [copyState]);

  useEffect(() => {
    fetch('/wotd.json')
      .then((r) => r.json())
      .then((d) => { setWord(d); setWordLoading(false); })
      .catch(() => { setWordLoading(false); setWordError(true); });
  }, []);

  useEffect(() => {
    fetch('https://dummyjson.com/quotes/random')
      .then((r) => r.json())
      .then((d) => { setQuote({ content: d.quote, author: d.author }); setQuoteLoading(false); })
      .catch(() => { setQuoteLoading(false); setQuoteError(true); });
  }, []);

  useEffect(() => {
    const now = new Date();
    fetch(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/selected/${now.getMonth() + 1}/${now.getDate()}`)
      .then((r) => r.json())
      .then((d) => {
        const list = d?.selected;
        if (list?.length) {
          const pick = list[Math.floor(Math.random() * Math.min(list.length, 3))];
          setEvent({ year: pick.year, text: pick.text });
        }
        setEventLoading(false);
      })
      .catch(() => { setEventLoading(false); setEventError(true); });
  }, []);

  const quoteData = quoteError ? FALLBACK_QUOTE : quote;

  return (
    <main className="asombro-page">

      {/* ── HEADER ── */}
      <header className="asombro-header">
        <div>
          <h1 className="asombro-title">
            <span className="asombro-char">奇</span>
            <span className="asombro-divider">|</span>
            <span className="asombro-name">asombro</span>
          </h1>
          <p className="asombro-sub">qí · wonder, the marvelous</p>
        </div>
        <p className="asombro-date">{getDayLabel()}</p>
      </header>

      {/* ── 3-COLUMN GRID ── */}
      <div className="asombro-grid">

        {/* Word */}
        <section className="asombro-section">
          <span className="section-eyebrow">Word of the Day</span>
          {wordLoading && <Skeleton sizes={['word', 'pos', 'line', 'line']} />}
          {wordError   && <p className="section-empty">Could not load today's word.</p>}
          {word && (
            <>
              <div className="word-headline-row">
                <h2 className="word-headline">
                  <ExternalLink
                    className="word-headline-link"
                    href={`https://www.wordnik.com/words/${encodeURIComponent(word.word)}`}
                  >
                    {word.word}
                  </ExternalLink>
                </h2>
                <button
                  className={`word-copy-btn${copyState === 'copied' ? ' word-copy-btn--copied' : ''}`}
                  onClick={handleCopy}
                  aria-label={copyState === 'copied' ? 'Copied!' : copyState === 'error' ? 'Failed to copy' : 'Copy word'}
                  title={copyState === 'copied' ? 'Copied!' : copyState === 'error' ? 'Failed to copy' : 'Copy word'}
                >
                  {copyState === 'copied' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  )}
                </button>
              </div>
              {word.pos        && <p className="word-pos">{word.pos}</p>}
              {word.definition && <p className="word-definition">{word.definition}</p>}
              <ExternalLink className="wordnik-attribution" href="https://www.wordnik.com">
                Powered by Wordnik
              </ExternalLink>
            </>
          )}
        </section>

        {/* Quote */}
        <section className="asombro-section asombro-section--quote">
          <span className="section-eyebrow section-eyebrow--light">Quote</span>
          {quoteLoading && <Skeleton sizes={['line', 'line', 'pos']} />}
          {quoteData && (
            <>
              <blockquote className="quote-text">"{quoteData.content}"</blockquote>
              <p className="quote-attribution">— {quoteData.author}</p>
            </>
          )}
          <span className="quote-mark" aria-hidden="true">"</span>
        </section>

        {/* On This Day */}
        <section className="asombro-section">
          <span className="section-eyebrow">On This Day</span>
          {eventLoading && <Skeleton sizes={['year', 'line', 'line']} />}
          {eventError   && <p className="section-empty">Could not load today's event.</p>}
          {event && (
            <>
              <p className="otd-day">
                {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}, {event.year}
              </p>
              <p className="otd-text">{event.text}</p>
            </>
          )}
        </section>

      </div>
    </main>
  );
}
