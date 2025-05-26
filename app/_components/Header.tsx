import Button from "./Button";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-[80px] py-4 px-6">
      <Logo />
      <Navigation />
      <Button />
    </header>
  );
}
