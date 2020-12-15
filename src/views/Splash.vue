<template>
  <div class="h-screen flex flex-col">
    <div class="flex flex-grow bg-cover bg-center" style="background-image: url('img/drizzt.jpg')">
      <div class="font-raleway text-white my-32 mx-24">
        <h1 class="font-raleway-semibold text-7xl mb-4">
          Boats & Bows
        </h1>
        <h3 class="font-raleway-light text-3xl tracking-extreme">
          An Epic D&D Campaign
        </h3>
        <div class="mt-16 flex text-xl tracking-wide">
          <router-link to="/party-members" class="mr-16">
            Party Members
          </router-link>
          <router-link to="/summaries" class="mr-16">
            Chapter Summaries
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
