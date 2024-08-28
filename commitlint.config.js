// eslint-disable-next-line no-undef
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'change', 'chore', 'docs', 'style', 'perf', 'test'],
    ],
    'type-empty': [2, 'never'],
    'type-case': [2, 'always', 'lower-case'],
    'scope-empty': [2, 'never'],
    'scope-case': [2, 'always', 'kebab-case'],
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'never', 'sentence-case'],
    'header-max-length': [2, 'always', 100],
    'body-leading-blank': [0, 'always'],
    'subject-full-stop': [2, 'never', '.'],
  },
};
