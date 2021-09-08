<template>
  <div class="about">
    <h1>About</h1>

    <p v-if="!info " @click="hitApi">click here to make API call</p>

    <div class="table-wrap" v-if="info.length">
      <table class="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Name</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="data-row"
            v-for="(item, index) in info"
            :key="index"
            style="vertical-align: baseline;"
          >
            <td>{{ index }}</td>
            <td>{{ item.id }}</td>
            <td>
              <p class="restrict-text">{{ item.title }}</p>
            </td>
            <td>
              <p class="restrict-text">{{ item.body }}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="!info.length">
      <p>No Data Found</p>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {

	data() {
		return {
			info: []
		}
	},
	mounted(){
	
		axios
		.get('https://gorest.co.in/public/v1/posts')
		.then(response => {
			let {data: { data }} = response;
			return this.info = data;
		}).catch((error) => console.log(error));

	},
	methods: {
		hitApi(){
			axios
			.get('https://gorest.co.in/public/v1/posts')
			.then(response => {
				return response.data.data
			}).catch((error) => console.log(error));
	},
	},
}
</script>

<style lang="css" scoped>
.table-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
}
.data-table,
tr,
th,
td {
  border: 1px solid #d8d8d8;
  border-collapse: collapse;
}
.restrict-text {
  text-overflow: ellipsis;
  width: 400px;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}
th {
  padding: 10px 0px;
}
td {
  padding: 0px 10px;
  text-align: left;
}
.format-table {
  border: 1px solid black;
  width: 100%;
}
</style>