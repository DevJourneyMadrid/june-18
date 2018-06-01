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
              tags: [ 'Comunidad' ],
              speaker: {
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
              speaker: {
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
              speaker: {
                name: 'Sebastián Cabanas',
                position: 'Web developer at CBI Consulting',
                bio: 'Desarrollador de software y amante de la filosofía open source. Me dedido al desarrollo profesionalmente desde hace unos 3 años. Actualmente trabajo como desarrollador web fullstack con PHP / MySQL / Node.js / Javascript... en una pequeña empresa, llamada CBI, ubicada en San Sebastián de los Reyes. Tenemos un producto llamado Sygris que se basa en facilitar la recopilación, tratamiento y visualización de datos de forma amigable para grandes empresas, entre ellas Telefónica, Mapfre, BBVA y empresas por estilo que necesitan recompilar y analizar datos de muy diversas fuentes y departamentos en diferentes países. Formo parte de la comunidad de amantes de la cultura libre Open Source Weekends, de la que me enamoré desde mi primer meetup. Desde entonces no me he perdido ninguno y actualmente colaboro en varios proyectos que hacemos en comunidad cómo GoblinDB o Telemetría UC3M.',
                image: '--',
                socialLinks: {
                  twitter: 'https://twitter.com/Sebastiancbvz',
                  linkedin: 'https://www.linkedin.com/in/CBI Consulting/',
                },
              },
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
              description: '--',
              tags: [ 'Storage', 'Technological Innovation' ],
              speaker: {
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
