<template>
  <b-card
    class="td-task-item"
    :title="title"
  >
    <b-card-text
      class="td-task-item__description"
    >
      {{ description }}
    </b-card-text>
    <b-button
      class="td-task-item__btn"
      variant="primary"
    >
      Выполнить
    </b-button>
    <b-button
      class="td-task-item__btn"
      variant="success"
    >
      Редактировать
    </b-button>
    <b-button
      class="td-task-item__btn"
      variant="danger"
    >
      Удалить
    </b-button>
  </b-card>
</template>

<script>
  export default {
    name: "TaskItem",
    props: {
      id: {
        type: Number,
        default: 0
      },
      title: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>

</style>
