import { ImageResponse } from 'next/og'

export const alt = 'Chris Lekkas — Product strategist and digital builder'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Prerendered at build time so the static export can emit it as a file.
export const dynamic = 'force-static'

/**
 * Generated at build time from the site's own tokens, so the share card cannot
 * drift away from the positioning it is supposed to represent.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#faf7f2',
        color: '#14120f',
        padding: '72px 80px',
        fontFamily: 'Georgia, serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          fontSize: 22,
          letterSpacing: 4,
          textTransform: 'uppercase',
          color: '#6b6459',
        }}
      >
        Chris Lekkas
      </div>
      <div style={{ display: 'flex', fontSize: 68, lineHeight: 1.1, maxWidth: 900 }}>
        I turn business problems into digital products that work.
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          fontSize: 24,
          color: '#6b6459',
        }}
      >
        <div style={{ display: 'flex', width: 56, height: 3, backgroundColor: '#b0522c' }} />
        <div style={{ display: 'flex' }}>
          Product strategy, design and build · English &amp; Español
        </div>
      </div>
    </div>,
    size,
  )
}
