import {
  ViewerApp,
  AssetManagerPlugin,
  // GBufferPlugin,
  // timeout,
  // ProgressivePlugin,
  // TonemapPlugin,
  // SSRPlugin,
  // SSAOPlugin,
  // DiamondPlugin,
  // FrameFadePlugin,
  // GLTFAnimationPlugin,
  // GroundPlugin,
  // BloomPlugin,
  // TemporalAAPlugin,
  // AnisotropyPlugin,
  // GammaCorrectionPlugin,
  addBasePlugins,
  // ITexture,
  TweakpaneUiPlugin,
  AssetManagerBasicPopupPlugin,
  CanvasSnipperPlugin,
  // IViewerPlugin,

  // Color, // Import THREE.js internals
  // Texture, // Import THREE.js internals
} from "webgi";

import * as dat from "dat.gui";

let position, target;
const gui = new dat.GUI();

 export  async function setupViewer(el) {
  // Initialize the viewer
  const viewer = new ViewerApp({
    canvas: el,
  });
  // Add some plugins
  const manager = await viewer.addPlugin(AssetManagerPlugin);
  const camera = viewer.scene.activeCamera;

  position = camera.position;
  target = camera.target;
  setTimeout(() => {
    console.log(position.x, target);
  }, 4000);
  // Add a popup(in HTML) with download progress when any asset is downloading.
  await viewer.addPlugin(AssetManagerBasicPopupPlugin);

  const controlle1 = gui.addFolder("position");
  // Add plugins individually.
  // await viewer.addPlugin(GBufferPlugin)
  // await viewer.addPlugin(new ProgressivePlugin(32))
  // await viewer.addPlugin(new TonemapPlugin(!viewer.useRgbm))
  // await viewer.addPlugin(GammaCorrectionPlugin)
  // await viewer.addPlugin(SSRPlugin)
  // await viewer.addPlugin(SSAOPlugin)
  // await viewer.addPlugin(DiamondPlugin)
  // await viewer.addPlugin(FrameFadePlugin)
  // await viewer.addPlugin(GLTFAnimationPlugin)
  // await viewer.addPlugin(GroundPlugin)
  // await viewer.addPlugin(BloomPlugin)
  // await viewer.addPlugin(TemporalAAPlugin)
  // await viewer.addPlugin(AnisotropyPlugin)
  // and many more...

  // or use this to add all main ones at once.
  await addBasePlugins(viewer);

  // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas.
  await viewer.addPlugin(CanvasSnipperPlugin);

  // This must be called once after all plugins are added.
  viewer.renderer.refreshPipeline();

  // Import and add a GLB file.
  await viewer.load("public/free_iphone_13_pro_2021/scene.gltf");
  controlle1.add(position, "y").min(-10).max(10).step(0.01);
  controlle1.add(position, "x").min(-10).max(10).step(0.01);
  controlle1.add(position, "z").min(-10).max(10).step(0.01);

  viewer.addEventListener("preFrame", () => {
    camera.positionUpdated(true);
  });

  // Load an environment map if not set in the glb file
  await viewer.setEnvironmentMap(
    await manager.importer.importSinglePath("public/e.hdr")
  );

  // Add some UI for tweak and testing.
  // const uiPlugin = await viewer.addPlugin(TweakpaneUiPlugin);
  // Add plugins to the UI to see their settings.
  // uiPlugin.setupPlugins<IViewerPlugin>(TonemapPlugin, CanvasSnipperPlugin);
  return position, target;
}

