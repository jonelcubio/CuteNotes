export type Note = {
  id: number;
  title: string;
  text: string;
  author: string;
  posted: string;
  color: string;
}
const sampleNotes : Note[] =[{
  id: 1,
  title: 'My Favorite Things',
  text: 'I love cats',
  author: 'Me',
  posted: '4 days ago',
  color: '#ff99c8'
}, {
  id: 2,
  title: 'Welcome to my Cute Blog!',
  text: "This is the very first note. I'm so excited to share my thoughts with you! 🌸",
  author: 'Me',
  posted: '3 days ago',
  color: '#fcf6bd'
}, {
  id: 3,
  title: 'Little Things',
  text: 'Shooting for the stars',
  author: 'Me',
  posted: '4 days ago',
  color: '#d0f4de'
}, {
  id: 4,
  title: 'New Venue',
  text: "The released for the song is real.",
  author: 'Me',
  posted: '3 days ago',
  color: '#a9def9'
}];

export default sampleNotes; 