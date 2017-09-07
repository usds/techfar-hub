---
layout: docs
title: Contract Administration
permalink: /handbook/contract_admin/
sidenav: handbook
subnav:
  - text: Is Agile software development feasible given agencies’ limited resources? 
    href: '#feasible'
  - text: How can the Government hold contractors accountable in an Agile environment?
    href: '#accountable'
  - text: Are there consequences for situations in which contractors fall behind?
    href: '#fall-behind'
---

## Contract administration

***
<a name="feasible"></a> 
### FAR 42.302 lists the contract administration functions to be performed by the Government.  When performing contract administration, agencies have noted challenges in committing staff to support Agile software development.  Is Agile software development feasible given agencies’ limited resources? 

Agencies need to ensure adequate resources are applied to manage their contracts irrespective of the strategy used; Agile software development is no exception.  While the process is highly interactive, the overall amount of work is not greater - just applied differently - to produce quicker results.

In its July 2012 report, Effective Practices and Federal Challenges in Applying Agile Methods[*25*],  GAO noted agencies’ challenges in committing staff.  The Agile process works only if there are appropriate dedicated resources, as the process can be labor intensive.  Agencies need to ensure adequate resources are applied to manage their contracts irrespective of the strategy used.  Strong contract management ensures projects stay on course and helps prevent the agency from becoming overly reliant on contractors.

IT acquisitions involving Agile software development are no exception.  Adequate resources are critical to the highly interactive and disciplined process associated with Agile.  This includes a full time Product Owner, certified as a P/PM, and preferably one that can take on the role for the life of the project and a dedicated IPT (or cross-functional team).  While the process is highly interactive, the overall amount of work is not greater – just applied differently – to produce quicker results.  As the Agile process matures, the amount of administration work should be less, especially for the acquisition workforce.  To ensure agencies have the necessary resources, the following tips help agencies identify the right people and have the necessary arrangements and agreements in advance to ensure success. 

#### Ensuring Sufficient Resources
- At the outset, instead of focusing on developing detailed requirements and documentation prior to awarding a contract, focus resources on building a cross-functional team, developing norms of team behavior to identify customer priorities aligned with what can be accomplished in time-boxed sprint cycles.  This process allows the Government to produce faster results with greater success.
- Identify high-performing individuals with business expertise to fill the roles of Product Owners at the earliest possible time and document in the product charter.  These roles should be built into the career growth of top performing individuals.  The CIO, program leadership, and product owners should establish a memorandum of understanding during the acquisition strategy to memorialize common agreement for the time commitment and responsibilities of the product owner. 
- Utilize Agile coaches to look programmatically and systematically at how to increase business value and bring better businesses practices into the team.  Agile coaches are experts in Agile processes; their main responsibility is facilitation.  

When agencies have limited resources, they may have the COR and the Product Owner be filled by the same person.  However, all Agile teams do not need to follow this arrangement.  Other agencies have had success with having the Product Owner separate from the COR.  This allows the technical expertise of the Product Owner to focus on setting priorities, testing, and collaborating on a daily basis with the team, while the COR takes on the higher level overview of the success of the awarded contract. See Appendix B: Examples of Team Members (IPT) Needed to Support Agile Software Development. 

The emphasis on working software over documentation should decrease or eliminate the need for extensive document reviews of detailed requirements, often times for functionalities that are never used.  According to The CHAOS Manifesto 2013, only 20% of features are used often; 50% of features are hardly ever or never used, while 30% get used sometimes or infrequently.[*26*] The use of structured sprints with user cases, testing, and regular prioritization of product backlog helps to avoid the administrative burden of modifications and scope creep. 

***
<a name="accountable"></a>
### Because Agile software development is a fluid process with technical requirements that are refined as part of the process, how can the Government hold contractors accountable in an Agile environment? 

Even though a key principle of Agile software development is that working software is the primary measure of progress, contractors are still responsible for meeting cost and schedule goals.  The Government holds the contractors accountable for producing working software consistent with the set sprint/release schedule and within budget.  

The Government holds the contractors accountable for producing the working software consistent with the set sprint/release schedule.  The iterations are guided by the Product Vision, which establishes a high level definition of the scope and specifies expected outcomes for each sprint.  The Government also holds the contractor accountable by being involved in and managing the Agile process.  With Agile software development, the contractor determines the development processes within each cycle and proposes the way the cycle is to be run within the parameters set by the Government.  The Government approves the specific plans for each iteration (developed during one sprint), as well as the overall plan revisions reflecting the experience from completed iterations.  The Government holds the contractor accountable for each iteration and provides input on the “definition of done.” 

