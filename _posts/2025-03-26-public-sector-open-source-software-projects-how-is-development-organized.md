---
title: "Public Sector Open Source Projects – How is development organized?"
seo_title: "Public Sector Open Source Projects – How is development organized?"
excerpt: "While the practice and process for Open Source Software (OSS) development is quite explored in industry and general community contexts, less is known about how development is done on OSS in the public sector context, specifically those developed and governed by Public Sector Organizations (PSOs). To shed light on this, we looked at six mature examples of public sector OSS projects, identified by crawling different public sector OSS project catalogues, including those of Italy, France, US, Denmark, Finland, and Sweden."
date: 2025-03-26T01:00:00-04:00
categories:
  - blog
tags:
  - open-source-software
  - digital-commons
  - publi-sector
header:
  teaser: "/assets/images/2025-03-26-public-sector-open-source-software-projects-how-is-development-organized/teaser.jpg"
---


<div class="thumbnail-container">
<img src="/assets/images/2025-03-26-public-sector-open-source-software-projects-how-is-development-organized/teaser.jpg" alt=""></div>

<h4>TL;DR / Summary: </h4>
<ul>
	<li>While the practice and process for Open Source Software (OSS) development is quite explored in industry and general community contexts, less is known about how development is done on OSS in the public sector context, specifically those developed and governed by Public Sector Organizations (PSOs).
	</li>
	<li>To shed light on this, in a <a href="https://link.springer.com/content/pdf/10.1007/s10664-025-10626-0.pdf">recent paper</a>, we looked at six mature examples of public sector OSS projects, identified by crawling different public sector OSS project catalogues, including those of Italy, France, US, Denmark, Finland, and Sweden.
	</li>
	<li>80% of development is typically concentrated to 5-15 developers.
	</li>
	<li>There is a preference for local and national service supplierd, and growing trusted relationships.
	</li>
	<li>Formally defined development and quality assurance processes and means of coordination commonly used.
	</li>
	<li>High quality and stability of the OSS developed in the respective projects.
	</li>
	<li>Two clusters of public sector OSS projects in terms of how the development is sponsored by the involved PSOs.
	</li>
	<li>Centralized sponsorship:
		<ul>
			<li>Main development is carried out or sponsored by, and in extension dependent on, one or a few resourceful PSOs. 
			</li>
			<li>The OSS typically also originates from these main PSOs, showing similarities to vendor-led OSS projects.
			</li>
			<li>The OSS serves a business-critical use case warranting the dedicated development and sponsorship.
			</li>
			<li>Community size typically limited and dependent on use case and complexity of the OSS.
			</li>
			<li>Rationale for open sourcing connected to intentions for encouraging reuse and growing a community size.
			</li>
			<li>A high level of dependence on a central PSO poses a sustainability risk for the OSS projects.
			</li>
		</ul>
	</li>
	<li>Decentralized sponsorship:
		<ul>
			<li>Development carried out through collaborative procurement of suppliers.
			</li>
			<li>Dependency among the PSOs in the respective communities in collecting the necessary funds to sponsor the development.
			</li>
			<li>Dependency on single service suppliers can threaten sustainability, e.g., due to emerging lock-in or change of business.
			</li>
		</ul>
	</li>
	<li><b>Implications</b>: 
		<ul>
			<li>Dependencies to a few PSOs or service providers should be proactively avoided by openly sharing of all necessary knowledge and tools for developing and deploying OSS.
			</li>
			<li>Facilitating development through Open Source Stewards can improve robustness, enable co-funding models, and access to standardized development processes and governance structures.
			</li>
			<li>Open Source Program Offices (OSPOs) can help to grow and provide internal capabilities and expertise for OSS adoption within PSOs. For less resourceful PSOs, associations (or stewards) such as OS2 can be a source of corresponding support.
			</li>
			<li>Growing a competitive ecosystem of service suppliers is important for robustness, while decreasing the risk of ending up in a vendor lock-in. Limited availability of support is, however, a commonly reported challenges.
			</li>
			<li>Growing community and collaborative culture among PSOs for co-funding development critical for long-term sustainability of public sector OSS projects.
			</li>	
		</ul>
	</li>
</ul>

<h4>Longer version</h4>

While the practice and process for Open Source Software (OSS) development is quite explored in industry and general community contexts, less is known about how development is done on OSS in the public sector context, specifically those developed and governed by Public Sector Organizations (PSOs). To shed light on this, in a <a href="https://link.springer.com/content/pdf/10.1007/s10664-025-10626-0.pdf">recent paper</a>, we looked at six mature examples of public sector OSS projects, identified by crawling different public sector OSS project catalogues, including those of Italy, France, US, Denmark, Finland, and Sweden. 

By combining interviews and quantitative analysis of the projects’ code repositories we gained several insights and examples on how PSOs can go about with doing OSS development in the public sector context and how that may differ towards the more general and maybe informal practice that one can find among projects in the wild. The We consists of myself and the greats of Björn Lundell, Francisco Servant, Jonas Gamalielsson, Satchiko Muto and Gregorio Robles. 

