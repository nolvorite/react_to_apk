import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          GuestHome: {},
          Login: {},
          SignUp: {},

          UserHome: {},
          Help: {},
          Cart: {},
          Checkout: {},
          Delivery: {},
          DriverOrders: {},
          Payment: {}
        },
      },
      NotFound: '*',
    },
  },
};
