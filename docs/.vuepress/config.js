module.exports = {
    title: '阴云文档',
    description: '阴云项目的介绍与帮助文档',


    head: [
        ['link', {rel: 'icon', href: '/logo.png'}],
        ['meta', {name: 'keywords', content: '阴云,文档,帮助,说明,教程,介绍,阴云皮肤,渐蓝方块,vuepress'}],
        ['meta', {name: 'author', content: '阴云工作室,YinyunStudio'}],
    ],

    
    plugins: {
        '@vuepress/medium-zoom': true,
        '@vuepress/last-updated': {
            transformer: (timestamp) => {
            const moment = require('moment')
            moment.locale('zh-cn')
            return moment(timestamp).format('LL');
            }
        }
    },

    
    themeConfig: {
        nav: [
            { text: '阴云皮肤', link: '/yinyunskin/' },
            { text: '渐蓝方块', link: '/twobluecube/' },
            { text: '关于', link: '/about/' }
        ],

        sidebar: {
            '/yinyunskin/': [
                ['', '阴云皮肤'],

              {
              title: '使用指南',
              children: [
                ['use-guide/create-account/', '创建账号'],
                ['use-guide/select-skin/', '选择皮肤'],
                ['use-guide/launcher-setup/', '启动器设置']
                ]
              }
            ],
      
            '/twobluecube/': [
                ['', '渐蓝方块']
            ],

            '/about/': [
                ['', '关于']
            ]
        },

        lastUpdated: '上次编辑于',
        displayAllHeaders: true,
        smoothScroll: true,
        search: true,
        searchMaxSuggestions: 10
    }
}