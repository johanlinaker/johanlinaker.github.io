---


title: "Chapter: Health Check-ups on Open Source Software Projects: Managing Risks while Promoting (Re)use"
seo_title: "Chapter: Health Check-ups on Open Source Software Projects: Managing Risks while Promoting (Re)use"
excerpt: ""
date: 2024-12-16T15:34:30-04:00
categories:
  - blog
tags:
  - open-source-software
  - digital-commons
  - health
  - sustainability
header:
  teaser: "/assets/images/2024-10-16-sustaining-maintenance-labor-for-open-source-software-projects-through-human-Infrastructure/teaser.jpg"
---


<div class="thumbnail-container">
<img src="/assets/images/2024-10-16-sustaining-maintenance-labor-for-open-source-software-projects-through-human-Infrastructure/teaser.jpg" alt="https://unsplash.com/photos/time-lapse-photo-of-are-filled-with-people-n0kwms_G_cw"></div>

<h4>TL;DR / Summary: </h4>
<ul>
	<li> 
	</li>
	<li><b>Implications</b>: 
		<ul>
			<li>
			</li>
		</ul>
	</li>
</ul>

For further overview, consider reviewing the <a href="/assets/slides/OSS-Health-and-Human-Infrastructure-ESEM.pdf" target="_blank">presentation slides</a>. A longer story follows below (or check out the <a href="https://arxiv.org/pdf/2408.06723" target="_blank">paper</a> if you have too much time on your hands!)

As an example, and with respect to Organizational Impact, Linåker et al. (2024) conducted a study that explored how open source intake processes could be constructed to accommodate considerations of health-related measures. Analyzing the health is a critical practice for these organizations to ensure the robustness and reliability of their software systems, both when considering the intake of new open source components, and in monitoring existing dependencies already integrated and deployed in production. If the level of health is insufficient, an alternative sourcing decision should be considered (e.g., adopt another open source solution or build from scratch), or if possible and strategically motivated, contribute and engage in the concerned open source project to improve its health.

<h4>The many facets of open source health</h4>

Analyzing the health of an open source project is, however, not black and white. A survey of literature highlights 107 different health aspects ranging on a socio-technical scale, both in project-centric and ecosystem-wide contexts (Linåker et al., 2022). Through interviews with 17 industry and community experts, these were further condensed into a framework of 21 health aspects considering community productivity and stability, orchestration, and production process and outputs. For each aspect, several attributes are defined to help break down and enable the analysis of a concerned aspect regarding an open source project.

Interviewees stress that organizations need to vary the type and traits of the open source project being analyzed, as these factors may influence how the different health aspects of the health framework potentially should be applied and evaluated. Factors include the life cycle, complexity, and governance concentration of the OSS project and its strategic importance to the organization analyzing the project as part of its intake process. When introducing health assessments, organizations need to consider these factors and accordingly only compare between open source projects with similar traits (e.g., complexity and life-cycle stage).

Each organization must answer the question of what aspects and attributes to use and how to consider the various types and traits of open source projects, as they each face unique risks and challenges based on their specific context, such as industry, market, and technology. Collecting and analyzing all data points is also a cumbersome and costly process, which is why there needs to be prioritization of what aspects and attributes to consider when designing health assessments as part of the intake process.

<h4>Implementing health assessments in practice</h4>

In their study, Linåker and colleagues demonstrate how their health framework can be tailored through the application at a large international automotive manufacturer. They narrowed down health attributes to a questionnaire and designed a candidate process suited to the company's needs.

The proposed process focuses on semi-automating the health assessments, where open source components at the intake stage, are manually inspected using standardized checklist with automated tool support as needed. Inspections need to be lightweight yet rigorous enough to capture the concerned health aspects of importance. A lightweight documentation process is needed to persist and index analysis for future follow-up, peer-review, and training.

A quantitative screening and monitoring process is required for open source components already integrated and deployed. This part needs to be automated as large amounts of dependencies commonly exist, so manual overviews and inspections are not applicable. Tooling should ideally be customized and integrated into CI/CD pipelines or run on regular occasions.

The quantitative screening runs high-level tests on dependencies tailored based on the type of ecosystem and dependencies and flags projects, directing attention where indicators together point towards potential health issues. Concerned developers or analysts then follow up with manual inspections. For the tooling, open source projects such as GrimorieLab and Augur can provide initial candidates to adopt and tailor based on internal needs.
Continuous training and follow-ups are critical to introducing a health assessment process. Workshops for introducing checklists and analysis process is suggested, as well as recurrent feedback sessions for presenting analysis of OSS projects, thereby encouraging discussions, knowledge-sharing, and a critical mindset. Ideally, the health assessment is integrated as a standard practice in development and Q&A

<h4>Summary</h4>

Ultimately, the study presents organizations with a valuable tool for proactively identifying potential health issues within open source projects. Findings can be used as practical guidance and complement when consulting existing sources such as the CHAOSS project and the OpenSSF scorecard project. Despite the approach, by diagnosing symptoms early and applying necessary treatments, organizations can mitigate risks and ensure their OSS dependencies' long-term viability and security. This proactive approach enhances the stability and reliability of software products and contributes to the overall sustainability of the open source ecosystem.

<h4>References</h4>
<ul>
	<li>Linåker, J., Olsson, T., & Papatheocharous, E. (2024). How to Assess the Health of Open Source Software dependencies in an Organization's Intake Process: Insights from an Interview-survey and Case Study. Under review in a Software Engineering journal.</li>
	<li>Linåker, J., Papatheocharous, E., & Olsson, T. (2022). How to characterize the health of an Open Source Software project? A snowball literature review of an emerging practice. In 18th International Symposium on Open Collaboration. DOI: https://doi.org/10.1145/3555051.3555067 </li>
</ul>