<h5>Cases investigated</h5>
The six cases we looked at included:
<ul>
	<li><a href=”https://github.com/NREL/EnergyPlus”>EnergyPlus project</a> - a simulation program for energy consumption in houses from the U.S, mainly developed and governed by the National Renewable Energy Laboratory, under the US. Department of Energy. It was initiated in 1996 and published as OSS in 2012 to improve adoption. Today, the software is widely used primarily by software vendors as a component in end-user applications, but also for enabling academic research.</li>
	<li><a href=”https://github.com/OS2Forms/os2forms8 “>OS2forms</a> – an e-service platform based on Drupal, mainly developed and governed through OS2, a Danish municipal association. The project was initiated in 2019 and is used by 11 municipalities in Denmark.</li>
	<li> <a href=”https://github.com/oskariorg/ “>Oskari</a> - a platform for constructing web-based mapping applications, mainly developed and governed by National Land Survey of Finland. The project was initiated in 2013, today powering several well-established solutions, including the Finnish National Geoportal.</li>
	<li><a href=” https://github.com/GeotrekCE “>GeoTrek</a> - a platform for managing and publishing tracks, signages, and interventions within national parks, developed and governed through a collaboration of French National Parks, along with a national vendor. Created in 2013, the project today is estimated to have about 150 mainly PSOs as its users. </li>
	<li><a href=” https://github.com/demarches-simplifiees/demarches-simplifiees.fr”> Démarches simplifies</a> - a platform for generating forms to be integrated into public online services and managing and automating data processing. The project is hosted, developed, and managed by the Interdepartmental Administration for Digital (DINUM) and provided as a service to all PSOs in France. Today, the project has about 1000 PSOs using the platform.< /li>
	<li><a href=”https://github.com/pagopa/io-app”>The IO app</a> - a single point of entry for Italian citizens when communicating and interacting with public online services. Developed and maintained by PagoPA, a government owned company focused on developing, maintaining, and providing software services for the Italian government.</li>
</ul>

<h5>Concentrated development with external resources</h5>
The major part (80 percent) of development is typically concentrated on a group of 5-15 developers, something which is in line with research on the broader OSS ecosystem. These developers are, for the most part, originating from national and local service providers, which may indicate a preference for suppliers with whom PSOs can have a more personal and trusted relationship, something that was especially highlighted in the cases of OS2forms and Geotrek. This national and local preference aligns with investigations highlighting how increased public investment into OSS contributes to increased growth and competition of business and entrepreneurship in OSS.

<h5>Formal development methods and high-quality software</h5>
Another general note was the use of formally defined development and quality assurance processes and means of coordination commonly found in professional settings, including OSS projects with high levels of commercial involvement. Explanations can be found in the reports on how the development in all cases was performed within or between PSOs and service suppliers by professional developers sponsored by the involved PSOs. By extension, this may also provide explanations for the high quality and stability of the OSS developed in the respective projects despite the limited size and contributions from their respective communities.

<h5>Deviation in sponsorship of OSS development</h5>
We did, however, note some important deviations among the cases. Specifically, we observe two clusters of public sector OSS projects in terms of how the development is sponsored by the involved PSOs: Centralized or Decentralized sponsorship. While these two clusters represent generalizations based on our sampled projects, these can be considered part of a continuum in terms of how development is funded or performed among the involved PSOs.
 
<h5>Centralized sponsorship</h5>
Oskari, Démarches simplifiées, the IO app, and EnergyPlus, represent different nuances of public sector OSS projects with a centralized sponsorship, implying that the main development is carried out or sponsored by, and in extension dependent on, one or a few resourceful PSOs. The OSS typically also originates from these main PSOs, showing similarities to vendor-led OSS projects. In the latter, the development is steered and sponsored mainly by software-intensive organizations aiming to employ OSS as a building block or platform for commercial products and services. In the context of our surveyed cases, however, the OSS would rather serve as an input for public products and services developed and provided by the respective PSOs. 

<h6>Business-critical for the main sponsor</h6>
In all cases, the OSS serves a business-critical use case warranting the dedicated development and sponsorship of the projects to ensure their sustainability. In the Démarches simplifiées and the IO app OSS projects, DINUM and PagoPA, respectively, use the OSS as a foundation for public services, in each case directed to public servants and citizens in the concerned countries. The Oskari OSS serves as the foundation for the national geoportal provided by the NLSF in Finland, and EnergyPlus as a tool for enabling simulation and research on a building's consumption regarding heating, cooling, ventilation, lighting, and water. Hence, the two PSOs have dedicated funding and resources to ensure the sustainability and quality of the respective OSS projects. 

<h6>Community size dependent on use case and complexity</h6>
The size and role of the community, however, differ somewhat between the projects. When the codebase complexity and use case of the OSS are limited, as in the case of the IO app, community size is limited. The IO app is reported as being complex and specific for the infrastructure of PagoPA, where the main use case is tied to the public service provided by the PSO. In contrast, the Oskari and EnergyPlus projects both have a more general use case where the sponsoring PSOs see a value in the potential for open innovation an active community can bring. 

