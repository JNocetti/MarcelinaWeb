export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Acá incluís clases que podrían no ser detectadas por el parser (como dinámicas o condicionales)
    'bg-black',
    'bg-white',
    'text-white',
    'text-gray-800',
    'text-gray-600',
    'font-bold',
    'rounded-lg',
    'hover:bg-red-700',
    'transition',
    'p-4',
    'h-48',
    'object-contain',
    'grid',
    'grid-cols-1',
    'sm:grid-cols-2',
    'lg:grid-cols-3',
    'gap-6',
    'shadow',
    'hover:shadow-md',
    'hover:scale-105',
    'transform',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
