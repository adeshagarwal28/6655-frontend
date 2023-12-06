<template>
    <!-- Running loop of RoomInfo elements with data received -->
    <div :key="room.id" v-for="room in rooms">
        <RoomInfo :room="room"/>
    </div>
    
</template>

<script>
import RoomInfo from './RoomInfo'
    export default{
        name: 'RoomsInfo',
        props: {
            rooms: Array
        },
        components:{
            RoomInfo,
        }
    }
</script>


<style scoped>
</style>