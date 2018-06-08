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
                    uglify: false,
                    treeshake : true,
                    bakeApiIntoBundle: "widget",
					containedAPI : true
                })
            ]
        });
    }
})

task("default", async context => {
    const fuse = context.getConfig();
    fuse.bundle("widget")
        .hmr()
        .watch()
        .instructions(">index.js");

    await fuse.run()
});

task("dist", async context => {
    context.isProduction = true;
    const fuse = context.getConfig();
    fuse.bundle("widget")
        .instructions(">index.js");

    await fuse.run()
});