from bs4 import BeautifulSoup
import requests
import time

print('Enter Unfamiliar Skill:')
skill=input('>')
print('Filtering unfamiliar skills...\n')


def find_jobs():
    htmlfile=requests.get('https://www.timesjobs.com/candidate/job-search.html?searchType=personalizedSearch&from=submit&txtKeywords=python&txtLocation=').text
    soup = BeautifulSoup(htmlfile,'lxml')
    list=soup.find_all('li', class_="clearfix job-bx wht-shd-bx")
    for index, job_list in enumerate(list):
        posted_date=job_list.find('span',class_="sim-posted").text
        if 'few' in posted_date:
            company_name=job_list.find('h3', class_="joblist-comp-name").text.replace(' ','').replace('(MoreJobs)','')
            skills_req=job_list.find('span', class_="srp-skills").text.replace(' ','')
            if skill not in skills_req:
                with open(f'posts/{index}.txt','w') as f:
                    link=job_list.header.h2.a['href']
                    f.write(f'Company: {company_name.strip()} \nSkills Required: {skills_req.strip()}')
                    f.write(f"\nMore Info: {link}\n")
                    print(f'Saving file :{index}')


if __name__=='__main__':
    while True:
        find_jobs()
        time_wait=10
        print(f'\nWaiting for {time_wait} minutes')
        time.sleep((time_wait*60))