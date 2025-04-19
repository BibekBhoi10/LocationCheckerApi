from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/submit-location', methods=['POST'])
def location():
    data = request.get_json()

    latitude = data.get('latitude')
    longitude = data.get('longitude')

    if (isinstance(latitude, (int, float)) and -90 <= latitude <= 90 and
        isinstance(longitude, (int, float)) and -180 <= longitude <= 180):
        return jsonify({
            'status': 'success',
            'latitude': latitude,
            'longitude': longitude
        })
    else:
        return jsonify({
            'status': 'fail',
            'message': 'Invalid coordinates'
        }), 400

if __name__ == '__main__':
    app.run(debug=True)
