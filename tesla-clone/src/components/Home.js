import React from 'react';
import styled from 'styled-components';
import Section from './Section.js';

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        lftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        lftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        lftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        lftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panel in America"
        description="Money-back guarentee"
        backgroundImg="solar-panel.jpg"
        lftBtnText="Custom Order"
        rightBtnText="Learn more"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof"
        backgroundImg="solar-roof.jpg"
        lftBtnText="Order Now"
        rightBtnText="Learn more"
      />
      <Section
        title="Lowest Cost Solar Panel in America"
        description="Money-back guarentee"
        backgroundImg="solar-panel.jpg"
        lftBtnText="Custom Order"
        rightBtnText="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        lftBtnText="Shop Now"
      />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
`;
