import pandas as pd
#read_csv
df=pd.read_csv("university_records.csv")
defaulter_array=[]
count_cols=len(df.iloc[0])-1
count_cols
for i in range(len(df)):
    name=df.iloc[i][0]
    count_present=0
    for j in range(1,count_cols+1):
        if(df.iloc[i][j]=="P"):
            count_present+=1
    if(count_present/count_cols*100<75):
        defaulter_array.append(name)
print(defaulter_array)       