import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.generaciya8.caption'),
          title: i18n.t('forms.application.sitemap.generaciya8.title'),
          children: [{
            link: 'i-i-s-generaciya8-форми-l',
            caption: i18n.t('forms.application.sitemap.generaciya8.i-i-s-generaciya8-форми-l.caption'),
            title: i18n.t('forms.application.sitemap.generaciya8.i-i-s-generaciya8-форми-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-generaciya8-настр-l',
            caption: i18n.t('forms.application.sitemap.generaciya8.i-i-s-generaciya8-настр-l.caption'),
            title: i18n.t('forms.application.sitemap.generaciya8.i-i-s-generaciya8-настр-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-generaciya8-опр-l',
            caption: i18n.t('forms.application.sitemap.generaciya8.i-i-s-generaciya8-опр-l.caption'),
            title: i18n.t('forms.application.sitemap.generaciya8.i-i-s-generaciya8-опр-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-generaciya8-сотр-l',
            caption: i18n.t('forms.application.sitemap.generaciya8.i-i-s-generaciya8-сотр-l.caption'),
            title: i18n.t('forms.application.sitemap.generaciya8.i-i-s-generaciya8-сотр-l.title'),
            children: null
          }]
        }
      ]
    };
  }),
})