<template>
    <div  :class="[room.status=='Clean/Available' ? 'green' : 'red', 'room']">
        <h4>{{ room.room_number }}</h4>
        <h4>Status: {{ room.status }}</h4>
        <h4>Category: {{ room.category }}</h4>
        <h4>Balcony: {{ room.balcony }}</h4>
        <h4>Bathtub: {{ room.bathtub }}</h4>
        <div v-if="room.guests.length!=0">
        <h4>Guests : </h4>
        <div :key="guest.id" v-for="guest in room.guests">
        <h4>{{ guest.name }}</h4>
    </div>
    </div>
    </div>
    
</template>

<script>
export default{
    name:'RoomInfo',
    props: {
        room: Object,
    }
}
</script>


<style scoped>
.room {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.room.green {
  border-left: 5px solid green;
}
.room.red {
  border-left: 5px solid red;
}
</style>