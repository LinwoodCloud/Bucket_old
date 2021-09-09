import yaml
import json
import os

def generate_authors(data_path: str, output_dir: str):
    # Get all author property of all yaml files
    authors = []
    for path, subdirs, files in os.walk(data_path):
        for file_name in files:
            if file_name.endswith(".yaml"):
                with open(os.path.join(data_path, file_name)) as f:
                    data = yaml.load(f, Loader=yaml.FullLoader)
                    if "author" in data:
                        authors.append(data["author"])
    # Add all authors to the authors.json file and authors.yaml file in the output dir
    with open(os.path.join(output_dir, "authors.json"), "w") as f:
        f.write(json.dumps(authors, indent=4))
    with open(os.path.join(output_dir, "authors.yaml"), "w") as f:
        f.write(yaml.dump(authors, default_flow_style=False))
    