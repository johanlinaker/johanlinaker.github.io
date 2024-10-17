---
title: "Paper: Sustaining Maintenance Labor for Healthy Open Source Software Projects through Human Infrastructure: A Maintainer Perspective"
seo_title: "Paper: Sustaining Maintenance Labor for Healthy Open Source Software Projects through Human Infrastructure: A Maintainer Perspective"
excerpt: "We (Me, Georg Link, and Kevin Lumbard) did a study exploring how human infrastructure may help to support and secure the necessary amount of maintenance labor needed to ensure the long-term health of an OSS project. We identify a framework of infrastructure design aspects that maintainers and communities may consider when building human infrastructure. The design aspects consider specifically the human factors required, e.g., enabling a sustainable work-life balance, managing social pressure, promoting inclusiveness, and setting up guard rails for managing toxicity. "
seo_description: "We (Me, Georg Link, and Kevin Lumbard) did a study exploring how human infrastructure may help to support and secure the necessary amount of maintenance labor needed to ensure the long-term health of an OSS project. We identify a framework of infrastructure design aspects that maintainers and communities may consider when building human infrastructure. The design aspects consider specifically the human factors required, e.g., enabling a sustainable work-life balance, managing social pressure, promoting inclusiveness, and setting up guard rails for managing toxicity. "
date: 2024-10-16T15:34:30-04:00
categories:
  - blog
tags:
  - open-source-software
  - public-sector
  - policy
  - digital-commons
header:
  teaser: "/assets/images/2024-10-16-sustaining-maintenance-labor-for-open-source-software-projects-through-human-Infrastructure/teaser.jpg"
---


<div class="thumbnail-container">
<img src="/assets/images/2024-10-16-sustaining-maintenance-labor-for-open-source-software-projects-through-human-Infrastructure/teaser.jpg" alt="https://unsplash.com/photos/time-lapse-photo-of-are-filled-with-people-n0kwms_G_cw"></div>

<h4>TL;DR.... </h4>
To keep it short. We (Me, Georg Link, and Kevin Lumbard) did a study exploring how human infrastructure may help to support and secure the necessary amount of maintenance labor needed to ensure the long-term health of an OSS project. We identify a framework of infrastructure design aspects that maintainers and communities may consider when building human infrastructure. The design aspects consider specifically the human factors required, e.g., enabling a sustainable work-life balance, managing social pressure, promoting inclusiveness, and setting up guard rails for managing toxicity. 

The aspects highlight that highlight that human infrastructure in OSS is not just about platforms, processes, and governance structures, but is equally about the human factors in play among the people performing the development and maintenance of the OSS projects. The design aspects further considers the two categories of maintenance labor as Maintainer and Contributor Labor, representing labor coming from the maintainers and the contributors of an OSS project respectively. Both sources of labor are in essence comparable to common pool resources in that they are depletable and need to be replenished and sustained for an OSS project to stay healthy, i.e., viably maintained long-term without interruption or weakening.

Our observations suggest that there is a dependency between the two categories where a limited amount of Contributor Labor creates a burden and dependency on the maintainer, while too high amounts may create too large of an overhead for maintainers, resulting in increased stress and pressure. Attraction of new contributors is considered pivotal for a healthy project, but needs to be balanced with an onboarding process that can empower the newcomers to make better contributions, requiring less attention from the maintainers. Non-code contributions, such as helping out with support, community management, and marketing are specifically highlighted as important contributions. Finally, Resource Funding is seen as a means of enabling maintainers and contributors to create a healthy work-life-balance, while also improving the project health.

A longer story follows below (or check out the <a href="https://arxiv.org/pdf/2408.06723" target="_blank">paper</a> if you have too much time on your hands!):

<h4>Maintenance Labor: The Foundation of Open Source Health and Sustainability</h4>
Open Source Software (OSS) has become an integral component of today's software supply chains. This widespread adoption underscores the importance of OSS, which to large degrees are driven by community efforts. These communities consist of individuals who contribute either voluntarily or on behalf of their employers. The collective effort these individuals invest in developing and maintaining OSS projects we refer to as maintenance labor. 

This labor originate and is added from the maintainers (i.e., Maintainer Labor) of the OSS project or from the contributors (i.e., Contributor Labor) within the community. The maintainers are typically made up by a small core group responsible for overseeing and coordinating community contributions, which include tasks like software development, providing support to contributors and users, and managing project governance. Contributors support and partake in the development and maintenance through technical or non-technical contributions, during longer or shorter periods of time. 

