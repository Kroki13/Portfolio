<template lang="pug">
  form.form
    h3.form__title(v-text="mode ? 'Изменить работу' : 'Добавить работу'")
    input.form__input(
      v-model="newWork.title"
      type="text"
      placeholder="Название проекта"
    )
    input.form__input(
      v-model="newWork.techs"
      type="text"
      placeholder="Технологии"
    )
    input.form__input(
      v-model="newWork.link"
      type="text"
      placeholder="Ссылка"
    )
    label.file(for="file")
      input.file__input(
        @change="handleFiles"
        type="file"
        id="file"
        name="file"
      )
      span.file__label(v-text="mode ? 'Изменить картинку' : 'Загрузить картинку'")

    button.form__button(
      v-text="mode ? 'Сохранить изменения' : 'Добавить'"
      @click="mode ? editExistedWork(newWork) : addNewWork(newWork)"
      type="button"
    )

</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    props: {
      work: {
        type: Object,
        default: () => {}
      },
      editMode: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        newWork: {
          title: '',
          techs: '',
          link: '',
          photo: {}
        },
        mode: this.editMode
      }
    },
    watch: {
      work() {
        this.newWork.id = this.work.id;
        this.newWork.title = this.work.title;
        this.newWork.techs = this.work.techs;
        this.newWork.link = this.work.link;
        document.querySelector('.file__image').src = `https://webdev-api.loftschool.com/${this.work.photo}`
        this.mode = true;
      }
    },
    methods: {
      handleFiles(event) {
        const file = event.target.files[0];
        this.newWork.photo = file;
      },
      ...mapActions({
        addNewWork: 'works/add',
        editWork: 'works/edit'
      }),
      editExistedWork(work) {
        this.editWork(work).then(
          () => {
            Object.keys(this.newWork).forEach(key => this.newWork[key] = '');
            document.querySelector('.file__image').src = '/download_img.png';
            this.mode = false;
          }).catch(error => {
            alert(error);
          });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 30px;

    @media (max-width: 980px) {
      margin-bottom: 30px;
    }
    &__title {
      font-size: 16px;
      margin: 0;
      margin-bottom: 15px;
    }
    &__input {
      width: 300px;
      padding: 12px 20px;
      border: none;
      border-radius: 5px;
      margin-bottom: 20px;
      outline-color: #14bea7;
      &::placeholder {
        color: rgba(55, 62, 66, 0.5);
      }
      &:nth-child(4) {
        margin-bottom: 60px;
        @media (max-width: 980px) {
          margin-bottom: 30px;
        }
      }
    }
    &__button {
      background-color: #14bea7;
      padding: 10px 20px;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.2s;
      margin-top: 60px;
      font-weight: 600;
      @media (max-width: 980px) {
        margin-top: 30px;
      }
      &:hover {
        background-color: #31ecbb;
      }
    }
  }
  .file {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    &__input {
      display: none;
    }
    &__label {
      color: #14bea7;
    }
    &:hover::before {
      opacity: 1;
      transform: translateY(0);
    }
    &:hover::after {
      opacity: 1;
      transform: translateY(0);
    }
    &::before, &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #14bea7;
      transition: all 0.2s;
    }
    &::before {
      top: -11px;
      transform: translateY(-20px);
      opacity: 0;
    }
    &::after {
      top: calc(100% + 6px);
      transform: translateY(20px);
      opacity: 0;
    }
  }
</style>