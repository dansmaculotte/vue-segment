module.exports = {
  install: function (Vue, options) {
    if (!options.writekey || options.writekey.length === 0) {
      console.warn('Please enter a Segment Write Key')
      return
    }

    const analytics = window.analytics = window.analytics || []

    if (analytics.initialize) {
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

    analytics.factory = (method) => {
      return () => {
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

    analytics.load = (key, options) => {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.src = 'https://cdn.segment.com/analytics.js/v1/'
        + key + '/analytics.min.js'

      const first = document.getElementsByTagName('script')[0]
      first.parentNode.insertBefore(script, first)
      analytics._loadOptions = options
    }

    if (!options.disabled) {
      analytics.load(options.writekey, options.settings)
    }

    if (config.router) {
      config.router.afterEach((to, from) => {
        analytics.page(config.pageCategory, to.name || '', {
          path: to.fullPath,
          referrer: from.fullPath
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
