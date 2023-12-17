import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Generaciya8',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Generaciya8',
          title: 'Generaciya8'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
