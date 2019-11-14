<template>
  <div id="saveDropdown">
    <div
        class="save_icon"
        @click="save"
      >
      <font-awesome-icon icon="save" />
    </div>
    <div
        v-if="!opened"
        class="save_icon"
        @click="switchOpened"
      >
      <font-awesome-icon icon="chevron-down" />
    </div>
    <template v-else>
      <div
          class="save_icon"
          @click="download"
        >
        <font-awesome-icon icon="download" />
      </div>
      <div
          class="save_icon"
          @click="$refs.file.click()"
        >
        <font-awesome-icon icon="cloud-upload-alt" />
      </div>
      <div
          class="save_icon"
          @click="switchOpened"
        >
        <font-awesome-icon icon="chevron-up" />
      </div>
    </template>
    <input
        type="file"
        ref="file"
        class="input_file"
        @change="upload"
      />
  </div>
</template>

<script>
import axios from 'axios';
import fileDownload  from 'js-file-download';
import moment from 'moment';

import { backUrl } from '@/constants';


export default {
  components: {
  },

  data() {
    return {
      opened: false,
    }
  },

  props: {
    exigenceList: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    switchOpened() {
      this.opened = !this.opened;
    },
    save() {
      axios
        .post(
          `${backUrl}/util/editon`,
          this.exigenceList
        );
    },
    download() {
      axios
        .get(`${backUrl}/util/editon`)
        .then((response) => {
          fs.writeFile(`lgs_${moment().format('YYYY_MM_DD')}.json`, response.data);
        });
    },
    upload() {
      let file = this.$refs.file.files[0];

      let reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = evt => {
        axios
          .post(
            `${backUrl}/util/editon`,
            evt.target.result
          );
      }
      reader.onerror = evt => {
        console.error(evt);
      }
    }
  },

};
</script>

<style scoped lang="scss">
@import '@/style/constants';

#saveDropdown {
  position: absolute;
  top: 0;
  right: 0;
  border: solid $text-dark;
  border-width: 0 0 1px 1px;
  .save_icon {
    width: 50px;
    line-height: 50px;
    cursor: pointer;
    &:hover {
      background-color: lighten($text-dark, 70%);
    }
  }
  .input_file {
    display: none;
  }
}
</style>
