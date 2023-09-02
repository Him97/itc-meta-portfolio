import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ColorModeSwitcher from './ColorModeSwitcher';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { Box, HStack } from '@chakra-ui/react';

const socials = [
  {
    icon: faEnvelope,
    url: 'mailto: hello@example.com',
  },
  {
    icon: faGithub,
    url: 'https://github.com/Him97',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/xin-li-5387a5169/',
  },
  {
    icon: faMedium,
    url: 'https://medium.com',
  },
  {
    icon: faStackOverflow,
    url: 'https://stackoverflow.com/users/21146058/xin',
  },
];

export default function Header() {
  const [isHidden, setIsHidden] = useState(false)
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > prevScrollY.current ? 'down' : 'up';
      if (scrollDirection === 'down') {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Box
      position='fixed'
      top={0}
      left={0}
      right={0}
      transform={isHidden ? 'translateY(-200px)' : 'translateY(0)'}
      transitionProperty='transform'
      transitionDuration='.3s'
      transitionTimingFunction='ease-in-out'
      backgroundColor='#18181b'
    >
      <Box color='white' maxWidth='1280px' margin='0 auto'>
        <HStack
          px={16}
          py={4}
          justifyContent='space-between'
          alignItems='center'
        >
          <nav>
            <HStack spacing={8}>
              {socials.map((social, index) => (
                <a href={social.url} key={index}><FontAwesomeIcon icon={social.icon} size='2x' /></a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href='/#projects' onClick={handleClick('projects')}>Projects</a>
              <a href='/#contact-me' onClick={handleClick('contactme')}>Contact Me</a>
              <ColorModeSwitcher justifySelf='flex-end' />
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};