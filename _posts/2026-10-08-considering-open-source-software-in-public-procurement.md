---
title: "Considering Open Source Software in Public Procurement"
seo_title: "Considering Open Source Software in Public Procurement"
excerpt: "..."
date: 2026-12-08T15:15:28+02:00
categories:
  - blog
tags:
  - open-source-software
  - public-procurement
header:
  teaser: "/assets/images/2026-10-08-considering-open-source-software-in-public-procurement/teaser.jpg"
---

<div class="thumbnail-container">
<img src="/assets/images/2026-10-08-considering-open-source-software-in-public-procurement/teaser.jpg" alt=""></div>

## TL;DR / Summary

- 
- 
- 

## Open Source in Public Procurement

_Draft outline based on the presentation "Procurement and acquisition of Open Source Software: Challenges and Practices from a Swedish context" (Johan Linåker, Dublin)_

---

## Working title options

- _Open Source in Public Procurement: A Practitioner's Guide from Needs Analysis to Long-Term Stewardship_
- _Buying Open: How Public Bodies Can Consider Open Source When Acquiring Software_
- _Beyond the Policy: Making Open Source Work in Public Sector Procurement_

**Audience:** Procurement officers, IT strategists, enterprise architects, digitalisation leads, and OSPO staff in public bodies.

**Estimated length:** 4,000–6,000 words (consider splitting into a three-part series; see editorial notes).

---

## Introduction: The gap between policy and practice

_Source: slides 2, 8_

- Open with the paradox: open source policies are spreading, and most concern procurement (CSIS survey), yet requests for open source in tenders remain unusual.
- Uptake is mostly driven by a few organisations with the necessary capabilities, know-how, and long-term horizon.
- State the promise of the post: a practical walk-through of the questions to ask at each stage of an acquisition, and where to find the answers.

---

## 1. The policy landscape in brief

_Source: slides 3–5_

Keep this section short; it is background, not the main content.

- **How policies differ** (consider presenting as a small table):
    
    |Dimension|Range|
    |---|---|
    |Policy focus|Public sector vs. industry|
    |Policy direction|Inbound vs. outbound|
    |Type of intervention|High-level endorsement vs. advisory vs. prescriptive|
    |Form|Legislation vs. government instruction vs. strategy documents|
    |Scope|National vs. regional/local vs. institution-specific|
    
- **Policy alone isn't enough:** use Italy as the example, and introduce the support layer of OSPOs (national, regional/local, association-based, institution-centric), guidelines, and communities of practice.
    
- **Swedish guidance as illustration:** E-delegationen, Försäkringskassan, and the Agency for Digital Government (DIGG). For an international audience, frame these as a typical spectrum, from "consider open source" to "publish by default."
    

---

## 2. First question: Does open source even need to be procured?

_Source: slides 6–7_

A myth-busting section and a good early hook for practitioners.

- Using freely available OSS without any form of compensation generally falls outside the scope of procurement law (Upphandlingsmyndigheten).
- Services around it, such as consulting, development, support, or operations, are subject to procurement obligations.
- Framework agreements can explicitly allow mandatory requirements for named, OSI-licensed, free-of-charge software and for open standards (Kammarkollegiet example).
- **Suggested addition:** how this maps to the EU procurement directives so non-Swedish readers can transfer it, plus a caveat to check national authority guidance.

---

## 3. Why it's still hard

_Source: slides 9–10_

Group barriers into clusters rather than one long list:

- **Capability barriers:** lack of internal capabilities, dependency on external resources, uncertainty and lack of practice in considering OSS in the procurement process.
- **Structural barriers:** existing lock-in to proprietary technologies, standards, or platforms; poor discoverability of OSS options during planning; copying neighbouring municipalities' procurement structures.
- **Cultural and political barriers:** fear of legal and security risks, risk aversion, short-term horizons, focus on one's own organisation, lack of sustained political support and clear policy, no coordination across acquisition, development, and maintenance.

Have each later section point back to the barrier it addresses.

---

## 4. A step-by-step process for considering open source

_Source: slides 11–25, plus 41–55 relocated. This is the core of the post._

### 4.1 Needs analysis: Are there open alternatives?

_Source: slides 12–13_

