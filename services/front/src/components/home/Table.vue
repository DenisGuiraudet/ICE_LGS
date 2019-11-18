<template>
  <div class="table-container">
    <div class="table-container-content">
      <div class="header">{{currentElement.title}}</div>
      <div class="searchbar">
        <input
            type="text"
            v-model="textSearch"
            placeholder="search"
          />
      </div>
      <table>
        <thead>
          <tr>
            <th v-for="(type, typeKey) in currentElement.types" :key="typeKey">{{type}}</th>
          </tr>
        </thead>
        <tbody>
          <tr
              v-for="(item, itemKey) in filteredCurrentElement"
              :key="item[0]._id + itemKey"
              :class="{ 'active': selectedItemId === item[0]._id + itemKey }"
            >
            <template v-for="value in item">
              <td
                  v-if="!value.url"
                  :key="value._id"
                  :class="{ 'active': selectedValueId === item[0]._id + value._id + itemKey }"
                  @click="selectValue(value, item, itemKey, currentElement.idTable)"
                >
                {{ value.name }}
              </td>
              <td
                  v-else
                  class="cell_url"
                  :key="value._id"
                  :class="{ 'active': selectedValueId === item[0]._id + value._id + itemKey }"
                >
                <div class="cell_url_container">
                  <div
                      class="url_name"
                      @click="selectValue(value, item, itemKey, currentElement.idTable)"
                    >
                    {{ value.name }}
                  </div>
                  <div class="url_link">
                    <a :href="$options.docUrl + value.url">
                      <font-awesome-icon icon="external-link-alt" />
                    </a>
                  </div>
                </div>
              </td>
            </template>
          </tr>
          <tr
              class="not_filtered"
              v-for="(item, itemKey) in notFilteredCurrentElement"
              :key="item[0]._id + itemKey"
              :class="{ 'active': selectedItemId === item[0]._id + itemKey }"
            >
            <template v-for="value in item">
              <td
                  v-if="!value.url"
                  :key="value._id"
                  :class="{ 'active': selectedValueId === item[0]._id + value._id + itemKey }"
                  @click="selectValue(value, item, itemKey, currentElement.idTable)"
                >
                {{ value.name }}
              </td>
              <td
                  v-else
                  class="cell_url"
                  :key="value._id"
                  :class="{ 'active': selectedValueId === item[0]._id + value._id + itemKey }"
                >
                <div class="cell_url_container">
                  <div
                      class="url_name"
                      @click="selectValue(value, item, itemKey, currentElement.idTable)"
                    >
                    {{ value.name }}
                  </div>
                  <div class="url_link">
                    <a :href="$options.docUrl + value.url">
                      <font-awesome-icon icon="external-link-alt" />
                    </a>
                  </div>
                </div>
              </td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
import { docUrl } from '@/constants';

export default {
  components: {
  },

  docUrl,

  data() {
    return {
      textSearch: '',
      typeData: '',
      selectedItemId: null,
      selectedValueId: null,
    };
  },

  props: {
    currentElement: {
      type: Object,
    },
  },


  computed: {
    filteredCurrentElement() {
      return this.currentElement.data.filter((item) => {
        return item.filter((value) => {
          return value.name.toLowerCase().includes(this.textSearch.toLowerCase());
        }).length > 0;
      });
    },
    notFilteredCurrentElement() {
      return this.currentElement.data.filter((item) => {
        return item.filter((value) => {
          return (!value.name.toLowerCase().includes(this.textSearch.toLowerCase()));
        }).length === item.length;
      });
    },
  },

  methods: {
    selectValue(value, item, itemKey, idTable) {
      this.selectedItemId = item[0]._id + itemKey;
      this.selectedValueId = item[0]._id + value._id + itemKey;
      this.$emit('callAPI', value, idTable);
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/style/constants';

.table-container {
  height: calc(100vh - 50px);
  overflow-y: auto;
  min-width: max-content;
  .table-container-content {
    position: relative;
    margin: 25px;
    .header {
      position: sticky;
      top: 0;
      left: 0;
      background-color: $text-dark;
      color: $text-light;
      border: 1px white solid;
      margin-bottom: 10px;
      padding: 5px;
    }
    .searchbar{
      position: sticky;
      top: 30px;
      left: 0;
      margin-bottom: 10px;
      input {
        width: calc(100% -  8px);
        padding: 3px;
        border: solid 1px $text-dark;
        border-radius:4px;
      }
    }
    table {
      border-collapse: collapse;
      width: 100%;
      thead {
        position: sticky;
        top: 52px;
      }
      tr {
        background-color: white;
        &:nth-child(even) {
          background-color: #f2f2f2;
        }
        &.not_filtered {
          background-color: rgba(white, 0.3);
          color:white;
          td.cell_url .url_link a {
          color:white;
          }
        }
        &.active,
        &:hover {
          background-color: lightgoldenrodyellow;
          color: $text-dark;
          td.cell_url .url_link a {
            color: $text-dark;
          }
        }
        td, th {
          border: 1px solid #ddd;
          padding: 8px;
        }
        th {
          padding-top: 12px;
          padding-bottom: 12px;
          color: white;
          background-color: #4CAF50;
          text-align: center;
        }
        td {
          max-width: 200px;
          cursor: pointer;
              transition: background-color 0.3s;
          &.active,
          &:hover {
            &:not(.cell_url) {
              background-color: darken(lightgoldenrodyellow, 10%);
            }
          }
          &.cell_url {
            padding: 0;
            .cell_url_container {
              display: flex;
              flex-direction: row;
            }
            &.active .url_name {
                background-color: darken(lightgoldenrodyellow, 10%);
            }
            .url_name,
            .url_link {
              transition: background-color 0.3s;
              &:hover {
                background-color: darken(lightgoldenrodyellow, 10%);
              }
            }
            .url_name {
              flex: 1;
              padding: 8px;
            }
            .url_link {
              display: flex;
              a {
                display: flex;
                padding: 8px;
                color: $text-dark;
                svg {
                  margin: auto;
                }
              }
            }
          }
        }
      }
    }
  }
}

</style>
