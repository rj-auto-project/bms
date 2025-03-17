import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import LinearGradient from 'expo-linear-gradient';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const TravelApp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        {/* Header/Background Image */}
        <View style={styles.headerContainer}>
          <Image
            source={require('../assets/work.jpeg')} 
            style={styles.backgroundImage}
          />
          
          {/* Search Bar and Circle Button - Now side by side */}
          <View style={styles.searchRowContainer}>
            <View style={styles.searchContainer}>
              <Ionicons name="search" size={24} color="#888" style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="Destination"
                placeholderTextColor="#888"
              />
            </View>
            <TouchableOpacity style={styles.turquoiseCircle}>
              {/* Empty view for the turquoise circle */}
            </TouchableOpacity>
          </View>

          {/* Transportation Options */}
          <View style={styles.transportContainer}>
            <TouchableOpacity style={styles.transportButton}>
              <FontAwesome5 name="subway" size={18} color="#000" />
              <Text style={styles.transportText}>Metro</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.transportButton}>
              <FontAwesome5 name="bus" size={18} color="#000" />
              <Text style={styles.transportText}>Bus</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Metro Station Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Nearest Metro Station</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all stations</Text>
            </TouchableOpacity>
          </View>

          {/* Station Card */}
          <View style={styles.stationCard}>
            <View style={styles.stationHeader}>
              <Text style={styles.stationName}>Badi Chaupad</Text>
              <View style={styles.distanceContainer}>
                <Text style={styles.distanceText}>10m → 2min</Text>
              </View>
            </View>

            {/* Platform 2 */}
            <View style={styles.platformRow}>
              <View style={styles.platformIconContainer}>
                <FontAwesome5 name="subway" size={16} color="#888" />
              </View>
              <View style={styles.platformInfo}>
                <View style={styles.platformTitleContainer}>
                  <Text style={styles.platformTitle}>Platform 2</Text>
                  <View style={[styles.platformIndicator, styles.platformPink]} />
                </View>
                <Text style={styles.platformDestination}>To Sindhicamp railway</Text>
              </View>
              <View style={styles.arrivalContainer}>
                <Text style={styles.arrivalTime}>In 5 min</Text>
              </View>
            </View>

            {/* Platform 1 */}
            <View style={styles.platformRow}>
              <View style={styles.platformIconContainer}>
                <FontAwesome5 name="subway" size={16} color="#888" />
              </View>
              <View style={styles.platformInfo}>
                <View style={styles.platformTitleContainer}>
                  <Text style={styles.platformTitle}>Platform 1</Text>
                  <View style={[styles.platformIndicator, styles.platformBlue]} />
                </View>
                <Text style={styles.platformDestination}>To Badi Chaupad</Text>
              </View>
              <View style={styles.arrivalContainer}>
                <Text style={styles.arrivalTime}>In 7 min</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity>
            <Text style={styles.seeAllText}>See all runnings</Text>
          </TouchableOpacity>
        </View>

        {/* Metro Map Section */}
        <View style={styles.mapContainer}>
          <Text style={styles.mapTitle}>Metro Map</Text>
          <View style={styles.mapCard}>
            <MapView
              provider={PROVIDER_GOOGLE} // Remove this line if on iOS
              style={styles.map}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  map: {
    flex: 1,
  },
  headerContainer: {
    height: 260,
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  // New container for the search bar row
  searchRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 30,
    justifyContent: 'space-between',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    flex: 1,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginLeft: 2,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  turquoiseCircle: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#5DD9D3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  transportContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  transportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 2,
    paddingHorizontal: 16,
    borderRadius: 20,
    width: '48%',
    gap: 8,
  },
  transportText: {
    fontSize: 16,
    fontWeight: '500',
  },
  sectionContainer: {
    padding: 19,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: 16,
    color: '#FF6D3F',
    fontWeight: '500',
  },
  stationCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  stationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  stationName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  distanceContainer: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  distanceText: {
    fontWeight: '500',
  },
  platformRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  platformIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  platformInfo: {
    flex: 1,
    marginLeft: 4,
  },
  platformTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  platformTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  platformIndicator: {
    width: 3,
    height: 15
  },
  platformPink: {
    backgroundColor: '#FF4599',
  },
  platformBlue: {
    backgroundColor: '#3F8CFF',
  },
  platformDestination: {
    fontSize: 14,
    color: '#777',
    marginTop: 1,
  },
  arrivalContainer: {
    paddingLeft: 12,
  },
  arrivalTime: {
    fontSize: 15,
    fontWeight: '600',
  },
  mapContainer: {
    padding: 13,
  },
  mapTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  mapCard: {
    backgroundColor: 'white',
    borderRadius: 9,
    overflow: 'hidden',
    height: 180,
  },
});

export default TravelApp;