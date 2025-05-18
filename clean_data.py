import pandas as pd

FILE_PATH = "websites.csv"
JSON_FILE = "websites.json"

software_companies_dataset = pd.read_csv(FILE_PATH)

def sort_dataset_abc(df = pd.DataFrame):
    df.sort_values(by = "Company Name")
    print(df)
    return df
    
def overwrite_dataset(df = pd.DataFrame):
    df.to_csv("websites.csv", index = False)

def main():
    sorted_data = sort_dataset_abc(software_companies_dataset)
    overwrite_dataset(sorted_data)
    sorted_data.to_json(JSON_FILE, orient='records', indent=4)

    print(f"Generated new JSON file")
    
main()