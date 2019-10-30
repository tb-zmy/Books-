const {override,addWebpackAlias,fixBabelImports}=require("customize-cra")
const path=require("path")
module.exports=override(
    fixBabelImports('import',{
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    addWebpackAlias({
        ["@"]:path.resolve(__dirname,"./src"),
        ["@action"]:path.resolve(__dirname,"./src/action"),
        ["@api"]:path.resolve(__dirname,"./src/api"),
        ["@common"]:path.resolve(__dirname,"./src/common"),
        ["@components"]:path.resolve(__dirname,"./src/components"),
        ["@layout"]:path.resolve(__dirname,"./src/layout"),
        ["@pages"]:path.resolve(__dirname,"./src/pages"),
        ["@router"]:path.resolve(__dirname,"./src/router"),
        ["@static"]:path.resolve(__dirname,"./src/static"),
        ["@store"]:path.resolve(__dirname,"./src/store"),
        ["@utils"]:path.resolve(__dirname,"./src/utils"),
    })
)