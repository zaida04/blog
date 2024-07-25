import json

## download from https://wakatime.com/settings/account?export=true

json_file_path = './data.json'
with open(json_file_path, 'r') as file:
    data = json.load(file)

# { "2023": { "hours": 10, "minutes": 10 } }
d = {}
for obj in data["days"]:
    year = obj["date"].split("-")[0]
    grand_total = obj["grand_total"]

    if year not in d:
        d[year] = {
            "hours": grand_total["hours"],
            "minutes": grand_total["minutes"]
        }
    else:
        d[year]["hours"] += grand_total["hours"]
        d[year]["minutes"] += grand_total["minutes"]

for year in d:
    hours = d[year]["hours"]
    minutes = d[year]["minutes"]

    hours += minutes // 60
    minutes %= 60

    d[year]["hours"] = hours
    d[year]["minutes"] = minutes

print(d)