interface BadgeProps {
  children: React.ReactNode;
}

const Badge = ({ children }: BadgeProps) => {
  return (
    <span className="rounded-sm border p-1 text-xs font-medium text-muted-foreground bg-muted">
      {children}
    </span>
  );
};
export default Badge;
