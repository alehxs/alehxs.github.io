function ExternalLink({ href, children, ...rest }) {
  const isExternal = href.startsWith('http');
  return (
    <a href={href} {...rest} {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}>
      {children}
    </a>
  );
}

export default ExternalLink;
