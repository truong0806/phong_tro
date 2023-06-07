module.exports = {
  components: {
    Category: {
      properties: {
        code: {
          type: 'string',
          description: 'code category',
          example: 'NCT',
        },
        value: {
          type: 'string',
          description: 'value category',
          example: 'Nhà cho thuê',
        },
      },
    },
    register: {
      properties: {
        phone: {
          type: 'string',
          description: 'phone register',
          example: '0901234567',
        },
        name: {
          type: 'string',
          description: 'username',
          example: 'Nguyễn Văn A',
        },
        password: {
          type: 'string',
          description: 'user password',
          example: 'abcabcabc',
        },
      },
    },
  },
}