- Investigate existing projects during the preparatory phase.
- Download, test, and match against functional and technical specifications.
- Assess gaps: is the missing functionality critical, affordable to develop, and possible to include in the project?
- **Worked example:** Luftfartsverket's 2019 market research on open source e-archive products.
- **Where to look:** Offentligkod.se (Sweden) and equivalent catalogues in Italy, France, Germany, and the Netherlands; the emerging EU federated catalogue based on `publiccode.yml`.

### 4.2 Write requirements that don't exclude open options

_Source: slides 14–15_

- Avoid direct or indirect references to proprietary software, including via data formats.
- Require open standards, preferably with an open implementation; ensure licences for any other referenced standards can be obtained.
- Reference Kammarkollegiet's guidance on open standards.
- Build in data access from the start: export in open formats, clear documentation, easy integration, and the ability to publish data openly.

### 4.3 Assess project health

_Source: slide 16_

- How secure and sustainable is the software?
- Is procured support or a packaged solution needed to guarantee quality of service?
- **Checklists:** CHAOSS, Försäkringskassan's open source guideline, Red Hat's project health checklist.

### 4.4 Understand how open source vendors make money

_Source: slides 41–55, moved from the end of the deck_

Practitioners need this before deciding on support or evaluating suppliers.

- **Business model patterns:** support and subscriptions; open core and proprietary extensions; dual licensing; X-as-a-Service; data driver; product enabler; infrastructure and development.
- Models are often combined (e.g., Neo4j: dual licence + proprietary extensions + SaaS + services). Red Hat works as a short business model canvas example.
- **Key distinctions:** community vs. customers, community vs. partners, projects vs. products.
- **Practical point:** knowing a vendor's model tells you what you are actually paying for and where lock-in might hide.

### 4.5 Decide what support you need, and how to buy it

_Source: slide 17_

- What can we do ourselves, and what do we need help with?
- Services, an enterprise-packaged solution, or both?
- Can the need be met through an existing framework agreement, or is a new procurement required?
- Consider direct awards below the threshold to develop missing functionality and build internal competence.
- Consider splitting customisation and new development into separate parts.

### 4.6 Compare options and estimate value

_Source: slides 18–20_

- **Italy's joint decision model:** must consider open alternatives by law; newly developed software must be released as open source; options ranked on technical aspects (requirements fit, interoperability, security, personal data, project health, other administrations using it, support availability) and total cost of ownership (installation, integration, customisation, verification, hosting, maintenance, training).
- **Value drivers for the business case:** public money, public code; sustainable information management; avoiding recurring system replacements at each re-procurement; open innovation; customisation to operational needs; influence over development pace; reduced licensing costs; economies of scale across administrations; increased competition in tenders.
- _Note: slide 18 is image-only. If it is a comparison matrix, recreate it as a table here._

### 4.7 Qualify suppliers on community contribution

_Source: slides 21–22_

- **Community-first approach:** favour suppliers with recent, sustained participation in open source generally and in the specific project.
- **Evidence to request:** accepted code contributions, active technical discussion, representation in governance or technical steering.
- **OSB Alliance's four criteria:**
    1. Relationship with the software manufacturer or community
    2. Ensuring upstream publication of modifications and patches
    3. Ensuring high-quality level-3 support
    4. Securing the supply chain by supporting core components (link to the Cyber Resilience Act)

### 4.8 Communicate clearly with vendors

_Source: slide 23_

- Move from goals to ambition levels to specific requirements; "be open source" alone is not a requirement.
- Use neutral language rather than framing open source defensively or negatively.
- Be open to vendor feedback, for example on licence virality.

### 4.9 Avoid soft lock-in, even with open source

_Source: slides 24–25. A counterintuitive section worth giving prominence._

- **User-driven factors:**
    - _Communication:_ limited transparency between municipalities and with the main supplier.
    - _Procurement:_ inconsistent or disqualifying qualification requirements that favour incumbents.
    - _Maintainership:_ unclear responsibility for maintenance and community management.
    - _Comfort:_ preference for the status quo and its technical debt over an uncertain future.
- **Technical factors:** dependency management, development and build infrastructure, documentation, testing, code quality analysis.
- Cite the arXiv paper (2409.01118).

---

## 5. When nothing exists: Building new as open source from day one

_Source: slides 26–27_

