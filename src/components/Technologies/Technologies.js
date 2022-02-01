import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I have worked with lot's of Technologies in the web development world from back-end to front-end.</SectionText>
    <List>
      <ListItem>
        <DiFirebase size="4rem" />
        <ListTitle>Front-end</ListTitle>
        <ListParagraph>Experience With React.js</ListParagraph>
      </ListItem>

      <ListItem>
        <DiFirebase size="4rem" />
        <ListTitle>Front-end</ListTitle>
        <ListParagraph>Experience With React.js</ListParagraph>
      </ListItem>

      <ListItem>
        <DiFirebase size="4rem" />
        <ListTitle>Front-end</ListTitle>
        <ListParagraph>Experience With React.js</ListParagraph>
      </ListItem>

      <ListItem>
        <DiFirebase size="4rem" />
        <ListTitle>Front-end</ListTitle>
        <ListParagraph>Experience With React.js</ListParagraph>
      </ListItem>

      <ListItem>
        <DiFirebase size="4rem" />
        <ListTitle>Front-end</ListTitle>
        <ListParagraph>Experience With React.js</ListParagraph>
      </ListItem>

      <ListItem>
        <DiFirebase size="4rem" />
        <ListTitle>Front-end</ListTitle>
        <ListParagraph>Experience With React.js</ListParagraph>
      </ListItem>

      
    </List>
  </Section>
);

export default Technologies;
