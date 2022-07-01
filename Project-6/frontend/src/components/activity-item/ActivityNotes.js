import React, { useEffect, useState } from 'react';
import styles from './ActivityNotes.module.css';
import axios from 'axios';

const ActivityNotes = ({ data }) => {
  const placeholder = data.activityType === 'cycling' ? 'ride' : 'run';
  const notesFromData = data.notes;
  const id = data._id;
  const type = data.activityType;

  const [note, setNote] = useState(notesFromData);
  const [isEditing, setIsEditing] = useState(false);

  const saveToDB = async (e) => {
    e.preventDefault();

    const result = await axios.patch(
      `http://localhost:8000/api/v1/activities/${type}-records/${id}`,
      { notes: note }
    );

    onShowTextAreaToggle();
  };

  const onEditHandler = (e) => {
    setNote(e.target.value);
  };

  const onShowTextAreaToggle = () => {
    setIsEditing(!isEditing);
  };

  const onShowTextArea = () => {
    setIsEditing(true);
  };

  const onHideTextArea = () => {
    setTimeout(setIsEditing(false), 500);
  };

  return (
    <div className={styles.container}>
      <h5>Notes</h5>
      <form action='' onSubmit={saveToDB}>
        {(note === '' || isEditing) && (
          <textarea
            type='textarea'
            name=''
            id=''
            value={note}
            onChange={onEditHandler}
            onFocus={onShowTextArea}
            onBlur={onHideTextArea}
            placeholder={`How was your ${placeholder}?`}
          />
        )}

        {note.length > 0 && !isEditing && (
          <div>
            <p>{note}</p>
          </div>
        )}

        {isEditing && (
          <button type='submit' className={styles.save}>
            Save
          </button>
        )}

        {!isEditing && note !== '' && (
          <button
            className={styles.edit}
            type='button'
            onClick={onShowTextAreaToggle}
          >
            Edit
          </button>
        )}
      </form>
    </div>
  );
};

export default ActivityNotes;
