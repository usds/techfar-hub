#Solicitation Builder

##Code
* Currently app is coded in python/flask and react js, with travis ci and hosted on cloud.gov (cloud foundry).  

##Tool Needs
* Secure logon
* Must receive user data
* Support multi-user collaboration on the same solicitation
* Store data and output it to a document: database & docx support
* Open source and maleable for users to modify as needed for their individual needs

##User Needs

* _PLEASE ADD this information based on identified needs from users like @jonmost and info gathered from DHS et al. by Acevedo_

##Challenges
* Admin access to server is non-existent 
* Code does not contain tests: test serve as stage gates in the code to verify functionality.  Without these tests written into the code, it is difficult to tell where the code is failing when there are errors
* Lack of tests in the code is likely triggering a failure in the production environment which is rejecting the code. Possible that the production environment has code repos that are set to reject code without tests?
* Lack of tests in the code prevent continuous integration: CI supports integration of code into a shared repo several times a day. Each check in is then verified by an auto build that allows early detection of problems
* Code is not clean and is not written in a way that supports modification

##Recommendations (From David Acevedo)
- Rewrite the code from scratch (recommendation is congruent with Ben Smithgall's)
- Separate the functionality of the tool into two parts:
  1. Front end: a Question Builder App that uses a JSON file as input (This front-end only app would generate a dynamic set of pages and questions based on a JSON file, the questions would also have call-backs that allows some question's answers to generate further questions. This app should generate a JSON output of the user selections and modifications.) 
    -  In order to maximize re-usability and applicability to other projects this question builder being front-end only and have no persistence allows it to deploy everywhere. 
	-  Connects to the Backend via API to save progress. 
  2. Back end: mainly an API driven application.
    - Contains the db with a proper schema. 
	- Secure storage (while no confidential information or pii are involved in the system, there is time-embargoed sensitive information)
	- User management (login, validation, etc).
	- possesses the proper security permissions to work in the government.
    - Converts the stored data into a docx output. 	
    
- Test-driven (or Behavioral driven) development throughout  
- Possible architecture: ruby on rails api application with an elm front-end. 
