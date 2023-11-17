import React, { useState } from "react";
import "./Company_profile.css";

export default function Company_profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [saveDetails, setSaveDetails] = useState(false);
  const [comments, setComments] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSaveDetailsChange = () => {
    setSaveDetails(!saveDetails);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newComment = {
      name: name,
      email: email,
      comment: comment,
    };

    setComments([...comments, newComment]);
    setName("");
    setEmail("");
    setComment("");
  };
  return (
    <div className="company_profile">
      <div className="profile_details">
        <div className="form_heading">
          <h2>Leave a Reply</h2>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
        </div>
        <form onSubmit={handleSubmit} method="post" className="comment_form">
          <div className="input_tags">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name *"
              required
              value={name}
              onChange={handleNameChange}
            />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email *"
              required
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <textarea
            id="comment"
            name="comment"
            rows="10"
            cols="141"
            placeholder="Comment *"
            required
            value={comment}
            onChange={handleCommentChange}
          ></textarea>

          <label htmlFor="saveDetails">
            <input
              type="checkbox"
              id="saveDetails"
              name="saveDetails"
              checked={saveDetails}
              onChange={handleSaveDetailsChange}
            />{" "}
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
          <br />
          <br />
          <button type="submit">POST COMMENT</button>
        </form>

        {/* <h2>Comments</h2>
      {comments.map((comment) => (
        <div key={comment.name}>
          <h3>{comment.name}</h3>
          <p>{comment.comment}</p>
        </div>
      ))} */}
      </div>
    </div>
  );
}
