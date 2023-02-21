// gitprofile.config.js

const config = {
  github: {
    username: 'evilotaku', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'devitt-upkins',
    twitter: 'evilotaku',
    mastodon: '@MemphisGameDevs@mastodon.gamedev.place',
    facebook: 'Evil0taku',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    website: '',
    phone: '901-262-2468',
    email: 'evilotaku@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/195yL3xglkmnzZswoZ5p7TJdWcVaCUqT_L-rEPw8aZPo/edit?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Unity',
    'C#',
    'Blender',
    'Javascript',
    'Python',
    'Unreal',
    'Git',
    'Platic SCM',
    'Android',
    'Oculus Quest',
    'Steam VR',
  ],
  experiences: [
    {
      company: 'Methodist Healthcare',
      position: 'Help Desk Analyst',
      from: 'July 2008',
      to: 'Present',
      companyLink: 'https://www.methodisthealth.org/',
    },
    {
      company: 'Memphis Game Developers',
      position: 'President',
      from: 'July 2013',
      to: 'present',
      companyLink: 'https://www.memphisgamedevelopers.org/',
    },
    {
        company: 'XR Terra',
        position: 'VR Instructor',
        from: 'January 2021',
        to: 'May 2021',
        companyLink: 'https://www.xrterra.com/',
    },
  ],
  certifications: [
    {
      name: 'Microsoft Certified Professional',
      body: '',
      year: '2007',
      link: 'https://learn.microsoft.com/en-us/users/evilotaku-2760/certifications/certification-details/certification.nouid.6?source=docs'
    },
    {
      name: 'Apple Certified Professional',
      body: '',
      year: '2018',
      link: ''
    },
    {
      name: 'Unity Certified Professional: Programmer',
      body: 'Earners of the Unity Certified Professional: Programmer badge have the programming acumen within the context of professional software development processes to contribute to the creation and maintenance of applications built using Unity. Earners are able to solve difficult problems with code and are responsible for contributing to a broad range of potential technical tasks, including integrating art assets, coding the user interface, scripting user interactions and optimizing performance',
      year: '2019',
      link: 'https://www.credly.com/badges/dbd581b3-9095-4f4f-bc94-180e97807743/public_url'
    },
  ],
  education: [
    {
      institution: 'ITT Technical Institute',
      degree: ' Information System Security',
      from: '2003',
      to: '2005',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Art Gate VR',
      description: 'Brought in to help launch Art Gate International 2021. Using Photon, Implemented user name tags and customizable VR Avatar Colors. Also helped optimize the gallery menu system pulling from their web-based CMS',
      imageUrl: 'https://www.artgatevr.com/wp-content/uploads/2020/09/ArtGate_logo_light.png',
      link: 'https://www.artgatevr.com/',
    },
    {
      title: 'yXRd Games',
      description: 'In this post COVID world, some activities are not as safe as they once were. Starting with the classic bag tossing game Cornhole, we plan to bringing these games safely into the modern era.',
      imageUrl: 'https://www.artgatevr.com/wp-content/uploads/2020/09/ArtGate_logo_light.png',
      link: 'https://www.artgatevr.com/',
    },
    {
      title: 'Ziggurat Drop',
      description: 'You’re a robot from the FUTURE!! .. or the past - whatever. You (and optionally your friends) find yourself trapped in a temple maze because… AND it has coin’s randomly scattered about, which you need to collect in order to activate the magical temple teleporter to the next level! Oh yeah, it’s also sinking into “hot magma” - So hurry!!',
      imageUrl: 'https://img.itch.zone/aW1nLzM1NDY5NzUucG5n/315x250%23c/eh0DMM.png',
      link: 'https://evilotaku.itch.io/yxrd-games',
    },
    {
      title: 'Nebula Strike',
      description: 'Created for Ludum Dare 38.The Game Jam\'s theme was " Small World." We thought up what is essentially a RTS game, but instead of taking place on flat maps, the level is a globe. Players scramble to capture outposts that spawn mobs. Depending on the type of outpost captured, the mobs will either attack enemy bases or defend their own base.The matchmaking is still in its infancy, and as a result only supports up to 20 concurrent players.',
      imageUrl: 'https://img.itch.zone/aW1hZ2UvMTM4NDI1LzYzMzAyNS5qcGc=/315x250%23c/C42s89.jpg',
      link: 'https://memphis-game-developers.itch.io/nebula-strike',
    },
    {
      title: 'Intrigue',
      description: 'Created for the UofM ACM GameJam as part of HackMemphis 2016. The Game Jam\'s theme was "Enemies Are Weapons." So we came up with the idea of being a spy at a dinner party. You have a target to kill, but you have to convince someone else to kill him for you.',
      imageUrl: 'https://img.itch.zone/aW1hZ2UvODc1NzUvNDEyMzc0LnBuZw==/315x250%23c/LdCbG1.png',
      link: 'https://memphis-game-developers.itch.io/intrigue',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
