"use client";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "primary" | "secondary";
};
export default function Button({
  children,
  onClick,
  type = "primary",
}: ButtonProps) {
  const baseStyle =
    "padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; border: none;";
  const styles =
    type === "primary"
      ? `${baseStyle} background-color: #0070f3; color: white;`
      : `${baseStyle} background-color: #eaeaea; color: #333;`;

  return (
    <button onClick={onClick} style={{ cssText: styles }}>
      {children}
    </button>
  );
}