<h6>Rationale for open sourcing connected to reuse and community size</h6>
The rationale for releasing the software as OSS differs across the cases, and relates to the potential for reuse and community growth of the OSS project. The release and public development of the IO app is mainly due to legal requirements and to provide transparency into how the application, e.g., uses and collects data. Similar rationales can be found across policies in several countries, implying that there is less focus on enabling general reuse. For Oskari and EnergyPlus, there are more explicit intentions of growing a community to enable collaborative development and reuse.

<h6>Sustainability dependent on a central PSO</h6>
From a sustainability and community point of view, the high level of dependence on a central PSO poses a risk for the communities of Oskari and EnergyPlus. A refactoring or change in business scope may imply that the OSS projects risk becoming unmaintained~\cite{linaaker2022characterize}. 

<h5>Decentralized sponsorship</h5>
OS2forms and Geotrek represent cases where multiple PSOs collaborate through the pooling of resources that sponsor the development, commonly procured from service providers. Similarities can be found in the user-driven where development is mainly directed and sponsored by software-intensive organizations addressing internal use-cases, or the building of non-commercial (e.g., public) services.

<h6>Development through collaborative procurement of suppliers</h6>
In OS2forms, 11 municipalities collaborate and co-fund the development from a smaller set of service suppliers. The OSS project is hosted under the Danish national OS2 association, which serves as a steward for 25+ public sector OSS projects, with various participation among 80+ municipal members. In Geotrek, a smaller set of national parks and PSOs (of about 150 users) collaborate through joint or direct procurement of development from a main service supplier.

<h6>Sustainability dependent on collective funding</h6>
In terms of sustainability, there is a dependency among the PSOs in the respective communities in collecting the necessary funds to sponsor the development. While both projects are reported as stable, there is still an expressed need to scale the community in terms of paying members to ensure the sustainability of the projects. Observations align with general literature where funding is a generally highlighted challenge for the health and sustainability of OSS projects. A difference is, however, that there already exists an incentive among the users of the OSS to pay for its development, whereas many smaller projects maintained by individuals struggle to achieve any form of sponsorship for their work.

<h6>Sustainability dependent on the presence of service suppliers</h6>
A second factor is the dependence on service suppliers, which can threaten sustainability should they stop providing services for whatever reason. The threat can be compared to sensitivity if OSS projects are maintained by a single organization or individual who abandons a project, e.g., due to internal re-factorization or change of interest. Here, the general lack of internal capabilities and dependence on outsourcing becomes a liability

<h5>Coming to terms with sustainability</h5>
Addressing the sustainability challenges highlighted across the surveyed cases is critical for the PSOs. Below, we discuss potential actions based on findings and literature that may help.

<h6>Sharing and disseminating critical knowledge for development</h6>
When development is limited to a few PSOs or service providers, it is critical to ensure that all the necessary knowledge and tools needed to develop and deploy the OSS are openly available. The presence of the necessary documentation concerning how to develop, build, and deploy the OSS; a development and build environment based on OSS tools; presence and high coverage of test cases; and overview of and access to dependencies are critical to enable others to potentially take over the maintenance.

<h6>Facilitating development through Open Source Stewards</h6>
Another means of improving robustness is through the organization of concerned PSOs through associations such as OS2, comparable to the foundations commonly used for hosting and collaborating on OSS projects in the broader OSS ecosystem. These make up a type of Open Source Steward (a term recently introduced by the European Cyber Resilience Act) that may help to create standardized development processes and governance structures and maintain a broader ecosystem of potential users and service suppliers that join communities as they grow beyond early adopters and prove value and potential. The X-Road provides a successful example of how such stewardship can be set up in a cross-border context.

<h6>Growing institutional capabilities through Open Source Program Offices</h6>
Growing and providing internal capabilities and expertise within PSOs for OSS adoption within PSOs is another approach for increasing robustness, also highlighted in literature. This is commonly performed through the creation of dedicated support functions referred to as Open Source Program Offices (OSPOs). For less resourceful PSOs, associations (or stewards) such as OS2 can be a source of corresponding support.

<h6>Growing a competitive ecosystem of service suppliers</h6>
Availability of multiple service providers increases robustness, while decreasing the risk of ending up in a vendor lock-in. Limited availability of support is, however, a commonly reported challenges. OS2 presents an approach where they have organically grown an ecosystem of 60+ service suppliers, working actively to enable sustainable business models, e.g., through conscious license selection and open collaboration.

<h6>Growing community and collaborative culture</h6>
Funding is a general sustainability challenge for OSS project maintainers, where various models ranging from sponsorship to entrepreneurship and employment have been proposed. For the public sector OSS projects, however, funding is dependent on the PSOs using the OSS. Hence, there is a need to minimize the (potential) ''free-riding'' and grow a collaborative culture where PSOs are inclined to contribute to the common development.
