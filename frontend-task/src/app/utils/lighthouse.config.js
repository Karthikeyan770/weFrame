module.exports = {
    ci: {
      collect: {
        url: ['http://localhost:3000'],
      },
      assert: {
        assertions: {
          'categories:performance': ['error', { minScore: 0.95 }],
        },
      },
    },
  };
  