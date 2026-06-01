const https = require('https');
const urls = [
  'https://www.themoviedb.org/movie/118340-guardians-of-the-galaxy',
  'https://www.themoviedb.org/movie/299534-avengers-endgame',
  'https://www.themoviedb.org/movie/414906-the-batman',
  'https://www.themoviedb.org/movie/297762-wonder-woman'
];
urls.forEach(url => {
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const match = data.match(/w1920_and_h800_multi_faces(.*?\.jpg)/);
      if (match) {
        console.log(url.split('/').pop() + ':', 'https://image.tmdb.org/t/p/original' + match[1]);
      } else {
        console.log(url.split('/').pop() + ':', 'Not found');
      }
    });
  });
});
