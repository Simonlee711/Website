import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Simon <br />
        Lee
      </SectionTitle>
      <SectionText>
        I am a current senior at UC Santa Cruz studying Applied Mathematics. My current interests are in Computational, Systems Biology and Bioinformatics and I wish to use this knowledge to work in human health 
      </SectionText>
      <Button onClick={props.handleClick}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;