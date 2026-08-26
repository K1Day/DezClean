export default function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  block = false,
  iconLeft = null,
  iconRight = null,
  className = '',
  children,
  ...props
}) {
  const Tag = as;
  const cls = ['btn', `btn--${variant}`, `btn--${size}`, block ? 'btn--block' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={cls} {...props}>
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
