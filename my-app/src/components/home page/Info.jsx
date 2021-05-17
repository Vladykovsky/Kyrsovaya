import React from 'react';
import '../../app.css';

const Info = () => (
  <div className="info">
    <div id="rectangle" />
    <h1>THE BEST ATHLETE</h1>
    <h2>
      RAFAEL
      <br />
      AGHAYEV
    </h2>
    <h3>
      famous Azerbaijani karateka, five-time world champion, eleven-time European champion,
      winner of the IX World Games and the 2013 World Martial Arts Games, champion of the 2015 
      European Games and the 2013 and 2017 Islamic Solidarity Games, 
      Honored Master of Sports of the Republic of Azerbaijan (2009).
      <br />
      Raphael Agayev is the most decorated karateka in the history of the sport, 
      as well as the only karateka who managed to win two gold medals at one World Championship. 
      Agayev is the owner of the fifth dan, as well as the captain of the Azerbaijani national karate team.
      For his high achievements, Agayev received the nickname "The Diamond of world Karate".
      <br />
      In 2015, Raphael Aghayev was awarded the Order of Glory by the decree of the President of Azerbaijan 
      for his high achievements at the First European Games in Baku, 
      as well as for his great achievements in the development of Azerbaijani sports.
    </h3>
    <img src="/agaev.jpg" alt="The best athlete" />
    <a href="https://instagram.com">
      <img src="/instagram.png" className="instagramIcon" alt="Instagram" />
      <img src="/facebook.png" className="facebookIcon" alt="facebook" />
      <img src="/tw.png" className="TwitterIcon" alt="Twitter" />
    </a>
  </div>
);

export default Info;
