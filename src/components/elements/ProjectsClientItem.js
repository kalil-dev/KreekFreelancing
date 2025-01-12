import React, {Component, isValidElement} from 'react';
import {
  Alert,
  BackHandler,
  Button,
  Dimensions,
  FlatList,
  Image,
  LayoutAnimation,
  ListView,
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {GStyle, GStyles, Global, Helper} from '../../utils/Global/index';
import CheckBox from '../../lib/Checkbox/index';
import Avatar from './Avatar';
import Flag from '../../lib/SvgFlagkit/Flag';

const ic_mini_money = require('../../assets/images/ic_mini_money.png');
const ic_favorite_active = require('../../assets/images/ic_favorite_active_1.png');
const ic_default_avatar = require('../../assets/images/ic_default_avatar.png');
const ic_favorite_inactive = require('../../assets/images/ic_favorite_inactive_1.png');
const ic_mini_location = require('../../assets/images/ic_mini_location_1.png');
const ic_mini_star = require('../../assets/images/ic_mini_star.png');
const ic_mini_hourly_rate = require('../../assets/images/ic_mini_hourly_rate.png');
const ic_mini_bag = require('../../assets/images/ic_mini_bag.png');
const img_avatar1 = require('../../assets/images/img_avatar1.png');
const ic_membership_free = require('../../assets/images/ic_membership_free.png');
const ic_membership_basic = require('../../assets/images/ic_membership_free.png');
const ic_membership_professional = require('../../assets/images/ic_membership_professional.png');
const ic_membership_business = require('../../assets/images/ic_membership_business.png');
const ic_membership_executive = require('../../assets/images/ic_membership_executive.png');

const itemTypeColor = {
  Completed: '#0EAD69',
  Accepted: '#2574FF',
  Unconfirmed: '#FE9870',
  Declined: '#FA4169',
  Canceled: GStyle.grayColor,
};

const membershipImages = {
  Basic: ic_membership_basic,
  Professional: ic_membership_professional,
  Business: ic_membership_business,
};

const ProjectsClientItem = ({item, onPress, onFavorite}) => {
  return (
    <View style={{marginTop: 24}}>
      <Avatar
        image={item.photo ? {uri: item.photo} : ic_default_avatar}
        size={80}
        status={item.status}
        containerStyle={{...styles.avatarContainer, ...GStyles.shadow}}
      />
      <Image source={membershipImages[item.package]} style={styles.tagImage} />

      <View style={[GStyles.shadow, {marginLeft: 16, marginTop: 16}]}>
        <View style={styles.descriptionContainer}>
          <View style={GStyles.rowEndContainer}>
            <TouchableOpacity
              onPress={() => {
                onPress(item.client_id);
              }}>
              <Text style={[GStyles.mediumText, {lineHeight: 20}]}>
                {item.name}
              </Text>
            </TouchableOpacity>
            <CheckBox
              label={''}
              checkedImage={ic_favorite_active}
              uncheckedImage={ic_favorite_inactive}
              forceCheck={true}
              checked={
                item.is_follow == 'true' || item.is_follow === true
                  ? true
                  : false
              }
              onChange={(value) => {
                onFavorite(value.checked, item);
              }}
              checkboxStyle={[GStyles.image, {width: 16}]}
            />
          </View>
          <View style={[GStyles.rowContainer, {marginTop: 10}]}>
            {Helper.isValid(item.country_code) && (
              <Flag id={item.country_code} width={16} height={16} />
            )}
            <Text style={[GStyles.regularText, {fontSize: 13, marginLeft: 8}]}>
              {item.location}
            </Text>
          </View>
          <View style={[GStyles.rowContainer, {marginTop: 10}]}>
            <Image source={ic_mini_star} style={[GStyles.image, {width: 16}]} />
            <Text
              style={[
                GStyles.regularText,
                {fontSize: 13, fontWeight: 'bold', marginLeft: 8},
              ]}>
              {item.review_score}
            </Text>
            <Text
              style={[
                GStyles.regularText,
                {fontSize: 11, color: GStyle.grayColor, marginLeft: 2},
              ]}>
              ({item.review_count} reviews)
            </Text>
          </View>
          <View style={[GStyles.rowContainer, {marginTop: 10}]}>
            <Image source={ic_mini_bag} style={[GStyles.image, {width: 16}]} />
            <Text
              style={[
                GStyles.regularText,
                {fontSize: 13, fontWeight: 'bold', marginLeft: 8},
              ]}>
              {item.project_post_count} projects posted
            </Text>
            <Text
              style={[
                GStyles.regularText,
                {fontSize: 11, color: GStyle.grayColor, marginLeft: 2},
              ]}>
              ({item.project_award_count} awarded)
            </Text>
          </View>
          <View style={[GStyles.rowContainer, {marginTop: 10}]}>
            <Image
              source={ic_mini_hourly_rate}
              style={[GStyles.image, {width: 16}]}
            />
            <Text style={[GStyles.mediumText, {fontSize: 13, marginLeft: 8}]}>
              ${item.total_spent} spent
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    width: 80,
    height: 80,
    zIndex: 99,
  },

  avatarStatusImage: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#49CAE9',
  },

  tagImage: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 40,
    top: 92,
    zIndex: 99,
  },

  descriptionContainer: {
    marginLeft: 80,
    marginTop: 16,
    marginRight: 16,
    marginBottom: 16,
  },
});

export default ProjectsClientItem;
