# Route to Rescue
## Background
There are massive data streams out there in the whole internet, each with valuable information attached to it. What if a photo of a girl leaned against house no. 123 with shade of street name X , might actually be a victim of human trafficking and with timely manner action, this photo can be a survival point. Traditionally, with manual investigation, it takes weeks to find the location of photo based on the texts and more importantly it needs exhaustive search to find the identity of the victim as photoed. with the emerge of social media and Hashtag, everybody posts photos anywhere and tag it with any desirable Hashtag. with those Hashtags refering to a criminal case, there is a need for an AI tool which can parse a tagged photo and detect a face, a car and/or location. What we deploy helps law enforcement, government and the private sector identify and combat criminal activities in a matter of seconds compared to days. Tag the photo with #RouteToRescue and our tool will do its job. 

## Architecture Diagram
![](https://raw.githubusercontent.com/ashwiniverma/NonProfitCompassion/master/architecture.png)

## Deployment Pre-requisites
- Create IAM roles
  - Lambda: access to Alexa, Translate, Polly, and DynamoDB
  - EC2: access to SNS API
- [Setup the AWS CLI - Install and Configure](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html)
- [Alexa Skills Kit Quick Start - Steps 1, 2, and 3](https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html)

## Deployment Procedure
- Deploy the integration service
```bash
cd interaction-service
ask deploy
```
- Attach the IAM role to the Lambda.
- Deploy the moderation service. This can be done by building and deploying a Docker container (see `moderation-service/Dockerfile`) or by running the equivalent commands on an EC2 instance.
- Attach the IAM role to the instance.

## Our approach to the judging citeria
### Social Impact & Value
This Alexa Skill has a large potential social impact, as it can assist in Compassion's goal of rescuing its current 2 million sponsored children out of poverty. Increasing and modernizing should drive sponsorship growth (which ultimately means more children are lifted out of poverty).

### Originality
While other translation skills/apps exist for near-real time translation, this app has the unique value-add of protecting these children through moderation of the communication. A moderation webservice filters out harmful words and phrases before the message is delivered to the child. If certain thresholds are crossed, communication is ended and the moderation team is notified to review.

### Feasibility
What we have created is MVP at best. We have made signifcant comprimises in order to meet the challenge's acceptance criteria and the hackathon's judging criteria. That being said, due to our heavy use of AWS hosted services, we believe what we started here should be able to be built on for a production launch in 12-18 months. The hackathon team has created this [notes document](./NOTES.md) for the next development team that picks this up.

### Usability
We make heave use of the Alexa Skills Kit's ability to prompt the user for appropriate actions. The minimum flows we specced based on accpetance criteria are all accounted for. As you would expect for an app developed in this timeframe, more work is needed additional conversational flows to make it feel even more natural.

### Engagement
The product encourages re-engagment by being easy to use and a much faster (relative to the historic pen-pal methods) interaction between sponsor and child.

### Go-To-Market Strategy & Promotion
We recommend a phased rollout.
- Start with a single partner church that has a small number of children and a high tolerance for working through issues. We recommend the development team take in bugs and feature requests in an agile fashion.
- Roll out to the remainder of that partner church's country/language before tackling other countries/languages
- Rollout to new languages one at a time, addressing feedback as it comes up.
