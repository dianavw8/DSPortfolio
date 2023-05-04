import { Text, Grid } from "@nextui-org/react";
import React from 'react';
import { Link } from "@nextui-org/react";

function AboutMe() {
  return (
    <Grid.Container>
      <Grid justify="center">
        <Grid xs={24} md={18} lg={14}>
          <Text
            h1
            size={30}
            fonts= {"Menlo"}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
          >
            ABOUT ME
          </Text>
          <img  className="not-grey big-img" src={`${process.env.PUBLIC_URL}/four_leaf_clover.jpg`} alt="avatar" />
          <hr className="divider-line"/>
          <Text
            h1
            size={20}
            css={{
              textGradient: "45deg, $purple600 -20%, $pink600 100%",
            }}
            weight="bold"
          >
            As a recent graduate of the University of North Carolina Charlotte's Coding: Full Stack Web Development Certificate program, I am well-equipped with the technical knowledge and practical experience needed to excel as a software developer. Through my studies and participation in a coding bootcamp course, I have honed my problem-solving skills and developed a passion for tackling complex challenges through programming. With a keen eye for detail and a deep appreciation for innovation, I am eager to contribute to the ever-evolving landscape of the software development industry. As a lifelong learner, I am committed to staying up-to-date with the latest technologies and techniques, and I am excited to bring my expertise to a dynamic and forward-thinking company.
          </Text>
          <Text
            h1
            size={20}
            css={{
              textGradient: "45deg, $pink800 -20%, $red600 100%",
            }}
            weight="bold"
          >
            <Link color="secondary" href="#projects">
            Please check out the "Projects" tab above to view some of my work, or simply click on this link. </Link>
          </Text>
        </Grid>
      </Grid>
    </Grid.Container>
  );
}

export default AboutMe;
