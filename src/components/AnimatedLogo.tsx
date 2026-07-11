type AnimatedLogoProps = {
  className?: string;
  width?: number;
};

const viewBox = {
  height: 330,
  width: 410,
  x: 150,
  y: 80,
};

export function AnimatedLogo({ className = "", width = 520 }: AnimatedLogoProps) {
  const height = Math.round((width * viewBox.height) / viewBox.width);

  return (
    <svg
      aria-label="Alltech — Desafiando a Computação Inteligente"
      className={className}
      height={height}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Alltech</title>

      <circle cx="430" cy="205" fill="#000000" r="105" />
      <text
        fill="#ffffff"
        fontFamily="Arial, sans-serif"
        fontSize="60"
        fontWeight="700"
        textAnchor="middle"
        x="430"
        y="228"
      >
        TECH
      </text>
      <text
        fill="#000000"
        fontFamily="Arial, sans-serif"
        fontSize="66"
        fontWeight="700"
        textAnchor="end"
        x="310"
        y="228"
      >
        ALL
      </text>

      <g fill="#a3a3a3" fontFamily="Arial, sans-serif" fontSize="20" textAnchor="middle">
        <text x="320" y="352">
          Desafiando a Computação
        </text>
        <text x="320" y="378">
          Inteligente
        </text>
      </g>
    </svg>
  );
}
