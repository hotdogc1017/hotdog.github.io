import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  rules: {
    'no-new': 'off',
    "unused-imports/no-unused-vars": "off",
  },
})
