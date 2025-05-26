import Button from "./Button";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-[80px] py-4 px-6 bg-primary-200">
      <Logo />
      <Navigation />
      <Button type="primary">Book a repair</Button>
    </header>
  );
}
