export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    'text-center', 'text-gray-800', 'text-gray-600', 'text-white', 'bg-black', 'bg-white',
    'font-bold', 'font-semibold', 'mb-4', 'mb-6', 'mb-[1.5em]', 'mt-2',
    'rounded', 'rounded-lg', 'shadow', 'hover:shadow-md', 'hover:shadow-lg', 'hover:bg-red-700',
    'grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-3', 'gap-6',
    'w-full', 'h-48', 'object-contain', 'p-4', 'px-[1em]', 'py-[0.75em]',
    'text-[1em]', 'text-[1.125em]', 'text-[2em]', 'text-[2.5em]',
    'bg-red-600', 'transition', 'transform', 'hover:scale-105',
    'max-w-7xl', 'mx-auto', 'min-h-screen', 'flex', 'items-center', 'justify-center'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
  