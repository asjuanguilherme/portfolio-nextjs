module.exports = {
  '**/*': filenames => [`npm run format ${filenames.join(' ')}`],
  '**/*.(md|json)': filenames => `npm run format ${filenames.join(' ')}`,
  '**/*.(ts|tsx|js)': filenames => 'next lint'
}
