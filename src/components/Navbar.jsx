import { useState } from 'react';
import { Icon, loadIcons } from '@iconify/react';
import { motion } from 'motion/react';

import { basics } from '@cv';

const { name } = basics;

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#work">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  loadIcons(['mdi:close']);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-base-200/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
            href="/"
          >
            {name}
          </a>
          <button
            class="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Icon
              icon={isOpen ? 'mdi:close' : 'mdi:menu'}
              width="1.5rem"
              height="1.5rem"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: '100vh' }}
          transition={{ duration: 0.6 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
