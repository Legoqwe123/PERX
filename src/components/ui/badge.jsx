export const Badge = ({ content, children }) => {
  return (
    <div className="badge">
      {children}
      <div className="badge-content">{content}</div>
    </div>
  );
};
