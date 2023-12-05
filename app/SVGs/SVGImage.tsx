interface SVGImageProps {
  className?: string;
  width?: number;
  height?: number;
}

const SVGImage = ({
  className = "",
  width = 64,
  height = 64,
}: SVGImageProps) => {
  return (
    <svg
      role="none"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      data-supported-dps="64x64"
      data-test-icon="image"
    >
      <svg display="var(--hue-web-svg-display-dark)">
        <image
          href="https://static.licdn.com/aero-v1/sc/h/3v0qqn0qg9h47wg81rum0twek"
          x="0"
          y="0"
          width={width ? width : "64"}
          height={height ? height : "64"}
        ></image>
      </svg>

      <svg display="var(--hue-web-svg-display-light)">
        <image
          href="https://static.licdn.com/aero-v1/sc/h/8x7kwtluy3rlydstzy8b6tywc"
          x="0"
          y="0"
          width="64"
          height="64"
        ></image>
      </svg>
    </svg>
  );
};
export default SVGImage;
