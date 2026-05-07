function Logo({ className }) {
  return (
    <svg
      width="666"
      height="666"
      viewBox="0 0 666 666"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <mask id="logo-mask" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="666" height="666">
        <path d="M586 0H80C35.8172 0 0 35.8172 0 80V586C0 630.183 35.8172 666 80 666H586C630.183 666 666 630.183 666 586V80C666 35.8172 630.183 0 586 0Z" fill="white"/>
      </mask>
      <g mask="url(#logo-mask)">
        <path d="M586 0H80C35.8172 0 0 35.8172 0 80V586C0 630.183 35.8172 666 80 666H586C630.183 666 666 630.183 666 586V80C666 35.8172 630.183 0 586 0Z" fill="white"/>
        <path d="M312.188 312.188L666 666V0H416.25L312.188 312.188Z" fill="var(--accent-primary)"/>
        <path d="M0 416.25L312.188 312.188L416.25 0H0V416.25Z" fill="var(--accent-primary)" fillOpacity="0.333333"/>
        <path d="M666 666L312.188 312.188L0 416.25V666H666Z" fill="var(--accent-primary)" fillOpacity="0.666667"/>
      </g>
    </svg>
  );
}

export default Logo;
