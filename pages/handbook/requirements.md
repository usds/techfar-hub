---
layout: docs
title: Requirements
permalink: /handbook/requirements/
sidenav: handbook
subnav:
  - text: FAR 15.203 requires agencies to identify requirements in their requests for proposals (RFPs).  How does this requirement fit with Agile processes?
    href: '#requirements'
  - text: How will the Government ensure it has appropriate documentation and know whether a contractor is performing?
    href: '#documentation'
  - text: Would the use of a contractor in an Agile IT development contract be considered inherently Governmental?
    href: '#inherently-governmental'
  - text: By having a close relationship with the contractor on the Agile team, is the Government inviting a conflict of interest?
    href: '#conflicts'
---

## Requirements development and acquisition planning

***
<a name="requirements"></a>
### FAR 15.203 requires agencies to identify requirements in their requests for proposals (RFPs).  How does this requirement fit with Agile processes, which are based on the premise that it is not realistic to expect users to know exactly what they need before they see it and rely on refinement of system requirements based on testing and customer feedback after the contract is awarded? 

Agencies using Agile software development can meet the requirements of FAR 15.203 by identifying a Product Vision and coupling it with an explanation of how the Agile process will be used to achieve the Product Vision.  Rather than providing a set of “how to specifications” (or Requirements Traceability Matrix), the Product Vision will focus on a desired outcome, similar to performance-based contracting, which has been permitted by the FAR for many years.   

For many years the FAR has provided for performance-based service contracts, where the Government issues a statement of objectives (SOO) defining its outcomes that allows for industry to provide innovative solutions that are measured under a quality assurance surveillance plan.  This same approach is applied to contracts using an Agile software development methodology. 	

Agile software development, as with any software development, requires thorough acquisition planning, which is critical to the success of an acquisition.  Lack of proper acquisition planning and failure to follow FAR subpart 7.1, can be fatal to any procurement, but especially software development procurements.  With Agile software development, requirements and priorities are captured in a high level Product Vision, which establishes a high level definition of the scope of the project, specifies expected outcomes, and produces high level budgetary estimates.  The IPT (or cross functional team), defines the core capabilities of the project which are required to meet the mission objective and provide business value.  Requirements might be stated as a SOO as used in conjunction with performance-based contracts.  The offeror would respond to the SOO with a Performance Work Statement (PWS) which details how the SOO will be fulfilled under the contract. See Appendix C: Sample Language for Government Contracts for Agile Software Development Services. 

 ![A Diagram of Showing How Product Vision Is Broken Into Manageable Pieces that Deliver Incremental Value](/techfar-hub-v2/assets/img/techfar4.png 'Product Vision')

**A typical format for a Product Vision would specify:**

- For (target customer)
- Who (statement of the need or opportunity)
- The (product name) is a (product category)
- That (key benefit, compelling reason to buy)
- Unlike (primary competitive alternative)
- Our product (statement of primary differentiation)

#### Sample Product Visions

**Collaboration Platform** — For the Agency’s components that that need a collaboration platform as the primary workflow application to maintain a centralized view of all interactions and outreach to citizens engaging with the Agency through various methods.  Unlike the costly and outdated legacy systems, this new collaboration platform will replace all critical and major businesses processes with a more efficient, 21st century system at a reasonable cost. 
 
**Electronic Benefits System** — For benefits recipients who need an easier way to apply for and check the status of their benefits, the electronic benefits system will allow customers to easily create and submit a new benefits application, get the status of a new application, and will allow the customer to review the status of their benefits. Unlike the old paper-based system, the electronic benefits system will provide a faster processing time and will increase the transparency into the status of the benefits application, two key needs identified by user research. We expect the new system to also address several agency needs such as increasing the ability of the agency to identify fraudulent claims, and reducing the level of effort required for an agency claims specialist to process a benefits application.

When issuing a solicitation[*16*], it should explain the Agile software development process.  The Product Owner’s high-level requirements will guide the process, and the Agency Product Owner will work together with the Agile team to develop and estimate user stories and establish acceptance criteria (specifying the expected functionality for a user story).  The Agile team will work on multiple user stories within a series of sprints which, taken together, form the software release(s) within the provided sprint/release timeframes.  The solicitation should also describe the required testing of functional requirements and make it clear that testing should be integrated into each sprint cycle.  As part of the Agile process, the Government will approve the specific plans for each iteration, establish the priorities, approve plan revisions reflecting the experience from completed iterations, and approve the working software to determine whether it meets the stated requirements.

#### Solicitation Description of an Agile Process

“The contractor will work in a team-based Agile environment.  The Agency will create and maintain system roadmaps, project plans, and product and release backlogs that will be the basis for the contractor’s work. The Product Owner will specify high-level requirements to the Agile team. As in typical Scrum-based Agile processes, the Agency Product Owner will work together with the team to develop and estimate user stories and establish acceptance criteria. These acceptance criteria will specify expected functionality for a user story, as well as any non-functional requirements that must be met in the development of the story. The Agency Product Owner, supported by SMEs and business analysts, will determine whether or not acceptance criteria have been satisfied.”

***
<a name="documentation"></a> 
### Without having detailed system requirements documented up front, how will the Government ensure it has appropriate documentation and know whether a contractor is performing? 

Agile software development requires documentation for user stories, acceptance criteria, tasks to be completed to fulfill the “definition of done,” code quality, and standards compliance.  Because the Government is able to monitor progress, it will know whether a contractor is off track.  The Agile software development approach involves a highly disciplined process with Government representation on the team to set priorities and ensure whether working software is compliant with contract or system requirements.  Progress will be monitored by the delivery of deployable code on time. 

Under the Agile methodology, documentation is produced through interactions between the product owner, other stakeholders and the contractor throughout the development process involving sprint cycles and releases, which supplement the high-level Product Vision and refine the requirements to reflect experience from completed iterations.

