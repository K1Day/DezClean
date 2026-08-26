export default function Badge({ tone = 'solid', icon = null, children }) {
  return (
    <span className={`badge badge--${tone}`}>
      {icon}
      {children}
    </span>
  );
}
