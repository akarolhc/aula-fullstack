import './styles.css'

export default function Video() {
    return (
        <section>
          <h2>Imagem e Vídeo</h2>
          <img src="http://github.com/akarolhc.png" alt="Minha foto" />
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/T5_g8VO8Ac0?si=JBToVDBtbGbO_zV4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </section>
    )
}
