import os
import json

def path_to_dic(path):
    
    d = {'name': os.path.basename(path)}
    print("Working on " + os.path.basename(path))
    d['path'] = path
    if os.path.isdir(path):
        d['typ'] = "directory"
       
        d['elemente'] = [path_to_dic(os.path.join(path,sub)) for sub in os.listdir\
    (path)]
    else:
        d['typ'] = "file"
    return d




def path_to_dic_only_Files(path):
    
   
    if not os.path.isdir(path):
        d = {'name': os.path.basename(path)}
        print("Working on " + os.path.basename(path))
        d['path'] = path
        d['typ'] = "file"

    return d


with open('JSON/notizStructure.json', 'w') as file:
    print(json.dump(path_to_dic('KlausurenDir'), file,  indent=2))
    print("Successfully completed")
    
    
with open('JSON/klausurenStructure.json', 'w') as file:
    print(json.dump(path_to_dic('KlausurenDir'), file,  indent=2))
    print("Successfully completed")


with open('JSON/navbar.json', 'w') as file:
    print(json.dump(path_to_dic('navSites'), file,  indent=2));
    print("Successfully completed")


