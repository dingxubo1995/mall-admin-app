/**
 * 路由权限分配
 * 用户权限+管理员权限
 */

const roleToRoute = {
    //用户权限
    'coustomer': [{
        name: 'product'
    }, {
        name: 'list'
    }, {
        name: 'add'
    }],
    //管理员权限 多了一个类目管理
    'admin': [{
        name: 'product'
    }, {
        name: 'list'
    }, {
        name: 'add'
    }, {
        name: 'catgory'
    }]
}

/**
 * 最终返回一个权限路由配置对象
 * @param {array}  routes 权限路由数组
 * @param {string}  role 角色名称
 */

export default function getMenuRoute(routes, role) {

    //通过的路由名称数组
    const allowRouteName = roleToRoute[role].map((item) => item.name)

    //对路由进行筛选 
    const resultRoutes = routes.filter(r => {
        if (allowRouteName.indexOf(r.name) !== -1) {
            const children = r.children

            r.children = children.filter(s => allowRouteName.indexOf(s.name) !== -1);
            return true
        }
        return false
    })
    return resultRoutes
}