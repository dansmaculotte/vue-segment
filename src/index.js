module.exports = {
  install: function (Vue, options) {
    if (!options.disabled && (!options.writeKey || options.writeKey.length === 0)) {
      console.warn('Please enter a Segment Write Key')
      return
    }

    const analytics = window.analytics = window.analytics || []

    if (analytics.initialize || document.querySelector('#otms-segment')) {
      return
    }

    if (analytics.invoked) {
      if (window.console && console.error) {
        console.error('Segment snippet included twice.')
      }
      return
    }

    analytics.invoked = true;

    analytics.methods = [
      'trackSubmit',
      'trackClick',
      'trackLink',
      'trackForm',
      'pageview',
      'identify',
      'reset',
      'group',
      'track',
      'ready',
      'alias',
      'debug',
      'page',
      'once',
      'off',
      'on'
    ];

    analytics.factory = function (method) {
      return function () {
        const args = Array.prototype.slice.call(arguments)
        args.unshift(method)
        analytics.push(args)
        return analytics
      }
    }

    for (let i = 0; i < analytics.methods.length; i++) {
      const key = analytics.methods[i];
      analytics[key] = analytics.factory(key);
    }

    analytics.SNIPPET_VERSION = '4.1.0';

    analytics.load = function (key, options) {
      const script = document.createElement('script')
      script.id = 'otms-segment'
      script.type = 'text/javascript'
      script.async = true
      script.src = 'https://cdn.segment.com/analytics.js/v1/'
        + key + '/analytics.min.js'
      script.classList.add('optanon-category-C0003')

      const first = document.getElementsByTagName('script')[0]
      first.parentNode.insertBefore(script, first)
      analytics._loadOptions = options
    }

    if (!options.disabled) {
      analytics.load(options.writeKey, options.settings)
    }

    if (options.router) {
      options.router.afterEach(function (to, from) {
        window.analytics.page(options.pageCategory || '', to.name || '', {
          path: to.fullPath,
        })
      })
    }

    Object.defineProperty(Vue, '$segment', {
      get () { return window.analytics }
    })
    Object.defineProperty(Vue.prototype, '$segment', {
      get () { return window.analytics }
    })
  }
};
