import sampleNotes from "../data/sampleNotes";
import face from "../assets/face.svg"

export default function Notes() {
  return(
    <>
    <div className="notes-con-div">
      {sampleNotes.map((notes) => (
    <div className="notes-con" key={notes.id} style={{backgroundColor: notes.color}}>
      <div className="notes-title">{notes.title}</div>
      <div className="notes-text">{notes.text}</div>
      <div className="author-post-con">
          <div className="author-post">
            <img src={face} alt={notes.author} className="author-img" />
            <div className="author">{notes.author}</div>
          </div>
        <div className="author-post-date">{notes.posted}</div>
        
      </div>
    </div>
    ))}
    </div>
    
    </>
  );
}