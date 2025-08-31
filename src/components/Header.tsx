import { useState, useEffect } from 'react';

interface HeaderProps {
  personalInfo: {
    name: string;
  };
}

const Header: React.FC<HeaderProps> = ({ personalInfo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full bg-light z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="container mx-auto flex justify-between items-center h-header-height px-4">
        <div className="logo">
          <h1 className="text-xl font-bold">
            {personalInfo.name.split(' ')[0]}
            <span className="text-primary">.</span>
          </h1>
        </div>
        
        <nav className={`fixed md:relative top-header-height md:top-0 right-0 md:right-auto w-4/5 md:w-auto h-screen md:h-auto bg-light md:bg-transparent shadow-md md:shadow-none p-8 md:p-0 transition-all duration-300 z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}>
          <ul className="flex flex-col md:flex-row gap-6 md:gap-8">
            <li>
              <a 
                href="#home" 
                className="font-medium relative hover:text-primary after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="font-medium relative hover:text-primary after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                onClick={closeMenu}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className="font-medium relative hover:text-primary after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                onClick={closeMenu}
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className="font-medium relative hover:text-primary after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                onClick={closeMenu}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#education" 
                className="font-medium relative hover:text-primary after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                onClick={closeMenu}
              >
                Education
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="font-medium relative hover:text-primary after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="menu-btn block md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;