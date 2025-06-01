<script>
  import { T, useTask } from '@threlte/core';
  import { interactivity } from '@threlte/extras';
  import { TextureLoader } from 'three';
  import Buffer from 'three/src/renderers/common/Buffer.js';
  let rotation = 0;
  // useTask is relying on a context provided
  // by <Canvas>. Because we are definitely *inside*
  // <Canvas>, we can safely use it.
  useTask((delta) => {
    rotation += delta;
  });
  // This file is also typically the place to
  // inject plugins
  interactivity();
</script>

<T.Mesh rotation.y={rotation}>
  <T.BoxGeometry>
    <T.TextureLoader></T.TextureLoader>
  </T.BoxGeometry>
  <T.Textu color="red" />
</T.Mesh>