- Working software is produced in short iterations (which can be as frequently as every 1-4 weeks[*17*]), which produces a segment of functionality (e.g., end user being able to schedule an appointment online).
- Each iteration is small in scale (i.e., encompass a single or a few function(s) within a multistep process).  Multiple iterations form releases.  
- For each iteration, requirements, design, and development of software are identified through “user stories” produced by the product owner to identify and prioritize core requirements that are needed to produce a minimum viable product (MVP).  The MVP contains the just enough core functions of the system to be able to get validated learning from users about the system.  Features that may be useful, but not essential, are not considered until the MVP is delivered.  
- Testing of the software determines whether it meets the stated requirements.Product backlogs are maintained to ensure that functionalities not included in early iterations that remain desirable are incorporated into future iterations.

In each iteration, the Product Owner may evaluate whether working software is responsive by looking at documentation from user stories, acceptance criteria, tasks to be completed to fulfill the “definition of done,” code quality, and standards compliance. The agency must generate all documentation required by law, regulation, and policy. 

***
<a name="inherently-governmental"></a>
### FAR Subpart 7.5 states that contractors cannot perform inherently Governmental work.  Because software requirements are refined after contract award, would the use of a contractor in an Agile IT development contract be considered inherently Governmental?

Using the contractor to provide assistance to the Government with Agile software development is not, in itself, inherently Governmental work.  With Agile, the contractor provides suggestions for the system through a highly defined and disciplined process that is driven by user needs established and monitored by the Government. 

The use of a contractor to provide assistance to the Government with software development does not fall within the boundaries of inherently Governmental work described in OFPP Policy Letter 11-01[*18*] or FAR 7.503.  Under Agile software development, the Government retains the responsibility for making decisions and managing the process; it plays a critical role in the IPT as the Product Owner by approving the specific plans for each iteration, establishing the priorities, approving the overall plan revisions reflecting the experience from completed iterations, and approving deliverables.  As part of its responsibility, the Government is involved, at a minimum, at critical decision points in each sprint cycle – at the requirements development phase and sprint cycle review, but it is preferable to have daily involvement from the Government Product Owner, and frequent involvement from end-user representatives. 

Contractors are not involved in establishing the Product Vision or determining what overall contractual requirements are included in solicitations.  They do not decide what supplies or services are acquired by the Government, which is inherently Governmental per FAR 7.503(c)(12)(i).  Their focus is on helping the Government refine the software requirements (or detailed requirements) for the system through a highly defined and disciplined process that is driven by user needs established by the Government. 

***
<a name="conflicts"></a>
### Under FAR 9.504, agencies are required to avoid, neutralize or mitigate significant potential conflicts of interest.  FAR 9.505 addresses the underlying principle of preventing unfair competitive advantage for any given vendor.  By having a close relationship with the contractor on the Agile team, is the Government inviting a conflict of interest? 

The contractor's involvement on the Agile team is used only to help define software requirements in accordance with a highly defined and disciplined process that is driven by user needs established by the Government. There are certainly situations where a contractor working on one contract may create an OCI for another procurement, but the nature of the Agile methodology does not, per se, create a conflict of interest.  Whether a conflict may exist depends on the specific circumstances of the acquisition; confer with your Office of General Counsel for specific guidance.

As explained earlier in this document, Agile software development involves a highly defined and disciplined process.  A contractor being used in Agile software development to help refine technical requirements – a typical feature of Agile software development – would not be free to propose solutions to meet its own business interests over the Government’s interest.  The contractor’s expertise is being used only to help refine technical requirements in accordance with a highly defined and disciplined process that is driven by user needs established by the Government.  The needs are initially set forth in a Product Vision by the Government, which is supplemented through user stories and Government customer testing until an MVP is achieved.  In other words, the contractor is not involved in establishing the Product Vision that frames the procurement, determining what overall contractual requirements are included in the solicitation, or determining if work products meet the contract terms.  The Government retains the responsibility for making these decisions, including approving the specific plans and acceptance criteria for each iteration, as well as the overall plan revisions reflecting the feedback from completed iterations and priority changes. It is imperative that the Government retains this responsibility to ensure the integrity of the competitive process is upheld and is not overcome by the contractor trying to steer work to itself in the situation of a follow-on contract or a multiple award task order.
 
It is important to keep in mind that producing multiple releases of usable software is part of the Agile software development process.  If a contractor has been awarded a contract for Agile software development, by nature, it will be involved in defining the technical or system requirements as it iterates through the Agile software development process.  It will not have a conflict of interest in competing for follow on work because it should not be involved in developing the specific contract requirements or Product Vision for the follow-on RFP.  It would have the normal advantage of the incumbency, which in itself, does not create a conflict of interest.  

Additionally, FAR 9.505-3 applies in the respect that contracts for the evaluation of offers for products or services should not be awarded to a contractor that will evaluate its own offers, or those of a competitor, without proper safeguards to ensure objectivity. 

As explained in FAR 9.505-2(a)(3), for development work, it is normal to select firms that have done the most advanced work in the field and would be expected to design and develop around their own prior knowledge.  FAR 9.505-2(b)(1) allows a contractor to supply a system if it has participated in the development and design work.  Given that the agency will be testing this software repeatedly throughout the development, it should already have the hardware on which it will be operating (or at least it will have already identified what hardware must be used).  Consequently, even if there is a subsequent need to acquire a hardware system to run the software, the development of the software should not be considered preparing or assisting in preparing a work statement for the acquisition of the hardware system.  

***
<a href="/techfar-hub-v2/handbook/contract_vehicles/"><i class="fa fa-arrow-right" aria-hidden="true"></i>Next Page "Contract Vehicles"</a>
