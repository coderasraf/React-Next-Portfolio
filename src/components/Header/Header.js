import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display:'flex', alignItems: 'center', color:'white', marginBottom:"20px" }}>
          <DiCssdeck size="3rem" /> <Span>Hass Asraf</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technology</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons target="_blank" href='https://github.com/coderasraf'>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons target="_blank" href='https://www.linkedin.com/in/hassasraf/'>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons target="_blank" href='https://twitter.com/HassAsraf'>
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
      <SocialIcons target="_blank" href='https://www.instagram.com/hassasraf/'>
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
