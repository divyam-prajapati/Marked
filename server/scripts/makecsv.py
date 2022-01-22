from input import input
import csv
from datetime import date

def mark(name, present):
    dict = input()
    n=[]
    for key in dict.keys():
        n.append(key)
    # print(n)
    cols=["Names"]
    cols.append(date.today())
    rows = []
    for i in range(0,len(n)):
        if name == n[i]:
            rows.append([n[i], present])
        else:
            rows.append([n[i]])
            
    markabsent(rows, len(cols))
    nameFile="test.csv"
    with open(nameFile,'w') as f:
        write=csv.writer(f)
        write.writerow(cols)
        write.writerows(rows)

def markabsent(rows, noofcols):
    for row in range(0,len(rows)):
        if len(row) != noofcols:
            row.append("A")

    return rows

            