import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, SafeAreaView, TextInput, StatusBar, ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Fonts } from '@utils/Constants';
import CustomText from '@ui/CustomText';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="transparent" translucent={true} />
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {/* Search Bar */}
                <View style={styles.headerContainer}>
                    <Image
                        source={require('@assets/images/hawa-mahal.png')}
                        style={styles.backgroundImage}
                        resizeMode="cover"
                    />
                    <View style={styles.searchContainer}>
                        <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Destination"
                            placeholderTextColor="#888"
                        />
                        <TouchableOpacity activeOpacity={0.8} style={styles.searchButton}>
                            <View style={styles.tealCircle} />
                        </TouchableOpacity>
                    </View>

                    {/* Transport Mode Selection */}
                    <View style={styles.transportOptions}>
                        <TouchableOpacity  activeOpacity={0.8} style={[styles.transportButton, styles.activeTransportButton]}>
                            <Icon name="subway" size={18} color="#000" />
                            <CustomText variant="h5" style={styles.transportText}>Metro</CustomText>
                        </TouchableOpacity>
                        <TouchableOpacity  activeOpacity={0.8}  style={[styles.transportButton, styles.activeTransportButton]}>
                            <Icon name="directions-bus" size={18} color="#777" />
                            <CustomText variant="h5" style={styles.transportText}>Bus</CustomText>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Nearest Metro Station Section */}
                <View style={styles.stationSection}>
                    <View style={styles.sectionHeader}>
                        <CustomText variant="h4" fontFamily={Fonts.Bold}>Nearest Metro Station</CustomText>
                        <TouchableOpacity activeOpacity={0.8}  style={styles.seeAllButton}>
                            <CustomText variant="h6" style={styles.seeAllText}>See all stations</CustomText>
                        </TouchableOpacity>
                    </View>

                    {/* Station Card */}
                    <View style={styles.stationCard}>
                        <View style={styles.stationHeader}>
                            <CustomText variant="h4" fontFamily={Fonts.Bold}>Badi Chaupad</CustomText>
                            <View style={styles.distanceTime}>
                                <CustomText variant="h6">10m</CustomText>
                                <CustomText variant="h6" style={styles.arrowText}>→</CustomText>
                                <CustomText variant="h6">2min</CustomText>
                            </View>
                        </View>

                        {/* Platform Details */}
                        <View style={styles.platformRow}>
                            <View style={styles.platformIconContainer}>
                                <Icon name="subway" size={18} color="#777" />
                            </View>
                            <View style={styles.platformInfo}>
                                <View style={styles.platformHeader}>
                                    <CustomText variant="h5" fontFamily={Fonts.SemiBold}>Platform 2</CustomText>
                                    <View style={[styles.platformIndicator, styles.pinkIndicator]} />
                                </View>
                                <CustomText variant="h6" style={styles.destinationText}>To Sindhicamp railway</CustomText>
                            </View>
                            <CustomText variant="h5" style={styles.timeText}>In 5 min</CustomText>
                        </View>

                        <View style={styles.divider} />

                        <View style={styles.platformRow}>
                            <View style={styles.platformIconContainer}>
                                <Icon name="subway" size={18} color="#777" />
                            </View>
                            <View style={styles.platformInfo}>
                                <View style={styles.platformHeader}>
                                    <CustomText variant="h5" fontFamily={Fonts.SemiBold}>Platform 1</CustomText>
                                    <View style={[styles.platformIndicator, styles.blueIndicator]} />
                                </View>
                                <CustomText variant="h6" style={styles.destinationText}>To Badi Chaupad</CustomText>
                            </View>
                            <CustomText variant="h5" style={styles.timeText}>In 7 min</CustomText>
                        </View>
                    </View>

                    <TouchableOpacity activeOpacity={0.8}  style={styles.seeAllRunnings}>
                        <CustomText variant="h6" style={styles.seeAllText}>See all runnings</CustomText>
                    </TouchableOpacity>
                </View>

                {/* Empty section*/}
                <View style={styles.emptySpace} />
            </ScrollView>

            {/* Navigation Bar */}
            <View style={styles.navBar}>
                <TouchableOpacity activeOpacity={0.8}  style={styles.navButton}>
                    <Icon name="menu" size={22} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}  style={styles.navButton}>
                    <Icon name="home" size={22} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}  style={styles.navButton}>
                    <Icon name="arrow-back" size={22} color="#fff" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    scrollView: {
        flex: 1,
    },
    headerContainer: {
        position: 'relative',
        height: 280,
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 30,
        margin: 16,
        marginTop: 50,
        paddingHorizontal: 15,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        height: 46,
        fontSize: RFValue(14),
        fontFamily: Fonts.Regular,
        padding: 0,
    },
    searchButton: {
        width: 36,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tealCircle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#4BD8C8',
    },
    transportOptions: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        paddingHorizontal: 16,
        gap: 16
    },
    transportButton: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    activeTransportButton: {
        borderRadius: 20,
        borderRightWidth: 0.5,
        borderRightColor: '#eee',
    },
    transportText: {
        marginLeft: 8,
        fontFamily: Fonts.Medium,
    },
    stationSection: {
        padding: 16,
        backgroundColor: 'white',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    seeAllButton: {
        paddingVertical: 4,
        paddingHorizontal: 2,
    },
    seeAllText: {
        color: '#F78055',
        fontFamily: Fonts.Medium,
    },
    seeAllRunnings: {
        alignSelf: 'flex-start',
        marginTop: 8,
        paddingVertical: 4,
    },
    stationCard: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 14,
        marginBottom: 8,
        shadowRadius: 2,
        borderWidth: 1,
        borderColor: '#f0f0f0',
    },
    stationHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14,
    },
    distanceTime: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 16,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    arrowText: {
        marginHorizontal: 4,
        color: '#888',
    },
    platformRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    platformIconContainer: {
        width: 36,
        height: 36,
        backgroundColor: '#f5f5f5',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    platformInfo: {
        flex: 1,
    },
    platformHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    platformIndicator: {
        width: 10,
        height: 18,
        borderRadius: 2,
        marginLeft: 8,
    },
    pinkIndicator: {
        backgroundColor: '#E94E77',
    },
    blueIndicator: {
        backgroundColor: '#4E92E9',
    },
    destinationText: {
        color: '#777',
        marginTop: 2,
    },
    timeText: {
        fontFamily: Fonts.SemiBold,
    },
    divider: {
        height: 1,
        backgroundColor: '#f0f0f0',
        marginVertical: 10,
    },
    emptySpace: {
        height: 200,
        backgroundColor: '#f8f8f8',
    },
    navBar: {
        flexDirection: 'row',
        height: 48,
        backgroundColor: '#000',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    navButton: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
});

export default HomeScreen;