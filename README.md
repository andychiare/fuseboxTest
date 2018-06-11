# fuseboxTest

This code validates the possibility to dynamically load a compiled bundle by using [FuseBox](https://github.com/fuse-box/fuse-box) as a bundler.
This example answers [my question posted on StackOverflow](https://stackoverflow.com/questions/50697890/loading-precompiled-bundles-at-runtime-in-a-js-application).

A huge thank you to [ngchanged](https://github.com/nchanged) for his unvaluable help.


The _app_ folder contains the code for the main application referring to a widget bundle not available at compile time.

The _widget_ folder contains the code for the widget used by the main application.

The _dist_ folder contains the main app and widget bundles to test the result.
