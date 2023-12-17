import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISGeneraciya8настрLForm from './forms/i-i-s-generaciya8-настр-l';
import IISGeneraciya8опрLForm from './forms/i-i-s-generaciya8-опр-l';
import IISGeneraciya8СотрLForm from './forms/i-i-s-generaciya8-сотр-l';
import IISGeneraciya8формиLForm from './forms/i-i-s-generaciya8-форми-l';
import IISGeneraciya8настрEForm from './forms/i-i-s-generaciya8-настр-e';
import IISGeneraciya8опрEForm from './forms/i-i-s-generaciya8-опр-e';
import IISGeneraciya8СотрEForm from './forms/i-i-s-generaciya8-сотр-e';
import IISGeneraciya8формиEForm from './forms/i-i-s-generaciya8-форми-e';
import IISGeneraciya8настрModel from './models/i-i-s-generaciya8-настр';
import IISGeneraciya8опрModel from './models/i-i-s-generaciya8-опр';
import IISGeneraciya8содерModel from './models/i-i-s-generaciya8-содер';
import IISGeneraciya8СотрModel from './models/i-i-s-generaciya8-сотр';
import IISGeneraciya8спModel from './models/i-i-s-generaciya8-сп';
import IISGeneraciya8формиModel from './models/i-i-s-generaciya8-форми';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-generaciya8-настр': IISGeneraciya8настрModel,
    'i-i-s-generaciya8-опр': IISGeneraciya8опрModel,
    'i-i-s-generaciya8-содер': IISGeneraciya8содерModel,
    'i-i-s-generaciya8-сотр': IISGeneraciya8СотрModel,
    'i-i-s-generaciya8-сп': IISGeneraciya8спModel,
    'i-i-s-generaciya8-форми': IISGeneraciya8формиModel
  },

  'application-name': 'Generaciya8',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Generaciya8',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Generaciya8',
          title: 'Generaciya8'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        generaciya8: {
          caption: 'Generaciya8',
          title: 'Generaciya8',
          'i-i-s-generaciya8-форми-l': {
            caption: 'Форми',
            title: ''
          },
          'i-i-s-generaciya8-настр-l': {
            caption: 'Настр',
            title: ''
          },
          'i-i-s-generaciya8-опр-l': {
            caption: 'Опр',
            title: ''
          },
          'i-i-s-generaciya8-сотр-l': {
            caption: 'Сотр',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-generaciya8-настр-l': IISGeneraciya8настрLForm,
    'i-i-s-generaciya8-опр-l': IISGeneraciya8опрLForm,
    'i-i-s-generaciya8-сотр-l': IISGeneraciya8СотрLForm,
    'i-i-s-generaciya8-форми-l': IISGeneraciya8формиLForm,
    'i-i-s-generaciya8-настр-e': IISGeneraciya8настрEForm,
    'i-i-s-generaciya8-опр-e': IISGeneraciya8опрEForm,
    'i-i-s-generaciya8-сотр-e': IISGeneraciya8СотрEForm,
    'i-i-s-generaciya8-форми-e': IISGeneraciya8формиEForm
  },

});

export default translations;