For an OSS project to remain healthy or become sustainable, there must be a sufficient and sustainable amount of maintenance labor available for its development and upkeep. The paper underpinning this post investigates how the availability of maintenance labor can be sustained through the design and implementation of human infrastructure—aligning organizations and actors within an OSS community through governance, processes, and culture to ensure viable project maintenance.

<h4>Designing and implementing a human infrastructure in OSS projects</h4>
As the maintainers are the ones typically building and are responsible for the human infrastructure of an OSS project, we consider their perspective explicitly. In the study, we interviewed ten maintainers from nine well-adopted OSS projects, identifying several infrastructure design aspects that maintainers and communities may consider when building human infrastructure. 

The aspects are divided into three categories. Maintainer and Contributor Labor include aspects highlighting the opportunities and complexities of ensuring the presence of the necessary maintenance labor from maintainers and contributors of an OSS project, respectively. Resource Funding includes aspects of how these resources may be sustained through different funding models. 

Aspects related to Maintainer Labor include:
<ul>
	<li>Managing social expectations and peer-pressure - Expressed or perceived expectations from companies, users, or developers on maintainers' support may risk impacting negative stress.</li>
	<li>Balancing of workload with capacity - Amount of perceived work for maintainers generated from the OSS community (e.g., support requests, bug fixes, community management) need to balance against maintainers' capacity.</li>
	<li>Finding time through funding - Funding may help maintainers dedicate more professional time towards a project, while prioritization may still be an issue.</li>
	<li>Work-life balance and prioritization - Creating a work-life balance requires personal prioritization by the maintainer over their perceived or experienced need to maintain their projects.</li>
</ul>

Aspects related to Contributor Labor include:
<ul>
	<li>Embracing the episodic contributors - Episodic contributors should be encouraged and empowered to make their contributions as high quality as possible.</li>
	<li>Mitigating toxicity - Toxicity is commonly experienced and requires a proactive approach and building of a positive culture enforced, e.g., through a code of conduct.</li>
	<li>Promoting inclusiveness - A Sense of inclusiveness is considered pivotal for new contributors to stay around. Highlighted means include encouragement and appreciation for contributions, openness in decision-making, and responsiveness in answers.</li>
	<li>Managing impact of project characteristics - Awareness and actions are needed to address the potential negative impact of a project's characteristics (e.g., programming language, position in the stack, and general stability) on the attractiveness of new contributors.</li>
	<li>Low-cost contributor suppor - Contribution barriers need to be removed while support measures help increase the quality of contributions without consuming too much of the maintainers' available time.</li>
	<li>Marketing and outreach - Maintainers need help with marketing and outreach, as they may feel uncomfortable and prefer to focus on technical aspects of their projects.</li>
	<li>Distributing knowledge - Sharing knowledge in communication and documentation decreases dependency on the single maintainer while improving onboarding and inclusiveness.</li>
</ul>

Aspects related to Resource Funding include:
<ul>
	<li>Full-time employment dedicated to projects - Full-time employment dedicated to working on projects is seen as a dream by many, especially if social benefits (e.g., medical insurance) are included.</li>
	<li>Partially-dedicated employment - Being able to spend part-time employment to maintain a project is viewed favorably as a means of personal training and benefit while bringing value to the employer through, e.g., knowledge transfer.</li>
	<li>Entrepreneurship, a common but risky endeavor - Building a business comes with many variants and is considered risky to different extents. Prioritizing the needs of paying customers and the community requires a delicate balance.</li>
	<li>Sponsorship, a diverse and limited source of income - Personal sponsorship is considered a symbol of gratitude, while corporate sponsorship is more significant. None is, however, considered a sustainable source of income.</li>
</ul>

<h4>People as a depletable resource</h4>
Our investigation highlights that highlight that human infrastructure in OSS is not just about platforms, processes, and governance structures, but is equally about the human factors in play among the people performing the development and maintenance of the OSS projects. 
<p />
People are at the front and center of OSS projects' underpinning open and ideally collaborative development. Their time and labor are scarce resources that can be depleted if not cared for or replenished, as with common pool resources. Atkisson and Bushouse (2023), in similar veins, describe the time and labor from the wider community as volunteer energy and how this also needs to be sustained to prevent depletion. Here, we differentiate between ''energy'' or labor coming from the maintainer(s) (Maintainer Labor) or the contributors (Contributor Labor). We find that these two sources sometimes require different and sometimes overlapping support from the human infrastructure to be sustained. Further, we address the changing nature of OSS as it skews away from a primarily volunteer activity to an increasingly paid activity.

