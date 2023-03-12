export interface SidebarProps {
  children: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <div className="channel-bar shadow-lg rounded-lg">
      <div className="channel-container p-3">{children}</div>
    </div>
  );
};
