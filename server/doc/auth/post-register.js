module.exports = {
  post: {
    tags: ['Auth operations'],
    description: 'POST register',
    operationId: 'postRegister',
    parameters: [
      {
        name: 'phone',
        description: 'phone of the user register',
        in: 'path',
        schema: {
          type: 'string',
        },
      },
      {
        name: 'name',
        description: 'name of the user register',
        in: 'path',
        schema: {
          type: 'string',
        },
      },
      {
        name: 'password',
        description: 'password of the user register',
        in: 'path',
        schema: {
          type: 'string',
        },
      },
    ],
    responses: {
      200: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/register',
            },
          },
        },
      },
    },
  },
}
