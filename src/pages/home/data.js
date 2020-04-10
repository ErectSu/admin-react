export const MenuData=[
    {
        icon: 'icon-qunzhu',
        index: 'dashboard',
        title: '系统首页',
        link: '/home/index'
    },
    {
        icon: 'icon-fuzhidaima',
        index: 'tools',
        title: '工具',
        subs: [
            {
                index: 'editor',
                title: '富文本编辑器',
                link: '/home/editor'
            },
            {
                index: 'Markdown',
                title: 'Markdown编辑器',
                link: '/home/markdown'
            },
            {
                index: 'H5',
                title: 'H5制作工具',
            },
            {
                index: 'upload',
                title: '文件上传'
            }
        ]
    },
    {
        icon: 'icon-wocanyu',
        index: 'table',
        title: '基础表格'
    },
    {
        icon: 'icon-zhizuoliucheng',
        index: 'tabs',
        title: 'tab选项卡'
    },
    {
        icon: 'icon-biaoqing',
        index: 'icon',
        title: '自定义图标'
    },
    {
        icon: 'icon-biaoqing',
        index: 'charts',
        title: 'schart图表'
    },
    {
        icon: 'icon-huizhiguize',
        index: '6',
        title: '拖拽组件',
        subs: [
            {
                index: 'drag',
                title: '拖拽列表'
            },
            {
                index: 'dialog',
                title: '拖拽弹框'
            }
        ]
    },
    {
        icon: 'icon-pcduan',
        index: 'i18n',
        title: '国际化功能'
    },
    {
        icon: 'icon-weitijiao',
        index: '7',
        title: '错误处理',
        subs: [
            {
                index: 'permission',
                title: '权限测试'
            },
            {
                index: '404',
                title: '404页面'
            }
        ]
    },
    {
        icon: 'icon-dashang',
        index: '/donate',
        title: '支持作者'
    }
];
