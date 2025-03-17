import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5, Feather } from '@expo/vector-icons';

const TripDetailsScreen = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Trip Details</Text>
      </View>
      
      {/* Origin-Destination Card */}
      <View style={styles.originDestinationCard}>
        {/* Route Line */}
        <View style={styles.routeLineContainer}>
          <View style={styles.routeDot} />
          <View style={styles.routeLine} />
          <View style={[styles.routeDot, styles.filledDot]} />
        </View>
        
        {/* Route Text */}
        <View style={styles.routeTextContainer}>
          <Text style={styles.locationText}>IIT Madras</Text>
          <View style={styles.divider} />
          <Text style={styles.locationText}>Saidapet West Bus Stand</Text>
        </View>
        
        {/* Switch Icon */}
        <TouchableOpacity style={styles.switchButton}>
          <Feather name="refresh-cw" size={22} color="#000" />
        </TouchableOpacity>
      </View>
      
      {/* Date & Time */}
      <View style={styles.dateTimeContainer}>
        <View style={styles.dateBox}>
          <Ionicons name="calendar-outline" size={20} color="#000" />
          <Text style={styles.dateTimeText}>Mon, Mar 17</Text>
        </View>
        
        <View style={styles.timeBox}>
          <Ionicons name="time-outline" size={20} color="#000" />
          <Text style={styles.dateTimeText}>10:05 AM</Text>
        </View>
      </View>
      
      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        <TouchableOpacity 
          style={[styles.filterButton, selectedFilter === 'All' && styles.activeFilter]}
          onPress={() => setSelectedFilter('All')}
        >
          <Text style={[styles.filterText, selectedFilter === 'All' && styles.activeFilterText]}>All</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.filterButton, selectedFilter === 'Only Direct' && styles.activeFilter]}
          onPress={() => setSelectedFilter('Only Direct')}
        >
          <Text style={[styles.filterText, selectedFilter === 'Only Direct' && styles.activeFilterText]}>Only Direct</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.tripOptionsContainer}>
        {/* Trip Option 1 */}
        <View style={styles.tripOption}>
          <View style={styles.durationContainer}>
            <Text style={styles.durationText}>35 min</Text>
            <View style={styles.directTag}>
              <Text style={styles.directText}>Direct</Text>
            </View>
          </View>
          
          <View style={styles.tripDetailRow}>
            <View style={styles.walkContainer}>
              <MaterialIcons name="directions-walk" size={22} color="#555" />
              <Text style={styles.walkText}>Walk to{'\n'}IIT Madras Or Guindy Nationa...</Text>
            </View>
            
            <View style={styles.arrowContainer}>
              <Ionicons name="arrow-forward" size={22} color="#000" />
            </View>
            
            <View style={styles.busContainer}>
              <FontAwesome5 name="bus" size={20} color="#555" />
              <Text style={styles.busText}>Take{'\n'}5E</Text>
            </View>
          </View>
          
          <View style={styles.tripInfoContainer}>
            <View style={styles.busFromContainer}>
              <Text style={styles.busFromLabel}>Bus From</Text>
              <Text style={styles.busFromText}>IIT Madras Or Guindy National Park</Text>
            </View>
            
            <View style={styles.scheduleContainer}>
              <Text style={styles.scheduleLabel}>Scheduled</Text>
              <Text style={styles.scheduleText}>Every 5 min</Text>
            </View>
          </View>
        </View>
        
        {/* Trip Option 2 */}
        <View style={styles.tripOption}>
          <View style={styles.durationContainer}>
            <Text style={styles.durationText}>46 min</Text>
            <View style={styles.directTag}>
              <Text style={styles.directText}>Direct</Text>
            </View>
          </View>
          
          <View style={styles.tripDetailRow}>
            <View style={styles.walkContainer}>
              <MaterialIcons name="directions-walk" size={22} color="#555" />
              <Text style={styles.walkText}>Walk to{'\n'}IIT Madras Or Guindy Nationa...</Text>
            </View>
            
            <View style={styles.arrowContainer}>
              <Ionicons name="arrow-forward" size={22} color="#000" />
            </View>
            
            <View style={styles.busContainer}>
              <FontAwesome5 name="bus" size={20} color="#555" />
              <Text style={styles.busText}>Take{'\n'}78</Text>
            </View>
          </View>
          
          <View style={styles.tripInfoContainer}>
            <View style={styles.busFromContainer}>
              <Text style={styles.busFromLabel}>Bus From</Text>
              <Text style={styles.busFromText}>IIT Madras Or Guindy National Park</Text>
            </View>
            
            <View style={styles.scheduleContainer}>
              <Text style={styles.scheduleLabel}>Scheduled</Text>
              <Text style={styles.scheduleText}>Every 15 min</Text>
            </View>
          </View>
        </View>
        
        {/* Trip Option 3 */}
        <View style={styles.tripOption}>
          <View style={styles.durationContainer}>
            <Text style={styles.durationText}>29 min</Text>
            <View style={styles.directTag}>
              <Text style={styles.directText}>Direct</Text>
            </View>
          </View>
          
          {/* Trip details would go here */}
        </View>
      </ScrollView>
      
      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="square-outline" size={24} color="#666" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="radio-button-on" size={24} color="#666" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="play-back" size={24} color="#666" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  originDestinationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    margin: 16,
    padding: 16,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  routeLineContainer: {
    width: 20,
    alignItems: 'center',
  },
  routeDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#FFF',
  },
  filledDot: {
    backgroundColor: '#000',
  },
  routeLine: {
    width: 2,
    height: 40,
    backgroundColor: '#000',
    marginVertical: 4,
  },
  routeTextContainer: {
    flex: 1,
    marginLeft: 8,
  },
  locationText: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 16,
  },
  switchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: -8,
    marginBottom: 16,
  },
  dateBox: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    padding: 12,
    marginRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeBox: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    padding: 12,
    marginLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateTimeText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  filterContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  filterButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    marginHorizontal: 4,
  },
  activeFilter: {
    backgroundColor: '#FF8C00',
  },
  filterText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
  },
  activeFilterText: {
    color: '#FFFFFF',
  },
  tripOptionsContainer: {
    flex: 1,
  },
  tripOption: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  durationText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 12,
  },
  directTag: {
    borderBottomWidth: 2,
    borderBottomColor: '#FF8C00',
  },
  directText: {
    fontSize: 14,
    color: '#555',
  },
  tripDetailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderRadius: 30,
    padding: 12,
    marginBottom: 16,
  },
  walkContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  walkText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#555',
  },
  arrowContainer: {
    flex: 1,
    alignItems: 'center',
  },
  busContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  busText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#555',
  },
  tripInfoContainer: {
    flexDirection: 'row',
  },
  busFromContainer: {
    flex: 1,
  },
  busFromLabel: {
    fontSize: 12,
    color: '#777',
    marginBottom: 4,
  },
  busFromText: {
    fontSize: 14,
    fontWeight: '500',
  },
  scheduleContainer: {
    flex: 1,
  },
  scheduleLabel: {
    fontSize: 12,
    color: '#777',
    marginBottom: 4,
  },
  scheduleText: {
    fontSize: 14,
    fontWeight: '500',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navButton: {
    padding: 8,
  },
});

export default TripDetailsScreen;