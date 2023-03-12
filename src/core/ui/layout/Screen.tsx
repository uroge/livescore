interface ScreenProps {
  children: React.ReactNode;
}

export const Screen: React.FC<ScreenProps> = ({ children }) => {
  return (
    <div className="flex-grow ml-6 overflow-y-scroll min-h-full">
      {children}
    </div>
  );
};
