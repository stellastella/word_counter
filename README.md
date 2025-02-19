# Word Counter

Word Counter is a basic app that counts the number of words in a content. The content can either be pasted or uploaded as a file. 

The essence of this project is to also illustrate the hosting of the application using CloudFront, Route 53, and S3 bucket.

![alt text](flowchart.png)

OBJECTIVE:
Host a static website on S3, enable public access & configure S3 for website hosting
Set up CloudFront for faster content delivery
Configure Route 53 for a custom domain
Use an SSL certificate for HTTPS

STEPS: 

1: Create an S3 Bucket for your Static Website Hosting
    * go to your aws S3 console
    * Click create Bucket then name it a macthing name for your domain(eg: yourdomain.com) and uncheck all public access
    * Go to properties tab and select Static Web Hosting
    * Enable Host a Staitic Website [index & error document] - index.html, error.html
    * Upload the website files - index.html, script.js, style.css, flowchart.png

2.  Let's set up bucket Policy
    * Locate Permissions tab and select Bucket Policy
    * Add the policy below and click save to allow public read access to the website 
        {
            "Version": "2012-10-17",
            "Statement": [
                {
                "Effect": "Allow",
                "Principal": "*",
                "Action": "s3:GetObject",
                "Resource": "arn:aws:s3:::your-domain.com/*"
                }
            ]
        }
