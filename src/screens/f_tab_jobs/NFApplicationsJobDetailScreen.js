import React from 'react';
import {
  Alert,
  BackHandler,
  Button,
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';

import GHeaderBar from '../../components/GHeaderBar';
import {GStyle, GStyles, Global, Helper} from '../../utils/Global/index';
import JobDetailItem from '../../components/elements/JobDetailItem';
const ic_mini_dot = require('../../assets/images/ic_mini_dot.png');
const ic_favorite_inactive = require('../../assets/images/ic_favorite_inactive.png');
const ic_star = require('../../assets/images/ic_star_active.png');

const BUTTON_WIDTH = Helper.getContentWidth() - 50;

class NFApplicationsJobDetailScreen extends React.Component {
  constructor(props) {
    super(props);

    console.log('NFApplicationsJobDetailScreen start');

    this.state = {
      itemData: {
        category: 'Design&Media',
        subCategory: 'Architectuaral design',
        name: 'Need an architectural design of a 4 story building',
        expireDate: '6 days',
        location: 'Accra, Ghana',
        jobType: 'Fixed Budget',
        minBudget: 'GHC5000',
        maxBudget: 'GHC10,000',
        jobProperty: ['Remote', 'Featured'],
        description:
          'I am looking for a great architectural designer to design my 4 story building house I have on paper. I have the idea and I want someone to be able to draw it for me to have a feel of how it will be. I should have an experince in this field and be able to a 3D design including a 360 degree virtual of the house.',
        tags: ['3D Autocad', 'Design', 'Architectural design', '360 degree'],
        totalBidCount: '20',
        inviteSentCount: '23',
        interviewCount: '3',
        averageBid: 'GHC4,140',
        postDate: 'June 1, 2020',
        clientName: 'Marian',
        clientReviewStar: '4.5',
      },
    };
  }

  componentWillUnmount() {}

  componentDidMount() {}

  onBack = () => {
    this.props.navigation.goBack();
  };

  onAboutClient = () => {
    this.props.navigation.navigate('f_projects_client_detail');
  };

  onEdit = () => {
    this.props.navigation.goBack();
  };

  onFavorite = () => {
    Alert.alert('Favorite button is clicked');
  };

  render() {
    const {itemData} = this.state;

    return (
      <>
        <SafeAreaView style={GStyles.statusBar} />
        <SafeAreaView style={GStyles.container}>
          {this._renderHeader()}
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            style={GStyles.elementContainer}>
            <JobDetailItem item={itemData} />
            {this._renderButton()}
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </>
    );
  }

  _renderHeader = () => {
    return (
      <GHeaderBar
        headerTitle="Project Detail"
        leftType="back"
        onPressLeftButton={this.onBack}
      />
    );
  };

  _renderButton = () => {
    return (
      <View style={[GStyles.rowEndContainer, {marginVertical: 40}]}>
        <TouchableOpacity onPress={this.onEdit}>
          <View
            style={{
              justifyContent: 'center',
              backgroundColor: GStyle.activeColor,
              borderRadius: GStyle.buttonRadius,
              width: BUTTON_WIDTH,
              height: 50,
            }}>
            <Text style={GStyles.textFill}>Edit</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onFavorite}>
          <Image
            source={ic_favorite_inactive}
            style={[GStyles.image, {width: 32}]}
          />
        </TouchableOpacity>
      </View>
    );
  };
}

const styles = StyleSheet.create({});

export default NFApplicationsJobDetailScreen;
