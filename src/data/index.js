/* eslint-disable */
// Types: 1 & 2 & 3
// Type 1 is a moment like welcome or networking
// Type 2 is when a speaker has time to speak
// Type 3 no speaker but has info
export const scheduleInfo = [
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
              title: 'Open Source Weekends: ¡Un año de guilders y proyectos! 🤗',
              description: 'Llega el momento de hacer una retrospectiva sobre lo logrado en este año 2 de vida como comunidad, sobre todo gracias al esfuerzo de nuestros Guilders, los miembros activos de los equipos de proyectos. Estamos apostando por un ecosistema de redes de equipos auto-organizados y gracias a un plan de formación, programa de mentoring y gestión de recursos compartidos, ahora es más asequible para tod@s el desarrollar proyectos Open Source en comunidad, sin las clásicas barreras que todos hemos sufrido. ¡Os lo contaremos todo, vente a conocernos!',
              tags: [ 'Comunidades', 'OSW', 'Guilds' ],
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
                hour: '19',
                min: '00',
              },
              end: {
                hour: '20',
                min: '00',
              },
            },
          },
        ],
      },
      {
        displayName: 'Sala Arsys',
        max: 20,
        items: [
          {
            type: 2,
            content: {
              title: 'Cómo elegir correctamente las etiquetas HTML5 al maquetar',
              description: 'Las preguntas que nos sacarán de dudas al elegir qué etiqueta de HTML5 es la más adecuada para cada «parte» de la interfaz según la semántica de nuestros contenidos.',
              tags: [ 'Comunidades', 'OSW', 'Guilds' ],
              speakers: [
                {
                  name: 'Ángel Corral',
                  position: 'UX/Visual Senior Designer',
                  bio: 'Experta en Gestión de proyectos con metodologías ágiles y Design Thinking, es además facilitadora y coach de equipos. Durante más 5 años colaboró en la implementación de mega-proyectos en una multinacional de software y tecnología para la salud. De lo que más orgullosa se siente es de ser la Embajadora de los Guilds en Open Source Weekends, de crear un ecosistema para el desarrollo de proyectos Open Source y de fomentar la Cultura Libre hasta donde sea posible. También es responsable del diseño e implementación de un plan de formación técnico y de gestión de proyectos Open Source, así como de habilidades transversales (cultura de equipo, comunicación…). Las metodologías ágiles le han perseguido desde hace muchos años; especialmente enganchada a bajar a tierra toda esa locura que implica Scrum, Agile Project Management y Design Thinking. Colaboradora y mentora freelance en StartUps y PYMes.',
                  image: 'koolteba.jpg',
                  socialLinks: {
                    twitter: 'https://twitter.com/ancoar',
                    linkedin: 'https://www.linkedin.com/in/ancoar',
                    website: 'http://ancoar.com/',
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
                min: '15',
              },
            },
          },
          {
            type: 2,
            content: {
              title: 'Introducción práctica a Vue.js',
              description: 'Vue.js vende simplicidad y fácil adopción. Se autodefine como un “framework progresivo” porque lo podemos ir adaptando poco a poco y, según vayamos necesitando, estar seguros de que no nos fallará cuando nuestra aplicación crezca y sea mas compleja. En esta charla, Rubén Valseca tratará de mostrar cómo usar Vue con lo mínimo necesario y cómo de fácil es empezar a usarlo tirando código desde el minuto cero y con ejemplos prácticos. Sin Webpack, sin NPM, sin procesos de build y desarrollo, sin routing... Vue en su mínima expresión. Puede serte útil si quieres “ver de qué va esto de Vue” o, si ya lo dominas y te gustaría conocer cómo implementarlo sin todo el tooling al que estamos acostumbrados.',
              tags: [ 'Javascript', 'Desarrollo web' ],
              speakers: [
                {
                  name: 'Rubén Valseca',
                  position: 'Front-end Developer',
                  bio: 'Rubén Valseca es Frontend Developer en StyleSage. Enamorado de Javascript, lleva varios años en el ecosistema startup trabajando en empresas que van desde una aplicación de alquiler de plazas de garaje por horas hasta sistemas SCADAs de control de parques eólicos. Actualmente trabaja en StyleSage donde aplican Big Data en el mundo de la moda.',
                  image: '--',
                  socialLinks: {
                    twitter: 'https://twitter.com/rubnvp',
                  },
                },
              ],
            },
            time: {
              start: {
                hour: '19',
                min: '15',
              },
              end: {
                hour: '20',
                min: '00',
              },
            },
          },
        ],
      },
      {
        displayName: 'Sala PrestaShop',
        max: 20,
        items: [
          {
            type: 2,
            content: {
              title: 'Py-Píldoras para tratar tu Open Data',
              description: 'El Open Data comprende tantas fuentes, formatos y contenidos que, en ocasiones, encontrar la forma de tratarlo puede ser complicado. Python ofrece miles de posibilidades que pueden hacerte la vida mucho más fácil. En esta charla te enseñaremos algunos ejemplos en los que puedes usar Python para que tratar datos abiertos nunca más sea un dolor.',
              tags: [ 'Open Data' ],
              speakers: [
                {
                  name: 'Alicia Perez',
                  position: null,
                  bio: null,
                  image: null,
                  socialLinks: {
                    twitter: 'https://twitter.com/alipeji',
                  },
                },
                {
                  name: 'Mabel Delgado',
                  position: null,
                  bio: null,
                  image: null,
                  socialLinks: {
                    twitter: 'https://twitter.com/mabeldelgadob',
                  },
                },
                {
                  name: 'María Medina',
                  position: null,
                  bio: null,
                  image: null,
                  socialLinks: {
                    twitter: 'https://twitter.com/mariamedp',
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
              title: 'R + H2O para Machine Learning',
              description: 'R nos permite utilizar un montón de modelos y librerías de machine learning para realizar diferentes problemas de analítica, pero cuando este volumen de datos aumenta el performance que suele ofrecer no es el deseado. H2o provee de unas librerías open source capaces de ejecutar estos algoritmos de machine learning de una forma sencilla y optima cuando nuestros datos aumentan en volumen. En la charla explicaremos como funcionan las principales librerías y como podemos integrarlas y usar de R.',
              tags: [ 'BigData', 'Machine Learning' ],
              speakers: [
                {
                  name: 'Inés Huertas',
                  position: 'CEO & Data Scientist @Datatons',
                  bio: 'Data Scientist y co-fundadora de Datatons, Ex-Sysadmin y enamorada de los datos, desarrolla proyectos de analítica sobre plataforma Hadoop no solo enfocado en el tratamiento dato sino también en la parte del diseño dada su experiencia en la administración de sistemas Big Data. Actualmente participa también como coorganizadora del grupo de R-ladies Madrid y el meetup de Big Data Madrid intentando generar una comunidad donde todo el mundo que tenga interés pueda participar e iniciarse en el mundo de los datos.',
                  image: null,
                  socialLinks: {
                    twitter: 'https://twitter.com/quierodata',
                  },
                },
                {
                  name: 'Beatriz Hernández',
                  position: 'Data Scientist',
                  bio: 'Data Scientist @DatMean donde trabaja con tecnologías Deep Learning y visualización de datos aplicado al consumidor online. En su tiempo libre co-organiza R-Ladies Madrid, una rama local de la comunidad global de R en la que se fomenta la diversidad de género en los campos STEM y en concreto en la comunidad de R. Parte de la comunidad NASA Datanauts, un grupo que se mueve en un entorno de datos enfocados en el espacio.',
                  image: null,
                  socialLinks: {
                    github: 'https://github.com/chucheria',
                    twitter: 'https://twitter.com/Chucheria',
                    website: 'https://chucheria.github.io/material/',
                  },
                },
              ],
            },
            time: {
              start: {
                hour: '19',
                min: '00',
              },
              end: {
                hour: '19',
                min: '30',
              },
            },
          },
          {
            type: 2,
            content: {
              title: 'GrimoireLab, analizando comunidades Open Source fácilmente',
              description: 'Durante la charla, presentaremos el proyecto GrimoireLab y la iniciativa de The Linux Foundation CHAOSS (Community Health Analytics for Open Source). El objetivo es que cualquier persona que asista pueda ejecutar analítica cuantitativa de las comunidades alrededor de los proyectos open source desde el punto de vista de las personas involucradas, su actividad y su rendimiento. Se presentarán algunos casos de uso y métricas de referencia.',
              tags: [ 'Monitoring', 'Tech Innovation' ],
              speakers: [
                {
                  name: 'Jose Manrique',
                  position: 'CEO @Bitergia',
                  bio: 'Data Scientist y co-fundadora de Datatons, Ex-Sysadmin y enamorada de los datos, desarrolla proyectos de analítica sobre plataforma Hadoop no solo enfocado en el tratamiento dato sino también en la parte del diseño dada su experiencia en la administración de sistemas Big Data. Actualmente participa también como coorganizadora del grupo de R-ladies Madrid y el meetup de Big Data Madrid intentando generar una comunidad donde todo el mundo que tenga interés pueda participar e iniciarse en el mundo de los datos.',
                  image: null,
                  socialLinks: {
                    twitter: 'https://twitter.com/jsmanrique',
                    website: 'https://bitergia.com/',
                  },
                },
              ],
            },
            time: {
              start: {
                hour: '19',
                min: '30',
              },
              end: {
                hour: '20',
                min: '00',
              },
            },
          },
        ],
      },
      {
        displayName: 'Sala Oracle',
        max: 20,
        items: [
          {
            type: 2,
            content: {
              title: '#El feliz developer (v. extendida)',
              description: 'En esta charla hablaremos (y debatiremos) sobre cómo hacer que el trabajo en el mundo IT sea más razonable, humanizado, agradable y productivo; y cómo contribuyen a esto los proyectos Open Source.',
              tags: [ 'Investigación', 'Open Data', 'Tech Innovation' ],
              speakers: [
                {
                  name: 'Irene M. Morgado',
                  position: null,
                  bio: 'Socióloga especializada en Comunicación y Psicología Social. Comprometida con proyectos sociales y éticos, me he movido desde el mundo de las estrategias de comunicación hacia los Recursos Humanos, siempre interesada por el mundo técnico :) Últimamente, profundizando en el mundo del Análisis de Inteligencia y la definición de Perfiles. Colaboro contando "cosas" sobre Habilidades Sociales y Profesionales en los podcast que son tan insensatos de haberme fichado. Desgrano en la saga  "El feliz Developer" un adelanto de "Developers (y demás profesionales IT) Motivados", mi próximo estudio.',
                  image: null,
                  socialLinks: {
                    twitter: 'https://twitter.com/IrnMM',
                    linkedin: 'https://www.linkedin.com/in/irenemmorgado/',
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
                hour: '20',
                min: '00',
              },
            },
          },
        ],
      },
      {
        displayName: 'Sala 2Byte',
        max: 20,
        items: [
          {
            type: 2,
            content: {
              title: 'Programación funcional en Rust con abstracciones sin coste',
              description: 'Los principios de la programación funcional son cada vez más usados por los equipos de desarrollo y tenidos en cuenta en el diseño de nuevos lenguajes de programación. Estos principios ofrecen abstracciones que ayudan a producir un código más robusto y mantenible, pero estos beneficios han implicado una curva de aprendizaje muy pronunciada o un rendimiento en ejecución más bajo que con otros lenguajes. En esta charla exploraremos cómo el lenguaje de programación Rust consigue incluir propiedades funcionales útiles y, a la vez, permite al programador crear programas muy eficientes en tiempo de ejecución.',
              tags: [ 'Functional Programming', 'Tech Innovation' ],
              speakers: [
                {
                  name: 'Carlos León',
                  position: null,
                  bio: 'Carlos León es profesor en el Departamento de Ingeniería del Software e Inteligencia Artificial en la Universidad Complutense de Madrid. Investiga en los campos de Creatividad Computacional y Sistemas Cognitivos, y ha desarrollado complejas arquitecturas para investigación científica con programación funcional. Carlos ha trabajado como investigador en Estados Unidos (Institute for Creative Technologies, University of Southern California), Reino Unido (Universidade de Aberdeen) y Alemania (Universidad de Hamburgo). Ha publicado varios artículos sobre cómo construir sistemas inteligentes, y también disfruta enseñando a programar videojuegos.',
                  image: null,
                  socialLinks: {
                    twitter: 'https://twitter.com/clnznr',
                    linkedin: 'https://es.linkedin.com/in/carlos-le%C3%B3n-1926a839',
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
              title: 'Programación funcional y Haskell',
              description: '¿Es importante entender la programación funcional? ¿Qué nos puede aportar Haskell?',
              tags: [ 'Functional Programming', 'Tech Innovation' ],
              speakers: [
                {
                  name: 'Jose Luis Esteban',
                  position: null,
                  bio: 'Experiencia profesional fundamentalmente en C++, sistemas distribuidos de tiempo real. Amante de la programación funcional y de la programación concurrente. Eterno aprendiz',
                  image: null,
                  socialLinks: {
                    twitter: 'https://twitter.com/clnznr',
                    linkedin: 'https://es.linkedin.com/in/carlos-le%C3%B3n-1926a839',
                  },
                },
              ],
            },
            time: {
              start: {
                hour: '19',
                min: '00',
              },
              end: {
                hour: '19',
                min: '30',
              },
            },
          },
          {
            type: 2,
            content: {
              title: 'Sacando todo el partido a Scala mediante la programación funcional',
              description: 'Es posible que ya hayas comprobado que puedes programar en Scala como si programaras aún en Java. Aunque esto indudablemente ayuda mucho a la hora de atraer a nuevos adeptos al lenguaje, no deberíamos olvidar que el soporte a la programación funcional es una de las mayores ventajas del lenguaje. En esta charla describiremos tres abstracciones funcionales que te permitirán conseguir niveles de reusabilidad y modularidad sin precedentes: las funciones de orden superior, las type clases y las funciones monádicas.',
              tags: [ 'Functional Programming', 'Scala' ],
              speakers: [
                {
                  name: 'Juan Manuel Serrano',
                  position: 'CTO',
                  bio: 'Experiencia profesional fundamentalmente en C++, sistemas distribuidos de tiempo real. Amante de la programación funcional y de la programación concurrente. Eterno aprendiz',
                  image: null,
                  socialLinks: {
                    twitter: 'https://twitter.com/juanshac',
                    linkedin: 'https://www.linkedin.com/in/jserranohidalgo/',
                  },
                },
              ],
            },
            time: {
              start: {
                hour: '19',
                min: '00',
              },
              end: {
                hour: '19',
                min: '30',
              },
            },
          },
        ],
      },
      {
        displayName: 'Sala Irontec',
        max: 20,
        items: [
          {
            type: 2,
            content: {
              title: 'Legends of STEM, be a legend!',
              description: 'Legends of STEM es un juego móvil para tablets en el que niñas entre 8-13 años pueden protagonizar referentes del mundo STEM y poder vivir sus experiencias. El proyecto pretende visibilizar a los referentes femeninos de las carreras STEM para romper los sesgos de género relacionados con los trabajos y así conseguir que más mujeres se matriculen en estas carreras.',
              tags: [ 'Diversidad', 'Transformacion Digital' ],
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
                hour: '18',
                min: '30',
              },
              end: {
                hour: '18',
                min: '45',
              },
            },
          },
          {
            type: 2,
            content: {
              title: 'Breakers: fabricación digital rompiendo barreras',
              description: 'En esta charla hablaremos sobre Breakers, un programa que llevamos realizando donde los dos últimos años para acercar la fabricación digital a jóvenes en riesgo de exclusión. Hablaremos sobre cómo se ha desarrollado el programa y cuales son los principales aprendizajes que hemos tenido durante el camino.',
              tags: [ 'Diversidad', 'Transformacion Digital' ],
              speakers: [
                {
                  name: 'César García',
                  position: 'Vicepresidente Makespace Madrid',
                  bio: 'César García Sáez es Ingeniero Técnico de Sistemas y licenciado en Estudios de Asia Oriental por la Universidad Oberta de Cataluña. Es graduado del programa de fabricación digital Fab Academy. Tiene más de 10 años de experiencia como trabajador del sector TIC y amplia experiencia como divulgador tecnológico. Es co-fundador de Makespace Madrid, una comunidad de aficionados a la tecnología y la creación que utilizan la fabricación digital para hacer realidad sus proyectos. Es una persona muy activa entre las comunidades tecnológicas habiendo participado en numerosos encuentros. En 2015, ha participado en la creación de la Red Española de Creación y Fabricación Digital  (CREFAB). Es coordinador del programa Breakers, que se desarrolla a nivel nacional y que buscar acercar la Fabricación Digital a jóvenes en situación de vulnerabilidad. Desde 2015, conduce el podcast "La Hora Maker", que informa sobre los avances de la comunidad maker española, poniendo en valor a los pioneros de este movimiento al tiempo que impulsa la creación de nuevos espacios y colectivos.',
                  image: null,
                  socialLinks: {
                    twitter: 'https://twitter.com/elsatch',
                    linkedin: 'http://es.linkedin.com/in/cesargarciasaez',
                    website: 'http://www.makespacemadrid.org',
                  },
                },
              ],
            },
            time: {
              start: {
                hour: '18',
                min: '45',
              },
              end: {
                hour: '19',
                min: '15',
              },
            },
          },
          {
            type: 2,
            content: {
              title: 'Nuestra responsabilidad con la tecnología',
              description: 'Muchos ingenieros y desarrolladores hemos pensado alguna vez que nosotros desarrollamos tecnología, pero no decidimos cómo esta tecnología se relaciona con las personas. En otras palabras, la tecnología "es neutra", y son las personas las que deciden cómo se usa y qué impacto personal y social tendrá ese uso. Durante unos minutos, trataré de explicar cómo esto no es siempre cierto. Es más, en muchos casos, la tecnología, al menos tal y como es desplegada, dista mucho de ser neutra en cuánto a cómo nos afecta.',
              tags: [ 'Social Impact of Tech', 'Transformacion Digital' ],
              speakers: [
                {
                  name: 'Jesús M. Gonzalez-Barahona',
                  position: 'Vicepresidente Makespace Madrid',
                  bio: 'Jesús M. González Barahona es profesor en la Universidad Rey Juan Carlos y cofundador de Bitergia, la compañía de analítica del desarrollo de software. Ha realizado parte de su carrera investigadora y docente en el campo del software libre y de la analítica cuantitativa del desarrollo de software. Desde hace unos años está también interesado en el mundo más amplio de la cultura libre y de el impacto de la tecnología en la sociedad.',
                  image: null,
                  socialLinks: {
                    twitter: 'https://twitter.com/jgbarah',
                    linkedin: 'http://es.linkedin.com/in/jgbarah',
                    website: 'http://www.bitergia.com',
                  },
                },
              ],
            },
            time: {
              start: {
                hour: '19',
                min: '15',
              },
              end: {
                hour: '19',
                min: '45',
              },
            },
          },
          {
            type: 2,
            content: {
              title: 'GingerCode: Un inicio épico en el aprendizaje de Javascript',
              description: 'GingerCode es una herramienta de apoyo a profesor@s, estudiantes y autodidactas que se vayan a introducir en el mundo de la programación. Escribe en pseudocódigo y GingerCode te lo transforma en código JavaScript. En esta charla veremos cómo está construido Ginger y cómo es ese pseudocódigo que conoce.',
              tags: [ 'Javascript' ],
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
                hour: '19',
                min: '45',
              },
              end: {
                hour: '20',
                min: '15',
              },
            },
          },
        ],
      },
      {
        displayName: 'Sala King Of App',
        max: 20,
        items: [
          {
            type: 3,
            content: {
              title: 'Hackathon: Capture the Flag',
              description: 'El encuentro será una competencia individual y habrá premios para los tres primeros puestos. Es una competencia que pondrá a prueba tus habilidades y conocimientos. Competir en The Game of Hackers es una manera divertida e inteligente de aprender el arte del hacking.',
              helpText: 'Recomendamos a los contendientes, anotarse y estar en el sitio 30 minutos antes del horario de inicio.',
              tags: [ 'Hackathon', 'CTF' ],
              prizes: [
                {
                  item: 'Descuento del 40% en cursos del IEBS',
                  sponsor: 'https://www.iebschool.com/',
                  isLink: true,
                },
                {
                  item: 'Un E-Book de O’Reilly',
                  sponsor: ' https://www.oreilly.com/',
                  isLink: true,
                },
                {
                  item: ' Camiseta de OpenExpoEurope2018',
                  sponsor: 'OpenExpoEurope',
                  isLink: false,
                },
              ],
            },
            time: {
              start: {
                hour: '17',
                min: '15',
              },
              end: {
                hour: '20',
                min: '00',
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
              description: 'Lo que haremos: 📌 Como siempre... dejamos este espacio para que los Guilds se sienten cara a cara y se arremanguen para empezar a planificar sus proyectos, idear, definir...lo que sea! 4 horas de curro seguido de cerca por algunos mentores de la comunidad OSWeekends ;)',
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

export const eventInfo = {
  title: 'Open Comunnities Summit by #OSW',
  subtitle: '6 y 7 Junio 2018',
  ticketsURL: 'https://openexpoeurope.com/oe2018/register/',
  ticketCode: 'GOE18250',
  callToActionMsg: 'Comprar entrada',
};
