import DefaultLayout from "@/layouts/default";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1>About</h1>
          <br></br>
          <p className="text-left">
            What is JCP?
            <br></br>
            The JCP module intends for the student to develop, through reflection, understanding of their own experience in a team-based
            workspace as well as a broader understanding of the application of their discipline knowledge and its potential impact in their
            communities in this way also enhancing their sense of civic responsibility. All JCP projects have to be locally
            contextualised in the UN’s 17 Sustainable Development Goals. 
            <br></br> <br></br>
            VISION FOR A JCP project
            <br></br>
            Students are given the opportunity to practice and develop their interpersonal skills formally taught in the module by
            engaging in teamwork with fellow students from different disciplines and also with non-technical members of the community.
            Their projects should aim to foster long term sustainable engagement with communities and work with these communities towards upliftment.


            <br></br> <br></br>
            STRUCTURE OF JCP
            <br></br>

            The Department of Community Engagement at the University of Pretoria runs multiple projects.
            JCP is the compulsory service learning module for the Engineering, Built Environment and IT (EBIT) Faculty.
            It forms part of the complementary studies in the Faculty to develop an awareness of personal, social and cultural values as well as
            multidisciplinary and life skills, such as communication, interpersonal and leadership skills.
            Typically we have approximately 1650 second year students and we work on 350 community projects across Gauteng, South Africa.
            <br></br> <br></br>
            There are two 40 hour parts to this year module. First the students are made aware of their potential global impact through their degree in the form of the Sustainable Development Goals (SDGs). The idea here is to cultivate and stimulate global awareness and understanding their local impact from that perspective. In preparation for their 40 hours hands-on community work they are guided through personal and professional development lectures and assignments to equip them with communication and self-reflection skills that can enhance their ability to engage with their team members and with the community. This includes dynamic personality typology tests that allows for self-awareness of the individuals motivation for their behaviour in different situations (handling conflict, receiving or giving critical feedback etc) as well as strategies to support an effective approach to this.

            The 40 hours work in community is part of the experiential learning where students engage in practical work with their team members and have to work together to produce the outcomes agreed upon in the project proposal. Students are assessed in a variety of self-reflection exercises and through peer feedback and finally through a report and presentation of their work in the community.</p>
        </div>
        
      </section>
    </DefaultLayout>
  );
}
