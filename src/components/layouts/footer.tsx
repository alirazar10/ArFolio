export default function Footer(): React.ReactElement {
  return (
    <footer className="text-center text-primary-100 p-5 space-y-2">
      <p className="text-center text-primary-100 font-bold text-base leading-6">
        Find Source code:{" "}
        <a
          href="https://github.com/alirazar10/ArFolio"
          target="_blank"
          rel="noreferrer"
          className="text-accent-500 font-bold"
        >
          ArFolio
        </a>{" "}
      </p>
      <p className="text-center text-primary-300 font-mono text-xs tracking-wide">
        Made with ☕ and <span> &#x2764;&#xFE0F; </span> by Ali Reza &copy;{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
