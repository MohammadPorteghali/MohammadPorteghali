<template>
  <div>
    <div id="layer">
    </div>
    <div id="layer2">
    </div>
    <div class="demos-container">
      <div class="item">
        <a href="https://room-homepage-dusky-two.vercel.app/">
          <img src="@/assets/images/room.png" >
        </a>
        <div class="des">
          <h3>Room homepage</h3>
          <a class="live" href="https://room-homepage-dusky-two.vercel.app/">
            View live
          </a>
          <a class="source" href="https://github.com/MohammadPorteghali/room-homepage">
            View source
          </a>
        </div>
      </div>
      <div class="item">
        <a href="https://mopodev.ir/mopodev-admin-panel">
          <img src="@/assets/images/mopodev-admin-panel.png" >
        </a>
        <div class="des">
          <h3>Admin panel</h3>
          <a class="live" href="https://mopodev.ir/mopodev-admin-panel">
            View live
          </a>
          <a class="source" href="https://github.com/MohammadPorteghali/mopodev-admin-panel">
            View source
          </a>
        </div>
      </div>
      <div class="item">
        <a href="https://shortly-kappa.vercel.app/">
          <img src="@/assets/images/shortly.png" >
        </a>
        <div class="des">
          <h3>Shortly</h3>
          <a class="live" href="https://shortly-kappa.vercel.app/">
            View live
          </a>
          <a class="source" href="https://github.com/MohammadPorteghali/shortly">
            View source
          </a>
        </div>
      </div>
      <div class="item">
        <a href="https://countries-virid.vercel.app/">
          <img src="@/assets/images/countries.png" >
        </a>
        <div class="des">
          <h3>Countries</h3>
          <a class="live" href="https://countries-virid.vercel.app/">
            View live
          </a>
          <a class="source" href="https://github.com/MohammadPorteghali/countries">
            View source
          </a>
        </div>
      </div>
      <div class="item">
        <a href="https://todo-app-sepia.vercel.app/">
          <img src="@/assets/images/todo-app.png" >
        </a>
        <div class="des">
          <h3>Todo App</h3>
          <a class="live" href="https://todo-app-sepia.vercel.app/">
            View live
          </a>
          <a class="source" href="https://github.com/MohammadPorteghali/todo-app">
            View source
          </a>
        </div>
      </div>
      <div class="item">
        <a href="https://rock-paper-scissors-n.vercel.app">
          <img src="@/assets/images/rock-paper-scissors.png" >
        </a>
        <div class="des">
          <h3>Rock paper scissors game</h3>
          <a class="live" href="https://rock-paper-scissors-n.vercel.app">
            View live
          </a>
          <a class="source" href="https://github.com/MohammadPorteghali/rock-paper-scissors">
            View source
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
    let layer1 = document.getElementById('layer');
    let layer2 = document.getElementById('layer2');
    setTimeout(
      () => layer1.style.transform = 'translateX(-100%)', 1
    )
    setTimeout(
      () => layer2.style.transform = 'translateX(-100%)', 1
    )
  }

}
</script>

<style scoped lang="scss">
#layer {
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 3;
  background: #f5f8ff;
  transform: translateX(100%);
  transition: all 1200ms ease;
}
#layer2 {
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 2;
  background: #92aae2;
  transform: translateX(0);
  transition: all 1000ms ease;
}
</style>
