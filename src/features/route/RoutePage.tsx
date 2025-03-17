import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import MapView, { PROVIDER_GOOGLE, Polyline, Marker } from 'react-native-maps';

const TripRouteScreen = ({ navigation }) => {
  // Mock route coordinates - in a real app, these would come from your API
  const routeCoordinates = [
    { latitude: 12.9911, longitude: 80.2311 }, // Start point (IIT Madras)
    { latitude: 12.9891, longitude: 80.2281 },
    { latitude: 12.9875, longitude: 80.2255 },
    { latitude: 12.9855, longitude: 80.2245 },
    { latitude: 12.9841, longitude: 80.2223 },
    { latitude: 12.9825, longitude: 80.2198 },
    { latitude: 12.9811, longitude: 80.2172 },
    { latitude: 12.9802, longitude: 80.2145 },
    { latitude: 12.9798, longitude: 80.2121 },
    { latitude: 12.9815, longitude: 80.2095 },
    { latitude: 12.9833, longitude: 80.2078 },
    { latitude: 12.9862, longitude: 80.2055 },
    { latitude: 12.9883, longitude: 80.2041 },
    { latitude: 12.9902, longitude: 80.2018 },
    { latitude: 12.9915, longitude: 80.1999 },
    { latitude: 12.9935, longitude: 80.1989 }, // End point
  ];

  // Mock stop points along the route
  const stopPoints = [
    { latitude: 12.9911, longitude: 80.2311, isStart: true, isEnd: false, label: "Start" },
    { latitude: 12.9875, longitude: 80.2255, isStart: false, isEnd: false },
    { latitude: 12.9841, longitude: 80.2223, isStart: false, isEnd: false },
    { latitude: 12.9811, longitude: 80.2172, isStart: false, isEnd: false },
    { latitude: 12.9798, longitude: 80.2121, isStart: false, isEnd: false },
    { latitude: 12.9833, longitude: 80.2078, isStart: false, isEnd: false },
    { latitude: 12.9883, longitude: 80.2041, isStart: false, isEnd: false },
    { latitude: 12.9915, longitude: 80.1999, isStart: false, isEnd: false },
    { latitude: 12.9935, longitude: 80.1989, isStart: false, isEnd: true, label: "End" },
  ];

  const initialRegion = {
    latitude: 12.9866,
    longitude: 80.2155,
    latitudeDelta: 0.0222,
    longitudeDelta: 0.0121,
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Map View */}
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={initialRegion}
          showsUserLocation={false}
          showsMyLocationButton={false}
          showsCompass={false}
          showsScale={false}
          showsBuildings={true}
          showsTraffic={false}
          showsIndoors={false}
        >
          {/* Route Line */}
          <Polyline
            coordinates={routeCoordinates}
            strokeColor="#000000"
            strokeWidth={4}
          />

          {/* Stop Points */}
          {stopPoints.map((stop, index) => (
            <Marker
              key={index}
              coordinate={stop}
              anchor={{ x: 0.5, y: 0.5 }}
            >
              <View style={styles.markerContainer}>
                {stop.isStart && (
                  <View style={styles.startMarker}>
                    <Text style={styles.markerLabelStart}>{stop.label}</Text>
                  </View>
                )}
                {stop.isEnd && (
                  <View style={styles.endMarker}>
                    <Text style={styles.markerLabelEnd}>{stop.label}</Text>
                  </View>
                )}
                {!stop.isStart && !stop.isEnd && (
                  <View style={styles.stopPoint}>
                    <View style={styles.innerPoint} />
                  </View>
                )}
              </View>
            </Marker>
          ))}

          {/* Start Marker - Bus Icon */}
          <Marker
            coordinate={routeCoordinates[0]}
            anchor={{ x: 0.5, y: 0.5 }}
          >
            <View style={styles.busIconContainer}>
              <FontAwesome5 name="bus" size={20} color="#FFFFFF" />
            </View>
          </Marker>
        </MapView>

        {/* Back Button */}
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#000000" />
        </TouchableOpacity>

        {/* Trip Info Card */}
        <View style={styles.infoContainer}>
          {/* Duration Info */}
          <View style={styles.durationContainer}>
            <Text style={styles.durationValue}>35 min</Text>
            <View style={styles.directContainer}>
              <Text style={styles.directText}>Direct</Text>
              <View style={styles.directIndicator} />
            </View>
          </View>

          {/* Trip Steps */}
          <ScrollView style={styles.stepsContainer}>
            {/* Walk Step */}
            <View style={styles.stepItem}>
              <View style={styles.stepIconColumn}>
                <FontAwesome5 name="walking" size={18} color="#000000" />
                <View style={styles.verticalDottedLine} />
              </View>

              <View style={styles.stepContentContainer}>
                <Text style={styles.stepTitle}>Walk</Text>
                <View style={styles.stepDetailsCard}>
                  <View style={styles.stepCardContent}>
                    <Text style={styles.stepDirectionText}>To</Text>
                    <Text style={styles.stepDuration}>10 min</Text>
                  </View>
                  <View style={styles.destinationContainer}>
                    <View style={styles.destinationIconContainer}>
                      <FontAwesome5 name="map-marker-alt" size={14} color="#000000" />
                    </View>
                    <Text style={styles.destinationText}>IIT Madras Or Guindy National Park</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Board At Step */}
            <View style={styles.stepItem}>
              <View style={styles.stepIconColumn}>
                <FontAwesome5 name="bus" size={18} color="#000000" />
                <View style={styles.verticalSolidLine} />
              </View>

              <View style={styles.stepContentContainer}>
                <Text style={styles.stepTitle}>Board at IIT Madras Or Guindy National Park</Text>
                <View style={styles.busDetailsContainer}>
                  <View style={styles.busNumberContainer}>
                    <FontAwesome5 name="bus" size={14} color="#000000" />
                    <Text style={styles.busNumberText}>5E</Text>
                  </View>
                  <Text style={styles.busScheduleText}>Scheduled every 5 min</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  markerContainer: {
    alignItems: 'center',
  },
  stopPoint: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerPoint: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#000000',
  },
  startMarker: {
    backgroundColor: '#FF6B00',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
  },
  endMarker: {
    backgroundColor: '#000000',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
  },
  markerLabelStart: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 12,
  },
  markerLabelEnd: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 12,
  },
  busIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 10,
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  durationValue: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000000',
    marginRight: 16,
  },
  directContainer: {
    alignItems: 'center',
  },
  directText: {
    fontSize: 14,
    color: '#000000',
  },
  directIndicator: {
    width: 40,
    height: 3,
    backgroundColor: '#FF7800',
    marginTop: 4,
  },
  stepsContainer: {
    maxHeight: 300,
  },
  stepItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  stepIconColumn: {
    width: 40,
    alignItems: 'center',
    paddingTop: 4,
  },
  verticalDottedLine: {
    height: 80,
    width: 1,
    backgroundColor: '#CCCCCC',
    marginTop: 8,
    borderStyle: 'dotted',
  },
  verticalSolidLine: {
    height: 80,
    width: 2,
    backgroundColor: '#CCCCCC',
    marginTop: 8,
  },
  stepContentContainer: {
    flex: 1,
    paddingLeft: 12,
  },
  stepTitle: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 8,
  },
  stepDetailsCard: {
    backgroundColor: '#F7F7F7',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
  },
  stepCardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  stepDirectionText: {
    fontSize: 14,
    color: '#666666',
  },
  stepDuration: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  destinationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  destinationIconContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#ECECEC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  destinationText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    flex: 1,
  },
  busDetailsContainer: {
    backgroundColor: '#F7F7F7',
    borderRadius: 12,
    padding: 16,
  },
  busNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECECEC',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  busNumberText: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
  busScheduleText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
});

export default TripRouteScreen;