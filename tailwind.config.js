/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Nanum Pen Script","cursive"],
      },
      backgroundImage: {
        'paperItem': "url('/images/paperItem.png')",
        'mePaper': "url('/images/mePaper.png')",
        'hireMePaper': "url('/images/hireMePaper.png')",
        'githubPaper': "url('/images/githubPaper.png')",
        'linkedInPaper': "url('/images/linkedInPaper.png')",
        'htmlPaper': "url('/images/htmlPaper.png')",
        'jsPaper': "url('/images/jsPaper.png')",
        'reactPaper': "url('/images/reactPaper.png')",
        'cssPaper': "url('/images/cssPaper.png')",
        'sqlPaper': "url('/images/sqlPaper.png')",
        'stickyNote': "url('/images/stickyNote.png')",
        'stickyNote2': "url('/images/stickyNote2.png')",
        'rippedPaper': "url('/images/rippedPaper.png')",
        'rippedPaperBottom': "url('/images/rippedPaperBottom.png')",
        'paperProject': "url('/images/paperProject.png')",
        'paperBackground': "url('/images/paperBackground.jpg')",
        'paperBackground2': "url('/images/paperBackground2.jpg')",
        'hand': "url('/images/hand.png')",
      }
    },
  },
  plugins: [],
}
