export default function Footer() {
  return (
    <footer className="text-center text-primary-100 p-5">
      <p className="text-center text-primary-100 text-xs font-bold">
        Made with ☕ and <span> &#x2764;&#xFE0F; </span> by Ali Reza &copy;{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