- Be sure of the purpose and expected value gains; weigh costs and risks against alternatives.
- Find other stakeholders with the same need and collaborate from the start.
- **Key decisions:** internal vs. acquired development resources, copyright ownership, long-term maintenance, expectations on stakeholders and how others can join, business opportunities for suppliers.
- **Open from day one:** develop on an open social coding platform, use an OSS licence, provide documentation and tooling for anyone to run and develop.
- **References:** Standard for Public Code, opensource.guide, OSOR guidelines on sustainable open source communities.

---

## 6. Bridging waterfall procurement and agile development

_Source: slides 28–31, 38_

- **The mismatch:** procurement is typically sequential (specification → procurement → realisation); development is iterative.
- **Figure:** recreate the cycle diagrams from slides 29–30 (product, procurement, and development cycles across public administrations and multiple suppliers).
- **Dynamic Purchasing Systems:** an "open framework agreement" suppliers can join during its lifetime, enabling modular development with tickets as tenders and pull requests as solution proposals. Be honest about the challenges: immature tooling, culture, processes, training.
- **Follow-up through open development:** continuous monitoring of planning and delivery, product owner involvement in requirements discussions, ongoing review of quality and security.

---

## 7. Don't go it alone: Collaboration and governance models

_Source: slides 32–37_

- Why collaborate: pooled resources and expertise; coordinated requirements management, procurement, and follow-up; common financing and governance.
    
- **Five archetypes** (consider a comparison table covering governance, copyright, funding, and who develops):
    
    |Archetype|Case|Key features|
    |---|---|---|
    |Municipal association|OS2 (Denmark)|70+ municipalities; vendors sign an MoU; copyright transferred to OS2; technical committee for maintenance; size-based financing|
    |Civil society foundation|Open Cities (Czechia)|Non-profit for 20 cities; hosts projects like Cityvizor; joint requirements engineering; works with civic tech communities|
    |Lead user|Lutece (Paris)|City-developed e-service platform with 400+ plugins; open to contributions; offered as a service|
    |Co-owned service company|IMIO / CommunesPlone (Wallonia)|Grassroots origin; now run by a company co-owned by 120 municipalities|
    |Evolving model|Signalen (Netherlands)|Started informally with Foundation for Public Code support; moved to the Dutch Association of Municipalities with formal governance|
    
- Close with a short reflection: which model fits which situation?
    

---

## 8. Organisational enablers

_Source: slides 4, 39–40_

- **Overall procurement strategy:** how open source is considered in acquisition, synergies between existing projects, interaction between operations and procurement, common management and collaboration models.
- **OSPOs and competence centres** at different levels.
- **The practitioner toolbox:** OSS catalogues, a clear needs analysis process, example procurements and requirements, estimation models for value, cost, and risk, evaluation models for projects and suppliers, management and collaboration models.

---

## Conclusion and practitioner checklist

- Brief recap of the main argument.
- A one-page, scannable checklist mirroring Section 4, the part readers are most likely to bookmark and share.

---

## Further reading

- CSIS: _Governments' role in promoting open source software_
- Linåker: report on software reuse through open source in the public sector (linaker.se)
- Upphandlingsmyndigheten: _Omfattas öppen källkod av upphandlingsplikt?_ (2022)
- Kammarkollegiet: _Vägledning för avrop från Programvaror och tjänster_ (2023) and _Öppna standarder_ (2014)
- Developers Italia: guidelines on acquisition and reuse of software for public administration
- CHAOSS; Försäkringskassan open source guideline; Red Hat project health checklist
- OSB Alliance: selection criteria for sustainable procurement of open source software
- arXiv 2409.01118 (soft lock-in study)
- Standard for Public Code; opensource.guide; OSOR guidelines
- Offentligkod.se and the `publiccode.yml` standard

---

## Editorial notes

- **Restructuring:** the main change is moving the business models section (slides 41–55) into the process, where it informs purchasing decisions.
- **Visuals to recreate:** slides 2, 18, 29–30, 46, and 54 carry their meaning in images.
- **International framing:** decide whether this is "Swedish lessons for a European audience" or a general guide with Swedish examples; this determines how much legal context to add.
- **Series option:**
    - Part 1: Sections 1–3 (why, and what's allowed)
    - Part 2: Sections 4–5 (how to buy)
    - Part 3: Sections 6–8 (collaborate and sustain)

## References

- 

<% tp.file.cursor() %>