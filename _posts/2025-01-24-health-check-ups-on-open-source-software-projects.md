---


title: "Health Check-ups on OSS Software Projects: Managing Risks while Promoting (Re)use"
seo_title: "Health Check-ups on OSS Software Projects: Managing Risks while Promoting (Re)use"
excerpt: "Getting an overview of Open Source Software (OSS) intake (including upstream dependencies) is a challenge as consumption is ever-growing. Each OSS component comes with a risk in terms of its ability to stay maintained long-term, with high quality and without interruption. Analyzing and monitoring the health of OSS intake can enable proactive management of potential risks, but it is also a mountain to climb, but it is possible."
date: 2025-01-24T01:00:00-04:00
categories:
  - blog
tags:
  - open-source-software
  - digital-commons
  - health
  - sustainability
header:
  teaser: "/assets/images/2025-01-24-health-check-ups-on-open-source-software-projects/teaser.jpg"
---


<div class="thumbnail-container">
<img src="/assets/images/2025-01-24-health-check-ups-on-open-source-software-projects/teaser.jpg" alt="https://www.flickr.com/photos/miyaoka/8130203202/"></div>

<h4>TL;DR / Summary: </h4>
<ul>
	<li>Getting an overview of Open Source Software (OSS) intake (including upstream dependencies) is a challenge as consumption is ever-growing.
	</li>
	<li>This is important for many reasons, where one is that OSS component comes with a risk in terms of its health, meaning its ability to stay maintained long-term, with high quality and without interruption.
	</li>
	<li>Analyzing and monitoring the health of OSS intake can enable proactive management of such potential risks, but it is also a mountain to climb although possible as we show.
	</li>
	<li>OSS health is neither a number nor black or white. Issues can be many, as with the underlying reasons. Questions need to be asked based on the symptoms, a diagnosis made, and potential prescriptions applied, similar as to a doctor's appointment.
	</li>
	<li>You cannot compare apples, oranges, and bananas. All projects are different by context and subjective importance and need to be viewed and compared accordingly. The stages in the life cycle, complexity, governance concentration, and strategic importance for the adopter are some characteristics that need consideration.
	</li>
	<li>Frameworks and collection of metrics exist that can help to create checklists and awareness of what health aspects to look for, how to analyze, why, and how to address.
	</li>
	<li>Aumotated tooling should be tailored and leveraged to support manual inspections at the point of intake and continuously run to monitor existing dependencies. OSS components at risk should be flagged and analyzed manually by the one with contextual knowledge.
	</li>
	<li>Any process should be decentralized, empower and overburden developers, and enable follow-up and knowledge-sharing. The latter is important for sharing and growing a common knowledge base and understanding of how development, culture, health, and other factors differ across projects.
	</li>
	<li><b>Implications</b>: 
		<ul>
			<li>There are ways to manage the intake risk of OSS and to proactively improve health where most needed. 
			</li>
			<li>Any organization (public and private) using and developing OSS in their products, services, and infrastructure needs to consider how to manage risk related to OSS health.
			</li>
			<li>Requirements on analysis procedures and foremost upstream contributions to central OSS components should (beyond a Software Bill of Material) be included in vendor, partner, and procurement contracts.
			</li>
			<li>Indicators and monitoring efforts can support policy and the ecosystem where to direct investments and contributions but also risk creating blind spots and forgetting/ignoring parts of our OSS-based infrastructure. In the end, everything connects together, one way or the other.
			</li>
		</ul>
	</li>
</ul>

<h4>Longer version</h4>

OSS Software is undoubtedly everywhere around us, with organizations increasing their intake per year. An international Telco company highlighted recently how they have increased their intake of unique OSS components per year from 30 to 50k. This is great from many perspectives, including cost-effiency and innovation. However, it also comes with risks. 

Each OSS component is maintained by its community, and all different levels and amounts of resources are put into their continued development and maintenance. The quality and security of the OSS are very much dependent on these resources, which we can also refer to as maintenance labor, coming either from the maintainers or contributors of the OSS community. How can the aforementioned Telco company be sure that all 50K components are maintained at a reasonable level? Is it feasible to acquire support contracts from service suppliers for all components? And what about their upstream dependencies?

This quicly becomes a complex saga, highlighting the need to be able to cost-effectively yet systematically monitor the ability of potential and already adopted OSS projects to stay maintained long-term to a reasonable level of quality, and withouth interruption. This is what we also refer to as the OSS project's health or sustainability.

In a recent R&D project, funded by the Swedish Innovation Agency (Vinnova), we set out to investigate how organizations can go about to set up such a process for analyzing the health of new and existsing OSS dependencies. If the level of health is insufficient, an alternative sourcing decision should be considered (e.g., adopt another OSS solution or build from scratch), or if possible and strategically motivated, contribute and engage in the concerned OSS project to improve its health.

