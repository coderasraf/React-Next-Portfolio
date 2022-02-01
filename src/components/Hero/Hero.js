import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      Hass Asraf
      </SectionTitle>
      <SectionText>
      I'm an ambitious, commercially focused website developer. I am always here to helping you to making beautiful website. Also, I'm seeking an entry-level role as a Frontend Developer.
      </SectionText>
      <Button onClick={()=> window.location = 'https://www.upwork.com/freelancers/~0183873a8a7ed87072'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;