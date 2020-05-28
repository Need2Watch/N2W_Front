<template>
  <div class="d-flex flex-row align-center calendar">
    <n2w-calendar-sidebar class="hidden-md-and-down"></n2w-calendar-sidebar>
    <n2w-calendar></n2w-calendar>
  </div>
</template>

<script>
import N2wCalendarSidebar from '../components/N2wCalendarSidebar';
import N2wCalendar from '../components/N2wCalendar';
export default {
  name: 'Calendar',
  components: {
    N2wCalendarSidebar,
    N2wCalendar,
  },
};
</script>
<style scoped>
.calendar {
  width: 100%;
  height: 100%;
}
</style>
