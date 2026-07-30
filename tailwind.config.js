/** Tailwind config for seedlesslabs.xyz.
 *  Mirrors the theme that used to live inline in each page's <script> block
 *  back when the site loaded Tailwind from the play CDN.
 *
 *  Rebuild after editing any HTML:  npm run css
 *  The output (public/assets/tailwind.css) is committed, because Vercel
 *  serves this repo statically with no build step.
 */
module.exports = {
  content: ['./public/**/*.html'],
  theme: {
    extend: {
      colors: {
        ink: '#ffffff',
        inkSoft: '#a8b3c7',
        mute: '#5b6478',
        sky: '#00aeff',
        line: 'rgba(255,255,255,0.08)',
        lineSoft: 'rgba(255,255,255,0.06)',
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
    },
  },
};
