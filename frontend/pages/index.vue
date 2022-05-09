<template>
  <div class="td-tasks-page">
    <TaskList
      class="td-task-page__list"
      :items="tasks"
    />
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'IndexPage',
    async asyncData({ store }) {
      await store.dispatch('tasks/getTasks');
    },
    components: {
      TaskList: () => import('@/components/pages/index/TaskList')
    },
    computed: {
      ...mapState({
        tasks: state => state.tasks.items
      })
    }
  }
</script>
