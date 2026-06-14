function Logo() {
  return (
    <svg viewBox="120 30 660 970" xmlns="http://www.w3.org/2000/svg" className="h-16 w-auto">
      <defs>
        <linearGradient id="brick" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e02b24"/>
          <stop offset="1" stopColor="#a31312"/>
        </linearGradient>
        <linearGradient id="flameG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e3201b"/>
          <stop offset=".7" stopColor="#c1130f"/>
          <stop offset="1" stopColor="#8f0f0f"/>
        </linearGradient>
        <linearGradient id="steel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff"/>
          <stop offset=".5" stopColor="#d9d9dc"/>
          <stop offset="1" stopColor="#9b9ba1"/>
        </linearGradient>
        <linearGradient id="steelTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff"/>
          <stop offset="1" stopColor="#cfcfd4"/>
        </linearGradient>
        <linearGradient id="face" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#e02b24"/>
          <stop offset="1" stopColor="#8f0f0f"/>
        </linearGradient>
        <linearGradient id="handleG" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#e02b24"/>
          <stop offset="1" stopColor="#8f0f0f"/>
        </linearGradient>
        <radialGradient id="heat" cx=".5" cy=".55" r=".5">
          <stop offset="0" stopColor="#ff5a1a" stopOpacity=".5"/>
          <stop offset=".55" stopColor="#d42420" stopOpacity=".18"/>
          <stop offset="1" stopColor="#d42420" stopOpacity="0"/>
        </radialGradient>
        <filter id="soft" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6"/>
        </filter>
        <filter id="flameGlow" x="-60%" y="-30%" width="220%" height="160%">
          <feDropShadow dx="0" dy="0" stdDeviation="14" floodColor="#ff3a1a" floodOpacity=".45"/>
        </filter>
        <clipPath id="headClip">
          <polygon points="585,615 760,560 800,585 800,665 615,725 575,695"/>
        </clipPath>
      </defs>

      <style>{`
        .flame-outer {
          transform-origin: 450px 770px;
          animation: flicker 2.8s ease-in-out infinite;
        }
        .flame-inner {
          transform-origin: 450px 750px;
          animation: flicker 2.1s ease-in-out infinite reverse;
        }
        @keyframes flicker {
          0%,100%{ transform:scaleY(1) scaleX(1) skewX(0deg); }
          20%{ transform:scaleY(1.035) scaleX(.985) skewX(.7deg); }
          40%{ transform:scaleY(.975) scaleX(1.015) skewX(-.9deg); }
          60%{ transform:scaleY(1.05) scaleX(.98) skewX(.5deg); }
          80%{ transform:scaleY(.985) scaleX(1.01) skewX(-.5deg); }
        }
        .glow {
          transform-origin: 450px 720px;
          animation: breathe 2.8s ease-in-out infinite;
        }
        @keyframes breathe {
          0%,100%{ opacity:.55; transform:scale(1); }
          50%{ opacity:.9; transform:scale(1.12); }
        }
        .hammer {
          transform-origin: 471px 856px;
          animation: forge 3.6s ease-in-out infinite;
        }
        @keyframes forge {
          0%,100%{ transform:rotate(0deg); }
          38%{ transform:rotate(3.4deg) translateY(-6px); }
          50%{ transform:rotate(-1.6deg) translateY(2px); }
          56%{ transform:rotate(.6deg); }
        }
        .sparks line {
          stroke: #ff7a1a;
          stroke-width: 5;
          stroke-linecap: round;
          opacity: 0;
          animation: spark 3.6s ease-out infinite;
        }
        .sparks line:nth-child(2){ animation-delay:.03s; }
        .sparks line:nth-child(3){ animation-delay:.06s; }
        .sparks line:nth-child(4){ animation-delay:.04s; }
        @keyframes spark {
          0%,49%{ opacity:0; transform:scale(.2); }
          52%{ opacity:1; }
          62%{ opacity:0; transform:scale(1.25); }
          100%{ opacity:0; }
        }
        .ember {
          fill: #ff7a1a;
          opacity: 0;
          animation: rise 4.2s linear infinite;
        }
        .ember.e2{ animation-duration:5.1s; animation-delay:1.2s; fill:#ffae3d; }
        .ember.e3{ animation-duration:3.6s; animation-delay:2.1s; }
        .ember.e4{ animation-duration:4.8s; animation-delay:.6s; fill:#ff5a2a; }
        .ember.e5{ animation-duration:5.6s; animation-delay:2.8s; fill:#ffae3d; }
        @keyframes rise {
          0%{ opacity:0; transform:translate(0,0) scale(1); }
          8%{ opacity:.95; }
          70%{ opacity:.55; }
          100%{ opacity:0; transform:translate(14px,-360px) scale(.35); }
        }
        .ember.e2, .ember.e4{ animation-name:rise-l; }
        @keyframes rise-l {
          0%{ opacity:0; transform:translate(0,0) scale(1); }
          8%{ opacity:.9; }
          70%{ opacity:.5; }
          100%{ opacity:0; transform:translate(-20px,-330px) scale(.3); }
        }
        .glint { animation: glint 5.5s ease-in-out infinite; }
        @keyframes glint {
          0%,72%,100%{ transform:translateX(-130px); opacity:0; }
          78%{ opacity:.85; }
          88%{ transform:translateX(150px); opacity:0; }
        }
      `}</style>

      <ellipse className="glow" cx="450" cy="640" rx="240" ry="300" fill="url(#heat)"/>

      <g>
        <rect x="175" y="526" width="52" height="44" rx="7" fill="url(#brick)"/>
        <rect x="233" y="526" width="52" height="44" rx="7" fill="url(#brick)"/>
        <rect x="175" y="576" width="24" height="44" rx="7" fill="url(#brick)"/>
        <rect x="205" y="576" width="52" height="44" rx="7" fill="url(#brick)"/>
        <rect x="263" y="576" width="22" height="44" rx="7" fill="url(#brick)"/>
        <rect x="175" y="626" width="52" height="44" rx="7" fill="url(#brick)"/>
        <rect x="233" y="626" width="52" height="44" rx="7" fill="url(#brick)"/>
        <rect x="175" y="676" width="24" height="44" rx="7" fill="url(#brick)"/>
        <rect x="205" y="676" width="52" height="44" rx="7" fill="url(#brick)"/>
        <rect x="263" y="676" width="22" height="44" rx="7" fill="url(#brick)"/>
        <rect x="175" y="726" width="52" height="44" rx="7" fill="url(#brick)"/>
        <rect x="233" y="726" width="52" height="44" rx="7" fill="url(#brick)"/>
        <rect x="175" y="776" width="24" height="44" rx="7" fill="url(#brick)"/>
        <rect x="205" y="776" width="52" height="44" rx="7" fill="url(#brick)"/>
        <rect x="263" y="776" width="22" height="44" rx="7" fill="url(#brick)"/>
        <rect x="175" y="826" width="52" height="44" rx="7" fill="url(#brick)"/>
        <rect x="233" y="826" width="52" height="44" rx="7" fill="url(#brick)"/>
        <rect x="615" y="526" width="52" height="44" rx="7" fill="url(#brick)"/>
        <rect x="673" y="526" width="52" height="44" rx="7" fill="url(#brick)"/>
        <rect x="615" y="576" width="24" height="44" rx="7" fill="url(#brick)"/>
        <rect x="645" y="576" width="52" height="44" rx="7" fill="url(#brick)"/>
        <rect x="703" y="576" width="22" height="44" rx="7" fill="url(#brick)"/>
        <rect x="615" y="626" width="52" height="44" rx="7" fill="url(#brick)"/>
        <rect x="673" y="626" width="52" height="44" rx="7" fill="url(#brick)"/>
        <rect x="615" y="676" width="24" height="44" rx="7" fill="url(#brick)"/>
        <rect x="645" y="676" width="52" height="44" rx="7" fill="url(#brick)"/>
        <rect x="703" y="676" width="22" height="44" rx="7" fill="url(#brick)"/>
        <rect x="615" y="726" width="52" height="44" rx="7" fill="url(#brick)"/>
        <rect x="673" y="726" width="52" height="44" rx="7" fill="url(#brick)"/>
        <rect x="615" y="776" width="24" height="44" rx="7" fill="url(#brick)"/>
        <rect x="645" y="776" width="52" height="44" rx="7" fill="url(#brick)"/>
        <rect x="703" y="776" width="22" height="44" rx="7" fill="url(#brick)"/>
        <rect x="615" y="826" width="52" height="44" rx="7" fill="url(#brick)"/>
        <rect x="673" y="826" width="52" height="44" rx="7" fill="url(#brick)"/>
        <rect x="175" y="872" width="76" height="32" rx="7" fill="url(#brick)"/>
        <rect x="257" y="872" width="76" height="32" rx="7" fill="url(#brick)"/>
        <rect x="339" y="872" width="76" height="32" rx="7" fill="url(#brick)"/>
        <rect x="421" y="872" width="76" height="32" rx="7" fill="url(#brick)"/>
        <rect x="503" y="872" width="76" height="32" rx="7" fill="url(#brick)"/>
        <rect x="585" y="872" width="76" height="32" rx="7" fill="url(#brick)"/>
        <rect x="667" y="872" width="58" height="32" rx="7" fill="url(#brick)"/>
        <rect x="175" y="910" width="38" height="32" rx="7" fill="url(#brick)"/>
        <rect x="219" y="910" width="76" height="32" rx="7" fill="url(#brick)"/>
        <rect x="301" y="910" width="76" height="32" rx="7" fill="url(#brick)"/>
        <rect x="383" y="910" width="76" height="32" rx="7" fill="url(#brick)"/>
        <rect x="465" y="910" width="76" height="32" rx="7" fill="url(#brick)"/>
        <rect x="547" y="910" width="76" height="32" rx="7" fill="url(#brick)"/>
        <rect x="629" y="910" width="76" height="32" rx="7" fill="url(#brick)"/>
        <rect x="711" y="910" width="14" height="32" rx="7" fill="url(#brick)"/>
        <path d="M 621.0 517.6 A 171 171 0 0 0 614.7 474.1 L 660.0 461.5 A 218 218 0 0 1 668.0 517.0 Z" fill="url(#brick)"/>
        <path d="M 613.4 469.6 A 171 171 0 0 0 595.1 429.6 L 635.0 404.7 A 218 218 0 0 1 658.3 455.7 Z" fill="url(#brick)"/>
        <path d="M 592.6 425.6 A 171 171 0 0 0 563.8 392.3 L 595.0 357.2 A 218 218 0 0 1 631.7 399.6 Z" fill="url(#brick)"/>
        <path d="M 560.2 389.2 A 171 171 0 0 0 523.2 365.5 L 543.3 323.0 A 218 218 0 0 1 590.5 353.3 Z" fill="url(#brick)"/>
        <path d="M 518.9 363.5 A 171 171 0 0 0 476.7 351.1 L 484.0 304.7 A 218 218 0 0 1 537.8 320.5 Z" fill="url(#brick)"/>
        <path d="M 472.0 350.4 A 171 171 0 0 0 428.0 350.4 L 422.0 303.8 A 218 218 0 0 1 478.0 303.8 Z" fill="url(#brick)"/>
        <path d="M 423.3 351.1 A 171 171 0 0 0 381.1 363.5 L 362.2 320.5 A 218 218 0 0 1 416.0 304.7 Z" fill="url(#brick)"/>
        <path d="M 376.8 365.5 A 171 171 0 0 0 339.8 389.2 L 309.5 353.3 A 218 218 0 0 1 356.7 323.0 Z" fill="url(#brick)"/>
        <path d="M 336.2 392.3 A 171 171 0 0 0 307.4 425.6 L 268.3 399.6 A 218 218 0 0 1 305.0 357.2 Z" fill="url(#brick)"/>
        <path d="M 304.9 429.6 A 171 171 0 0 0 286.6 469.6 L 241.7 455.7 A 218 218 0 0 1 265.0 404.7 Z" fill="url(#brick)"/>
        <path d="M 285.3 474.1 A 171 171 0 0 0 279.0 517.6 L 232.0 517.0 A 218 218 0 0 1 240.0 461.5 Z" fill="url(#brick)"/>
        <path d="M 674.0 517.6 A 224 224 0 0 0 668.1 468.8 L 713.8 458.0 A 271 271 0 0 1 721.0 517.0 Z" fill="url(#brick)"/>
        <path d="M 666.9 464.0 A 224 224 0 0 0 649.5 418.1 L 691.3 396.7 A 271 271 0 0 1 712.4 452.3 Z" fill="url(#brick)"/>
        <path d="M 647.2 413.7 A 224 224 0 0 0 619.3 373.3 L 654.8 342.5 A 271 271 0 0 1 688.6 391.4 Z" fill="url(#brick)"/>
        <path d="M 616.0 369.6 A 224 224 0 0 0 579.2 337.1 L 606.4 298.7 A 271 271 0 0 1 650.9 338.1 Z" fill="url(#brick)"/>
        <path d="M 575.2 334.3 A 224 224 0 0 0 531.7 311.4 L 548.9 267.7 A 271 271 0 0 1 601.5 295.3 Z" fill="url(#brick)"/>
        <path d="M 527.1 309.7 A 224 224 0 0 0 479.4 297.9 L 485.6 251.3 A 271 271 0 0 1 543.3 265.6 Z" fill="url(#brick)"/>
        <path d="M 474.6 297.4 A 224 224 0 0 0 425.4 297.4 L 420.3 250.6 A 271 271 0 0 1 479.7 250.6 Z" fill="url(#brick)"/>
        <path d="M 420.6 297.9 A 224 224 0 0 0 372.9 309.7 L 356.7 265.6 A 271 271 0 0 1 414.4 251.3 Z" fill="url(#brick)"/>
        <path d="M 368.3 311.4 A 224 224 0 0 0 324.8 334.3 L 298.5 295.3 A 271 271 0 0 1 351.1 267.7 Z" fill="url(#brick)"/>
        <path d="M 320.8 337.1 A 224 224 0 0 0 284.0 369.6 L 249.1 338.1 A 271 271 0 0 1 293.6 298.7 Z" fill="url(#brick)"/>
        <path d="M 280.7 373.3 A 224 224 0 0 0 252.8 413.7 L 211.4 391.4 A 271 271 0 0 1 245.2 342.5 Z" fill="url(#brick)"/>
        <path d="M 250.5 418.1 A 224 224 0 0 0 233.1 464.0 L 187.6 452.3 A 271 271 0 0 1 208.7 396.7 Z" fill="url(#brick)"/>
        <path d="M 231.9 468.8 A 224 224 0 0 0 226.0 517.6 L 179.0 517.0 A 271 271 0 0 1 186.2 458.0 Z" fill="url(#brick)"/>
      </g>

      <g filter="url(#flameGlow)">
        <g className="flame-outer">
          <path fill="url(#flameG)" fillRule="evenodd" d="M 450 58 C 470 140 486 200 478 262 L 452 318 L 498 430 L 560 300 C 586 382 596 470 592 548 C 586 640 540 706 470 748 C 460 754 450 756 442 752 C 396 718 340 650 334 572 C 330 498 356 440 380 392 L 394 318 L 416 332 C 424 250 436 158 450 58 Z M 432 470 C 452 520 462 560 456 608 C 450 648 432 676 416 690 C 398 664 388 628 392 584 C 396 536 414 502 432 470 Z"/>
        </g>
      </g>

      <g>
        <circle className="ember"    cx="420" cy="700" r="7"/>
        <circle className="ember e2" cx="476" cy="720" r="5"/>
        <circle className="ember e3" cx="510" cy="690" r="6"/>
        <circle className="ember e4" cx="380" cy="710" r="4.5"/>
        <circle className="ember e5" cx="450" cy="730" r="5.5"/>
      </g>

      <g transform="translate(-185 15)">
        <g className="hammer">
          <g transform="rotate(38 600 690)">
            <rect x="586" y="690" width="30" height="218" rx="15" fill="url(#handleG)"/>
            <rect x="584" y="700" width="34" height="22" rx="9" fill="#f3f3f5"/>
            <circle cx="601" cy="900" r="19" fill="url(#handleG)"/>
            <rect x="591" y="722" width="7" height="170" rx="3.5" fill="#ff6a55" opacity=".55"/>
          </g>
          <g>
            <polygon points="600,600 752,558 784,580 634,622" fill="url(#steelTop)"/>
            <polygon points="600,600 634,622 624,716 590,692" fill="#b8b8bf"/>
            <polygon points="634,622 766,584 756,676 624,716" fill="url(#steel)"/>
            <polygon points="752,550 838,576 848,598 764,574" fill="#f2f2f4"/>
            <polygon points="764,574 848,598 838,702 754,682" fill="url(#face)"/>
            <polygon points="848,598 862,608 852,710 838,702" fill="#7c0c0c"/>
            <polygon points="848,598 862,608 856,612 844,604" fill="#ffd7d2" opacity=".9"/>
            <polygon points="600,600 752,558 756,562 604,604" fill="#ffffff" opacity=".85"/>
            <g clipPath="url(#headClip)">
              <rect className="glint" x="560" y="540" width="46" height="220" fill="#ffffff" opacity=".0" transform="skewX(-18)"/>
            </g>
          </g>
          <g className="sparks">
            <line x1="858" y1="612" x2="892" y2="588"/>
            <line x1="864" y1="648" x2="904" y2="648"/>
            <line x1="856" y1="684" x2="888" y2="712"/>
            <line x1="864" y1="624" x2="894" y2="566"/>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default Logo