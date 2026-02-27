exports.createPages = async ({ graphql, actions }) => {
    const { createRedirect } = actions
    createRedirect({ fromPath: '/lectures/', toPath: '/', isPermanent: true });
    createRedirect({ fromPath: '/practicals/', toPath: '/', isPermanent: true });
    createRedirect({ fromPath: '/demos/', toPath: '/', isPermanent: true });
}