<h4>Balancing influx of Maintainer and Contributor Labor</h4>
These two resource types represent complementary sources of input to the human infrastructure required to sustain the development of an OSS project. What we also note is a dependency between the two, where too much or less of one or the other can have a negative impact on the OSS project's health. A non-existent or limited pool of contributors may lead to a cumbersome burden and dependency on the maintainers. On the other hand, observations from our interviews tell us that as the OSS project and its community grows, so does the maintenance burden on the code base, and the overhead required to manage the increasing amount of community interaction that is demanded. This demand is experienced both implicitly among the maintainers as a feeling of responsibility and explicitly from the user base who expect timely responses, a frequently identified barrier-to-entry for newcomers. The community interaction typically relates to feature requests/bug reports, suggestions for corrections, or voicing an opinion. Limited and low-quality contributions, along with limited technical knowledge among the (potential) users and contributors, were also highlighted as challenges.
<p />
Attracting and retaining Contributor Labor should, hence, (ideally) be enabled in such a way that they are welcomed and inclined to stay while also enabled and onboarded in such a way that their contributions come with a higher level of quality and lower level of attention required from the maintainers. In other words, Contributor Labor must not come at the expense of too much Maintainer Labor, an equation that is difficult to solve as there will always be a need for maintainers to care for the community and facilitate an open collaboration. Per the interviewees, this was, however, not seen as a need but rather as a will and desire, as everyone is keen on spreading the adoption of their OSS projects.

<h4>Attraction and onboarding of Contributor Labor</h4>
Several ways of attaining this balance between attraction, retention, and contribution quality were suggested. One such way concerned the aspect of marketing and outreach, something that the maintainers interviewed did not feel comfortable with or were willing to prioritize in contrast to technical work, which their interest generally leaned towards. Non-coding contributions in the form of marketing, support, and community management may, hence, provide a means of relieving the stress of maintainers while enabling them to dedicate more time to development-related tasks.
<p />
The removal of barriers for newcomers was also highlighted both by interviewees and literature. This includes providing clear directions about the current focus and direction of the project, which may help to reduce questions and unnecessary contributions. Pointing out issues that a project needs help with and arranging dedicated community events can be other means of directing potential contributors to prioritized areas of a project. Addressing common technical barriers, e.g., through documentation and standardized infrastructure, may reduce the need for technical support. Growing a positive and welcoming culture and atmosphere within the projects may help increase willingness to continue engaging in the project.

<h4>Resource Funding enables healthy developers and projects</h4>
While the attraction, retention, and onboarding of contributors provide one lever, Resource Funding was unanimously flagged as an enabler for both the inflow of Maintainer and Contributor Labor. Dedicated funding may allow maintainers and contributors to dedicate time to their projects while still allowing for a work-life balance, reported as a key challenge, aligning with others' observations. Achieving this ideal was considered difficult when maintainers had reached different levels of success. For some, the feeling of joy and passion for their projects was more important. Although there was general agreement that the former could enable the latter, many expressed issues regarding work-life balance or even keeping an interest in their projects at all. 
<p />
Being employed to work on the OSS project was considered a top scenario, e.g., to offer commercial support related to the project, to address the employer's internal needs, or as a means of driving personal development and education regularly. Creating and growing a business was the second option beyond employment, where some of the maintainers also had personal experience. Compared to employment, this option was associated with a higher personal risk for the maintainer but was also trickier in how to prioritize the needs of the community and the customers. A third option highlighted was sponsorship from individuals and companies. Sponsorship is percieved as less about sustainable availability of resources (referred to as ''pocket money'' or "coffee money' by our interviewees) and more as means of appreciation (aligning with, employment and turning an open source project into a business were perceived as the more sustainable options, however, also more difficult to attain.

<h4>Concluding remarks</h4>
The study presents a qualitative and exploratory investigation into the construct of maintenance labor, its impact on OSS health, and how the availability of maintenance labor can potentially be sustained through the design and implementation of human infrasture in the OSS projects. Further, we characterize, the fragile relationship between Maintainer Labor and Contributor Labor, and provide design knowledge, from the maintainer's perspective, that can support the creation and design of human infrastructure to enable sustained availability of maintenance labor. Findings may further help maintainers to communicate their needs, and for potential contributors, including organizations, to identify and ask what the needs are so that they can support the maintainer and the OSS projects is the most appropriate way.
<p />
Readers should be vary that our findings are indicative by nature and need further exploration and validation in future work. Our findings provide guidance for maintainers, contributors, and consumers of OSS on how to reflect on and communicate how they can individually and collaboratively help to increase the health and sustainability of their respective OSS projects.