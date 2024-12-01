import boto3

s3 = boto3.client('s3')
s3.upload_file('D:\\SIH 2024\\Summary of Project Idea.txt', 'smart-bucket-sample', 'sample.txt')
