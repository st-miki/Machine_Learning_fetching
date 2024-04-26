# backend/fetch_boston_data.py
import pandas as pd
from django.http import JsonResponse

def fetch_boston_data(request):
    url = "http://lib.stat.cmu.edu/datasets/boston"
    boston_data = pd.read_csv(url, sep="\s+", skiprows=22, header=None)
    boston_data.columns = [
        'CRIM', 'ZN', 'INDUS', 'CHAS', 'NOX', 'RM', 'AGE', 
        'DIS', 'RAD', 'TAX', 'PTRATIO', 'B', 'LSTAT', 'MEDV'
    ]
    
    # Convert DataFrame to JSON
    boston_json = boston_data.to_json(orient='records')
    
    # Return JSON response
    return JsonResponse({'boston_data': boston_json})
