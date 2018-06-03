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
  startTimeFormat: 'DD/MM/YYYY HH:mm',
};
