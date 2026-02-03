// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Agasthi',
    title: 'Undergraduate | Student',
    image: getAsset('images/profile.png'), // Customize or replace with your profile image
    description:
      'Write a short bio here describing your background and focus. Keep it to 2–4 sentences.\n' +
      '\n' +
      'Mention your institution or company, areas of interest, and what you teach or build.\n' +
      '\n' +
      'Summarize your education or certifications briefly and highlight your practical work.\n' +
      '\n' +
      'Optional: Add notable books, workshops, or training you deliver.',
    tagline: 'Aspiring Data Analyst',
    location: 'Bangalore, India',
  },

  seo: {
    title: 'Agasthithayaagaran Saravanen – Economics and Data Science',
    description: "Portfolio website showcasing your education, research, projects, and experience.",
  },

  animatedText: ['Economics Student', 'Data Analysis', 'Coding'],

  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Research', url: '/research' },
    { name: 'Education', url: '/education' },
    { name: 'Experience', url: '/experience' },
    { name: 'Blogs', url: '/blogs' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
  ],

  // Static blog entries. Use getAsset so the URL respects NEXT_PUBLIC_BASE_PATH / next.config.basePath
  // Add more entries here as you add more static HTML blog files under public/static_page/
  blogs: [
    {
      title: 'Understanding Project Management Through Real-World Examples',
      url: getAsset('static_page/project_management_blog.html'), // Replace with your static HTML page
    },
  ],


  education: [
    {
      institution: 'Christ University',
      degree: 'Bsc Economics with Data Science',
      year: '2025–2028',
      image: getAsset('images/education/placeholder.png'),
      description: ['Focused on microeconomics, macroeconomics, statistics, and data-driven economic analysis.'],
    },
  ],

// ✅ Unified MOOC + Certifications Section
  certifications: [
    {
      title: 'Python with AI Specialization',
      specialization: true,
      file: getAsset('images/education/Certifications/download.svg'),
      certificates: [
        { name: 'Python Fundamentals', file: getAsset('images/education/Certifications/download.svg') },
        { name: 'Applied Data Analysis with Python', file: getAsset('images/education/Certifications/download.svg') },
      ],
    },
  ],



  // ✅ Experience section updated
  experience: [
    {
      title: 'Client Outreach',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'Flekt',
      time: '(Dec 2025 – Present)',
      desp: ['Reach out to potential salons interested in the product and book demos'],
    },
    {
      title: 'Digital Marketing',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'Sanko-A-Textile',
      time: '(Jul 2023 – Aug 2023)',
      desp: ['Handeled the social media account of the company.'],
    },
  ],


  // ✅ Projects section updated
  projects: [
    {
      title: 'Inflation vs GDP Growth Analysis',
      description: 'Analyzed the relationship between inflation and GDP growth using time-series data and visualizations.',
      Githublink: 'https://github.com/your-username/your-project',
    },
    {
      title: 'Project Title 2',
      cardImage: getAsset('images/project/placeholder.png'),
      description: 'Another project summary...',
      Githublink: 'https://github.com/your-username/another-project',
    },
  ],


  research: [
    {
      title: 'Your Paper or Research Title',
      authors: 'Your Name, Collaborator Name',
      conferences: 'Conference or Journal, Publisher',
      researchYr: 2024,
  image: getAsset('images/research/placeholder.png'),
      citation: {
        vancouver:
          'Author A, Author B. Title of the work. Venue, Year. DOI/URL.',
      },
      abstract:
        'One or two sentences summarizing the contribution...',
      link: 'https://example.com/your-publication',
    },
  ],

  books: [
    {
      title: 'HI Book Title',
      description: 'Short description of your book or resource.',
      image: getAsset('images/book_cover_placeholder.png'),
      link: 'https://example.com/your-book',
    },
  ],

  contact: {
    email: 'your.email@example.com',
    linkedin: 'https://www.linkedin.com/in/your-linkedin/',
    github: 'https://github.com/your-username',
    googleScholar: 'https://scholar.google.com/citations?user=YOURID',
    orcid: 'https://orcid.org/0000-0000-0000-0000',
  },
};

export default siteConfig;
