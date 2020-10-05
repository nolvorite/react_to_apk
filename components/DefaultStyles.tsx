import * as React from 'react';

import {StyleSheet} from 'react-native';

export let styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    developmentModeText: {
      marginBottom: 20,
      fontSize: 14,
      lineHeight: 19,
      textAlign: 'center',
    },
    contentContainer: {
      paddingTop: 30,
    },
    optionsFinal: {
        textAlign: 'right',
      },
    welcomeContainer: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 20,
    },
    welcomeImage: {
      width: 100,
      height: 80,
      resizeMode: 'contain',
      marginTop: 3,
      marginLeft: -10,
    },
    getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
    },
    homeScreenFilename: {
      marginVertical: 7,
    },
    codeHighlightText: {
      color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
      borderRadius: 3,
      paddingHorizontal: 4,
    },
    getStartedText: {
      fontSize: 17,
      lineHeight: 24,
      textAlign: 'center',
    },
    helpContainer: {
      marginTop: 15,
      marginHorizontal: 20,
      alignItems: 'center',
    },
    topMenu: {
        alignItems: 'flex-end'
    },
    helpLink: {
      paddingVertical: 15,
    },
    helpLinkText: {
      textAlign: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 30,
      textAlign: 'center'
    },
    fullImage: {
        'width' : '100%'
    }
  });
  