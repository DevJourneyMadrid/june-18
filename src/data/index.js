/* eslint-disable */
// Types: 1 & 2 & 3
// Type 1 is a moment like welcome or networking
// Type 2 is when a speaker has time to speak
// Type 3 no speaker but has info
export const scheduleInfo = [
  {
    date: '09/06/2018',
    tracks: [
      {
        displayName: 'Auditorio',
        max: 200,
        items: [
          {
            id: 0,
            type: 1,
            content: {
              title: 'Registro y café',
              description: 'Si llegas tarde te quedas sin café 😜',
            },
            time: {
              start: {
                hour: '09',
                min: '45',
              },
              end: {
                hour: '10',
                min: '20',
              },
            },
          },
          {
            id: 1,
            type: 2,
            content: {
              title: 'Apertura del evento',
              description: 'Presentación y bienvenida por Jorge Baumann y Rambo Mambo',
              tags: [ 'RamboTheDog', '🐶' ],
              speakers: [
                {
                  name: 'Jorge Baumann',
                  position: 'FullStack developer',
                  bio: 'Organizador del evento. Full Stack developer. CSS ninja.',
                  image: 'baumannzone.jpg',
                  socialLinks: {
                    github: 'https://github.com/baumannzone',
                    twitter: 'https://twitter.com/baumannzone',
                    linkedin: 'https://www.linkedin.com/in/baumannzone/',
                  },
                },
                {
                  name: 'Rambo Mambo',
                  position: 'Dev Journey Madrid #18 co-organizer',
                  bio: 'Main speaker & best friend',
                  image: 'ramboMambo.jpg',
                  socialLinks: {
                    website: 'https://slides.com/baumannzone/devjourneymadrid18#/',
                  },
                },
              ],
            },
            time: {
              start: {
                hour: '10',
                min: '20',
              },
              end: {
                hour: '10',
                min: '30',
              },
            },
          },
          {
            id: 2,
            type: 2,
            content: {
              title: 'La protección de APIs no es tan difícil...',
              description: 'Nos pasa a todos: hay presión para sacar funcionalidad, y tiene que estar todo listo para ayer.  ¿Cuánto tiempo tenemos para dedicarnos a la seguridad? La verdad, poca. En esta charla te damos pasos prácticos para que te asegures de que has hecho lo correcto en tu código para afrontar problemas y encontrar los fallos de seguridad como con cualquier otro: lo antes posible.',
              tags: [ 'APIs', 'Security', 'SecDevOps', 'OWASP' ],
              speakers: [
                {
                  name: 'Isabelle Mauny',
                  position: 'CTO at 42Crunch',
                  bio: 'I am working for 42Crunch, a company providing an API security platform, putting security at the heart of APIs lifecycle: development, testing, deployment. I manage product management, product marketing as well as analysts relationship. Previously, I was working for WSO2 as VP of Product Strategy and Technical Evangelist for WSO2\'s open source platform, mainly in Europe.',
                  image: 'isa.jpg',
                  socialLinks: {
                    linkedin: 'https://www.linkedin.com/in/isamauny/',
                    website: 'https://www.42crunch.com/',
                  },
                },
              ],
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
            id: 3,
            type: 2,
            content: {
              title: 'Cloud Firestore, todo sobre la nueva BD de Firebase en 45min',
              description: 'En esta charla contaré todo lo que hay que saber acerca de Cloud Firestore, la nueva generación de base de datos de Firebase: lo bueno, lo malo, cuando usarla y como sacar el mayor partido de su funcionalidad. Habrá ejemplos prácticos de como solucionar los casos más típicos que nos encontraremos en nuestros proyectos.',
              tags: [ 'Firebase', 'Serverless', 'Base de datos', 'Javascript' ],
              speakers: [
                {
                  name: 'Enrique García Navalón',
                  position: 'Lead Engineer @ BICG',
                  bio: 'Kike es ingeniero software y de datos cuya curiosidad le ha llevado a trabajar de muchos perfiles, desde web fullstack, microservicios con Docker, pipelines de datos en entorno serverless hasta CTO. Interesado desde siempre en la innovación y el producto, ha desarrollado toda su actividad en el mundo startup y emprendedor. Actualmente lidera el equipo de desarrollo en BICG.',
                  image: 'garcianavalon.jpg',
                  socialLinks: {
                    github: 'https://github.com/garcianavalon',
                    twitter: 'https://twitter.com/garcianavalon',
                    linkedin: 'https://www.linkedin.com/in/garcianavalon/',
                  },
                },
              ],
            },
            time: {
              start: {
                hour: '11',
                min: '15',
              },
              end: {
                hour: '12',
                min: '00',
              },
            },
          },
          {
            id: 4,
            type: 2,
            content: {
              title: 'Stack Overflow en español: No todos hablan inglés',
              description: 'Mientras el desarrollo de código se hace principalmente en inglés, muchos de los desarrolladores no dependen del inglés en la mayoría de sus conversaciones. Ven a aprender como una comunidad de desarrolladores en tu lengua natal puede hacer del internet un lugar mejor. ¡Solamente necesitamos que estés presente!',
              tags: [ 'Comunidades' ],
              speakers: [
                {
                  name: 'Juan Garza',
                  position: 'Gerente, Equipo de Comunidades Internacionales @ StackOverflow',
                  bio: 'Juan Garza nunca pensó que el tema de Community Management hubiera sido su carrera. Juan empezó su jornada profesional estudiando ingeniería eléctrica pero se dio cuenta que eso no era su verdadero llamamiento. Él se titulo con un B.S. en psicología con especialidad en biología. Su amor en ayudar a la gente lo guió a emprender la carrera de maestro de matemáticas, ciencias, y español. Al pasar algunos años en eso, descubrió el mundo de Community Management donde ha pasado 12 años. Él ahora considera que este campo le provee una oportunidad para servirle a una audiencia global. Juan es el gerente del equipo internacional de Stack Overflow donde se ocupa de mantener los sitios para los miembros que hablan el ruso, portugués, japonés, o español principalmente.',
                  image: 'jgarza.jpg',
                  socialLinks: {
                    twitter: 'https://twitter.com/esStackOverflow',
                    website: 'https://es.stackoverflow.com/',
                  },
                },
              ],
            },
            time: {
              start: {
                hour: '12',
                min: '00',
              },
              end: {
                hour: '12',
                min: '45',
              },
            },
          },
          {
            id: 5,
            type: 1,
            content: {
              title: 'Networking & Beers',
              description: '🍺 Cervezas y refrescos patrocinados por Open Source Weekends',
            },
            time: {
              start: {
                hour: '12',
                min: '45',
              },
              end: {
                hour: '13',
                min: '30',
              },
            },
          },
        ],
      },
    ],
  },
];

export const eventInfo = {
  title: 'Dev Journey Madrid',
  subtitle: '9 Junio 2018',
  ticketsURL: 'https://devjourneymadrid18.eventbrite.es',
  ticketCode: 'GOE18250',
  callToActionMsg: 'Entradas',
  showContdown: true,
  startTime: '09/06/2018 10:00',
  startTimeFormat: 'DD/MM/YYYY HH:mm', // Moment 
};
