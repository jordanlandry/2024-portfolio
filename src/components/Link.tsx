type Props = {
  href: string;
  children: React.ReactNode;
} & React.HTMLProps<HTMLAnchorElement>;

export default function Link({ href, children, ...props }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      {...props}
    >
      {children}


    </a>
  );
}
