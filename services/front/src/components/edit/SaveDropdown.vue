<template>
  <div id="saveDropdown">
    <collapse-transition>
      <div
          v-if="!opened"
          class="save_icon icon_dropdown"
          @click="switchOpened"
        >
        <font-awesome-icon icon="chevron-down" />
      </div>
    </collapse-transition>
    <collapse-transition>
      <div v-show="opened">
        <div
            class="save_icon icon_first"
            @click="save"
          >
          <font-awesome-icon icon="save" />
        </div>
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
            class="save_icon icon_dropdown"
            @click="switchOpened"
          >
          <font-awesome-icon icon="chevron-up" />
        </div>
      </div>
    </collapse-transition>
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
import fileDownload from 'js-file-download';
import moment from 'moment';
import { CollapseTransition } from 'vue2-transitions';

import { backUrl, success } from '@/constants';

export default {
  components: {
    CollapseTransition,
  },

  data() {
    return {
      opened: false,
    };
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
          this.exigenceList,
        )
        .then((response) => {
          this.$emit('exigenceListChanged', response.data);
          this.$toast.success('Données enregistrées!', 'OK', success);
        });
    },
    download() {
      axios
        .get(`${backUrl}/util/editon`)
        .then((response) => {
          fileDownload(JSON.stringify(response.data), `lgs_${moment().format('YYYY_MM_DD')}.json`);
        });
    },
    upload() {
      const file = this.$refs.file.files[0];

      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = (evt) => {
        axios
          .post(
            `${backUrl}/util/editon`,
            JSON.parse(evt.target.result),
          )
          .then((response) => {
            this.$emit('exigenceListChanged', response.data);
            this.$toast.success('Données transférées', 'OK', this.success);
          });
      };
    },
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
    background-color: $text-light;
    cursor: pointer;
    &:hover {
      background-color: lighten($text-dark, 60%);
    }
    &.icon_first {
      border-bottom: solid 1px $text-dark;
    }
    &.icon_dropdown {
    line-height: 35px;
    }
  }
  .input_file {
    display: none;
  }
}
</style>
