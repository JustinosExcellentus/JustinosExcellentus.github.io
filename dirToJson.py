import os
import json

def path_to_dic(path):
    d = {'name': os.path.basename(path)}
    d['path'] = path
    if os.path.isdir(path):
        d['typ'] = "directory"
        d['elemente'] = [path_to_dic(os.path.join(path,sub)) for sub in os.listdir\
    (path)]
    else:
        d['typ'] = "file"
    return d


with open('notizStructure.json', 'w') as file:
    json.dump(json.dumps(path_to_dic('NotizenDir')), file)


