interface ExternalLinkProps {
  link: string;
  children: React.ReactNode;
}

export const ExternalLink = ({ link, children }: ExternalLinkProps) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);
