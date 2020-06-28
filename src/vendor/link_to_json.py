number = 1
path_to_links = '/Users/silver/Work/2020-Git/kornilovstudio/src/vendor/links.txt'
path_to_results = '/Users/silver/Work/2020-Git/kornilovstudio/src/vendor/results.txt'

with open(path_to_links, 'r') as links, open(path_to_results, 'w') as results:
    for link in links:
        results.write('{"name": "' + str(number) +
                      '", "src": "' + link.replace('\n', '') + '"},\n')
        number = number + 1
