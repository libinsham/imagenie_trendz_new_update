import Image from "next/image";

const XIcon = () => (
  <i className="c-b-message__x c-b-message__x--orange">
    <svg xmlns="http://www.w3.org/2000/svg" width="56.721" height="56.721" viewBox="0 0 56.721 56.721">
      <path d="M726.969,451.941l-8.682-8.682-19.679,19.679L678.93,443.259l-8.682,8.682,19.679,19.678L670.248,491.3l8.682,8.682L698.608,480.3l19.679,19.678,8.682-8.682L707.29,471.62Z" transform="translate(-670.248 -443.259)" />
    </svg>
  </i>
);

export default function MessageTicker({ words }) {
  // Duplicate the word list so the CSS marquee animation (translateX -100%) loops seamlessly.
  const loopedWords = [...words, ...words];

  return (
    <div className="o-container--fluid c-links c-links--black c-font c-font--black c-block-padding--bottom c-block-background--black c-b-message">
      <div className="c-b-message__list is-animated">
        <p>
         
        
         {loopedWords.map((word, i) => (
  <span key={i}>
    {word}
    <Image
      src="/images/g-logo.svg"
      alt="G Logo"
      width={50}
      height={50}
      className="c-b-message__g"
    />
  </span>
))}


        </p>
      </div>
    </div>
  );
}
