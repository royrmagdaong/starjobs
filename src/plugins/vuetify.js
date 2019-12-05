import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { colors } from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'fa',
      },
    theme: {
        themes: {
          light: {
            primary: colors.amber.darken2,// #E53935
            // secondary: colors.red.lighten4, // #FFCDD2
            // accent: colors.indigo.base, // #3F51B5
            
          },
        },
    },
});
