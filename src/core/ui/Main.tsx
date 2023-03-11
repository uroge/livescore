export const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="grid p-6" style={{ height: `calc(100vh - 4rem)` }}>
      {children}
    </div>
  );
};
