// Types: 1 & 2
// Type 1 is a moment like welcome or networking
// Type 2 is when a speaker has time to speak
export const scheduleInfo = [
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
              title: 'Titulo charla',
              description: 'Descripcion charla',
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
              title: 'Titulo charla',
              description: 'Descripcion charla',
              speakerId: 1,
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
              speakerId: 2,
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
              title: 'Titulo charla',
              description: 'Descripcion charla',
              speakerId: 3,
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
      {
        displayName: 'Sala 1',
        max: 300,
        items: [
          {
            type: 1,
            content: {
              title: 'Titulo charla',
              description: 'Descripcion charla',
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
              title: 'Titulo charla',
              description: 'Descripcion charla',
              speakerId: 1,
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
              speakerId: 2,
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
              title: 'Titulo charla',
              description: 'Descripcion charla',
              speakerId: 3,
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
  {

    date: '10/06/2018', // DD/MM/YYYY
    tracks: [
      {
        displayName: 'Auditorio2',
        max: 300,
        items: [
          {
            type: 1,
            content: {
              title: 'Titulo charla',
              description: 'Descripcion charla',
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
              title: 'Titulo charla',
              description: 'Descripcion charla',
              speakerId: 1,
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
              speakerId: 3,
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

export const speakers = [
  {
    id: 1,
    name: 'Juan',
    position: 'CEO Google',
    bio: 'lorem ipsum',
    image: 'speakerName.png',
    socialLinks: { twitter: '', linkedin: '', github: '' },
  },
  {
    id: 2,
    name: 'Isabel',
    position: 'CEO Crunch42',
    bio: 'lorem ipsum',
    image: 'speakerName.png',
    socialLinks: { twitter: '', linkedin: '', github: '' },
  },
  {
    id: 3,
    name: 'Enrique Navalon',
    position: 'CTO',
    bio: 'lorem ipsum',
    image: 'speakerName.png',
    socialLinks: { twitter: '', linkedin: '', github: '' },
  },
];
