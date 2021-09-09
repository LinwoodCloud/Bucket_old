import os
from typing import List
import yaml


# Read collection_path for asset files and copy them to the output path
def generate_assets(collection: str, data_path :str, output_path: str) -> List[str]:
    collection_path = os.path.join(data_path, collection)
    output_path = os.path.join(output_path, collection)
    for file in os.listdir(collection_path):
        if file.endswith(".yml"):
            # Copy file into output_path
            file_path = os.path.join(collection_path, file)
            output_file_path = os.path.join(output_path, file)
            with open(file_path, 'r') as stream:
                try:
                    data = yaml.safe_load(stream)
                    with open(output_file_path, 'w') as outfile:
                        yaml.dump(data, outfile, default_flow_style=False)
                    with open(os.path.join(output_path, file.replace('.yml', '.json')), 'w') as outfile:
                        yaml.dump(data, outfile, default_flow_style=False)
                except yaml.YAMLError as exc:
                    print(exc)

