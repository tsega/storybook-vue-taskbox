<template>
  <PureTaskList :tasks="tasks" @archive-task="archiveTask" @pin-task="pinTask" />
</template>

<script>
  import PureTaskList from './PureTaskList.vue';
  import { computed } from 'vue';
  import { useStore } from 'vuex';

  export default {
    components: { PureTaskList },
    name: 'TaskList',
    setup() {
      // Creates a store instance
      const store = useStore();

      // Retrieves the task form the store's state
      const tasks = computed(() => store.state.tasks);

      // Dispatch the actions back to the store
      const archiveTask = task => store.dispatch('archiveTask', task);
      const pinTask = task => store.dispatch('pinTask', task);

      return {
        tasks,
        archiveTask,
        pinTask,
      };
    },
  };

</script>