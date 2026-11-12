// Add a project by adding an object here. Leave demoUrl / repoUrl as null until real links exist.
// Optional: image: '/projects/name.png' (put the file in /public/projects) to show a real screenshot.
export const filters = ['All', 'Websites', 'Business Systems', 'AI', 'Data']
export const projects = [
  { slug: 'ananthhotel', featured: true, name: 'AnanthHotel', category: 'Restaurant Technology', filter: ['Websites', 'Business Systems'],
    title: 'AnanthHotel — Restaurant Website & Management System',
    summary: 'A complete restaurant platform combining a customer-facing website with an administrative management system.',
    features: ['Digital menu', 'Customer ordering', 'Admin authentication', 'Menu management', 'Price management & history', 'Order management', 'POS billing', 'GST / discount handling', 'Sales analytics', 'Revenue insights', 'Responsive interface'],
    tech: ['React', 'Vite', 'Supabase', 'PostgreSQL', 'Vercel'],
    challenge: 'Restaurants often run their public presence and daily operations in separate places: a menu on one side, orders and bills on paper or in spreadsheets on the other.',
    solution: 'One platform: customers browse the menu and order, while staff sign in to an admin area to manage menu and prices, handle orders, bill at the counter and review sales.',
    role: '', demoUrl: 'https://ananth-hotel.vercel.app/', repoUrl: null, image: '/projects/ananthhotel.jpg',
    gallery: [
  { src: '/projects/ananthhotel/Dashboard.png', alt: 'AnanthHotel admin sales analytics dashboard', caption: 'Sales analytics and revenue insights' },
  { src: '/projects/ananthhotel/Orders.png', alt: 'AnanthHotel admin order management screen', caption: 'Order management' },
  { src: '/projects/ananthhotel/Billing.png', alt: 'AnanthHotel POS billing screen', caption: 'POS billing with GST and discounts' },
  { src: '/projects/ananthhotel/Priceupdate.png', alt: 'AnanthHotel menu and price management screen', caption: 'Menu and price management' },
], },
  { slug: 'fridgeflow', name: 'FridgeFlow', category: 'AI Application', filter: ['AI'],
    title: 'FridgeFlow — AI-Powered Recipe Assistant',
    summary: 'An AI-powered application that turns available ingredients into practical recipes.',
    features: ['Ingredient-based recipe generation', 'Structured AI output', 'Serving scaling', 'Ingredient substitutions', 'Cook mode', 'Waste reduction', 'Recipe history', 'Shareable recipe cards', 'Validation and error handling'],
    tech: ['React', 'Vite', 'Express', 'Gemini'],
    challenge: 'People have ingredients at home but no idea what to cook, and food gets wasted.',
    solution: 'Enter what you have and get a structured, scalable recipe with substitutions and a step-by-step cook mode.',
    role: '', demoUrl: 'https://flam-fridge-flow.vercel.app/', repoUrl: null, image: '/projects/fridgeflow.jpg' },
  {
  slug: 'jabha-fashions',
  name: 'Jabha Fashions',
  category: 'Business Website',
  filter: ['Websites'],
  title: 'Jabha Fashions — Digital Product Catalogue & Business Website',
  summary: 'A modern fashion business website with a dynamic product catalogue, category filtering, service showcase, and product management dashboard.',
  features: ['Responsive business website', 'Product catalogue', 'Category filtering', 'Services showcase', 'Admin dashboard', 'Add, edit and delete products', 'Product image upload', 'Product pricing management', 'Responsive mobile navigation'],
  tech: ['React', 'Vite', 'JavaScript', 'CSS', 'Local Storage', 'Vercel'],
  challenge: 'The business needed a professional online presence where customers could easily explore its products and services.',
  solution: 'Built a responsive digital catalogue with categorized products and a dedicated admin interface for managing the product collection.',
  role: 'Design & Development',
  demoUrl: 'https://www.jabhafashions.com/',
  repoUrl: null,
  image: '/projects/jabhafashions.png',
  gallery: [
  { src: '/projects/Jabhafasions/Dashboard.png', alt: 'Jabha Fashions admin dashboard for managing categories and products', caption: 'Admin dashboard with product and category controls' },
  { src: '/projects/Jabhafasions/orderDetails.png', alt: 'Jabha Fashions order management screen', caption: 'Order management dashboard' },
  { src: '/projects/Jabhafasions/Productdesc.png', alt: 'Jabha Fashions product edit form', caption: 'Edit product details and pricing' },
  { src: '/projects/Jabhafasions/Products.png', alt: 'Jabha Fashions product catalogue listing', caption: 'Product catalogue and inventory overview' },
],
},
  {
  slug: 'josh-enterprises',
  name: 'Josh Enterprises',
  category: 'Business Website',
  filter: ['Websites'],

  title: 'Josh Enterprises — Business Website & Product Showcase',

  summary: 'A modern responsive business website designed to showcase products and services while providing customers with a clear and professional way to explore the business.',

  features: ['Responsive business website', 'Product showcase', 'Services section', 'CCTV product showcase', 'RO product showcase', 'TV product showcase', 'Inverter product showcase', 'About section', 'Contact section', 'Responsive navigation'],

  tech: ['React', 'Vite', 'JavaScript', 'CSS', 'Vercel'],

  challenge: 'The business needed a modern online presence to present its products and services in a professional and easy-to-navigate format.',

  solution: 'Built a responsive React website with structured business information, product categories, service sections, and clear contact points for customers.',

  role: 'Design & Development',

  demoUrl: 'https://josh-enterprises.vercel.app/',
  repoUrl: null,
  image: '/projects/joshRo.jpg'
}
]
