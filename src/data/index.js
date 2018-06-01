// Types: 1 & 2
// Type 1 is a moment like welcome or networking
// Type 2 is when a speaker has time to speak
const scheduleInfo = [
  {
    date: '09/06/2018', // DD/MM/YYYY
    tracks: [
      {
        displayName: 'Auditorio',
        max: 300,
        items: [
          {
            type: 1,
            content: {
              title: 'Apertura de puertas',
              description: 'Entrada, bienvenida y desayuno',
            },
            time: {
              start: {
                hour: '09',
                min: '45',
              },
              end: {
                hour: '10',
                min: '30',
              },
            },
          },
          {
            type: 2,
            content: {
              title: 'Stack Overflow en español: No todos hablan inglés',
              description: 'Mientras el desarrollo de código se hace principalmente en inglés, muchos de los ' +
              'desarrolladores no dependen del inglés en la mayoría de sus conversaciones. Ven a aprender como una ' +
              'comunidad de desarrolladores en tu lengua natal puede hacer del internet un lugar mejor. ¡Solamente ' +
              'necesitamos que se presente!',
              tags: [ 'StackOverflow', 'Comunidades' ],
              speaker: {
                name: 'Juan Garza',
                position: 'Gerente, Equipo de Comunidades Internacionales',
                bio: 'Juan Garza nunca pensó que el tema de Community Management hubiera sido su carrera. Juan empezó ' +
                'su jornada profesional estudiando ingeniería eléctrica pero se dio cuenta que eso no era su verdadero ' +
                'llamamiento. Él se titulo con un B.S. en psicología con especialidad en biología. Su amor en ayudar a ' +
                'la gente lo guió a emprender la carrera de maestro de matemáticas, ciencias, y español. Al pasar ' +
                'algunos años en eso, descubrió el mundo de Community Management donde ha pasado 12 años. Él ahora ' +
                'considera que este campo le provee una oportunidad para servirle a una audiencia global. Juan es el ' +
                'gerente del equipo internacional de Stack Overflow donde se ocupa de mantener los sitios para los ' +
                'miembros que hablan el ruso, portugués, japonés, o español principalmente.',
                image: 'jgarza.jpg',
                socialLinks: {
                  twitter: 'https://twitter.com/esStackOverflow',
                  website: 'https://es.stackoverflow.com/',
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
