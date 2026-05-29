import Navbar from './Navbar';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  return (
    <header className="header">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
    </header>
  );
}
