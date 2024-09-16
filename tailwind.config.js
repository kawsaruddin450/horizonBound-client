/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-banner-bg-1': "url('https://images.unsplash.com/photo-1682685797406-97f364419b4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGhpa2luZ3xlbnwwfHwwfHx8MA%3D%3D')",

        'home-banner-bg-2': "url('https://images.unsplash.com/photo-1613046463050-182327a8b71e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHNjdWJhJTIwZGl2aW5nfGVufDB8fDB8fHww')",

        'home-banner-bg-3': "url('https://images.unsplash.com/photo-1718713632893-3efe8bb7cb6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtheWFraW5nfGVufDB8fDB8fHww')",
      }
    },
  },
  plugins: [
    // eslint-disable-next-line
    require('daisyui'),
  ],
}

