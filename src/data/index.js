/* eslint-disable */
// Types: 1 & 2
// Type 1 is a moment like welcome or networking
// Type 2 is when a speaker has time to speak
const scheduleInfo = [
  {
    date: '06/06/2018', // DD/MM/YYYY
    tracks: [
      {
        displayName: 'Demo Corner by OSW',
        max: 20,
        items: [
          {
            type: 2,
            content: {
              title: 'NodeSchool Madrid',
              description: 'Taller de Node.js y JavaScript. Paso a paso siguiendo tutoriales',
              tags: [ 'Javascript', 'NodeJS' ],
              speakers: [
                {
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
              ],
            },
            time: {
              start: {
                hour: '10',
                min: '00',
              },
              end: {
                hour: '12',
                min: '00',
              },
            },
          },
          {
            type: 2,
            content: {
              title: 'Madrid Tech Alliance. Porque juntos somos más fuertes',
              description: 'En esta charla expondremos el animo de la Madrid Tech Alliance, el porqué se creó hace unos meses, quienes forman parte de ella y que hay que hacer para unirse como comunidad.',
              tags: [ 'Comunidades' ],
              speakers: [
                {
                  name: 'Paola García',
                  position: 'CEO at Chefly',
                  bio: 'Paola García es Ingeniera de Telecomunicaciones y desarrolladora de Software. Además es co-fundadora y CEO de un Startup tecnológica Chefly. Trabaja desde Campus Madrid, un edificio de Google para emprendedores en el que además es embajadora de Comunidad especializada en perspectiva de género. Ponente en charlas técnicas y sobre emprendimiento y embajadora de Diversidad en Open Source Weekends. Además es organizadora de Madrid Tech Alliance.',
                  image: 'image.jpg',
                  socialLinks: {
                    twitter: 'https://twitter.com/gGarciaPaola',
                    linkedin: 'https://www.linkedin.com/in/paolagarcia/',
                    website: 'https://chefly.co',
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
                min: '30',
              },
            },
          },
          {
            type: 2,
            content: {
              title: 'OSWGuilds: transformando los proyectos Open Source en comunidad',
              description: '¿Cómo se consigue unir y mantener a más de 100 personas desarrollando más de 30 proyectos, trabajando incluso domingos y todos bajo la misma premisa, hacer Open Source con impacto social? Os contaremos cómo en nuestra comunidad sin ánimo de lucro Open Source Weekends, una de las más relevantes y activas en el impulso al código abierto, hemos creado un ecosistema de redes de equipos auto-organizados que desarrollan de proyectos Open Source con impacto social en diversas áreas como educación, ciberseguridad, hardware libre, open data, agricultura & sostenibilidad...entre otras.',
              tags: [ 'Blockchain', 'Cybersecurity', 'Hardware Libre' ],
              speakers: [
                {
                  name: 'Teba Gómez',
                  position: '--',
                  bio: 'Experta en Gestión de proyectos con metodologías ágiles y Design Thinking, es además facilitadora y coach de equipos. Durante más 5 años colaboró en la implementación de mega-proyectos en una multinacional de software y tecnología para la salud. De lo que más orgullosa se siente es de ser la Embajadora de los Guilds en Open Source Weekends, de crear un ecosistema para el desarrollo de proyectos Open Source y de fomentar la Cultura Libre hasta donde sea posible. También es responsable del diseño e implementación de un plan de formación técnico y de gestión de proyectos Open Source, así como de habilidades transversales (cultura de equipo, comunicación…). Las metodologías ágiles le han perseguido desde hace muchos años; especialmente enganchada a bajar a tierra toda esa locura que implica Scrum, Agile Project Management y Design Thinking. Colaboradora y mentora freelance en StartUps y PYMes.',
                  image: 'koolteba.jpg',
                  socialLinks: {
                    github: 'https://github.com/kooltheba',
                    twitter: 'https://twitter.com/KoolTheba',
                    linkedin: 'https://www.linkedin.com/in/tebagomez/',
                  },
                },
              ],
            },
            time: {
              start: {
                hour: '12',
                min: '30',
              },
              end: {
                hour: '13',
                min: '00',
              },
            },
          },
          {
            type: 2,
            content: {
              title: 'GoblinDB, una base de datos diferente',
              description: 'Hoy venimos a presentar GoblinDB, uno de los proyectos que desarrollamos en Open Source Weekends, una base de datos diferente. Goblin es una base de datos experimental en continuo desarrollo, está escrita totalmente en javascript. Nos encanta la asincronía y los eventos por lo que decidimos añadirlo a nuestra base de datos. Goblin es un proyecto en el que buscamos experimentar y divertirnos mientras probamos todo lo que nos pasa por la mente, añadiendo aquello que nos parece más interesante.',
              tags: [ 'Storage', 'Technological Innovation' ],
              speakers: [
                {
                  name: 'Sebastián Cabanas',
                  position: 'Web developer at CBI Consulting',
                  bio: 'Desarrollador de software y amante de la filosofía open source. Me dedido al desarrollo profesionalmente desde hace unos 3 años. Actualmente trabajo como desarrollador web fullstack con PHP / MySQL / Node.js / Javascript... en una pequeña empresa, llamada CBI, ubicada en San Sebastián de los Reyes. Tenemos un producto llamado Sygris que se basa en facilitar la recopilación, tratamiento y visualización de datos de forma amigable para grandes empresas, entre ellas Telefónica, Mapfre, BBVA y empresas por estilo que necesitan recompilar y analizar datos de muy diversas fuentes y departamentos en diferentes países. Formo parte de la comunidad de amantes de la cultura libre Open Source Weekends, de la que me enamoré desde mi primer meetup. Desde entonces no me he perdido ninguno y actualmente colaboro en varios proyectos que hacemos en comunidad cómo GoblinDB o Telemetría UC3M.',
                  image: '--',
                  socialLinks: {
                    twitter: 'https://twitter.com/Sebastiancbvz',
                    linkedin: 'https://www.linkedin.com/in/CBI Consulting/',
                  },
                },
              ],
            },
            time: {
              start: {
                hour: '13',
                min: '00',
              },
              end: {
                hour: '13',
                min: '20',
              },
            },
          },
          {
            type: 2,
            content: {
              title: 'AireMAD',
              description: 'AireMAD es un portal que nos muestra la información de contaminación en el aire, contaminación acústica, niveles de polen, niveles de gripe y el tiempo. Es una aplicación de código abierta desarrollada por Fictizia que utiliza los datos abiertos del Ayuntamiento de Madrid junto con otras fuentes oficiales y no oficiales.',
              tags: [ 'Storage', 'Technological Innovation' ],
              speakers: [
                {
                  name: 'Ulises Gascón',
                  position: 'TPM at Google',
                  bio: 'I am one of the co-organizers of the Open Source Weekends and I wrote the book "JavaScript, ¡Inspírate!" (JavaScript, Get inspired!). Currently my personal aim is to evangelize about Open Source. I believe that the Open Source can change the world. This is the reason why most of my software and hardware projects were released under Open Source licenses in GitHub. Since a very young age, I have been attracted by the world of web and computing to which I have dedicated all my career life till today.During the years I\'ve had different jobs as webmaster, developer, instructor and developer evangelist. Today I work as a freelance consultant and an instructor teaching about JavaScript, Node.js, Python e Internet of Things, among others... As a Full Stack Developer, I developed a lot of experience in fields like Internet of Things (IoT) with Open Hardware as Arduino or Raspberry Pi. Most of the time I code in JavaScript and Python.',
                  image: '--',
                  socialLinks: {
                    twitter: 'https://twitter.com/kom_256',
                    github: 'https://github.com/UlisesGascon',
                    website: 'https://medium.com/@ulisesGascon',
                  },
                },
              ],
            },
            time: {
              start: {
                hour: '13',
                min: '30',
              },
              end: {
                hour: '13',
                min: '50',
              },
            },
          },
          {
            type: 1,
            content: {
              title: 'DESCANSO',
              description: null,
            },
            time: {
              start: {
                hour: '14',
                min: '00',
              },
              end: {
                hour: '15',
                min: '30',
              },
            },
          },
          {
            type: 2,
            content: {
              title: 'WikiNews, una historia de colaboración',
              description: 'Como tres comunidades dieron vida al projecto WikiNews. Comunidades centradas en la diversidad en tecnología crearon este projecto basado en R, Node y una interfaz web.',
              tags: [ 'OpenData', 'Diversity', 'R-lang' ],
              speakers: [
                {
                  name: 'Beatriz Hernández',
                  position: 'Data Scientist at DatMean',
                  bio: 'I am one of the co-organizers of the Open Source Weekends and I wrote the book "JavaScript, ¡Inspírate!" (JavaScript, Get inspired!). Currently my personal aim is to evangelize about Open Source. I believe that the Open Source can change the world. This is the reason why most of my software and hardware projects were released under Open Source licenses in GitHub. Since a very young age, I have been attracted by the world of web and computing to which I have dedicated all my career life till today.During the years I\'ve had different jobs as webmaster, developer, instructor and developer evangelist. Today I work as a freelance consultant and an instructor teaching about JavaScript, Node.js, Python e Internet of Things, among others... As a Full Stack Developer, I developed a lot of experience in fields like Internet of Things (IoT) with Open Hardware as Arduino or Raspberry Pi. Most of the time I code in JavaScript and Python.',
                  image: null,
                  socialLinks: {
                    twitter: 'https://twitter.com/Chucheria',
                    linkedin: 'https://www.linkedin.com/in/bea-hern%C3%A1ndez-9ab53b71/',
                  },
                },
              ],
            },
            time: {
              start: {
                hour: '15',
                min: '30',
              },
              end: {
                hour: '15',
                min: '50',
              },
            },
          },
          {
            type: 2,
            content: {
              title: 'Sistema de telemetría de competición utilizando MQTT',
              description: 'Presentación del equipo Formula UC3M de la Universidad Carlos III de Madrid y del sistema de telemetría que se está desarrollando con la colaboración de Open Source Weekends utilizando hardware libre, concretamente Arduino, y el protocolo MQTT de publicación y suscripción de mensajes.',
              tags: [ 'Hardware Libre', 'Storage', 'Monitorización' ],
              speakers: [
                {
                  name: 'Rubén Moreno Carrillo',
                  position: 'Developer at Salenda',
                  bio: 'Terminando el grado en Ingeniería Telemática en la Universidad Carlos III de Madrid. Miembro del departamento de telemetría del equipo Formula UC3M de la competición Formula Student y miembro activo de la comunidad Open Source Weekends.',
                  image: null,
                  socialLinks: {
                    linkedin: 'www.linkedin.com/in/ruben-moreno-carrillo',
                  },
                },
              ],
            },
            time: {
              start: {
                hour: '16',
                min: '00',
              },
              end: {
                hour: '16',
                min: '20',
              },
            },
          },
          {
            type: 2,
            content: {
              title: 'PillarsJS: un framework web amigable para NodeJS',
              description: 'Es un framework modular para desarrollo web en NodeJS. Con un enfoque simple y modular te introduce en NodeJS con una curva suave de aprendizaje. Pillars tiene control potente de estados, el cual, te permite manejar tu aplicación de una forma completamente nueva. Para desarrolladores avanzados de JS/NodeJS, Pillars es un entorno organizado y eficiente.',
              tags: [ 'Javascript', 'NodeJS' ],
              speakers: [
                {
                  name: 'Jacinto José Cruz',
                  position: 'Innovation and Technology Manager at Opcion TIC',
                  bio: 'Terminando el grado en Ingeniería Telemática en la Universidad Carlos III de Madrid. Miembro del departamento de telemetría del equipo Formula UC3M de la competición Formula Student y miembro activo de la comunidad Open Source Weekends.',
                  image: null,
                  socialLinks: {
                    linkedin: 'www.linkedin.com/in/ruben-moreno-carrillo',
                  },
                },
              ],
            },
            time: {
              start: {
                hour: '16',
                min: '30',
              },
              end: {
                hour: '16',
                min: '50',
              },
            },
          },
          {
            type: 2,
            content: {
              title: 'BatImagen: la importancia de los metadatos',
              description: 'Batimagen: presentación de la primera release de la App\n',
              tags: [ 'CiberSecurity' ],
              speakers: [
                {
                  name: 'Elena Mateos',
                  position: 'Developer',
                  bio: '--',
                  image: null,
                  socialLinks: {
                    twitter: 'https://twitter.com/lpez_elena',
                    linkedin: 'https://www.linkedin.com/in/elena-mateos-lopez/',
                  },
                },
              ],
            },
            time: {
              start: {
                hour: '17',
                min: '00',
              },
              end: {
                hour: '17',
                min: '20',
              },
            },
          },
          {
            type: 2,
            content: {
              title: 'Mi experiencia como guilder',
              description: 'Mi experiencia como guilder en OSW',
              tags: [ 'OSW', 'Guilds' ],
              speakers: [
                {
                  name: 'Elena Mateos',
                  position: 'Developer',
                  bio: '--',
                  image: null,
                  socialLinks: {
                    twitter: 'https://twitter.com/lpez_elena',
                    linkedin: 'https://www.linkedin.com/in/elena-mateos-lopez/',
                  },
                },
              ],
            },
            time: {
              start: {
                hour: '17',
                min: '30',
              },
              end: {
                hour: '17',
                min: '40',
              },
            },
          },
          {
            type: 2,
            content: {
              title: 'Mi experiencia como guilder',
              description: 'Mi experiencia como guilder en OSW',
              tags: [ 'OSW', 'Guilds' ],
              speakers: [
                {
                  name: 'Vicky Solís',
                  position: 'Developer',
                  bio: '--',
                  image: null,
                  socialLinks: {
                    twitter: '--',
                    linkedin: '--',
                  },
                },
              ],
            },
            time: {
              start: {
                hour: '17',
                min: '40',
              },
              end: {
                hour: '17',
                min: '50',
              },
            },
          },
          {
            type: 2,
            content: {
              title: 'Mi experiencia como guilder',
              description: 'Mi experiencia como guilder en OSW',
              tags: [ 'OSW', 'Guilds' ],
              speakers: [
                {
                  name: 'Ana Enríquez Alonso-Villalobos',
                  position: '--',
                  bio: '--',
                  image: null,
                  socialLinks: {
                    twitter: 'https://twitter.com/ana_eav',
                    linkedin: 'https://www.linkedin.com/in/ana-enr%C3%ADquez-alonso-villalobos-489b45b2/',
                  },
                },
              ],
            },
            time: {
              start: {
                hour: '17',
                min: '50',
              },
              end: {
                hour: '18',
                min: '00',
              },
            },
          },
        ],
      },
      {
        displayName: 'Sala Auditorio Red Hat',
        max: 20,
        items: [
          {
            type: 2,
            content: {
              title: 'StackOverflow en Español: No todos hablan Inglés',
              description: 'Mientras el desarrollo de código se hace principalmente en inglés, muchos de los desarrolladores no dependen del inglés en la mayoría de sus conversaciones. Ven a aprender como una comunidad de desarrolladores en tu lengua natal puede hacer del internet un lugar mejor. ¡Solamente necesitamos que se presente!',
              tags: [ 'Comunidades' ],
              speakers: [
                {
                  name: 'Teba Gómez',
                  position: '--',
                  bio: 'Experta en Gestión de proyectos con metodologías ágiles y Design Thinking, es además facilitadora y coach de equipos. Durante más 5 años colaboró en la implementación de mega-proyectos en una multinacional de software y tecnología para la salud. De lo que más orgullosa se siente es de ser la Embajadora de los Guilds en Open Source Weekends, de crear un ecosistema para el desarrollo de proyectos Open Source y de fomentar la Cultura Libre hasta donde sea posible. También es responsable del diseño e implementación de un plan de formación técnico y de gestión de proyectos Open Source, así como de habilidades transversales (cultura de equipo, comunicación…). Las metodologías ágiles le han perseguido desde hace muchos años; especialmente enganchada a bajar a tierra toda esa locura que implica Scrum, Agile Project Management y Design Thinking. Colaboradora y mentora freelance en StartUps y PYMes.',
                  image: 'koolteba.jpg',
                  socialLinks: {
                    github: 'https://github.com/kooltheba',
                    twitter: 'https://twitter.com/KoolTheba',
                    linkedin: 'https://www.linkedin.com/in/tebagomez/',
                  },
                },
                {
                  name: 'Ulises Gascón',
                  position: 'TPM at Google',
                  bio: 'I am one of the co-organizers of the Open Source Weekends and I wrote the book "JavaScript, ¡Inspírate!" (JavaScript, Get inspired!). Currently my personal aim is to evangelize about Open Source. I believe that the Open Source can change the world. This is the reason why most of my software and hardware projects were released under Open Source licenses in GitHub. Since a very young age, I have been attracted by the world of web and computing to which I have dedicated all my career life till today.During the years I\'ve had different jobs as webmaster, developer, instructor and developer evangelist. Today I work as a freelance consultant and an instructor teaching about JavaScript, Node.js, Python e Internet of Things, among others... As a Full Stack Developer, I developed a lot of experience in fields like Internet of Things (IoT) with Open Hardware as Arduino or Raspberry Pi. Most of the time I code in JavaScript and Python.',
                  image: '--',
                  socialLinks: {
                    twitter: 'https://twitter.com/kom_256',
                    github: 'https://github.com/UlisesGascon',
                    website: 'https://medium.com/@ulisesGascon',
                  },
                },
              ],
            },
            time: {
              start: {
                hour: '18',
                min: '30',
              },
              end: {
                hour: '19',
                min: '00',
              },
            },
          },
          {
            type: 2,
            content: {
              title: 'StackOverflow en Español: No todos hablan Inglés',
              description: 'Mientras el desarrollo de código se hace principalmente en inglés, muchos de los desarrolladores no dependen del inglés en la mayoría de sus conversaciones. Ven a aprender como una comunidad de desarrolladores en tu lengua natal puede hacer del internet un lugar mejor. ¡Solamente necesitamos que se presente!',
              tags: [ 'Comunidades' ],
              speakers: [
                {
                  name: 'Juan Garza',
                  position: '--',
                  bio: '--',
                  image: '--',
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
                min: '30',
              },
            },
          },
        ],
      },
    ],
  },
  {
    date: '07/06/2018', // DD/MM/YYYY
    tracks: [
      {
        displayName: 'Demo Corner by OSW',
        max: 20,
        items: [
          {
            type: 2,
            content: {
              title: 'OSWGUILDS: Live Guilds',
              description: 'Lo que haremos\n' +
              '\n' +
              '📌 Como siempre... dejamos este espacio para que los Guilds se sienten cara a cara y se arremanguen para empezar a planificar sus proyectos, idear, definir...lo que sea! 4 horas de curro seguido de cerca por algunos mentores de la comunidad OSWeekends ;)',
              tags: [ 'OSW', 'Live Guilds', 'Proyectos' ],
              speakers: [
                {
                  name: 'Open Source Weekends',
                  position: null,
                  bio: null,
                  image: null,
                  socialLinks: {
                    twitter: 'https://twitter.com/os_weekends',
                    website: 'http://osweekends.com/',
                  },
                },
              ],
            },
            time: {
              start: {
                hour: '10',
                min: '00',
              },
              end: {
                hour: '14',
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