The process can be compared to taking a project to a doctor's appointment, where questions are asked about the observed symptoms. Insights narrows down potential causes, and leads to a diagnosis, after which a decision is made regarding action and treatment.

Below, follows a brief overview of the project outputs based on my contribution to the OSS Metrics chapter of the TODO group's OSPO book. For an even more condensed overview, consider looking at the slide set from a presentation I did recently on the topic. A pre-print of the underpinning paper (currently under review) is available <a href="/assets/slides/OSS_Health_Interview_Survey.pdf">here</a>.

<h4>The many facets of OSS health</h4>
Analyzing the health of an OSS project is, however, not black and white. When we surveyed the literature, we identified 107 different health aspects ranging on a socio-technical scale, both in project-centric and ecosystem-wide contexts (Linåker et al., 2022). Through interviews with 17 industry and community experts, we further condensed these into a framework of 21 health aspects considering community productivity and stability, orchestration, and production process and outputs. For each aspect, several attributes are defined to help break down and enable the analysis of a concerned aspect regarding an OSS project.

Interviewees stress that organizations need to vary the type and traits of the OSS project being analyzed, as these factors may influence how the different health aspects of the health framework potentially should be applied and evaluated. Factors include the life cycle, complexity, and governance concentration of the OSS project and its strategic importance to the organization analyzing the project as part of its intake process. When introducing health assessments, organizations need to consider these factors and accordingly only compare OSS projects with similar traits (e.g., complexity and life-cycle stage).

Each organization must answer the question of what aspects and attributes to use and how to consider the various types and traits of OSS projects, as they each face unique risks and challenges based on their specific contexts, such as industry, market, and technology. Collecting and analyzing all data points is also a cumbersome and costly process, which is why there needs to be prioritization of what aspects and attributes to consider when designing health assessments as part of the intake process.

<h4>Implementing health assessments in practice</h4>
To evaluate the applicability of the health framework, we tailored it through a case study to the specific context of a large international automotive manufacturer. In the process, we narrowed down the health attributes to a questionnaire and designed a candidate process suited to the company's needs.

<img src="/assets/images/2025-01-24-health-check-ups-on-open-source-software-projects/process-fig.png">

The proposed process focuses on semi-automating the health assessments, where OSS components at the intake stage, are manually inspected using standardized checklist with automated tool support as needed. Inspections need to be lightweight yet rigorous enough to capture the concerned health aspects of importance. A lightweight documentation process is needed to persist and index analysis for future follow-up, peer-review, and training.

A quantitative screening and monitoring process is required for OSS components already integrated and deployed. This part needs to be automated as large amounts of dependencies commonly exist, so manual overviews and inspections are not applicable. Tooling should ideally be customized and integrated into CI/CD pipelines or run on regular occasions.

The quantitative screening runs high-level tests on dependencies tailored based on the type of ecosystem and dependencies and flags projects, directing attention where indicators together point towards potential health issues. Concerned developers or analysts then follow up with manual inspections. For the tooling, OSS projects such as GrimorieLab and Augur can provide initial candidates to adopt and tailor based on internal needs.

Continuous training and follow-ups are critical to introducing a health assessment process. Workshops for introducing checklists and analysis processes are suggested, as well as recurrent feedback sessions for presenting an analysis of OSS projects, thereby encouraging discussions, knowledge-sharing, and a critical mindset. Ideally, the health assessment is integrated as a standard practice in development and Q&A

<h4>Summing up</h4>

Ultimately, our studies provide organizations with a valuable tool for proactively identifying potential health issues within OSS projects. Findings can be used as practical guidance and complement when consulting existing sources such as the CHAOSS project and the OpenSSF scorecard project. 

Despite the approach, by diagnosing symptoms early and applying necessary treatments, organizations can mitigate risks and ensure their OSS dependencies' long-term viability and security. This proactive approach enhances the stability and reliability of software products and contributes to the overall sustainability of the OSS ecosystem.


<h4>References</h4>
<ul>
	<li>Linåker, J., Olsson, T., & Papatheocharous, E. (2024). How to Assess the Health of OSS Software Dependencies in an Organization's Intake Process: Insights from an Interview-survey and Case Study. Under review in a Software Engineering journal.</li>
	<li>Linåker, J., Papatheocharous, E., & Olsson, T. (2022). How to characterize the health of an OSS Software project? A snowball literature review of an emerging practice. In 18th International Symposium on Open Collaboration. DOI: https://doi.org/10.1145/3555051.3555067 </li>
</ul>
