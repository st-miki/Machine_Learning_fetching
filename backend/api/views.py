# api/views.py

import pandas as pd
from django.http import JsonResponse
import random

def generate_dummy_data():
    # Generate random dummy data for demonstration
    num_records = 100  # Number of records to generate

    # Generate random values for each variable
    data = {
        'CRIM': [random.uniform(0, 30) for _ in range(num_records)],
        'ZN': [random.uniform(0, 100) for _ in range(num_records)],
        'INDUS': [random.uniform(0, 50) for _ in range(num_records)],
        'CHAS': [random.choice([0, 1]) for _ in range(num_records)],
        'NOX': [random.uniform(0, 1) for _ in range(num_records)],
        'RM': [random.uniform(1, 10) for _ in range(num_records)],
        'AGE': [random.uniform(0, 100) for _ in range(num_records)],
        'DIS': [random.uniform(0, 10) for _ in range(num_records)],
        'RAD': [random.randint(1, 10) for _ in range(num_records)],
        'TAX': [random.uniform(100, 1000) for _ in range(num_records)],
        'PTRATIO': [random.uniform(10, 30) for _ in range(num_records)],
        'B': [random.uniform(300, 450) for _ in range(num_records)],
        'LSTAT': [random.uniform(0, 50) for _ in range(num_records)],
        'MEDV': [random.uniform(10, 500) for _ in range(num_records)]
    }

    # Convert the dictionary to a DataFrame
    df = pd.DataFrame(data)

    return df

def predict_house_price(request):
    try:
        # Generate dummy data
        df = generate_dummy_data()

        # Convert DataFrame to list of dictionaries
        data = df.to_dict(orient='records')

        # Return JSON response with the data
        return JsonResponse({'data': data})

    except Exception as e:
        # Return error response if an exception occurs
        return JsonResponse({'error': str(e)}, status=500)
