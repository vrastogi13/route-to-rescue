# Route to Rescue
## Background
There are massive data streams out there in the whole internet, each with valuable information attached to it. What if a photo of a girl leaned against house no. 123 with shade of street name X , might actually be a victim of human trafficking and with timely manner action, this photo can be a survival point. Traditionally, with manual investigation, it takes weeks to find the location of photo based on the texts and more importantly it needs exhaustive search to find the identity of the victim as photoed. with the emerge of social media and Hashtag, everybody posts photos anywhere and tag it with any desirable Hashtag. with those Hashtags refering to a criminal case, there is a need for an AI tool which can parse a tagged photo and detect a face, a car and/or location. What we deploy helps law enforcement, government and the private sector identify and combat criminal activities in a matter of seconds compared to days. Tag the photo with #RouteToRescue and our tool will do its job. 

## Architecture Diagram
![](https://raw.githubusercontent.com/vrastogi13/route-to-rescue/master/public/archi.png)

## Deployment Pre-requisites
This a solution that will automatically launches and configures [Amazon Rekognition](https://aws.amazon.com/rekognition/), [[Amazon KinesisFirehose]](https://aws.amazon.com/kinesis/firehose/),
[Amazon Simple Storage Service(S3)](https://aws.amazon.com/s3/?nc2=h_l3_sc), [AWS Lambda](https://aws.amazon.com/lambda/?nc2=h_l3_c), [Amazon DynamoDB](https://aws.amazon.com/dynamodb/?nc2=h_l3_db), [Amazon Simple Notification Service (SNS)](https://aws.amazon.com/sns/), & [Amazon Elastic Cloud Compute (EC2)](https://aws.amazon.com/ec2/) to collect,store, process, and analyze data to search for any possibility of human trafficking on social media data streams. The diagram below presents the Route to Rescue with Amazon Rekognition architecture we can deploy in minutes using this guide and accompanying [AWS CloudFormation](https://aws.amazon.com/cloudformation/?nc2=h_l3_dm) template.

## Deployment Procedure
1.  This solution uses python code on an EC2 instance to listen to Twitter feed to capture images from that feed.

2.  The EC2 instance pushes Twitter meta data in JSON format to an S3 bucket via Amazon Kinesis Firehose. 

3.  A Lambda function is invoked based on the S3 PUT operation to the initial S3 bucket that will read the JSON meta data. It writes relevant information to DynamoDB, and will copy the image into a second S3 bucket.

4.  A second Lambda function is invoked, based on the S3 PUT operation to analyze the photo, facial expression, location and look for a match. Results will be stored in DynamoDB, and a successful match will send an email alert via SNS.
