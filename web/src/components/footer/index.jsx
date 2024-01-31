import React from "react";
const Footer = () => {
  return (
    <footer className="text-white body-font bg-[#161c4A] mt-16">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <span className="ml-3 text-xl">TAKEAWAY</span>
        </a>
        <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} Takeaway —
          <a
            href="https://github.com/alihuzaifa"
            className="text-white ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            Designed & Developed by Ali Huzaifa
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-white" href="https://www.facebook.com/ali.huzaifa.988" target="_blank">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a className="ml-3 text-white" href="https://www.instagram.com/ali.huzaifa.988/" target="_blank">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </a>
          <a className="ml-3 text-white" href="https://www.linkedin.com/in/huzaifa-ansari-959b65240/" target="_blank">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              />
              <circle cx={4} cy={4} r={2} stroke="none" />
            </svg>
          </a>
          <a className="ml-3 text-white" href="https://github.com/alihuzaifa" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
              class="w-5 h-5"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.84 8.14 6.78 9.45.5.09.68-.22.68-.48v-1.77c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.62.07-.62 1.01.07 1.54 1.04 1.54 1.04.9 1.52 2.37 1.08 2.95.82.09-.66.35-1.11.64-1.37-2.24-.26-4.58-1.12-4.58-4.97 0-1.1.39-2 1.04-2.7-.1-.27-.45-1.28.1-2.67 0 0 .85-.27 2.8 1.03A9.7 9.7 0 0112 6.67c.85.01 1.7.11 2.5.33 1.94-1.3 2.8-1.03 2.8-1.03.55 1.4.2 2.4.1 2.67.65.69 1.04 1.6 1.04 2.7 0 3.86-2.35 4.7-4.59 4.96.36.31.68.92.68 1.85v2.74c0 .26.18.57.69.47C19.16 20.14 22 16.41 22 12c0-5.52-4.48-10-10-10z"
              />
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};
export default Footer;
