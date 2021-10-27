from bs4 import BeautifulSoup

with open('home.html','r') as home:
    content= home.read()
    # print(content)
    soup=BeautifulSoup(content,'lxml')
    # print(soup.prettify())
    print("\n---------------\n")
    tags_card=soup.find_all('div',class_='card')
    for tag in tags_card:
        h5=tag.h5.text
        a=tag.a.text.split()[-1]
        print(f'{h5} costs {a}')