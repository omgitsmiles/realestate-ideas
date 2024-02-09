from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/search', methods=['GET'])
def search():
    query = request.args.get('query')  # Get the search query from the frontend

    # Make a request to the third-party API using the search query
    response = requests.get('https://api.example.com/search', params={'query': query})

    # Process the response from the API and return the results to the frontend
    if response.status_code == 200:
        results = response.json()
        return jsonify(results)
    else:
        return jsonify({'error': 'Failed to retrieve search results'})

if __name__ == '__main__':
    app.run()
