export const Sidebar: React.FC<{ children: React.ReactNode }> = ({
  // eslint-disable-next-line react/prop-types
  children,
}) => {
  return (
    <div className="channel-bar shadow-lg rounded-lg">
      <div className="channel-container p-3">{children}</div>
    </div>
  );
};
