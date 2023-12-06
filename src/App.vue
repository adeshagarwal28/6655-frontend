<template>
  <!-- Use the component -->
  <WelcomeHeader/>
  <!-- Passing data to another component -->
  <RoomsInfo :rooms="rooms" />

</template>

<script>
//Import the component
import WelcomeHeader from './components/WelcomeHeader'
import RoomsInfo from './components/RoomsInfo'

export default {
  name: 'App',
  //Register all components
  components: {
    WelcomeHeader,
    RoomsInfo,
  },
  data() {
    return {
      rooms: null,
          }
        },
      async created() {
        try {
      const response = await fetch('https://hotel-management-adesh-2a438800209b.herokuapp.com/api/hotel');
      this.hotelData = await response.json();
      console.log(this.hotelData.rooms);
      this.rooms=this.hotelData.rooms;
            } 
            catch (error) 
            {
      console.error('Error fetching hotel data:', error);
            }
  }
}
    
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
