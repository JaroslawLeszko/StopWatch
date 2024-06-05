module.exports = {
  '*.{ts,tsx}': ['yarn prettify', 'yarn lint --fix', 'yarn typecheck'],
}
