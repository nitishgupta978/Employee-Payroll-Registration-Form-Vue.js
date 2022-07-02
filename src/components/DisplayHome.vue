<template>
  <table id="display" className="display">
    <tbody>
      <tr>
        <th>Profile Image</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Departments</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Notes</th>
        <th>Actions</th>
      </tr>
      <tr v-for="employee in employees" :key="employee.id">
          <td><img :src=' `../assets/${employee.profilePic}` ' /> ></td>
          <td>{{employee.name}}</td>
          <td>{{employee.gender}}</td>
          <td>{{employee.departments}}</td>
          <td>{{employee.salary}}</td>
          <td>{{employee.startDate}}</td>
           <td>{{employee.note}}</td>
      </tr>

    </tbody>
  </table>
</template>
<script>

import EmployeeService from '../Service/EmployeeService';

export default {
  name: "DisplayHome",

  data(){
    return{
    employee:[],
    }
  },

  methods:{
     getEmployees() {
      EmployeeService.getAllEmployee().then((response) => {
        console.log(response.data.data);
        this.employee = response.data.data;
      });
  },

  },
 created() {
   
    this.getEmployees();
  },
}
</script> 
