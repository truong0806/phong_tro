module.exports = {
  get: {
    tags: ['Category CRUD operations'],
    description: 'Get category',
    operationId: 'getCategory',
    parameters: [],
    responses: {
      200: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/category',
            },
          },
        },
      },
    },
  },
}
