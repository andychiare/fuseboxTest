const { src, task, exec, context } = require("fuse-box/sparky");
const { FuseBox, QuantumPlugin, WebIndexPlugin } = require("fuse-box");

context(class {
    getConfig() {
        return FuseBox.init({
            homeDir: "src",
			target : 'browser@es5',
            output: "dist/$name.js",
            plugins: [
                !this.isProduction && WebIndexPlugin(),
                this.isProduction && QuantumPlugin({
                    uglify: true,
                    treeshake : true,
                    bakeApiIntoBundle: "app"
                })
            ],
			globals: {"widget": "*"}
        });
    }
})

task("default", async context => {
    const fuse = context.getConfig();
    fuse.bundle("app")
        .hmr()
        .watch()
        .instructions(">index.js");

    await fuse.run()
});

task("dist", async context => {
    context.isProduction = true;
    const fuse = context.getConfig();
    fuse.bundle("app")
        .instructions(">index.js");

    await fuse.run()
});