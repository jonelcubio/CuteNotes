export type Note = {
  id: number;
  title: string;
  text: string;
  author: string;
  posted: string;
}
const sampleNotes : Note[] =[{
  id: 1,
  title: 'My Favorite Things',
  text: 'I love cats',
  author: 'Me',
  posted: '4 days ago',
}, {
  id: 2,
  title: 'Welcome to my Cute Blog!',
  text: "This is the very first note. I'm so excited to share my thoughts with you! 🌸",
  author: 'Me',
  posted: '3 days ago',
}];

export default sampleNotes; 