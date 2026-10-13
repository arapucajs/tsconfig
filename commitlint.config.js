export default {
  extends: ['@commitlint/config-conventional'],
  ignores: [
    (message) =>
      message.startsWith('chore(deps-dev): bump ') &&
      message.includes('updated-dependencies:') &&
      message.includes('Signed-off-by: dependabot[bot]'),
  ],
};
