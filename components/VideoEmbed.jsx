export default function VideoEmbed({ src, title }) {
  return (
    <div className="o-container--fluid c-block-padding--none c-block-background--black">
      <div className="o-container">
        <div className="o-container__row c-links--standard c-font--standard c-b-video">
          <div className="o-container__col-12">
            <div className="c-b-video__wrapper">
              <iframe
                loading="lazy"
                title={title}
                src={src}
                width="640"
                height="360"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
