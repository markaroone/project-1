import React, { useState, useEffect, useRef } from 'react';
import styles from './HeaderTitle.module.css';
import moment from 'moment';
import axios from 'axios';

const HeaderTitle = ({ data }) => {
  const type = data.type;
  const id = data.id;
  const activityIcon = type === 'cycling' ? 'bicycle' : 'footsteps';

  const date = moment(data.date.start);

  const year = date.format('YYYY');
  const month = date.format('MMMM');
  const date2 = date.format('D');
  const hour = date.format('h');
  const mins = date.format('mm');
  const amPM = date.format('A');

  const inputEl = useRef(null);

  const [name, setName] = useState(data.name);
  const [newName, setNewName] = useState(data.name);
  const [isEditing, setIsEditing] = useState(false);

  const onEditName = (e) => {
    setNewName(e.target.value);
  };

  const saveToDB = async (e) => {
    e.preventDefault();

    const result = await axios.patch(
      `http://localhost:8000/api/v1/activities/${type}-records/${id}`,
      { name: newName }
    );

    setName(newName);
    onHideTextArea();
  };

  const onShowTextArea = () => {
    setIsEditing(true);
  };

  const onHideTextArea = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    isEditing && setNewName(name);

    isEditing && inputEl.current.focus();
  }, [isEditing]);

  return (
    <div className={styles.container}>
      <div className={styles.time}>
        <p className={styles.type}>{data.type}</p>
        <p className={styles.date}>
          {`${month} ${date2}, ${year} @ ${hour}:${mins} ${amPM}`}
        </p>
        <div>
          <button>
            <ion-icon name='chevron-back-sharp'></ion-icon>
          </button>
          <button>
            <ion-icon name='chevron-forward-sharp'></ion-icon>
          </button>
        </div>
      </div>

      <div className={styles['name-container']}>
        <i>
          <ion-icon name={`${activityIcon}-sharp`}></ion-icon>
        </i>

        <div>
          <div className={styles.name}>
            {!isEditing && <p>{name}</p>}
            {isEditing && (
              <form onSubmit={saveToDB}>
                <input
                  ref={inputEl}
                  type='text'
                  value={newName}
                  onChange={onEditName}
                  // onBlur={onHideTextArea}
                />
                <div>
                  <button className={styles['form-btn']} type='submit'>
                    <ion-icon name='checkmark-sharp'></ion-icon>
                  </button>
                  <button
                    className={styles['form-btn']}
                    type='button'
                    onClick={onHideTextArea}
                  >
                    <ion-icon name='close-sharp'></ion-icon>
                  </button>
                </div>
              </form>
            )}
            {!isEditing && (
              <button onClick={onShowTextArea}>
                <ion-icon name='pencil-sharp'></ion-icon>
              </button>
            )}
          </div>
          <div className={styles.gear}>
            <p>
              <span>Shoes: </span> {data.gear.shoes || '--'}
            </p>
            <p>
              <span>Bike: </span> {data.gear.bike || '--'}
            </p>
            <p>
              <span>Device: </span> {data.gear.device || '--'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTitle;
