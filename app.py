import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine,MetaData

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


#########################################################################
# DATABASE SETUP
#########################################################################

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/HappinessPKv2.sqlite"
app.config['JSON_SORT_KEYS'] = False

db = SQLAlchemy(app)
metadata=MetaData()
# reflect an existing database into a new model
Base = automap_base(metadata=metadata)
# reflect the tables
Base.prepare(db.engine, reflect=True)
#print(Base)
# Save references to each table

#print(metadata.sorted_tables)

Happiness_table = Base.classes.Happiness

#########################################################################
#RENDER TEMPLATES FOR EACH ROUTE
#########################################################################
@app.route("/")
def index():
    """Return the homepage."""
    return render_template("datapage_index.html")

@app.route("/datapage")
def dataPage():
    """Return the data in table"""
    return render_template("datapage_index.html")

@app.route("/hbarchart")
def hbarchart():
    """Return the data in table for loading the horizontal bar chart"""
    return render_template("hbarchart_index.html")

    # # Use Pandas to perform the sql query
    # stmt = db.session.query(Samples).statement
    # df = pd.read_sql_query(stmt, db.session.bind)

    # # Return a list of the column names (sample names)
    # return jsonify(list(df.columns)[2:])

#########################################################################
#QUERYING THE DB | STORING THE VALUES AS A DICT | JSONIFY THE DICTIONARY
#########################################################################

@app.route("/getdata/<year>")
def get_data_year(year):
    """Return the data for a given year."""
    sel = [
        Happiness_table.Country,
        Happiness_table.HappinessRank,
        Happiness_table.HappinessScore,
        Happiness_table.EconomyGDPperCapita,
        Happiness_table.Family,
        Happiness_table.HealthLifeExpectancy,
        Happiness_table.Freedom,
        Happiness_table.TrustGovernmentCorruption,
        Happiness_table.Generosity,
        Happiness_table.DystopiaResidual,
        Happiness_table.Year
    ]

    results = db.session.query(*sel).filter(Happiness_table.Year == year).all()

    # Create a dictionary entry for each row
    happiness_list = []
    
    
    for result in results:
        json_Happiness_table = {}

        json_Happiness_table["Country"] = result[0]
        json_Happiness_table["HappinessRank"] = result[1]
        json_Happiness_table["HappinessScore"] = result[2]
        json_Happiness_table["EconomyGDPperCapita"] = result[3]
        json_Happiness_table["Family"] = result[4]
        json_Happiness_table["HealthLifeExpectancy"] = result[5]
        json_Happiness_table["Freedom"] = result[6]
        json_Happiness_table["TrustGovernmentCorruption"] = result[7]
        json_Happiness_table["Generosity"] = result[8]
        json_Happiness_table["DystopiaResidual"] = result[9]
        json_Happiness_table["Year"] = result[10]
        happiness_list.append(json_Happiness_table)

    print(json_Happiness_table)
    #CONVERT THE LIST INTO JSON
    return jsonify(happiness_list)


# @app.route("/samples/<sample>")
# def samples(sample):
#     """Return `otu_ids`, `otu_labels`,and `sample_values`."""
#     stmt = db.session.query(Samples).statement
#     df = pd.read_sql_query(stmt, db.session.bind)

#     # Filter the data based on the sample number and
#     # only keep rows with values above 1
#     sample_data = df.loc[df[sample] > 1, ["otu_id", "otu_label", sample]]

#     # Sort by sample
#     sample_data.sort_values(by=sample, ascending=False, inplace=True)

#     # Format the data to send as json
#     data = {
#         "otu_ids": sample_data.otu_id.values.tolist(),
#         "sample_values": sample_data[sample].values.tolist(),
#         "otu_labels": sample_data.otu_label.tolist(),
#     }
#     return jsonify(data)


if __name__ == "__main__":
    app.run()
