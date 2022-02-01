import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle  } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
     <LinkList>
      <LinkColumn>
      <LinkTitle>Tel: </LinkTitle>
        <LinkItem href='tel:01718438623'>+880 1718438623</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email: </LinkTitle>
        <LinkItem href='mailto:hassasraf@gmail.com'>hassasraf@gmail.com</LinkItem>
      </LinkColumn>
     </LinkList>
     <SocialIconsContainer>
       <CompanyContainer>
         Innovating one project at a time
       </CompanyContainer>
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
     </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
