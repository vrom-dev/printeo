import { useEffect } from 'react'

import * as THREE from 'three'
import { STLLoader } from '../../utils/three/STLLoader'
import { OrbitControls } from '../../utils/three/OrbitControls'

import './styles.css'

export const STLViewer = ({ stlFile }) => {
  useEffect(() => {
    const canvasContainer = document.querySelector('.stl-container')
    const width = canvasContainer.offsetWidth
    const height = canvasContainer.offsetHeight
    const minSize = width > height ? height : width
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xefefef)
    scene.fog = new THREE.Fog(0xefefef, 1, 1500)
    const camera = new THREE.PerspectiveCamera(
      75,
      minSize / minSize,
      0.1,
      10000
    )
    const renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById('stl-viewer'),
      antialias: true
    })
    renderer.setSize(minSize, minSize)
    renderer.setPixelRatio(window.devicePixelRatio)

    window.addEventListener('resize', () => {
      const canvasContainer = document.querySelector('.stl-container')
      const width = canvasContainer.offsetWidth
      const height = canvasContainer.offsetHeight
      const minSize = width > height ? height : width
      camera.aspect = minSize / minSize
      renderer.setSize(minSize, minSize)
    })
    const frontLight = new THREE.DirectionalLight(0xffeedf)
    frontLight.position.set(0, 1, 1)

    const backLight = new THREE.DirectionalLight(0xffeedf)
    backLight.position.set(0, 1, -1)

    const stlLoader = new STLLoader()

    const control = new OrbitControls(camera, renderer.domElement)

    stlLoader.load(stlFile, (stl) => {
      stl.computeBoundingSphere()
      stl.computeBoundingBox()
      stl.center()
      const mesh = new THREE.Mesh(
        stl,
        new THREE.MeshLambertMaterial({ color: 0x007fff })
      )
      const grid = new THREE.GridHelper(10000, 1000)
      camera.position.z = stl.boundingSphere.radius * 1.65
      mesh.rotation.x = -Math.PI / 2
      grid.position.y = -stl.boundingBox.max.z
      scene.add(mesh, grid, frontLight, backLight)
      animate()
    })

    function animate () {
      window.requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }
  }, [])
  return (
    <div className='stl-container'>
      <canvas id='stl-viewer'></canvas>
    </div>
  )
}
