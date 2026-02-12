import sampleNotes from "../data/sampleNotes";

export default function Notes() {
  return(
    <>
    {sampleNotes.map((notes) => (
    <div className="notes-con" key={notes.id}>
      <div className="notes-title">{notes.title}</div>
      <div className="notes-text">{notes.text}</div>
      <div className="author-post-con">
          <div className="author-post">
            <img src="" alt={notes.author} className="author-img" />
            <div className="author">{notes.author}</div>
          </div>
        <div className="author-post-date">{notes.posted}</div>
        
      </div>
    </div>
    ))}
    </>
  );
}