The contractor is bound to produce software releases (containing set features) at set increments.  Agile promotes a focus on tangible outcomes, as opposed to progress against a plan.  Agile methods emphasize the delivery of value frequently.  The technical solution and quality assurance plan bind the contractor.  If the contractor is not providing implementable “Code” or “Features” to the applications, the contractor is not delivering on its process. The goal is to have releasable and usable features.  The contractor should be responsible for delivering automated tests, as well as functional code. The Government’s exposure to failure is lessened because the Agile process forces problems to be identified early, so that failure occurs on a small scale with time for corrective action.  As a result, although a contractor will only be held to best efforts if a cost-based contract type is used, the Government’s exposure to major cost overruns will still be limited.  While Fixed-price contracts will avoid overruns, flexibility to support additional sprints or functionality may be limited.

***
<a name="fall-behind"></a>
### Because Agile software development is a fluid process with technical requirements that are refined as part of the process, how can the Government track contractor progress?  Are there consequences for situations in which contractors fall behind?

The Government tracks progress by tracking completed work; in Agile, project status is evaluated based on software demonstrations, and if the contractor is not producing the releases with the required features, the CO should use discrepancy reports or other measures to put the contractor on notice and enforce consequences for poor performance.  As stated in FAR 34.2, when an Earned Value Management System is required, the EVMS data also should be used to track progress. 

The agency tracks progress by tracking completed work.  Velocity is also useful for predicting future software deliveries.[*27*] With Agile software development, project status is evaluated based on software demonstrations.  If new system requirements are discovered, they are queued for possible inclusion in later iterations.  The CO is encouraged to use Service Level Agreements and quality assurance plans. 

#### Ensuring Success

- **Use of Performance Metrics.** Performance metrics are a very large component of a successful Agile software development implementation. Metrics can assist in tracking the deliverables of the proposed process by having data collected to track elements of the Agile process, such as cost variance, schedule variance, the throughput and capacity of the team(s), the number of features completed, bug defects and resolution times, and stability of deployed features over time.
- **Security.** Make security a priority early in the process.  Do not have a “security sprint,” but instead start with a hardened system and regression test every day.  Implement continuous monitoring in production and ongoing authorization.  Use code scanning tools and processes to allow for ongoing evaluation of security posture.  Build any new controls during the regular sprints, test frequently, and be ready to deploy.  The system should always be in a deployable state.
- **Quality Assurance.** Change the focus from document compliance to process quality evaluation.  Automated test software can pick up defects so vulnerabilities are patched in development.   
- **Service Level Agreements.** Service Level Agreements may be used for a variety of purposes such as the conduct of release planning activities and the creation and closure of user stories through completed sprints. 
- **Section 508 Compliance.** Accessibility should be addressed from the start as each deployable increment will have to be Section 508 compliant.  This should be done through continuous monitoring in production and ongoing authorization. 

It is recommended that a notional quality control plan be submitted with the offerors’ proposals.  This plan should be evaluated to determine the rationale for the contractor’s proposed performance standards and performance measurement methodology and assessed as to whether the total solution will ensure that the performance standards are met.  These metrics should cover planning, inspecting, and understanding progress under time, and should correspond with the “definition of done” as proposed in the solicitation. These may include such measures as sprint/release success rates, defect resolutions, time to market, and end user satisfaction. 

#### Tracking Progress

- Adhere to Federal Regulations and Guidance.  When an EVMS is required (FAR 34.2), the EVMS data will be used to track progress.
- Test at every sprint cycle. Testing during software code delivery, instead of after delivery, reduces risk and remediation costs. 
- Ensure that the definition of how a story will be determined to be done is comprehensive and objective.  Comprehensiveness includes defining what constitutes a finished product (i.e., packaged, documented, tested, and independently verified). Objective means that it is measurable or verifiable.
- Establish and Prioritize Features. In each iteration, features and the prioritization of the features should be established so work can be easily tracked. 
- Utilize burn-up and burn-down charts. Burn-up charts show the progress in completing requirements and any changes to the total number of requirements.  They show progress towards release completion and projection of the remaining features that will be completed within a given release.  Burn-down charts show the progress of the iteration by displaying the length of the iteration compared to the requirements to be completed.

Regardless of the contract type, the contractor is still responsible for issuing software releases that meet the Government’s requirements that were determined at the beginning of the iteration.  If features aren’t included in a release, then those features are reprioritized and added to future releases or disregarded if not needed.  The contractor is still required to produce working software at the release dates and adhere to the sprint/release cycle schedule; the actual release’s features may differ based on what realistically can be accomplished in the sprint and the Government’s priorities. 

If the contractor is unable to delivery working software within budget and on schedule, the CO is encouraged to use discrepancy reports and meet[*28*] with the contractor to determine steps needed to get back on track.  This reinforces the need for continual Government involvement on the Agile team to help identify where the issue is –the Government and/or the contractor.

As discussed in Section E: Pricing considerations, incentives may be used as leverage.  Incentives should drive the contractor to high performance.  If there are incentives in the contract, the contractor will not get the incentive if the work is not produced.

***
<a href="/techfar-hub-v2/handbook/appendix/"><i class="fa fa-arrow-right" aria-hidden="true"></i>Next Page "Appendix"</a>
