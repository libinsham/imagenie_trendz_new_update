export default function TextText({ heading, children, variant = "white" }) {
  return (
    <div
      className={`o-container--fluid c-links c-links--${variant} c-font c-font--${variant} c-block-background--${variant}`}
    >
      <div className="o-container c-b-text-text">
        <div
          className={`o-container__row c-block-padding--both c-b-text-text__lines--none c-b-text-text__lines--${variant}`}
        >
          <div className="o-container__col-12 o-container__col-md-5 c-b-text-text__left-copy c-b-text-text__left-copy--flush">
            <div className="c-b-text-text__left-copy-container">
              <div className="c-b-text-text__left-copy-wrapper">
                <h2>{heading}</h2>
              </div>
            </div>
          </div>
          <div className="o-container__col-12 o-container__col-offset-0 o-container__col-md-6 o-container__col-md-offset-1">
            <div
              className={`c-b-text-text__right-copy c-b-text-text__right-copy--flush c-b-text-text__right-copy--${variant} c-b-text-text__right-copy--single`}
            >
              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
