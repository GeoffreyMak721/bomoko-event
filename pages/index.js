import React from "react";

import SkillPart from "../components/SkillPart";
import CoursesPart from "../components/CoursesPart";
import WelcomePart from "../components/WelcomePart";
import CategoriesPart from "../components/CategoriesPart";
import TeamPart from "../components/TeamPart";
import BlogPart from "../components/BlogPart";
import ContactPart from "../components/ContactPart";

export default function Home() {
  return (
    <>
      <SkillPart />
      <CoursesPart />
      {/*  <WelcomePart /> */}
      {/* <CategoriesPart /> */}
      {/* <TeamPart /> */}
      <BlogPart />
      <ContactPart />
    </>
  );
}
