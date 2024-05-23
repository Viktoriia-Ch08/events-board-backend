const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Event Board',
      version: '1.0.0',
      description:
        'An app with an event schedule where you can choose and register for an event',
      contact: {
        name: 'Viktoriia Cherkashyna',
        url: 'https://github.com/Viktoriia-Ch08',
      },
    },

    servers: [{ url: 'https://events-board-rest-api.onrender.com/api' }],
  },

  apis: ['./routes/*.js'],
  tags: [
    { name: 'Events', description: 'Events endpoints' },
    {
      name: 'Participant',
      description: 'Participant endpoints',
    },
  ],
  // paths: {
  //   '/events': {
  //     get: {
  //       tags: ['Events'],
  //       summary: 'Get all events',
  //       parameters: [],
  //       responses: {
  //         200: {
  //           description: 'Successful response',
  //           content: {
  //             'application/json': {
  //               schema: {
  //                 $ref: '#/components/EventsResponse',
  //               },
  //             },
  //           },
  //         },
  //         400: {
  //           description: 'Bad request',
  //         },
  //         500: {
  //           description: 'Server error',
  //         },
  //       },
  //     },
  //   },
  //   '/events/{eventId}': {
  //     get: {
  //       tags: ['Events'],
  //       summary: 'Get event by id',
  //       parameters: [
  //         {
  //           in: 'path',
  //           name: 'eventId',
  //           required: 'true',
  //           type: 'string',
  //           description: "Event's id",
  //         },
  //       ],
  //       responses: {
  //         200: {
  //           description: 'Successful response',
  //           content: {
  //             'application/json': {
  //               schema: {
  //                 _id: '66477cfe31c9d7990db23fb8',
  //                 title: 'Retro Fetish Burlesque Show',
  //                 organizer: 'Worek Kości',
  //                 eventDate: 'today 21:00',
  //                 description:
  //                   'A delicately fetish show, in an elegant retro style. The stage will feature stunning gowns, boas, fans and...',
  //                 imageUrl: 'https://goout.net/i/096/961086-800.jpg',
  //               },
  //             },
  //           },
  //         },
  //         400: {
  //           description: 'Bad request',
  //         },
  //         404: {
  //           description: 'Not Found',
  //         },
  //         500: {
  //           description: 'Server error',
  //         },
  //       },
  //     },
  //   },
  //   '/events/{eventId}/participants': {
  //     get: {
  //       tags: ['Participants'],
  //       summary: "Get all events' participants by event's id",
  //       parameters: [
  //         {
  //           in: 'path',
  //           name: 'eventId',
  //           required: 'true',
  //           type: 'string',
  //           description: "Event's id",
  //         },
  //       ],
  //       responses: {
  //         200: {
  //           description: 'Successful response',
  //           content: {
  //             'application/json': {
  //               schema: [
  //                 {
  //                   user: {
  //                     name: 'Dima',
  //                     email: 'dimadeveloper@gmail.com',
  //                     birthDate: '1999-12-20',
  //                     answer: 'Friends',
  //                     eventTitle: 'Retro Fetish Burlesque Show',
  //                     eventImg: 'https://goout.net/i/096/961086-800.jpg',
  //                   },
  //                   _id: '664c43e96a0935648b5075c1',
  //                   eventId: '66477cfe31c9d7990db23fb8',
  //                   createdAt: '2024-05-21T06:49:13.353Z',
  //                 },
  //               ],
  //             },
  //           },
  //         },
  //         400: {
  //           description: 'Bad request',
  //         },
  //         404: {
  //           description: 'Not Found',
  //         },
  //         500: {
  //           description: 'Server error',
  //         },
  //       },
  //     },
  //   },
  //   '/participant/{email}': {
  //     get: {
  //       tags: ['Events'],
  //       summary: 'Get all events that an authorized user has registered for',
  //       parameters: [],
  //       responses: {
  //         200: {
  //           description: 'Successful response',
  //           content: {
  //             'application/json': {
  //               schema: [
  //                 {
  //                   user: {
  //                     name: 'Tim',
  //                     email: 'asdadsad@mail.com',
  //                     birthDate: '1980-02-02',
  //                     answer: 'Friends',
  //                     eventTitle: 'Retro Fetish Burlesque Show',
  //                     eventImg: 'https://goout.net/i/096/961086-800.jpg',
  //                   },
  //                   _id: '664b4939296630571f0c2342',
  //                   eventId: '66477cfe31c9d7990db23fb8',
  //                   createdAt: '2024-05-20T12:59:37.692Z',
  //                 },
  //               ],
  //             },
  //           },
  //         },
  //         400: {
  //           description: 'Bad request',
  //         },
  //         500: {
  //           description: 'Server error',
  //         },
  //       },
  //     },
  //   },
  //   '/events/{id}/register/participant': {
  //     post: {
  //       tags: ['Participant'],
  //       summary: 'Register participant',
  //       parameters: [],
  //       requestBody: {
  //         description: 'Participant registration for the event',
  //         required: true,
  //         content: {
  //           'application/json': {
  //             schema: {
  //               user: {
  //                 name: 'Tim',
  //                 email: 'asdadsad@mail.com',
  //                 birthDate: '1980-02-02',
  //                 answer: 'Friends',
  //                 eventTitle: 'The Iron Claw',
  //                 eventImg: 'https://goout.net/i/124/1248134-800.jpg',
  //               },
  //               eventId: '66477cfe31c9d7990db23fb9',
  //               _id: '664e237055147892b57ccab6',
  //               createdAt: '2024-05-22T16:55:12.103Z',
  //               updatedAt: '2024-05-22T16:55:12.103Z',
  //             },
  //           },
  //         },
  //       },
  //       responses: {
  //         201: {
  //           description: 'Successful operation',
  //           content: {
  //             'application/json': {
  //               schema: {},
  //             },
  //           },
  //         },

  //         400: {
  //           description: 'Bad request',
  //         },
  //         404: {
  //           description: 'Not Found',
  //         },
  //         500: {
  //           description: 'Server error',
  //         },
  //       },
  //     },
  //   },
  // },
  // components: {
  //   schemas: {
  //     EventsResponse: {
  //       type: 'object',
  //       properties: {
  //         totalRecords: { type: 'number', example: 20 },
  //         currentPage: { type: 'number', example: 2 },
  //         totalPages: { type: 'number', example: 100 },
  //         events: {
  //           type: 'array',
  //           items: {
  //             type: 'object',
  //             properties: {
  //               _id: { type: 'string', example: '66477cfe31c9d7990db23fb8' },
  //               title: {
  //                 type: 'string',
  //                 example: 'Retro Fetish Burlesque Show',
  //               },
  //               organizer: { type: 'string', example: 'Worek Kości' },
  //               eventDate: { type: 'string', example: 'today 21:00' },
  //               description: {
  //                 type: 'string',
  //                 example:
  //                   'A delicately fetish show, in an elegant retro style. The stage will feature stunning gowns, boas, fans and...',
  //               },
  //               imageUrl: {
  //                 type: 'string',
  //                 example: 'https://goout.net/i/096/961086-800.jpg',
  //               },
  //             },
  //           },
  //         },
  //       },
  //     },
  //   },
  // },
};

module.exports = {
  options,
};
