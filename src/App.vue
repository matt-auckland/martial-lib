<template>
  <div id="app">
    <header>
      <h1 class="header-title">
        <router-link to="/">Martial Lib 📖</router-link>
      </h1>
    </header>
    <main>

      <transition
        name="fade"
        mode="out-in"
      >
        <router-view class="view"></router-view>
      </transition>
    </main>
  </div>
</template>


<style>
body,
html {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header-title {
  border-bottom: 2px solid #404040;
  width: 60%;
  margin: 15px auto;
}

.header-title a {
  text-decoration: none;
  color: #404040;
}

main {
  padding: 15px;
  overflow-x: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.child-view {
  transition: all 0.5s ease;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100px, 0);
  transform: translate(100px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100px, 0);
  transform: translate(-100px, 0);
}
</style>
