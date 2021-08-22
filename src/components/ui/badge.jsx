export const Badge = ({ content, children }) => {
  return (
    <div className="badge">
      {children}
      <span className="badge-content">{content}</span>
    </div>
  );
};
