import ThemeToggle from "./ThemeToggle";

export default function Header({ title }) {
  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">{title}</h1>
      <ThemeToggle />
    </header>
  );
}