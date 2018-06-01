// Types: 1 & 2
// Type 1 is a moment like welcome or networking
// Type 2 is when a speaker has time to speak
const scheduleInfo = [
  {
    date: '09/06/2018', // DD/MM/YYYY
    tracks: [
      {
        displayName: 'Demo Corner',
        max: 20,
        items: [
          {
            type: 2,
            content: {
              title: 'NodeSchool Madrid',
              description: 'Taller de Node.js y JavaScript. Paso a paso siguiendo tutoriales',
              tags: [ 'Javascript', 'NodeJS' ],
              speaker: {
                name: 'Carlos Azaustre',
                position: 'Desarrollador FullStack @Chefly',
                bio: 'Desarrollador fullstack en JavaScript, cofundador de Chefly y formador en tecnologías web',
                image: 'azaustre.jpg',
                socialLinks: {
                  twitter: 'https://twitter.com/carlosazaustre',
                  linkedin: 'https://www.linkedin.com/in/carlosazaustre/',
                  website: 'https://chefly.co',
                },
              },
            },
            time: {
              start: {
                hour: '10',
                min: '30',
              },
              end: {
                hour: '11',
                min: '15',
              },
            },
          },
          {
            type: 2,
            content: {
              title: 'Titulo charla',
              description: 'Descripcion charla',
              tags: [ 'APIs', 'Seguridad', 'DevOps' ],
              speaker: {
                name: 'Isabelle Mauny',
                position: 'CTO at 42Crunch',
                bio: 'I am working for 42Crunch, a company providing an API security platform, putting security at the ' +
                'heart of APIs lifecycle: development, testing, deployment. I manage product management, product marketing ' +
                'as well as analysts relationship. Previously, I was working for WSO2 as VP of Product Strategy and Technical ' +
                'Evangelist for WSO2\'s open source platform, mainly in Europe.',
                image: 'isa.jpg',
                socialLinks: {
                  twitter: 'https://twitter.com/isamauny',
                  linkedin: 'https://www.linkedin.com/in/isamauny/',
                  website: 'https://www.42crunch.com/',
                },
              },
            },
            time: {
              start: {
                hour: '11',
                min: '20',
              },
              end: {
                hour: '12',
                min: '05',
              },
            },
          },
          {
            type: 2,
            content: {
              title: 'Offline-first sin despeinarte con Cloud Firestore',
              description: 'Descripcion charla',
              tags: [ 'Firebase', 'Cloud Firestore', 'Database' ],
              speaker: {
                name: 'Enrique García Navalón',
                position: 'Lead Engineer en BICG',
                bio: 'Bio',
                image: 'garcianavalon.jpg',
                socialLinks: {
                  twitter: 'https://twitter.com/garcianavalon',
                  linkedin: 'https://www.linkedin.com/in/garcianavalon/',
                  github: 'https://github.com/garcianavalon',
                },
              },
            },
            time: {
              start: {
                hour: '12',
                min: '10',
              },
              end: {
                hour: '12',
                min: '55',
              },
            },
          },
          {
            type: 1,
            content: {
              title: 'Titulo charla',
              description: 'Descripcion charla',
            },
            time: {
              start: {
                hour: '12',
                min: '10',
              },
              end: {
                hour: '13',
                min: '00',
              },
            },
          },
        ],
      },
    ],
  },
];

export default scheduleInfo;
