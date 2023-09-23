import imgDonate from '@/assets/donate.webp';
import imgJ10 from '@/assets/j10.jpg';
import imgJ6 from '@/assets/j6.jpg';
// import imgJ9 from '@/assets/j9.jpg';
import { Footer } from '@/components/Footer';
import { Follow } from '@/components/IconRow/Follow';
import { Listen } from '@/components/IconRow/Listen';
import styles from '@/pages/Home/Home.module.scss';

export const Home = () => (
  <div class={styles.Home}>
    <div id="top" class={`${styles.intro} ${styles.top}`} style={{ 'background-image': `url(${imgJ6})` }}>
      <Listen />
    </div>
    <div id="conocernos" class={styles.card}>
      <div>
        <h2>Te Invitamos a Conocernos</h2>
        <div>
          En este site, me conocerás personalmente, de una forma única y transparente, donde encontrarás Espiritualidad
          genuina, Testimonios en nuestros Vlogs y Vivencias en nuestro Podcast. Nuestra Música y Marca personal en
          nuestra Tienda de <i>Faith&LoveMerchandise</i>. Tambien conocerás un lado de mi nunca antes visto como
          Emprendedora en Nuestra Tienda Online de Modesty Love Design & Products donde encontraras un sin fin de
          productos para tu hogar tu vida personal y salud y bienestar.
        </div>
      </div>
    </div>
    <div class={styles['card-donate']}>
      <form action="https://www.paypal.com/donate" method="post" target="_blank">
        <input type="hidden" name="business" value="AT6X4DAVFMNDN" />
        <input type="hidden" name="no_recurring" value="0" />
        <input type="hidden" name="currency_code" value="USD" />
        <input class={styles['btn-donate']} type="image" name="submit" src={imgDonate} alt="Donate" />
      </form>
      Tu donación es una gran bendición para nuestro ministerio musical. ¡Únete a nosotros y apoya nuestra misión!
    </div>
    <div id="sobre-mi" class={styles.card}>
      <div>
        <h2>Sobre Mi</h2>
        <div>
          Jennifer González es una apasionada de la nutrición y el bienestar, una emprendedora multifacética y una
          escritora de corazón. Además de sus habilidades como compositora y cantante, asume diversos roles en la
          actualidad, compartiendo su amor por el bienestar y la espiritualidad con mujeres de todo el mundo.
        </div>
        <div>
          Actualmente, ministra grupos de apoyo transformadores como "Dios Me Hizo Mujer con Propósito Divino" y
          "Florece en Salud y Bienestar". Desde 2007, su ministerio musical ha llevado el mensaje de salvación a través
          de cánticos que elevan al cielo.
        </div>
        <div>
          Jennifer ha tenido el privilegio de llevar su música y su mensaje a países como República Dominicana, México,
          Puerto Rico y Estados Unidos, tocando corazones como cantante y oradora.
        </div>
        <div>
          Esta noche, te invitamos a descubrir su más reciente producción musical: <i>"La esencia de tu amor"</i>.
        </div>
        <div>
          Jennifer González, una verdadera líder en el emprendimiento y el bienestar en Cristo Jesús. ¡Bienvenidos a su
          mundo de inspiración y transformación en su sitio web!
        </div>
      </div>
    </div>
    <div class={styles['card-donate']}>
      <iframe
        src="https://www.youtube-nocookie.com/embed/H3r0f3DgJAc?si=Entt5PvZeHw74CJQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share"
        allowfullscreen
      />
    </div>
    <div id="trayectoria-musical" class={styles.card}>
      <div>
        <h2>Trayectoria Musical</h2>
        <div>
          Desde el año 2006 hasta la fecha actual, la trayectoria musical de Jennifer González ha estado marcada por la
          guía de Dios en su ministerio. Durante este período, ha sido dirigida hacia iglesias, donde ha participado en
          su crecimiento y ha tenido la oportunidad de desarrollar aún más sus talentos musicales.
        </div>
        <div>
          En el año 2014, Jennifer González experimentó un importante acontecimiento en su carrera cuando Dios le
          permitió lanzar su primer sencillo titulado "Caminaré". Este evento abrió las puertas para que destacara en el
          ámbito de la música cristiana, compartiendo escenario con reconocidos intérpretes como Mike y Laura Rosario de
          <i> Revive and Forgiven</i>, Fausto y Camille Mercado, Daniel y Naomi López, Laura Ceballos, Bryan Daniel,
          Josue Interiano, Jorge De La Torre, Josue Baez y Roger Castillo.
        </div>
        <div>
          En junio de 2016, su trayectoria musical dio un paso más allá al llevarla a ministrar internacionalmente en la
          República Dominicana como invitada del Ministerio Gospel Wave Ministry. Durante esta experiencia, tuvo el
          privilegio de participar junto a destacados artistas de la música cristiana como Jamagra, Haboner Hilton y el
          Grupo Elegidos. Además, durante su participación en la ciudad de Moca, República Dominicana, Jennifer tuvo la
          oportunidad de predicar en una pequeña Iglesia Adventista llamada "La Iglesia de la Fe".
        </div>
        <div>
          Desde aquel momento hasta la fecha actual, la vida y carrera de Jennifer González han seguido siendo guiadas
          por la dirección divina. Su misión como sierva de Dios es evangelizar los corazones a través de su música y
          ministerio. Su dedicación y enfoque en compartir el mensaje de fe y esperanza han sido fundamentales en su
          trayectoria musical, y continúa abriendo camino hacia nuevas oportunidades para servir y alcanzar a las
          personas con su mensaje.
        </div>
      </div>
    </div>
    <div id="bio" class={styles.card}>
      <div>
        <h2>Biografía</h2>
        <div>
          Jennifer Gonzalez es una cantante nacida un14 de Noviembre en una pequeña ciudad del estado de Oklahoma, en
          los Estados Unidos. Su historia está marcada por la influencia y sacrificio de su madre soltera, quien dejó su
          Ciudad de México natal en busca de un mejor futuro en Estados Unidos. La familia finalmente se estableció en
          el Estado de Texas. A pesar de los desafíos que enfrentaron, la vida de Jennifer estuvo siempre bajo el amparo
          de Dios, quien ocupó un lugar especial en su corazón desde temprana edad y fue su guía constante.
        </div>
        <div>
          La trayectoria profesional de Jennifer González está entrelazada con su camino espiritual. El ministerio
          "Faith and Love" tuvo su origen en Abril de 2006, cuando Jennifer experimentó un profundo encuentro con Dios
          que transformó su fe y amor por Él. En ese momento, uno de sus más grandes anhelos de infancia se hizo
          realidad al conocer íntimamente a su Padre Celestial. Este acontecimiento marcó el inicio de su camino de
          testimonio en Cristo Jesús, convirtiéndola en un ejemplo viviente de fe y amor.
        </div>
        <div>
          El propósito de Jennifer se definió a medida que Dios la guió para conocer el Evangelio y desarrollar los
          dones que le otorgó. Además de su talento como cantante, también es una hábil cantautora y escritora. Su
          música, letras y escritos están impregnados de su profundo vínculo con la espiritualidad y su relación con
          Dios. Cada canción es una expresión sincera de su fe y amor por Cristo, y su escritura refleja su deseo de
          compartir el mensaje del Evangelio con el mundo.
        </div>
        <div>
          Jennifer González no solo se limita a expresarse a través de su música y escritura, sino que también se dedica
          a la evangelización, compartiendo su testimonio y el mensaje de esperanza que ha encontrado en su fe. Su voz y
          presencia inspiran a otros a profundizar en su relación con Dios y a experimentar la transformación que ella
          misma experimentó. A lo largo de su carrera, Jennifer ha logrado alcanzar a una audiencia diversa y tocar
          corazones con su música y mensaje. Su vida y obra son un recordatorio de cómo la fe, el amor y la
          determinación pueden superar las adversidades y llevar a una vida de propósito y significado. Su biografía es
          un testimonio de cómo el camino espiritual y profesional pueden converger en un poderoso mensaje de esperanza
          y amor en Cristo.
        </div>
      </div>
    </div>
    <div class={`${styles.intro} ${styles.bottom}`} style={{ 'background-image': `url(${imgJ10})` }}>
      <Follow />
    </div>
    <Footer />
  </div>
);
