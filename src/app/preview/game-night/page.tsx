// src/app/preview/game-night/page.tsx
import Link from 'next/link'

export default function GameNightPreviewPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at top, #1e293b 0%, #020617 40%, #000 100%)',
        color: '#f9fafb',
        padding: '2rem 1rem 3rem',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div
        style={{
          position: 'relative',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {/* Decorative game elements */}
        <div
          style={{
            position: 'absolute',
            inset: '-40px',
            pointerEvents: 'none',
            opacity: 0.25,
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              fontSize: '3rem',
            }}
          >
            🎮
          </div>

          <div
            style={{
              position: 'absolute',
              right: '10px',
              bottom: '0',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 10px)',
              gap: '6px',
            }}
          >
            <div style={{ width: '10px', height: '10px', backgroundColor: '#22c55e' }} />
            <div style={{ width: '10px', height: '10px', backgroundColor: '#22c55e' }} />
            <div style={{ width: '10px', height: '10px', backgroundColor: '#22c55e' }} />
            <div style={{ width: '10px', height: '10px', backgroundColor: '#22c55e' }} />
          </div>

          <div
            style={{
              position: 'absolute',
              top: '20%',
              left: '-10%',
              width: '140%',
              height: '1px',
              background:
                'repeating-linear-gradient(90deg, rgba(148,163,184,0.25), rgba(148,163,184,0.25) 4px, transparent 4px, transparent 8px)',
              transform: 'rotate(-8deg)',
            }}
          />
        </div>

        {/* HERO */}
        <section
          style={{
            marginBottom: '1.75rem',
            padding: '1.75rem',
            borderRadius: '1.25rem',
            background:
              'linear-gradient(135deg, rgba(55,65,81,0.95), rgba(30,64,175,0.95), rgba(147,51,234,0.95))',
            boxShadow: '0 24px 60px rgba(15,23,42,0.8)',
            border: '1px solid rgba(191,219,254,0.5)',
          }}
        >
          <p
            style={{
              fontSize: '0.75rem',
              color: '#e5e7eb',
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            Theme Preview
          </p>
          <h1
            style={{
              fontSize: '1.8rem',
              fontWeight: 800,
              marginBottom: '0.75rem',
              color: '#f9fafb',
            }}
          >
            Game Night Party – Preview
          </h1>
          <p
            style={{
              fontSize: '0.9rem',
              color: '#e5e7eb',
              marginBottom: '1.2rem',
              maxWidth: '34rem',
            }}
          >
            This is exactly how a full PartyLab theme is laid out. In this demo, you get one
            {` `}
            <strong>unlocked sample</strong> in each section. The rest is blurred and locked until you join.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <Link
              href="/signup?plan=early-bird"
              style={{
                backgroundColor: '#a3e635',
                color: '#020617',
                padding: '0.6rem 1.2rem',
                borderRadius: '999px',
                fontSize: '0.8rem',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              Unlock All Themes for $5 (3 Months)
            </Link>
            <Link
              href="/signup?plan=trial"
              style={{
                border: '1px solid rgba(249,250,251,0.7)',
                color: '#f9fafb',
                padding: '0.6rem 1.2rem',
                borderRadius: '999px',
                fontSize: '0.8rem',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Try PartyLab for 7 Days – $1.50
            </Link>
          </div>
        </section>

        {/* UNLOCKED PLANNING OVERVIEW */}
        <section
          style={{
            marginBottom: '1.5rem',
            padding: '1.4rem',
            borderRadius: '1.1rem',
            backgroundColor: 'rgba(15,23,42,0.95)',
            boxShadow: '0 16px 40px rgba(15,23,42,0.8)',
            border: '1px solid rgba(190,242,100,0.7)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.75rem',
              gap: '0.5rem',
            }}
          >
            <h2
              style={{ fontSize: '1.1rem', fontWeight: 700, color: '#d9f99d' }}
            >
              Planning Overview – Sample Section (Unlocked)
            </h2>
            <span
              style={{
                fontSize: '0.65rem',
                padding: '0.2rem 0.5rem',
                borderRadius: '999px',
                backgroundColor: '#a3e635',
                color: '#111827',
                fontWeight: 700,
              }}
            >
              SAMPLE UNLOCKED
            </span>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#e5e7eb', marginBottom: '0.9rem' }}>
            In the full theme, this section includes 2–3 screens worth of planning tips. Here&apos;s
            one slice of it so you can see the level of detail.
          </p>
          <div
            style={{
              display: 'grid',
              gap: '1rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              fontSize: '0.8rem',
            }}
          >
            <div>
              <h3 style={{ fontWeight: 600, color: '#d9f99d', marginBottom: '0.4rem' }}>Suggested Timeline</h3>
              <ul style={{ margin: 0, paddingLeft: '1rem', color: '#e5e7eb' }}>
                <li>1 week before: pick 2–3 main games and send invites</li>
                <li>2–3 days before: confirm RSVPs and plan snacks</li>
                <li>Day of: set up stations, prep dips/snacks, test controllers</li>
                <li>Party length: 3–5 hours, with a “last round” cutoff</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontWeight: 600, color: '#d9f99d', marginBottom: '0.4rem' }}>Guest &amp; Space Tips</h3>
              <ul style={{ margin: 0, paddingLeft: '1rem', color: '#e5e7eb' }}>
                <li>Ideal group: 6–10 guests so no one is waiting too long</li>
                <li>Set 2–3 “zones”: video game area, board/card table, snack/chill corner</li>
                <li>Plan a low-sensory option (coloring, quiet puzzle) for quieter guests</li>
                <li>Keep walkways clear for cords, drinks, and quick breaks</li>
              </ul>
            </div>
          </div>
        </section>

        {/* LOCKED EXTRA PLANNING CONTENT */}
        <section
          style={{
            marginBottom: '1.5rem',
            padding: '1.1rem',
            borderRadius: '1.1rem',
            backgroundColor: '#020617',
            border: '1px dashed #4b5563',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(15,23,42,0.92), rgba(15,23,42,0.98))',
              backdropFilter: 'blur(2px)',
            }}
          />
          <div style={{ position: 'relative' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.4rem',
              }}
            >
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#e5e7eb' }}>
                Additional Planning Deep Dives
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  padding: '0.15rem 0.4rem',
                  borderRadius: '999px',
                  backgroundColor: '#374151',
                  color: '#e5e7eb',
                }}
              >
                🔒 Members Only
              </span>
            </div>
            <p style={{ fontSize: '0.7rem', color: '#d1d5db', marginBottom: '0.3rem' }}>
              Full theme includes:
            </p>
            <ul style={{ margin: 0, paddingLeft: '1rem', color: '#9ca3af', fontSize: '0.7rem' }}>
              <li>Detailed time-blocked schedule suggestions</li>
              <li>Sample text to copy‑paste into invites</li>
              <li>Accessibility & sensory notes</li>
              <li>Cleanup plan and next‑day reset tips</li>
            </ul>
            <div style={{ marginTop: '0.6rem' }}>
              <Link
                href="/signup?plan=early-bird"
                style={{
                  display: 'inline-block',
                  fontSize: '0.75rem',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '999px',
                  backgroundColor: '#a3e635',
                  color: '#020617',
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                Unlock Full Planning Section →
              </Link>
            </div>
          </div>
        </section>

        {/* UNLOCKED RECIPE */}
        <section
          style={{
            marginBottom: '1.5rem',
            padding: '1.4rem',
            borderRadius: '1.1rem',
            backgroundColor: 'rgba(15,23,42,0.95)',
            boxShadow: '0 16px 40px rgba(15,23,42,0.8)',
            border: '1px solid rgba(56,189,248,0.7)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.6rem',
              gap: '0.5rem',
            }}
          >
            <h3
              style={{ fontSize: '1rem', fontWeight: 600, color: '#bae6fd' }}
            >
              Unlocked Recipe Sample: Easy Pizza Roll-Ups
            </h3>
            <span
              style={{
                fontSize: '0.65rem',
                padding: '0.2rem 0.5rem',
                borderRadius: '999px',
                backgroundColor: '#38bdf8',
                color: '#020617',
                fontWeight: 700,
              }}
            >
              SAMPLE UNLOCKED
            </span>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#e5e7eb', marginBottom: '0.7rem' }}>
            A crowd-pleasing finger food that tastes like pizza but is easier to share during games. Full theme
            includes more recipe variations and dietary notes.
          </p>
          <div
            style={{
              display: 'grid',
              gap: '0.8rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              fontSize: '0.8rem',
              color: '#e5e7eb',
            }}
          >
            <div>
              <h4 style={{ fontWeight: 600, color: '#bae6fd', marginBottom: '0.3rem' }}>Ingredients</h4>
              <ul style={{ margin: 0, paddingLeft: '1rem' }}>
                <li>Refrigerated pizza dough</li>
                <li>Shredded mozzarella cheese</li>
                <li>Pepperoni slices or veggie toppings</li>
                <li>Garlic powder &amp; Italian seasoning</li>
                <li>Pizza sauce for dipping</li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: 600, color: '#bae6fd', marginBottom: '0.3rem' }}>Quick Steps</h4>
              <ol style={{ margin: 0, paddingLeft: '1rem' }}>
                <li>Preheat oven per dough package directions.</li>
                <li>Roll dough into rectangle, sprinkle cheese &amp; toppings.</li>
                <li>Roll up like a cinnamon roll; slice into 1&quot; pieces.</li>
                <li>Brush with butter, season, bake until golden.</li>
                <li>Serve warm with small bowls of pizza sauce.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* LOCKED EXTRA RECIPES */}
        <section
          style={{
            marginBottom: '1.5rem',
          }}
        >
          <h2
            style={{ fontSize: '1rem', fontWeight: 600, color: '#bae6fd', marginBottom: '0.6rem' }}
          >
            More Snack & Drink Ideas (Locked)
          </h2>
          <div style={{ display: 'grid', gap: '0.6rem' }}>
            {[
              'Power-Up Snack Mix (customizable trail mix)',
              'Bonus Level Nachos (sheet-pan loaded nachos)',
              'Boss Battle Brownies (topped brownies)',
              'AFK Veggie Platter (low-effort veggie tray)',
              'Power-Up Punch (21+ and virgin versions)',
            ].map((title, i) => (
              <div
                key={i}
                style={{
                  position: 'relative',
                  padding: '0.7rem 0.8rem',
                  borderRadius: '0.9rem',
                  backgroundColor: '#020617',
                  border: '1px dashed #4b5563',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to right, rgba(15,23,42,0.92), rgba(15,23,42,0.98))',
                    backdropFilter: 'blur(1.5px)',
                  }}
                />
                <div style={{ position: 'relative' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.15rem',
                    }}
                  >
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e5e7eb' }}>{title}</span>
                    <span
                      style={{
                        fontSize: '0.65rem',
                        padding: '0.15rem 0.4rem',
                        borderRadius: '999px',
                        backgroundColor: '#374151',
                        color: '#e5e7eb',
                      }}
                    >
                      🔒 Members Only
                    </span>
                  </div>
                  <p style={{ fontSize: '0.7rem', color: '#d1d5db' }}>
                    Full ingredients, steps, and allergy notes available in the paid theme.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '0.6rem', textAlign: 'right' }}>
            <Link
              href="/signup?plan=early-bird"
              style={{
                display: 'inline-block',
                fontSize: '0.75rem',
                padding: '0.4rem 0.9rem',
                borderRadius: '999px',
                backgroundColor: '#a3e635',
                color: '#020617',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              Unlock All Recipes & Drinks →
            </Link>
          </div>
        </section>

        {/* UNLOCKED GAME SAMPLE */}
        <section
          style={{
            marginBottom: '1.5rem',
            padding: '1.4rem',
            borderRadius: '1.1rem',
            backgroundColor: 'rgba(15,23,42,0.95)',
            boxShadow: '0 16px 40px rgba(15,23,42,0.8)',
            border: '1px solid rgba(244,114,182,0.7)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.6rem',
              gap: '0.5rem',
            }}
          >
            <h3
              style={{ fontSize: '1rem', fontWeight: 600, color: '#f9a8d4' }}
            >
              Unlocked Game Sample: “Beat the Boss” Mini‑Tournament
            </h3>
            <span
              style={{
                fontSize: '0.65rem',
                padding: '0.2rem 0.5rem',
                borderRadius: '999px',
                backgroundColor: '#f472b6',
                color: '#020617',
                fontWeight: 700,
              }}
            >
              SAMPLE UNLOCKED
            </span>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#e5e7eb', marginBottom: '0.7rem' }}>
            Use any competitive game (video, card, or board) and run a simple bracket.
          </p>
          <ul style={{ margin: 0, paddingLeft: '1rem', color: '#e5e7eb', fontSize: '0.8rem' }}>
            <li>Pick 1–2 “main event” games (e.g. Mario Kart, Smash, Jackbox).</li>
            <li>Make a bracket on a whiteboard or big paper.</li>
            <li>Give each guest a fun gamer tag to write on the board.</li>
            <li>Keep rounds short (5–10 minutes), rotate players quickly.</li>
          </ul>
        </section>

        {/* LOCKED EXTRA GAMES */}
        <section
          style={{
            marginBottom: '1.5rem',
            padding: '1.1rem',
            borderRadius: '1.1rem',
            backgroundColor: '#020617',
            border: '1px dashed #4b5563',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(15,23,42,0.92), rgba(15,23,42,0.98))',
              backdropFilter: 'blur(1.5px)',
            }}
          />
          <div style={{ position: 'relative' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.3rem',
              }}
            >
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#e5e7eb' }}>
                Additional Game Modes & Quiet Activities
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  padding: '0.15rem 0.4rem',
                  borderRadius: '999px',
                  backgroundColor: '#374151',
                  color: '#e5e7eb',
                }}
              >
                🔒 Members Only
              </span>
            </div>
            <p style={{ fontSize: '0.7rem', color: '#d1d5db', marginBottom: '0.3rem' }}>
              Full theme includes:
            </p>
            <ul style={{ margin: 0, paddingLeft: '1rem', color: '#9ca3af', fontSize: '0.7rem' }}>
              <li>Cozy co‑op corner setup ideas</li>
              <li>Board/card game rotation schedule</li>
              <li>Printable score sheets and brackets</li>
              <li>Quiet‑corner printable pack (coloring, word searches, etc.)</li>
            </ul>
            <div style={{ marginTop: '0.6rem' }}>
              <Link
                href="/signup?plan=early-bird"
                style={{
                  display: 'inline-block',
                  fontSize: '0.75rem',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '999px',
                  backgroundColor: '#a3e635',
                  color: '#020617',
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                Unlock All Games & Printables →
              </Link>
            </div>
          </div>
        </section>

        {/* LOCKED SHOPPING LIST & PLAYLIST */}
        <section
          style={{
            marginBottom: '1.5rem',
            padding: '1.1rem',
            borderRadius: '1.1rem',
            backgroundColor: '#020617',
            border: '1px dashed #4b5563',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(15,23,42,0.92), rgba(15,23,42,0.98))',
              backdropFilter: 'blur(1.5px)',
            }}
          />
          <div style={{ position: 'relative' }}>
            <h2
              style={{ fontSize: '1rem', fontWeight: 600, color: '#f9fafb', marginBottom: '0.4rem' }}
            >
              Shopping List & Playlist (Locked in Demo)
            </h2>
            <p style={{ fontSize: '0.7rem', color: '#d1d5db', marginBottom: '0.3rem' }}>
              Paid members get:
            </p>
            <ul style={{ margin: 0, paddingLeft: '1rem', color: '#9ca3af', fontSize: '0.7rem' }}>
              <li>Full shopping list with budget, standard, and deluxe options</li>
              <li>Direct links to shop kits and recommended items</li>
              <li>Curated playlists for chill, hype, and background moods</li>
            </ul>
            <div style={{ marginTop: '0.6rem' }}>
              <Link
                href="/signup"
                style={{
                  display: 'inline-block',
                  fontSize: '0.75rem',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '999px',
                  backgroundColor: '#a855f7',
                  color: '#f9fafb',
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                See Full Shopping List & Playlists →
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          style={{
            marginTop: '1.5rem',
            padding: '1.3rem',
            borderRadius: '1rem',
            backgroundColor: '#020617',
            border: '1px solid rgba(147,51,234,0.7)',
            textAlign: 'center',
          }}
        >
          <h2
            style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f9fafb', marginBottom: '0.5rem' }}
          >
            Ready to Unlock the Full Game Night Theme?
          </h2>
          <p
            style={{
              fontSize: '0.8rem',
              color: '#e5e7eb',
              marginBottom: '0.9rem',
              maxWidth: '32rem',
              marginInline: 'auto',
            }}
          >
            You&apos;ve seen the structure and one unlocked sample from each section. Join as a founding member or start
            a trial to unlock all recipes, games, printables, shopping lists, and playlists—plus every other theme we add.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.6rem',
              justifyContent: 'center',
            }}
          >
            <Link
              href="/signup?plan=early-bird"
              style={{
                backgroundColor: '#a3e635',
                color: '#020617',
                padding: '0.55rem 1.1rem',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              Become a Founding Member – $5
            </Link>
            <Link
              href="/signup?plan=trial"
              style={{
                border: '1px solid #9ca3af',
                color: '#e5e7eb',
                padding: '0.55rem 1.1rem',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Try PartyLab for 7 Days – $1.50
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
