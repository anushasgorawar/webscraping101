#Filter job and requirements from a job finding website

from bs4 import BeautifulSoup
import requests

print('Enter Unfamiliar Skill:')
skill=input('>')
print('Filtering unfamiliar skills...\n')
htmlfile=requests.get('https://www.timesjobs.com/candidate/job-search.html?searchType=personalizedSearch&from=submit&txtKeywords=python&txtLocation=').text

soup = BeautifulSoup(htmlfile,'lxml')
list=soup.find_all('li', class_="clearfix job-bx wht-shd-bx")

for job_list in list:
    posted_date=job_list.find('span',class_="sim-posted").text
    if 'few' in posted_date:
        company_name=job_list.find('h3', class_="joblist-comp-name").text.replace(' ','').replace('(MoreJobs)','')
        skills_req=job_list.find('span', class_="srp-skills").text.replace(' ','')
        if skill not in skills_req:
            link=job_list.header.h2.a['href']
            print(f'Company: {company_name.strip()} \nSkills Required: {skills_req.strip()}')
            print(f"More Info: {link}\n")