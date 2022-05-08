<template>
  <div class="td-task-list">
    <TaskItem
      v-for="item in items"
      class="td-task-list__item"
      :id="item.id"
      :title="item.title"
      :description="item.description"
    />
  </div>
</template>

<script>
  export default {
    name: "TaskList",
    components: {
      TaskItem: () => import('@/components/pages/index/TaskItem')
    },
    props: {
      items: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style lang="scss" scoped>
  .td-task-list {

    &__item {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
