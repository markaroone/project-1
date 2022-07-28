import React from 'react';
import styles from './About.module.css';
import myPicture from '../assets/images/about-section.jpg';

const About = () => {
  return (
    <section className={styles.about}>
      <h3>About Me</h3>

      <div className={styles.me}>
        <img src={myPicture} alt='Mark Christian Fajardo' />

        <div className={styles.texts}>
          <p>
            I never thought I wanted to be a programmer until I tried it.I never
            thought I wanted to be a programmer until I tried it.
          </p>

          <p>
            My programming journey started when I was in college. We were given
            a school project about a simple line following robot. At that
            moment, I knew literally nothing about programming. So I
            self-studied about it. While studying, I stumbled upon a YouTube
            video about a line follower competition. I was surprised by how fast
            and how precise and accurate the robots were in following the path.
            I was so amazed that I decided to make one like those in the video.
            But there is one problem. I don't know how to program. So, I tried.
            And I tried harder. Up until I was so addicted that the school
            project turned into a personal project that I continued working on
            for another year. That was the time I knew I like programming.
          </p>

          <p>
            After my college graduation I studied in depth about industrial
            automation programming but unfortunately I haven't used that
            knowledge that I gained yet because of the pandemic. Then I looked
            at other programming related opportunities that might pique my
            interest. I then found my current love. Web development with its
            fast-paced, fast-changing tech plus cool looking user interfaces. I
            instantly fell in love with it.
          </p>

          <p>
            I am now a graduate of a full-stack web development bootcamp and I
            am ready to take the tech industry!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
